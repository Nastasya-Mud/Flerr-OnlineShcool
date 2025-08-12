"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const validateRequest_1 = require("../middleware/validateRequest");
const auth_1 = require("../middleware/auth");
const Review_1 = require("../models/Review");
const Course_1 = require("../models/Course");
const Instructor_1 = require("../models/Instructor");
const router = express_1.default.Router();
// @route   GET /api/reviews
// @desc    Get reviews with filters (Public)
// @access  Public
router.get('/', [
    (0, express_validator_1.query)('page').optional().isInt({ min: 1 }),
    (0, express_validator_1.query)('limit').optional().isInt({ min: 1, max: 50 }),
    (0, express_validator_1.query)('course').optional().isMongoId(),
    (0, express_validator_1.query)('instructor').optional().isMongoId(),
    (0, express_validator_1.query)('rating').optional().isInt({ min: 1, max: 5 }),
    (0, express_validator_1.query)('verified').optional().isBoolean(),
    (0, express_validator_1.query)('sort').optional().isIn(['createdAt', 'rating', 'helpful']),
    (0, express_validator_1.query)('order').optional().isIn(['asc', 'desc']),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const filter = { isActive: true };
        if (req.query.course) {
            filter.course = req.query.course;
        }
        if (req.query.instructor) {
            filter.instructor = req.query.instructor;
        }
        if (req.query.rating) {
            filter.rating = parseInt(req.query.rating);
        }
        if (req.query.verified !== undefined) {
            filter.isVerified = req.query.verified === 'true';
        }
        const sort = {};
        const sortField = req.query.sort || 'createdAt';
        const sortOrder = req.query.order || 'desc';
        sort[sortField] = sortOrder === 'asc' ? 1 : -1;
        const reviews = await Review_1.Review.find(filter)
            .populate('user', 'firstName lastName avatar')
            .populate('course', 'title slug')
            .populate('instructor', 'user')
            .sort(sort)
            .skip(skip)
            .limit(limit);
        const total = await Review_1.Review.countDocuments(filter);
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
    }
    catch (error) {
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
    (0, express_validator_1.param)('id').isMongoId(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const review = await Review_1.Review.findById(req.params.id)
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
    }
    catch (error) {
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
    auth_1.auth,
    (0, express_validator_1.body)('courseId').isMongoId(),
    (0, express_validator_1.body)('instructorId').optional().isMongoId(),
    (0, express_validator_1.body)('rating').isInt({ min: 1, max: 5 }),
    (0, express_validator_1.body)('title').isString().trim().isLength({ min: 5, max: 200 }),
    (0, express_validator_1.body)('content').isString().trim().isLength({ min: 20, max: 2000 }),
    (0, express_validator_1.body)('pros').optional().isArray(),
    (0, express_validator_1.body)('pros.*').isString().trim().isLength({ min: 3, max: 100 }),
    (0, express_validator_1.body)('cons').optional().isArray(),
    (0, express_validator_1.body)('cons.*').isString().trim().isLength({ min: 3, max: 100 }),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const { courseId, instructorId, ...reviewData } = req.body;
        // Проверяем существование курса
        const course = await Course_1.Course.findById(courseId);
        if (!course || !course.isActive) {
            return res.status(404).json({
                success: false,
                error: 'Course not found',
            });
        }
        // Проверяем существование преподавателя если указан
        if (instructorId) {
            const instructor = await Instructor_1.Instructor.findById(instructorId);
            if (!instructor || !instructor.isActive) {
                return res.status(404).json({
                    success: false,
                    error: 'Instructor not found',
                });
            }
        }
        // Проверяем, не оставлял ли пользователь уже отзыв на этот курс
        const existingReview = await Review_1.Review.findOne({
            user: req.user._id,
            course: courseId,
        });
        if (existingReview) {
            return res.status(400).json({
                success: false,
                error: 'You have already reviewed this course',
            });
        }
        const review = new Review_1.Review({
            user: req.user._id,
            course: courseId,
            instructor: instructorId,
            ...reviewData,
        });
        await review.save();
        const populatedReview = await Review_1.Review.findById(review._id)
            .populate('user', 'firstName lastName avatar')
            .populate('course', 'title slug')
            .populate('instructor', 'user');
        res.status(201).json({
            success: true,
            data: populatedReview,
            message: 'Review created successfully',
        });
    }
    catch (error) {
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
    auth_1.auth,
    (0, express_validator_1.param)('id').isMongoId(),
    (0, express_validator_1.body)('rating').optional().isInt({ min: 1, max: 5 }),
    (0, express_validator_1.body)('title').optional().isString().trim().isLength({ min: 5, max: 200 }),
    (0, express_validator_1.body)('content').optional().isString().trim().isLength({ min: 20, max: 2000 }),
    (0, express_validator_1.body)('pros').optional().isArray(),
    (0, express_validator_1.body)('pros.*').isString().trim().isLength({ min: 3, max: 100 }),
    (0, express_validator_1.body)('cons').optional().isArray(),
    (0, express_validator_1.body)('cons.*').isString().trim().isLength({ min: 3, max: 100 }),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const review = await Review_1.Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({
                success: false,
                error: 'Review not found',
            });
        }
        // Проверяем права доступа
        if (req.user.role !== 'admin' && req.user._id.toString() !== review.user.toString()) {
            return res.status(403).json({
                success: false,
                error: 'Access denied',
            });
        }
        const updatedReview = await Review_1.Review.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('user', 'firstName lastName avatar')
            .populate('course', 'title slug')
            .populate('instructor', 'user');
        res.json({
            success: true,
            data: updatedReview,
            message: 'Review updated successfully',
        });
    }
    catch (error) {
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
    auth_1.auth,
    (0, express_validator_1.param)('id').isMongoId(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const review = await Review_1.Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({
                success: false,
                error: 'Review not found',
            });
        }
        // Проверяем права доступа
        if (req.user.role !== 'admin' && req.user._id.toString() !== review.user.toString()) {
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
    }
    catch (error) {
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
    auth_1.auth,
    (0, express_validator_1.param)('id').isMongoId(),
    (0, express_validator_1.body)('helpful').isBoolean(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const review = await Review_1.Review.findById(req.params.id);
        if (!review || !review.isActive) {
            return res.status(404).json({
                success: false,
                error: 'Review not found',
            });
        }
        const { helpful } = req.body;
        if (helpful) {
            review.helpful += 1;
        }
        else {
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
    }
    catch (error) {
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
    auth_1.auth,
    (0, auth_1.requireRole)(['admin']),
], async (req, res) => {
    try {
        const totalReviews = await Review_1.Review.countDocuments();
        const verifiedReviews = await Review_1.Review.countDocuments({ isVerified: true });
        const activeReviews = await Review_1.Review.countDocuments({ isActive: true });
        const averageRating = await Review_1.Review.aggregate([
            { $match: { isActive: true } },
            { $group: { _id: null, avgRating: { $avg: '$rating' } } },
        ]);
        const ratingDistribution = await Review_1.Review.aggregate([
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
exports.default = router;
//# sourceMappingURL=reviews.js.map