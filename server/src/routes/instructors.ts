import express from 'express';
import { body, param, query } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';
import { auth, requireRole, AuthRequest } from '../middleware/auth';
import { Instructor, IInstructor } from '../models/Instructor';
import { User } from '../models/User';

const router = express.Router();

// @route   GET /api/instructors
// @desc    Get all instructors (Public)
// @access  Public
router.get('/', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 50 }),
  query('search').optional().isString(),
  query('specialty').optional().isString(),
  query('featured').optional().isBoolean(),
  query('sort').optional().isIn(['rating', 'experience', 'totalStudents', 'createdAt']),
  query('order').optional().isIn(['asc', 'desc']),
], validateRequest, async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    
    const filter: any = { isActive: true };
    
    if (req.query.search) {
      filter.$or = [
        { 'user.firstName': { $regex: req.query.search, $options: 'i' } },
        { 'user.lastName': { $regex: req.query.search, $options: 'i' } },
        { bio: { $regex: req.query.search, $options: 'i' } },
      ];
    }
    
    if (req.query.specialty) {
      filter.specialties = req.query.specialty;
    }
    
    if (req.query.featured !== undefined) {
      filter.featured = req.query.featured === 'true';
    }
    
    const sort: any = {};
    const sortField = req.query.sort as string || 'rating';
    const sortOrder = req.query.order as string || 'desc';
    sort[sortField] = sortOrder === 'asc' ? 1 : -1;
    
    const instructors = await Instructor.find(filter)
      .populate('user', 'firstName lastName email avatar')
      .sort(sort)
      .skip(skip)
      .limit(limit);
    
    const total = await Instructor.countDocuments(filter);
    
    res.json({
      success: true,
      data: {
        instructors,
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

// @route   GET /api/instructors/:id
// @desc    Get instructor by ID (Public)
// @access  Public
router.get('/:id', [
  param('id').isMongoId(),
], validateRequest, async (req, res) => {
  try {
    const instructor = await Instructor.findById(req.params.id)
      .populate('user', 'firstName lastName email avatar')
      .populate({
        path: 'user',
        select: 'firstName lastName email avatar',
      });
    
    if (!instructor || !instructor.isActive) {
      return res.status(404).json({
        success: false,
        error: 'Instructor not found',
      });
    }
    
    res.json({
      success: true,
      data: instructor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   POST /api/instructors
// @desc    Create instructor profile (Admin only)
// @access  Private/Admin
router.post('/', [
  auth,
  requireRole(['admin']),
  body('userId').isMongoId(),
  body('bio').isString().trim().isLength({ min: 50, max: 1000 }),
  body('experience').isInt({ min: 0, max: 50 }),
  body('specialties').isArray({ min: 1 }),
  body('specialties.*').isIn([
    'wedding-floristry',
    'commercial-floristry',
    'interior-compositions',
    'dry-flowers',
    'artificial-flowers',
    'business-floristry',
    'social-media',
    'event-floristry',
    'seasonal-compositions',
    'modern-floristry',
    'classical-floristry',
    'minimalist-compositions',
    'luxury-compositions',
    'eco-floristry',
    'sustainable-floristry'
  ]),
  body('education').isArray({ min: 1 }),
  body('education.*').isString().trim(),
  body('certifications').optional().isArray(),
  body('certifications.*').isString().trim(),
  body('achievements').optional().isArray(),
  body('achievements.*').isString().trim(),
  body('socialMedia.instagram').optional().isURL(),
  body('socialMedia.facebook').optional().isURL(),
  body('socialMedia.website').optional().isURL(),
  body('socialMedia.youtube').optional().isURL(),
  body('featured').optional().isBoolean(),
], validateRequest, async (req: AuthRequest, res) => {
  try {
    const { userId, ...instructorData } = req.body;
    
    // Проверяем, существует ли пользователь
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }
    
    // Проверяем, что пользователь имеет роль instructor
    if (user.role !== 'instructor') {
      return res.status(400).json({
        success: false,
        error: 'User must have instructor role',
      });
    }
    
    // Проверяем, не существует ли уже профиль преподавателя
    const existingInstructor = await Instructor.findOne({ user: userId });
    if (existingInstructor) {
      return res.status(400).json({
        success: false,
        error: 'Instructor profile already exists for this user',
      });
    }
    
    const instructor = new Instructor({
      user: userId,
      ...instructorData,
    });
    
    await instructor.save();
    
    const populatedInstructor = await Instructor.findById(instructor._id)
      .populate('user', 'firstName lastName email avatar');
    
    res.status(201).json({
      success: true,
      data: populatedInstructor,
      message: 'Instructor profile created successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   PUT /api/instructors/:id
// @desc    Update instructor profile (Admin or own profile)
// @access  Private
router.put('/:id', [
  auth,
  param('id').isMongoId(),
  body('bio').optional().isString().trim().isLength({ min: 50, max: 1000 }),
  body('experience').optional().isInt({ min: 0, max: 50 }),
  body('specialties').optional().isArray({ min: 1 }),
  body('specialties.*').isIn([
    'wedding-floristry',
    'commercial-floristry',
    'interior-compositions',
    'dry-flowers',
    'artificial-flowers',
    'business-floristry',
    'social-media',
    'event-floristry',
    'seasonal-compositions',
    'modern-floristry',
    'classical-floristry',
    'minimalist-compositions',
    'luxury-compositions',
    'eco-floristry',
    'sustainable-floristry'
  ]),
  body('education').optional().isArray({ min: 1 }),
  body('education.*').isString().trim(),
  body('certifications').optional().isArray(),
  body('certifications.*').isString().trim(),
  body('achievements').optional().isArray(),
  body('achievements.*').isString().trim(),
  body('socialMedia.instagram').optional().isURL(),
  body('socialMedia.facebook').optional().isURL(),
  body('socialMedia.website').optional().isURL(),
  body('socialMedia.youtube').optional().isURL(),
  body('featured').optional().isBoolean(),
  body('isActive').optional().isBoolean(),
], validateRequest, async (req: AuthRequest, res) => {
  try {
    const instructor = await Instructor.findById(req.params.id);
    
    if (!instructor) {
      return res.status(404).json({
        success: false,
        error: 'Instructor not found',
      });
    }
    
    // Проверяем права доступа
    if (req.user!.role !== 'admin' && req.user!._id.toString() !== instructor.user.toString()) {
      return res.status(403).json({
        success: false,
        error: 'Access denied',
      });
    }
    
    // Только админ может изменять featured и isActive
    if (req.user!.role !== 'admin') {
      delete req.body.featured;
      delete req.body.isActive;
    }
    
    const updatedInstructor = await Instructor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('user', 'firstName lastName email avatar');
    
    res.json({
      success: true,
      data: updatedInstructor,
      message: 'Instructor profile updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   DELETE /api/instructors/:id
// @desc    Delete instructor profile (Admin only)
// @access  Private/Admin
router.delete('/:id', [
  auth,
  requireRole(['admin']),
  param('id').isMongoId(),
], validateRequest, async (req: AuthRequest, res) => {
  try {
    const instructor = await Instructor.findById(req.params.id);
    
    if (!instructor) {
      return res.status(404).json({
        success: false,
        error: 'Instructor not found',
      });
    }
    
    // Мягкое удаление
    instructor.isActive = false;
    await instructor.save();
    
    res.json({
      success: true,
      message: 'Instructor profile deactivated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   GET /api/instructors/featured
// @desc    Get featured instructors (Public)
// @access  Public
router.get('/featured/list', async (req, res) => {
  try {
    const featuredInstructors = await Instructor.find({ 
      featured: true, 
      isActive: true 
    })
    .populate('user', 'firstName lastName email avatar')
    .sort({ rating: -1, experience: -1 })
    .limit(6);
    
    res.json({
      success: true,
      data: featuredInstructors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

export default router; 