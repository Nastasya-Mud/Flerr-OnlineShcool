import express from 'express';
import { body, param, query } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';
import { auth, requireRole, AuthRequest } from '../middleware/auth';
import { Review, IReview } from '../models/Review';
import { Course } from '../models/Course';
import { Instructor } from '../models/Instructor';

const router = express.Router();

// @route   GET /api/reviews
// @desc    Get reviews with filters (Public)
// @access  Public
router.get('/', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 50 }),
  query('course').optional().isMongoId(),
  query('instructor').optional().isMongoId(),
  query('rating').optional().isInt({ min: 1, max: 5 }),
  query('verified').optional().isBoolean(),
  query('sort').optional().isIn(['createdAt', 'rating', 'helpful']),
  query('order').optional().isIn(['asc', 'desc']),
], validateRequest, async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    
    const filter: any = { isActive: true };
    
    if (req.query.course) {
      filter.course = req.query.course;
    }
    
    if (req.query.instructor) {
      filter.instructor = req.query.instructor;
    }
    
    if (req.query.rating) {
      filter.rating = parseInt(req.query.rating as string);
    }
    
    if (req.query.verified !== undefined) {
      filter.isVerified = req.query.verified === 'true';
    }
    
    const sort: any = {};
    const sortField = req.query.sort as string || 'createdAt';
    const sortOrder = req.query.order as string || 'desc';
    sort[sortField] = sortOrder === 'asc' ? 1 : -1;
    
    const reviews = await Review.find(filter)
      .populate('user', 'firstName lastName avatar')
      .populate('course', 'title slug')
      .populate('instructor', 'user')
      .sort(sort)
      .skip(skip)
      .limit(limit);
    
    const total = await Review.countDocuments(filter);
    
    res.json({
      success: true,
      data: {
        reviews,
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

// @route   GET /api/reviews/:id
// @desc    Get review by ID (Public)
// @access  Public
router.get('/:id', [
  param('id').isMongoId(),
], validateRequest, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
      .populate('user', 'firstName lastName avatar')
      .populate('course', 'title slug')
      .populate('instructor', 'user');
    
    if (!review || !review.isActive) {
      return res.status(404).json({
        success: false,
        error: 'Review not found',
      });
    }
    
    res.json({
      success: true,
      data: review,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   POST /api/reviews
// @desc    Create review (Private)
// @access  Private
router.post('/', [
  auth,
  body('courseId').isMongoId(),
  body('instructorId').optional().isMongoId(),
  body('rating').isInt({ min: 1, max: 5 }),
  body('title').isString().trim().isLength({ min: 5, max: 200 }),
  body('content').isString().trim().isLength({ min: 20, max: 2000 }),
  body('pros').optional().isArray(),
  body('pros.*').isString().trim().isLength({ min: 3, max: 100 }),
  body('cons').optional().isArray(),
  body('cons.*').isString().trim().isLength({ min: 3, max: 100 }),
], validateRequest, async (req: AuthRequest, res) => {
  try {
    const { courseId, instructorId, ...reviewData } = req.body;
    
    // Проверяем существование курса
    const course = await Course.findById(courseId);
    if (!course || !course.isActive) {
      return res.status(404).json({
        success: false,
        error: 'Course not found',
      });
    }
    
    // Проверяем существование преподавателя если указан
    if (instructorId) {
      const instructor = await Instructor.findById(instructorId);
      if (!instructor || !instructor.isActive) {
        return res.status(404).json({
          success: false,
          error: 'Instructor not found',
        });
      }
    }
    
    // Проверяем, не оставлял ли пользователь уже отзыв на этот курс
    const existingReview = await Review.findOne({
      user: req.user!._id,
      course: courseId,
    });
    
    if (existingReview) {
      return res.status(400).json({
        success: false,
        error: 'You have already reviewed this course',
      });
    }
    
    const review = new Review({
      user: req.user!._id,
      course: courseId,
      instructor: instructorId,
      ...reviewData,
    });
    
    await review.save();
    
    const populatedReview = await Review.findById(review._id)
      .populate('user', 'firstName lastName avatar')
      .populate('course', 'title slug')
      .populate('instructor', 'user');
    
    res.status(201).json({
      success: true,
      data: populatedReview,
      message: 'Review created successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   PUT /api/reviews/:id
// @desc    Update review (Private - own review or admin)
// @access  Private
router.put('/:id', [
  auth,
  param('id').isMongoId(),
  body('rating').optional().isInt({ min: 1, max: 5 }),
  body('title').optional().isString().trim().isLength({ min: 5, max: 200 }),
  body('content').optional().isString().trim().isLength({ min: 20, max: 2000 }),
  body('pros').optional().isArray(),
  body('pros.*').isString().trim().isLength({ min: 3, max: 100 }),
  body('cons').optional().isArray(),
  body('cons.*').isString().trim().isLength({ min: 3, max: 100 }),
], validateRequest, async (req: AuthRequest, res) => {
  try {
    const review = await Review.findById(req.params.id);
    
    if (!review) {
      return res.status(404).json({
        success: false,
        error: 'Review not found',
      });
    }
    
    // Проверяем права доступа
    if (req.user!.role !== 'admin' && req.user!._id.toString() !== review.user.toString()) {
      return res.status(403).json({
        success: false,
        error: 'Access denied',
      });
    }
    
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('user', 'firstName lastName avatar')
     .populate('course', 'title slug')
     .populate('instructor', 'user');
    
    res.json({
      success: true,
      data: updatedReview,
      message: 'Review updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   DELETE /api/reviews/:id
// @desc    Delete review (Private - own review or admin)
// @access  Private
router.delete('/:id', [
  auth,
  param('id').isMongoId(),
], validateRequest, async (req: AuthRequest, res) => {
  try {
    const review = await Review.findById(req.params.id);
    
    if (!review) {
      return res.status(404).json({
        success: false,
        error: 'Review not found',
      });
    }
    
    // Проверяем права доступа
    if (req.user!.role !== 'admin' && req.user!._id.toString() !== review.user.toString()) {
      return res.status(403).json({
        success: false,
        error: 'Access denied',
      });
    }
    
    // Мягкое удаление
    review.isActive = false;
    await review.save();
    
    res.json({
      success: true,
      message: 'Review deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   POST /api/reviews/:id/helpful
// @desc    Mark review as helpful (Private)
// @access  Private
router.post('/:id/helpful', [
  auth,
  param('id').isMongoId(),
  body('helpful').isBoolean(),
], validateRequest, async (req: AuthRequest, res) => {
  try {
    const review = await Review.findById(req.params.id);
    
    if (!review || !review.isActive) {
      return res.status(404).json({
        success: false,
        error: 'Review not found',
      });
    }
    
    const { helpful } = req.body;
    
    if (helpful) {
      review.helpful += 1;
    } else {
      review.notHelpful += 1;
    }
    
    await review.save();
    
    res.json({
      success: true,
      data: {
        helpful: review.helpful,
        notHelpful: review.notHelpful,
        totalVotes: review.totalVotes,
        helpfulPercentage: review.helpfulPercentage,
      },
      message: 'Vote recorded successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   GET /api/reviews/stats/overview
// @desc    Get review statistics (Admin only)
// @access  Private/Admin
router.get('/stats/overview', [
  auth,
  requireRole(['admin']),
], async (req: AuthRequest, res) => {
  try {
    const totalReviews = await Review.countDocuments();
    const verifiedReviews = await Review.countDocuments({ isVerified: true });
    const activeReviews = await Review.countDocuments({ isActive: true });
    
    const averageRating = await Review.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: null, avgRating: { $avg: '$rating' } } },
    ]);
    
    const ratingDistribution = await Review.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: '$rating', count: { $sum: 1 } } },
      { $sort: { _id: -1 } },
    ]);
    
    res.json({
      success: true,
      data: {
        total: totalReviews,
        verified: verifiedReviews,
        active: activeReviews,
        averageRating: averageRating[0]?.avgRating || 0,
        ratingDistribution,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

export default router; 