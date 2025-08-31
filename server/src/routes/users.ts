import express, { Request } from 'express';
import { body, param, query } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';
import { auth, requireRole } from '../middleware/auth';
import { User, IUser } from '../models/User';

const router = express.Router();

// @route   GET /api/users
// @desc    Get all users (Admin only)
// @access  Private/Admin
router.get('/', [
  auth,
  requireRole(['admin']),
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('search').optional().isString(),
  query('role').optional().isIn(['student', 'admin', 'instructor']),
  query('isActive').optional().isBoolean(),
  query('sort').optional().isIn(['createdAt', 'email', 'firstName', 'lastName']),
  query('order').optional().isIn(['asc', 'desc']),
], validateRequest, async (req: Request, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    
    const filter: any = {};
    
    if (req.query.search) {
      filter.$or = [
        { firstName: { $regex: req.query.search, $options: 'i' } },
        { lastName: { $regex: req.query.search, $options: 'i' } },
        { email: { $regex: req.query.search, $options: 'i' } },
      ];
    }
    
    if (req.query.role) {
      filter.role = req.query.role;
    }
    
    if (req.query.isActive !== undefined) {
      filter.isActive = req.query.isActive === 'true';
    }
    
    const sort: any = {};
    const sortField = req.query.sort as string || 'createdAt';
    const sortOrder = req.query.order as string || 'desc';
    sort[sortField] = sortOrder === 'asc' ? 1 : -1;
    
    const users = await User.find(filter)
      .select('-password')
      .sort(sort)
      .skip(skip)
      .limit(limit);
    
    const total = await User.countDocuments(filter);
    
    res.json({
      success: true,
      data: {
        users,
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

// @route   GET /api/users/:id
// @desc    Get user by ID (Admin or own profile)
// @access  Private
router.get('/:id', [
  auth,
  param('id').isMongoId(),
], validateRequest, async (req: Request, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }
    
    // Проверяем права доступа
    if (req.user!.role !== 'admin' && req.user!._id.toString() !== req.params.id) {
      return res.status(403).json({
        success: false,
        error: 'Access denied',
      });
    }
    
    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   PUT /api/users/:id
// @desc    Update user (Admin or own profile)
// @access  Private
router.put('/:id', [
  auth,
  param('id').isMongoId(),
  body('firstName').optional().isString().trim().isLength({ min: 2, max: 50 }),
  body('lastName').optional().isString().trim().isLength({ min: 2, max: 50 }),
  body('phone').optional().isString().trim(),
  body('avatar').optional().isURL(),
  body('isActive').optional().isBoolean(),
  body('role').optional().isIn(['student', 'admin', 'instructor']),
], validateRequest, async (req: Request, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }
    
    // Проверяем права доступа
    if (req.user!.role !== 'admin' && req.user!._id.toString() !== req.params.id) {
      return res.status(403).json({
        success: false,
        error: 'Access denied',
      });
    }
    
    // Только админ может изменять роль и статус
    if (req.user!.role !== 'admin') {
      delete req.body.role;
      delete req.body.isActive;
    }
    
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).select('-password');
    
    res.json({
      success: true,
      data: updatedUser,
      message: 'User updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   DELETE /api/users/:id
// @desc    Delete user (Admin only)
// @access  Private/Admin
router.delete('/:id', [
  auth,
  requireRole(['admin']),
  param('id').isMongoId(),
], validateRequest, async (req: Request, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }
    
    // Мягкое удаление - устанавливаем isActive в false
    user.isActive = false;
    await user.save();
    
    res.json({
      success: true,
      message: 'User deactivated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @route   GET /api/users/stats
// @desc    Get user statistics (Admin only)
// @access  Private/Admin
router.get('/stats/overview', [
  auth,
  requireRole(['admin']),
], async (req: Request, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const activeUsers = await User.countDocuments({ isActive: true });
    const students = await User.countDocuments({ role: 'student', isActive: true });
    const instructors = await User.countDocuments({ role: 'instructor', isActive: true });
    const admins = await User.countDocuments({ role: 'admin', isActive: true });
    
    // Статистика по месяцам (последние 6 месяцев)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    
    const monthlyStats = await User.aggregate([
      {
        $match: {
          createdAt: { $gte: sixMonthsAgo },
        },
      },
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
    ]);
    
    res.json({
      success: true,
      data: {
        total: totalUsers,
        active: activeUsers,
        students,
        instructors,
        admins,
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