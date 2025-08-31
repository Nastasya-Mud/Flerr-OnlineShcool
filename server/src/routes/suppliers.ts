import express, { Request } from 'express';
import { body, param, query } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';
import { auth, requireRole } from '../middleware/auth';
import { Supplier, ISupplier } from '../models/Supplier';

const router = express.Router();

// @route   GET /api/suppliers
// @desc    Get all suppliers (Public for students)
// @access  Public
router.get('/', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 50 }),
  query('search').optional().isString(),
  query('category').optional().isString(),
  query('region').optional().isString(),
  query('verified').optional().isBoolean(),
  query('featured').optional().isBoolean(),
  query('sort').optional().isIn(['name', 'rating', 'createdAt']),
  query('order').optional().isIn(['asc', 'desc']),
], validateRequest, async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    
    const filter: any = { isActive: true };
    
    if (req.query.search) {
      filter.$or = [
        { name: { $regex: req.query.search, $options: 'i' } },
        { description: { $regex: req.query.search, $options: 'i' } },
        { 'contactInfo.email': { $regex: req.query.search, $options: 'i' } },
      ];
    }
    
    if (req.query.category) {
      filter.categories = req.query.category;
    }
    
    if (req.query.region) {
      filter.regions = req.query.region;
    }
    
    if (req.query.verified !== undefined) {
      filter.isVerified = req.query.verified === 'true';
    }
    
    if (req.query.featured !== undefined) {
      filter.featured = req.query.featured === 'true';
    }
    
    const sort: any = {};
    const sortField = req.query.sort as string || 'rating';
    const sortOrder = req.query.order as string || 'desc';
    sort[sortField] = sortOrder === 'asc' ? 1 : -1;
    
    const suppliers = await Supplier.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit);
    
    const total = await Supplier.countDocuments(filter);
    
    res.json({
      success: true,
      data: {
        suppliers,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   GET /api/suppliers/:id
// @desc    Get supplier by ID (Public)
// @access  Public
router.get('/:id', [
  param('id').isMongoId(),
], validateRequest, async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    
    if (!supplier || !supplier.isActive) {
      return res.status(404).json({
        success: false,
        error: 'Supplier not found',
      });
    }
    
    res.json({
      success: true,
      data: supplier,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   POST /api/suppliers
// @desc    Create supplier (Admin only)
// @access  Private/Admin
router.post('/', [
  auth,
  requireRole(['admin']),
  body('name').isString().trim().isLength({ min: 2, max: 100 }),
  body('description').isString().trim().isLength({ min: 20, max: 1000 }),
  body('contactInfo.email').isEmail(),
  body('contactInfo.phone').isString().trim(),
  body('contactInfo.website').optional().isURL(),
  body('contactInfo.address').optional().isString().trim(),
  body('categories').isArray({ min: 1 }),
  body('categories.*').isIn([
    'fresh-flowers',
    'dry-flowers',
    'artificial-flowers',
    'greenery',
    'accessories',
    'vases',
    'packaging',
    'tools',
    'ribbons',
    'decorative-elements',
    'seasonal',
    'luxury',
    'eco-friendly',
    'bulk-supplies',
    'wholesale'
  ]),
  body('products').isArray({ min: 1 }),
  body('products.*').isString().trim(),
  body('regions').isArray({ min: 1 }),
  body('regions.*').isString().trim(),
  body('minimumOrder').optional().isFloat({ min: 0 }),
  body('paymentMethods').isArray({ min: 1 }),
  body('paymentMethods.*').isIn([
    'cash',
    'card',
    'bank-transfer',
    'online-payment',
    'invoice',
    'credit'
  ]),
  body('deliveryOptions').isArray({ min: 1 }),
  body('deliveryOptions.*').isIn([
    'pickup',
    'delivery',
    'express-delivery',
    'nationwide-shipping',
    'international-shipping'
  ]),
  body('discount.percentage').optional().isFloat({ min: 0, max: 100 }),
  body('discount.description').optional().isString().trim(),
  body('discount.validUntil').optional().isISO8601(),
  body('featured').optional().isBoolean(),
  body('isVerified').optional().isBoolean(),
], validateRequest, async (req: Request, res) => {
  try {
    const supplier = new Supplier(req.body);
    await supplier.save();
    
    res.status(201).json({
      success: true,
      data: supplier,
      message: 'Supplier created successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   PUT /api/suppliers/:id
// @desc    Update supplier (Admin only)
// @access  Private/Admin
router.put('/:id', [
  auth,
  requireRole(['admin']),
  param('id').isMongoId(),
  body('name').optional().isString().trim().isLength({ min: 2, max: 100 }),
  body('description').optional().isString().trim().isLength({ min: 20, max: 1000 }),
  body('contactInfo.email').optional().isEmail(),
  body('contactInfo.phone').optional().isString().trim(),
  body('contactInfo.website').optional().isURL(),
  body('contactInfo.address').optional().isString().trim(),
  body('categories').optional().isArray({ min: 1 }),
  body('categories.*').isIn([
    'fresh-flowers',
    'dry-flowers',
    'artificial-flowers',
    'greenery',
    'accessories',
    'vases',
    'packaging',
    'tools',
    'ribbons',
    'decorative-elements',
    'seasonal',
    'luxury',
    'eco-friendly',
    'bulk-supplies',
    'wholesale'
  ]),
  body('products').optional().isArray({ min: 1 }),
  body('products.*').isString().trim(),
  body('regions').optional().isArray({ min: 1 }),
  body('regions.*').isString().trim(),
  body('minimumOrder').optional().isFloat({ min: 0 }),
  body('paymentMethods').optional().isArray({ min: 1 }),
  body('paymentMethods.*').isIn([
    'cash',
    'card',
    'bank-transfer',
    'online-payment',
    'invoice',
    'credit'
  ]),
  body('deliveryOptions').optional().isArray({ min: 1 }),
  body('deliveryOptions.*').isIn([
    'pickup',
    'delivery',
    'express-delivery',
    'nationwide-shipping',
    'international-shipping'
  ]),
  body('discount.percentage').optional().isFloat({ min: 0, max: 100 }),
  body('discount.description').optional().isString().trim(),
  body('discount.validUntil').optional().isISO8601(),
  body('featured').optional().isBoolean(),
  body('isVerified').optional().isBoolean(),
  body('isActive').optional().isBoolean(),
], validateRequest, async (req: Request, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    
    if (!supplier) {
      return res.status(404).json({
        success: false,
        error: 'Supplier not found',
      });
    }
    
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    res.json({
      success: true,
      data: updatedSupplier,
      message: 'Supplier updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   DELETE /api/suppliers/:id
// @desc    Delete supplier (Admin only)
// @access  Private/Admin
router.delete('/:id', [
  auth,
  requireRole(['admin']),
  param('id').isMongoId(),
], validateRequest, async (req: Request, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    
    if (!supplier) {
      return res.status(404).json({
        success: false,
        error: 'Supplier not found',
      });
    }
    
    // Мягкое удаление
    supplier.isActive = false;
    await supplier.save();
    
    res.json({
      success: true,
      message: 'Supplier deactivated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   GET /api/suppliers/categories
// @desc    Get all supplier categories (Public)
// @access  Public
router.get('/categories/list', async (req, res) => {
  try {
    const categories = await Supplier.distinct('categories', { isActive: true });
    
    res.json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   GET /api/suppliers/regions
// @desc    Get all supplier regions (Public)
// @access  Public
router.get('/regions/list', async (req, res) => {
  try {
    const regions = await Supplier.distinct('regions', { isActive: true });
    
    res.json({
      success: true,
      data: regions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   GET /api/suppliers/featured
// @desc    Get featured suppliers (Public)
// @access  Public
router.get('/featured/list', async (req, res) => {
  try {
    const featuredSuppliers = await Supplier.find({ 
      featured: true, 
      isActive: true 
    })
    .sort({ rating: -1 })
    .limit(6);
    
    res.json({
      success: true,
      data: featuredSuppliers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

export default router; 