"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const validateRequest_1 = require("../middleware/validateRequest");
const auth_1 = require("../middleware/auth");
const User_1 = require("../models/User");
const router = express_1.default.Router();
// @route   GET /api/users
// @desc    Get all users (Admin only)
// @access  Private/Admin
router.get('/', [
    auth_1.auth,
    (0, auth_1.requireRole)(['admin']),
    (0, express_validator_1.query)('page').optional().isInt({ min: 1 }),
    (0, express_validator_1.query)('limit').optional().isInt({ min: 1, max: 100 }),
    (0, express_validator_1.query)('search').optional().isString(),
    (0, express_validator_1.query)('role').optional().isIn(['student', 'admin', 'instructor']),
    (0, express_validator_1.query)('isActive').optional().isBoolean(),
    (0, express_validator_1.query)('sort').optional().isIn(['createdAt', 'email', 'firstName', 'lastName']),
    (0, express_validator_1.query)('order').optional().isIn(['asc', 'desc']),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const filter = {};
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
        const sort = {};
        const sortField = req.query.sort || 'createdAt';
        const sortOrder = req.query.order || 'desc';
        sort[sortField] = sortOrder === 'asc' ? 1 : -1;
        const users = await User_1.User.find(filter)
            .select('-password')
            .sort(sort)
            .skip(skip)
            .limit(limit);
        const total = await User_1.User.countDocuments(filter);
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
    }
    catch (error) {
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
    auth_1.auth,
    (0, express_validator_1.param)('id').isMongoId(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const user = await User_1.User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found',
            });
        }
        // Проверяем права доступа
        if (req.user.role !== 'admin' && req.user._id.toString() !== req.params.id) {
            return res.status(403).json({
                success: false,
                error: 'Access denied',
            });
        }
        res.json({
            success: true,
            data: user,
        });
    }
    catch (error) {
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
    auth_1.auth,
    (0, express_validator_1.param)('id').isMongoId(),
    (0, express_validator_1.body)('firstName').optional().isString().trim().isLength({ min: 2, max: 50 }),
    (0, express_validator_1.body)('lastName').optional().isString().trim().isLength({ min: 2, max: 50 }),
    (0, express_validator_1.body)('phone').optional().isString().trim(),
    // Разрешаем URL или data URL (base64), поэтому просто проверим что строка
    (0, express_validator_1.body)('avatar').optional().isString().trim(),
    (0, express_validator_1.body)('isActive').optional().isBoolean(),
    (0, express_validator_1.body)('role').optional().isIn(['student', 'admin', 'instructor']),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const user = await User_1.User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found',
            });
        }
        // Проверяем права доступа
        if (req.user.role !== 'admin' && req.user._id.toString() !== req.params.id) {
            return res.status(403).json({
                success: false,
                error: 'Access denied',
            });
        }
        // Только админ может изменять роль и статус
        if (req.user.role !== 'admin') {
            delete req.body.role;
            delete req.body.isActive;
        }
        const updatedUser = await User_1.User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).select('-password');
        res.json({
            success: true,
            data: updatedUser,
            message: 'User updated successfully',
        });
    }
    catch (error) {
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
    auth_1.auth,
    (0, auth_1.requireRole)(['admin']),
    (0, express_validator_1.param)('id').isMongoId(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const user = await User_1.User.findById(req.params.id);
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
    }
    catch (error) {
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
    auth_1.auth,
    (0, auth_1.requireRole)(['admin']),
], async (req, res) => {
    try {
        const totalUsers = await User_1.User.countDocuments();
        const activeUsers = await User_1.User.countDocuments({ isActive: true });
        const students = await User_1.User.countDocuments({ role: 'student', isActive: true });
        const instructors = await User_1.User.countDocuments({ role: 'instructor', isActive: true });
        const admins = await User_1.User.countDocuments({ role: 'admin', isActive: true });
        // Статистика по месяцам (последние 6 месяцев)
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
        const monthlyStats = await User_1.User.aggregate([
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
exports.default = router;
//# sourceMappingURL=users.js.map