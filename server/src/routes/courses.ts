import express from 'express';
import { body, param, query } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';
import { auth } from '../middleware/auth';
import { Course } from '../models/Course';
import { User } from '../models/User';

const router = express.Router();

// @route   GET /api/courses
// @desc    Get all courses with pagination and filters
// @access  Public
router.get('/', [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1, max: 50 }).withMessage('Limit must be between 1 and 50'),
  query('category').optional().isString().trim(),
  query('level').optional().isIn(['beginner', 'intermediate', 'advanced']),
  query('search').optional().isString().trim(),
  query('sort').optional().isIn(['price', 'title', 'createdAt', 'popularity']),
  query('order').optional().isIn(['asc', 'desc']),
  validateRequest,
], async (req, res) => {
  try {
    const {
      page = 1,
      limit = 12,
      category,
      level,
      search,
      sort = 'createdAt',
      order = 'desc'
    } = req.query;

    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const skip = (pageNum - 1) * limitNum;

    // Build filter object
    const filter: any = { isActive: true };
    
    if (category) filter.category = category;
    if (level) filter.level = level;
    
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { shortDescription: { $regex: search, $options: 'i' } },
      ];
    }

    // Build sort object
    const sortObj: any = {};
    sortObj[sort as string] = order === 'asc' ? 1 : -1;

    const courses = await Course.find(filter)
      .populate('instructors', 'firstName lastName avatar')
      .sort(sortObj)
      .skip(skip)
      .limit(limitNum)
      .lean();

    const total = await Course.countDocuments(filter);
    const totalPages = Math.ceil(total / limitNum);

    res.json({
      success: true,
      data: courses,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages,
        hasNext: pageNum < totalPages,
        hasPrev: pageNum > 1,
      },
    });
  } catch (error: any) {
    // Логируем и возвращаем сообщение для диагностики
    console.error('Create course error:', error?.message || error);
    res.status(500).json({
      success: false,
      error: 'Server error',
      message: error?.message,
    });
  }
});

// @route   GET /api/courses/:slug
// @desc    Get course by slug
// @access  Public
router.get('/:slug', [
  param('slug').isString().trim().notEmpty().withMessage('Valid slug is required'),
  validateRequest,
], async (req, res) => {
  try {
    const { slug } = req.params;

    const course = await Course.findOne({ slug, isActive: true })
      .populate('instructors', 'firstName lastName avatar bio')
      .lean();

    if (!course) {
      return res.status(404).json({
        success: false,
        error: 'Course not found',
      });
    }

    res.json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
});

// @route   POST /api/courses
// @desc    Create new course (Admin only)
// @access  Private/Admin
router.post('/', [
  auth,
  body('title').isString().trim().notEmpty().withMessage('Title is required'),
  body('description').isString().trim().notEmpty().withMessage('Description is required'),
  body('shortDescription').isString().trim().notEmpty().withMessage('Short description is required'),
  body('price').isFloat({ min: 0 }).withMessage('Valid price is required'),
  // originalPrice может отсутствовать
  body('originalPrice').optional({ nullable: true }).isFloat({ min: 0 }).withMessage('Valid original price is required'),
  body('duration').isString().trim().notEmpty().withMessage('Duration is required'),
  body('level').isIn(['beginner', 'intermediate', 'advanced']).withMessage('Valid level is required'),
  body('category').isString().trim().notEmpty().withMessage('Category is required'),
  // image: пока как строка (URL либо data URL). Позже можно заменить на upload
  // Принимаем как URL строку либо data URL (base64). Просто проверим на непустую строку
  body('image').isString().trim().notEmpty().withMessage('Image is required'),
  // instructors делаем необязательным
  body('instructors').optional({ nullable: true }).isArray().withMessage('Instructors must be an array'),
  body('instructors.*').optional().isMongoId().withMessage('Valid instructor IDs are required'),
  body('materials').optional().isArray(),
  body('requirements').optional().isArray(),
  body('outcomes').optional().isArray(),
  validateRequest,
], async (req, res) => {
  try {
    // Check if user is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Access denied. Admin only.',
      });
    }

    let {
      title,
      description,
      shortDescription,
      price,
      originalPrice,
      duration,
      level,
      category,
      image,
      videoPreview,
      instructors,
      materials = [],
      requirements = [],
      outcomes = [],
      lessons = [],
    } = req.body;

    // Нормализация значений по умолчанию
    if (!shortDescription) shortDescription = title;
    if (originalPrice == null) originalPrice = price;

    // Проверяем преподавателей только если они переданы
    if (Array.isArray(instructors) && instructors.length > 0) {
      const instructorUsers = await User.find({
        _id: { $in: instructors },
        role: 'instructor',
        isActive: true,
      });

      if (instructorUsers.length !== instructors.length) {
        return res.status(400).json({
          success: false,
          error: 'Some instructors not found or inactive',
        });
      }
    }

    const course = new Course({
      title,
      description,
      shortDescription,
      price,
      originalPrice,
      duration,
      level,
      category,
      image,
      videoPreview,
      instructors: Array.isArray(instructors) ? instructors : [],
      materials,
      requirements,
      outcomes,
      lessons,
    });

    await course.save();

    const populatedCourse = await Course.findById(course._id)
      .populate('instructors', 'firstName lastName avatar');

    res.status(201).json({
      success: true,
      data: populatedCourse,
    });
  } catch (error: any) {
    if (error?.name === 'ValidationError') {
      const details = Object.values(error.errors).map((e: any) => ({ field: e.path, message: e.message }));
      return res.status(400).json({ success: false, error: 'Validation failed', details });
    }
    console.error('Create course error:', error?.message || error);
    res.status(500).json({
      success: false,
      error: 'Server error',
      message: error?.message,
    });
  }
});

// @route   PUT /api/courses/:id
// @desc    Update course (Admin only)
// @access  Private/Admin
router.put('/:id', [
  auth,
  param('id').isMongoId().withMessage('Valid course ID is required'),
  validateRequest,
], async (req, res) => {
  try {
    // Check if user is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Access denied. Admin only.',
      });
    }

    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        error: 'Course not found',
      });
    }

    // Update fields
    Object.keys(req.body).forEach(key => {
      if (key !== '_id' && key !== '__v') {
        course[key] = req.body[key];
      }
    });

    await course.save();

    const updatedCourse = await Course.findById(course._id)
      .populate('instructors', 'firstName lastName avatar');

    res.json({
      success: true,
      data: updatedCourse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
});

// @route   DELETE /api/courses/:id
// @desc    Delete course (Admin only)
// @access  Private/Admin
router.delete('/:id', [
  auth,
  param('id').isMongoId().withMessage('Valid course ID is required'),
  validateRequest,
], async (req, res) => {
  try {
    // Check if user is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Access denied. Admin only.',
      });
    }

    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        error: 'Course not found',
      });
    }

    // Soft delete - set isActive to false
    course.isActive = false;
    await course.save();

    res.json({
      success: true,
      message: 'Course deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
});

export default router; 