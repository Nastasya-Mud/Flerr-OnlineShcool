"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const validateRequest_1 = require("../middleware/validateRequest");
const auth_1 = require("../middleware/auth");
const Enrollment_1 = require("../models/Enrollment");
const Course_1 = require("../models/Course");
const Order_1 = require("../models/Order");
const router = express_1.default.Router();
// @route   GET /api/enrollments
// @desc    Get user enrollments (Private)
// @access  Private
router.get('/', [
    auth_1.auth,
    (0, express_validator_1.query)('page').optional().isInt({ min: 1 }),
    (0, express_validator_1.query)('limit').optional().isInt({ min: 1, max: 50 }),
    (0, express_validator_1.query)('status').optional().isIn(['active', 'completed', 'paused', 'cancelled']),
    (0, express_validator_1.query)('sort').optional().isIn(['createdAt', 'lastAccessDate', 'progress']),
    (0, express_validator_1.query)('order').optional().isIn(['asc', 'desc']),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const filter = { user: req.user._id };
        if (req.query.status) {
            filter.status = req.query.status;
        }
        const sort = {};
        const sortField = req.query.sort || 'lastAccessDate';
        const sortOrder = req.query.order || 'desc';
        sort[sortField] = sortOrder === 'asc' ? 1 : -1;
        const enrollments = await Enrollment_1.Enrollment.find(filter)
            .populate('course', 'title slug image duration lessons')
            .populate('order', 'orderNumber total')
            .sort(sort)
            .skip(skip)
            .limit(limit);
        const total = await Enrollment_1.Enrollment.countDocuments(filter);
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
    }
    catch (error) {
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
    auth_1.auth,
    (0, express_validator_1.param)('id').isMongoId(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const enrollment = await Enrollment_1.Enrollment.findById(req.params.id)
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
        if (req.user.role !== 'admin' && req.user._id.toString() !== enrollment.user.toString()) {
            return res.status(403).json({
                success: false,
                error: 'Access denied',
            });
        }
        res.json({
            success: true,
            data: enrollment,
        });
    }
    catch (error) {
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
    auth_1.auth,
    (0, express_validator_1.body)('courseId').isMongoId(),
    (0, express_validator_1.body)('orderId').optional().isMongoId(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const { courseId, orderId } = req.body;
        // Проверяем существование курса
        const course = await Course_1.Course.findById(courseId);
        if (!course || !course.isActive) {
            return res.status(404).json({
                success: false,
                error: 'Course not found',
            });
        }
        // Проверяем существование заказа если указан
        if (orderId) {
            const order = await Order_1.Order.findById(orderId);
            if (!order || order.user.toString() !== req.user._id.toString()) {
                return res.status(404).json({
                    success: false,
                    error: 'Order not found',
                });
            }
        }
        // Проверяем, не записан ли уже пользователь на этот курс
        const existingEnrollment = await Enrollment_1.Enrollment.findOne({
            user: req.user._id,
            course: courseId,
        });
        if (existingEnrollment) {
            return res.status(400).json({
                success: false,
                error: 'You are already enrolled in this course',
            });
        }
        const enrollment = new Enrollment_1.Enrollment({
            user: req.user._id,
            course: courseId,
            order: orderId,
            startDate: new Date(),
            lastAccessDate: new Date(),
        });
        await enrollment.save();
        const populatedEnrollment = await Enrollment_1.Enrollment.findById(enrollment._id)
            .populate('course', 'title slug image duration lessons')
            .populate('order', 'orderNumber total');
        res.status(201).json({
            success: true,
            data: populatedEnrollment,
            message: 'Enrollment created successfully',
        });
    }
    catch (error) {
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
    auth_1.auth,
    (0, express_validator_1.param)('id').isMongoId(),
    (0, express_validator_1.body)('completedLessonsCount').isInt({ min: 0 }),
    (0, express_validator_1.body)('totalLessons').isInt({ min: 1 }),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const enrollment = await Enrollment_1.Enrollment.findById(req.params.id);
        if (!enrollment) {
            return res.status(404).json({
                success: false,
                error: 'Enrollment not found',
            });
        }
        // Проверяем права доступа
        if (req.user.role !== 'admin' && req.user._id.toString() !== enrollment.user.toString()) {
            return res.status(403).json({
                success: false,
                error: 'Access denied',
            });
        }
        const { completedLessonsCount, totalLessons } = req.body;
        await enrollment.updateProgress(completedLessonsCount, totalLessons);
        const updatedEnrollment = await Enrollment_1.Enrollment.findById(enrollment._id)
            .populate('course', 'title slug image duration lessons')
            .populate('order', 'orderNumber total');
        res.json({
            success: true,
            data: updatedEnrollment,
            message: 'Progress updated successfully',
        });
    }
    catch (error) {
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
    auth_1.auth,
    (0, express_validator_1.param)('id').isMongoId(),
    (0, express_validator_1.body)('lessonId').isMongoId(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const enrollment = await Enrollment_1.Enrollment.findById(req.params.id);
        if (!enrollment) {
            return res.status(404).json({
                success: false,
                error: 'Enrollment not found',
            });
        }
        // Проверяем права доступа
        if (req.user.role !== 'admin' && req.user._id.toString() !== enrollment.user.toString()) {
            return res.status(403).json({
                success: false,
                error: 'Access denied',
            });
        }
        const { lessonId } = req.body;
        await enrollment.completeLesson(lessonId);
        const updatedEnrollment = await Enrollment_1.Enrollment.findById(enrollment._id)
            .populate('course', 'title slug image duration lessons')
            .populate('completedLessons');
        res.json({
            success: true,
            data: updatedEnrollment,
            message: 'Lesson marked as completed',
        });
    }
    catch (error) {
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
    auth_1.auth,
    (0, express_validator_1.param)('id').isMongoId(),
    (0, express_validator_1.body)('status').isIn(['active', 'completed', 'paused', 'cancelled']),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const enrollment = await Enrollment_1.Enrollment.findById(req.params.id);
        if (!enrollment) {
            return res.status(404).json({
                success: false,
                error: 'Enrollment not found',
            });
        }
        // Проверяем права доступа
        if (req.user.role !== 'admin' && req.user._id.toString() !== enrollment.user.toString()) {
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
        const updatedEnrollment = await Enrollment_1.Enrollment.findById(enrollment._id)
            .populate('course', 'title slug image duration lessons')
            .populate('order', 'orderNumber total');
        res.json({
            success: true,
            data: updatedEnrollment,
            message: 'Enrollment status updated successfully',
        });
    }
    catch (error) {
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
    auth_1.auth,
    (0, express_validator_1.param)('id').isMongoId(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const enrollment = await Enrollment_1.Enrollment.findById(req.params.id);
        if (!enrollment) {
            return res.status(404).json({
                success: false,
                error: 'Enrollment not found',
            });
        }
        // Проверяем права доступа
        if (req.user.role !== 'admin' && req.user._id.toString() !== enrollment.user.toString()) {
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
    }
    catch (error) {
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
    auth_1.auth,
    (0, auth_1.requireRole)(['admin']),
], async (req, res) => {
    try {
        const totalEnrollments = await Enrollment_1.Enrollment.countDocuments();
        const activeEnrollments = await Enrollment_1.Enrollment.countDocuments({ status: 'active' });
        const completedEnrollments = await Enrollment_1.Enrollment.countDocuments({ status: 'completed' });
        const cancelledEnrollments = await Enrollment_1.Enrollment.countDocuments({ status: 'cancelled' });
        const averageProgress = await Enrollment_1.Enrollment.aggregate([
            { $match: { status: 'active' } },
            { $group: { _id: null, avgProgress: { $avg: '$progress' } } },
        ]);
        const monthlyStats = await Enrollment_1.Enrollment.aggregate([
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
exports.default = router;
//# sourceMappingURL=enrollments.js.map