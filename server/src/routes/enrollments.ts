import express, { Request } from 'express';
import { body, param, query } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';
import { auth, requireRole } from '../middleware/auth';
import { Enrollment, IEnrollment } from '../models/Enrollment';
import { Course } from '../models/Course';
import { Order } from '../models/Order';

const router = express.Router();

// @route   GET /api/enrollments
// @desc    Get user enrollments (Private)
// @access  Private
router.get('/', [
  auth,
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 50 }),
  query('status').optional().isIn(['active', 'completed', 'paused', 'cancelled']),
  query('sort').optional().isIn(['createdAt', 'lastAccessDate', 'progress']),
  query('order').optional().isIn(['asc', 'desc']),
], validateRequest, async (req: Request, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    
    const filter: any = { user: req.user!._id };
    
    if (req.query.status) {
      filter.status = req.query.status;
    }
    
    const sort: any = {};
    const sortField = req.query.sort as string || 'lastAccessDate';
    const sortOrder = req.query.order as string || 'desc';
    sort[sortField] = sortOrder === 'asc' ? 1 : -1;
    
    const enrollments = await Enrollment.find(filter)
      .populate('course', 'title slug image duration lessons')
      .populate('order', 'orderNumber total')
      .sort(sort)
      .skip(skip)
      .limit(limit);
    
    const total = await Enrollment.countDocuments(filter);
    
    res.json({
      success: true,
      data: {
        enrollments,
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

// @route   GET /api/enrollments/:id
// @desc    Get enrollment by ID (Private)
// @access  Private
router.get('/:id', [
  auth,
  param('id').isMongoId(),
], validateRequest, async (req: Request, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id)
      .populate('course', 'title slug image duration lessons materials requirements outcomes')
      .populate('order', 'orderNumber total status')
      .populate('completedLessons');
    
    if (!enrollment) {
      return res.status(404).json({
        success: false,
        error: 'Enrollment not found',
      });
    }
    
    // Проверяем права доступа
    if (req.user!.role !== 'admin' && req.user!._id.toString() !== enrollment.user.toString()) {
      return res.status(403).json({
        success: false,
        error: 'Access denied',
      });
    }
    
    res.json({
      success: true,
      data: enrollment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   POST /api/enrollments
// @desc    Create enrollment (Private)
// @access  Private
router.post('/', [
  auth,
  body('courseId').isMongoId(),
  body('orderId').optional().isMongoId(),
], validateRequest, async (req: Request, res) => {
  try {
    const { courseId, orderId } = req.body;
    
    // Проверяем существование курса
    const course = await Course.findById(courseId);
    if (!course || !course.isActive) {
      return res.status(404).json({
        success: false,
        error: 'Course not found',
      });
    }
    
    // Проверяем существование заказа если указан
    if (orderId) {
      const order = await Order.findById(orderId);
      if (!order || order.user.toString() !== req.user!._id.toString()) {
        return res.status(404).json({
          success: false,
          error: 'Order not found',
        });
      }
    }
    
    // Проверяем, не записан ли уже пользователь на этот курс
    const existingEnrollment = await Enrollment.findOne({
      user: req.user!._id,
      course: courseId,
    });
    
    if (existingEnrollment) {
      return res.status(400).json({
        success: false,
        error: 'You are already enrolled in this course',
      });
    }
    
    const enrollment = new Enrollment({
      user: req.user!._id,
      course: courseId,
      order: orderId,
      startDate: new Date(),
      lastAccessDate: new Date(),
    });
    
    await enrollment.save();
    
    const populatedEnrollment = await Enrollment.findById(enrollment._id)
      .populate('course', 'title slug image duration lessons')
      .populate('order', 'orderNumber total');
    
    res.status(201).json({
      success: true,
      data: populatedEnrollment,
      message: 'Enrollment created successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   PUT /api/enrollments/:id/progress
// @desc    Update enrollment progress (Private)
// @access  Private
router.put('/:id/progress', [
  auth,
  param('id').isMongoId(),
  body('completedLessonsCount').isInt({ min: 0 }),
  body('totalLessons').isInt({ min: 1 }),
], validateRequest, async (req: Request, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id);
    
    if (!enrollment) {
      return res.status(404).json({
        success: false,
        error: 'Enrollment not found',
      });
    }
    
    // Проверяем права доступа
    if (req.user!.role !== 'admin' && req.user!._id.toString() !== enrollment.user.toString()) {
      return res.status(403).json({
        success: false,
        error: 'Access denied',
      });
    }
    
    const { completedLessonsCount, totalLessons } = req.body;
    
    await enrollment.updateProgress(completedLessonsCount, totalLessons);
    
    const updatedEnrollment = await Enrollment.findById(enrollment._id)
      .populate('course', 'title slug image duration lessons')
      .populate('order', 'orderNumber total');
    
    res.json({
      success: true,
      data: updatedEnrollment,
      message: 'Progress updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   POST /api/enrollments/:id/complete-lesson
// @desc    Mark lesson as completed (Private)
// @access  Private
router.post('/:id/complete-lesson', [
  auth,
  param('id').isMongoId(),
  body('lessonId').isMongoId(),
], validateRequest, async (req: Request, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id);
    
    if (!enrollment) {
      return res.status(404).json({
        success: false,
        error: 'Enrollment not found',
      });
    }
    
    // Проверяем права доступа
    if (req.user!.role !== 'admin' && req.user!._id.toString() !== enrollment.user.toString()) {
      return res.status(403).json({
        success: false,
        error: 'Access denied',
      });
    }
    
    const { lessonId } = req.body;
    
    await enrollment.completeLesson(lessonId);
    
    const updatedEnrollment = await Enrollment.findById(enrollment._id)
      .populate('course', 'title slug image duration lessons')
      .populate('completedLessons');
    
    res.json({
      success: true,
      data: updatedEnrollment,
      message: 'Lesson marked as completed',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   PUT /api/enrollments/:id/status
// @desc    Update enrollment status (Private - own enrollment or admin)
// @access  Private
router.put('/:id/status', [
  auth,
  param('id').isMongoId(),
  body('status').isIn(['active', 'completed', 'paused', 'cancelled']),
], validateRequest, async (req: Request, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id);
    
    if (!enrollment) {
      return res.status(404).json({
        success: false,
        error: 'Enrollment not found',
      });
    }
    
    // Проверяем права доступа
    if (req.user!.role !== 'admin' && req.user!._id.toString() !== enrollment.user.toString()) {
      return res.status(403).json({
        success: false,
        error: 'Access denied',
      });
    }
    
    const { status } = req.body;
    
    enrollment.status = status;
    if (status === 'completed') {
      enrollment.completionDate = new Date();
    }
    
    await enrollment.save();
    
    const updatedEnrollment = await Enrollment.findById(enrollment._id)
      .populate('course', 'title slug image duration lessons')
      .populate('order', 'orderNumber total');
    
    res.json({
      success: true,
      data: updatedEnrollment,
      message: 'Enrollment status updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   DELETE /api/enrollments/:id
// @desc    Cancel enrollment (Private - own enrollment or admin)
// @access  Private
router.delete('/:id', [
  auth,
  param('id').isMongoId(),
], validateRequest, async (req: Request, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id);
    
    if (!enrollment) {
      return res.status(404).json({
        success: false,
        error: 'Enrollment not found',
      });
    }
    
    // Проверяем права доступа
    if (req.user!.role !== 'admin' && req.user!._id.toString() !== enrollment.user.toString()) {
      return res.status(403).json({
        success: false,
        error: 'Access denied',
      });
    }
    
    enrollment.status = 'cancelled';
    await enrollment.save();
    
    res.json({
      success: true,
      message: 'Enrollment cancelled successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   GET /api/enrollments/stats/overview
// @desc    Get enrollment statistics (Admin only)
// @access  Private/Admin
router.get('/stats/overview', [
  auth,
  requireRole(['admin']),
], async (req: Request, res) => {
  try {
    const totalEnrollments = await Enrollment.countDocuments();
    const activeEnrollments = await Enrollment.countDocuments({ status: 'active' });
    const completedEnrollments = await Enrollment.countDocuments({ status: 'completed' });
    const cancelledEnrollments = await Enrollment.countDocuments({ status: 'cancelled' });
    
    const averageProgress = await Enrollment.aggregate([
      { $match: { status: 'active' } },
      { $group: { _id: null, avgProgress: { $avg: '$progress' } } },
    ]);
    
    const monthlyStats = await Enrollment.aggregate([
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { '_id.year': 1, '_id.month': 1 },
      },
      { $limit: 12 },
    ]);
    
    res.json({
      success: true,
      data: {
        total: totalEnrollments,
        active: activeEnrollments,
        completed: completedEnrollments,
        cancelled: cancelledEnrollments,
        averageProgress: averageProgress[0]?.avgProgress || 0,
        monthlyStats,
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