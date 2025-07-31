import express from 'express';
import { body, param, query } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';
import { auth, requireRole } from '../middleware/auth';
import { PromoCode } from '../models/PromoCode';

const router = express.Router();

// @route   GET /api/promo-codes
// @desc    Get all promo codes (Admin only)
// @access  Private/Admin
router.get('/', [
  auth,
  requireRole(['admin']),
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1, max: 50 }).withMessage('Limit must be between 1 and 50'),
  query('isActive').optional().isBoolean().withMessage('isActive must be a boolean'),
  validateRequest,
], async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      isActive,
    } = req.query;

    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const skip = (pageNum - 1) * limitNum;

    // Build filter
    const filter: any = {};
    if (isActive !== undefined) {
      filter.isActive = isActive === 'true';
    }

    const promoCodes = await PromoCode.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum)
      .lean();

    const total = await PromoCode.countDocuments(filter);
    const totalPages = Math.ceil(total / limitNum);

    res.json({
      success: true,
      data: promoCodes,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages,
        hasNext: pageNum < totalPages,
        hasPrev: pageNum > 1,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
});

// @route   POST /api/promo-codes/validate
// @desc    Validate promo code
// @access  Public
router.post('/validate', [
  body('code')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Promo code is required'),
  body('courseId')
    .optional()
    .isMongoId()
    .withMessage('Valid course ID is required'),
  body('totalAmount')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Total amount must be a positive number'),
  validateRequest,
], async (req, res) => {
  try {
    const { code, courseId, totalAmount = 0 } = req.body;

    const promoCode = await PromoCode.findOne({ 
      code: code.toUpperCase(),
      isActive: true,
    });

    if (!promoCode) {
      return res.status(404).json({
        success: false,
        error: 'Promo code not found',
      });
    }

    // Check if promo code is expired
    const now = new Date();
    if (promoCode.validFrom && now < promoCode.validFrom) {
      return res.status(400).json({
        success: false,
        error: 'Promo code is not yet valid',
      });
    }

    if (promoCode.validUntil && now > promoCode.validUntil) {
      return res.status(400).json({
        success: false,
        error: 'Promo code has expired',
      });
    }

    // Check usage limit
    if (promoCode.maxUses && promoCode.usedCount >= promoCode.maxUses) {
      return res.status(400).json({
        success: false,
        error: 'Promo code usage limit exceeded',
      });
    }

    // Check minimum purchase amount
    if (promoCode.minPurchase && totalAmount < promoCode.minPurchase) {
      return res.status(400).json({
        success: false,
        error: `Minimum purchase amount is ${promoCode.minPurchase}`,
      });
    }

    // Check if course is applicable
    if (promoCode.applicableCourses && promoCode.applicableCourses.length > 0) {
      if (!courseId || !promoCode.applicableCourses.includes(courseId)) {
        return res.status(400).json({
          success: false,
          error: 'Promo code is not applicable to this course',
        });
      }
    }

    // Calculate discount
    let discountAmount = 0;
    if (promoCode.type === 'percentage') {
      discountAmount = (totalAmount * promoCode.value) / 100;
    } else {
      discountAmount = promoCode.value;
    }

    // Ensure discount doesn't exceed total amount
    discountAmount = Math.min(discountAmount, totalAmount);

    res.json({
      success: true,
      data: {
        promoCode: {
          _id: promoCode._id,
          code: promoCode.code,
          type: promoCode.type,
          value: promoCode.value,
          discountAmount,
        },
        discountAmount,
        finalAmount: totalAmount - discountAmount,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
});

// @route   POST /api/promo-codes
// @desc    Create new promo code (Admin only)
// @access  Private/Admin
router.post('/', [
  auth,
  requireRole(['admin']),
  body('code')
    .isString()
    .trim()
    .isLength({ min: 3, max: 20 })
    .withMessage('Code must be between 3 and 20 characters')
    .matches(/^[A-Z0-9]+$/)
    .withMessage('Code must contain only uppercase letters and numbers'),
  body('type')
    .isIn(['percentage', 'fixed'])
    .withMessage('Type must be either percentage or fixed'),
  body('value')
    .isFloat({ min: 0 })
    .withMessage('Value must be a positive number'),
  body('minPurchase')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Minimum purchase must be a positive number'),
  body('maxUses')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Max uses must be a positive integer'),
  body('validFrom')
    .optional()
    .isISO8601()
    .withMessage('Valid from must be a valid date'),
  body('validUntil')
    .optional()
    .isISO8601()
    .withMessage('Valid until must be a valid date'),
  body('applicableCourses')
    .optional()
    .isArray()
    .withMessage('Applicable courses must be an array'),
  body('applicableCourses.*')
    .optional()
    .isMongoId()
    .withMessage('Valid course IDs are required'),
  validateRequest,
], async (req, res) => {
  try {
    const {
      code,
      type,
      value,
      minPurchase = 0,
      maxUses,
      validFrom,
      validUntil,
      applicableCourses = [],
    } = req.body;

    // Check if code already exists
    const existingCode = await PromoCode.findOne({ 
      code: code.toUpperCase() 
    });
    
    if (existingCode) {
      return res.status(400).json({
        success: false,
        error: 'Promo code already exists',
      });
    }

    const promoCode = new PromoCode({
      code: code.toUpperCase(),
      type,
      value,
      minPurchase,
      maxUses,
      validFrom: validFrom ? new Date(validFrom) : undefined,
      validUntil: validUntil ? new Date(validUntil) : undefined,
      applicableCourses,
      usedCount: 0,
      isActive: true,
    });

    await promoCode.save();

    res.status(201).json({
      success: true,
      data: promoCode,
      message: 'Promo code created successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
});

// @route   PUT /api/promo-codes/:id
// @desc    Update promo code (Admin only)
// @access  Private/Admin
router.put('/:id', [
  auth,
  requireRole(['admin']),
  param('id').isMongoId().withMessage('Valid promo code ID is required'),
  validateRequest,
], async (req, res) => {
  try {
    const promoCode = await PromoCode.findById(req.params.id);

    if (!promoCode) {
      return res.status(404).json({
        success: false,
        error: 'Promo code not found',
      });
    }

    // Update fields
    Object.keys(req.body).forEach(key => {
      if (key !== '_id' && key !== '__v' && key !== 'usedCount') {
        promoCode[key] = req.body[key];
      }
    });

    await promoCode.save();

    res.json({
      success: true,
      data: promoCode,
      message: 'Promo code updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
});

// @route   DELETE /api/promo-codes/:id
// @desc    Delete promo code (Admin only)
// @access  Private/Admin
router.delete('/:id', [
  auth,
  requireRole(['admin']),
  param('id').isMongoId().withMessage('Valid promo code ID is required'),
  validateRequest,
], async (req, res) => {
  try {
    const promoCode = await PromoCode.findById(req.params.id);

    if (!promoCode) {
      return res.status(404).json({
        success: false,
        error: 'Promo code not found',
      });
    }

    // Soft delete
    promoCode.isActive = false;
    await promoCode.save();

    res.json({
      success: true,
      message: 'Promo code deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
});

export default router; 