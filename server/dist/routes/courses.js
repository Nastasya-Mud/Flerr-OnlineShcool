"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const validateRequest_1 = require("../middleware/validateRequest");
const auth_1 = require("../middleware/auth");
const Course_1 = require("../models/Course");
const User_1 = require("../models/User");
const router = express_1.default.Router();
// @route   GET /api/courses
// @desc    Get all courses with pagination and filters
// @access  Public
router.get('/', [
    (0, express_validator_1.query)('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
    (0, express_validator_1.query)('limit').optional().isInt({ min: 1, max: 50 }).withMessage('Limit must be between 1 and 50'),
    (0, express_validator_1.query)('category').optional().isString().trim(),
    (0, express_validator_1.query)('level').optional().isIn(['beginner', 'intermediate', 'advanced']),
    (0, express_validator_1.query)('search').optional().isString().trim(),
    (0, express_validator_1.query)('sort').optional().isIn(['price', 'title', 'createdAt', 'popularity']),
    (0, express_validator_1.query)('order').optional().isIn(['asc', 'desc']),
    validateRequest_1.validateRequest,
], async (req, res) => {
    try {
        const { page = 1, limit = 12, category, level, search, sort = 'createdAt', order = 'desc' } = req.query;
        const pageNum = parseInt(page);
        const limitNum = parseInt(limit);
        const skip = (pageNum - 1) * limitNum;
        // Build filter object
        const filter = { isActive: true };
        if (category)
            filter.category = category;
        if (level)
            filter.level = level;
        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { shortDescription: { $regex: search, $options: 'i' } },
            ];
        }
        // Build sort object
        const sortObj = {};
        sortObj[sort] = order === 'asc' ? 1 : -1;
        const courses = await Course_1.Course.find(filter)
            .populate('instructors', 'firstName lastName avatar')
            .sort(sortObj)
            .skip(skip)
            .limit(limitNum)
            .lean();
        const total = await Course_1.Course.countDocuments(filter);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server error',
        });
    }
});
// @route   GET /api/courses/:slug
// @desc    Get course by slug
// @access  Public
router.get('/:slug', [
    (0, express_validator_1.param)('slug').isString().trim().notEmpty().withMessage('Valid slug is required'),
    validateRequest_1.validateRequest,
], async (req, res) => {
    try {
        const { slug } = req.params;
        const course = await Course_1.Course.findOne({ slug, isActive: true })
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
    }
    catch (error) {
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
    auth_1.auth,
    (0, express_validator_1.body)('title').isString().trim().notEmpty().withMessage('Title is required'),
    (0, express_validator_1.body)('description').isString().trim().notEmpty().withMessage('Description is required'),
    (0, express_validator_1.body)('shortDescription').isString().trim().notEmpty().withMessage('Short description is required'),
    (0, express_validator_1.body)('price').isFloat({ min: 0 }).withMessage('Valid price is required'),
    // originalPrice может отсутствовать
    (0, express_validator_1.body)('originalPrice').optional({ nullable: true }).isFloat({ min: 0 }).withMessage('Valid original price is required'),
    (0, express_validator_1.body)('duration').isString().trim().notEmpty().withMessage('Duration is required'),
    (0, express_validator_1.body)('level').isIn(['beginner', 'intermediate', 'advanced']).withMessage('Valid level is required'),
    (0, express_validator_1.body)('category').isString().trim().notEmpty().withMessage('Category is required'),
    // image: пока как строка (URL либо data URL). Позже можно заменить на upload
    (0, express_validator_1.body)('image').isString().trim().notEmpty().withMessage('Image is required'),
    // instructors делаем необязательным
    (0, express_validator_1.body)('instructors').optional({ nullable: true }).isArray().withMessage('Instructors must be an array'),
    (0, express_validator_1.body)('instructors.*').optional().isMongoId().withMessage('Valid instructor IDs are required'),
    (0, express_validator_1.body)('materials').optional().isArray(),
    (0, express_validator_1.body)('requirements').optional().isArray(),
    (0, express_validator_1.body)('outcomes').optional().isArray(),
    validateRequest_1.validateRequest,
], async (req, res) => {
    try {
        // Check if user is admin
        if (req.user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                error: 'Access denied. Admin only.',
            });
        }
        const { title, description, shortDescription, price, originalPrice, duration, level, category, image, videoPreview, instructors, materials = [], requirements = [], outcomes = [], lessons = [], } = req.body;
        // Проверяем преподавателей только если они переданы
        if (Array.isArray(instructors) && instructors.length > 0) {
            const instructorUsers = await User_1.User.find({
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
        const course = new Course_1.Course({
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
        const populatedCourse = await Course_1.Course.findById(course._id)
            .populate('instructors', 'firstName lastName avatar');
        res.status(201).json({
            success: true,
            data: populatedCourse,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server error',
        });
    }
});
// @route   PUT /api/courses/:id
// @desc    Update course (Admin only)
// @access  Private/Admin
router.put('/:id', [
    auth_1.auth,
    (0, express_validator_1.param)('id').isMongoId().withMessage('Valid course ID is required'),
    validateRequest_1.validateRequest,
], async (req, res) => {
    try {
        // Check if user is admin
        if (req.user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                error: 'Access denied. Admin only.',
            });
        }
        const course = await Course_1.Course.findById(req.params.id);
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
        const updatedCourse = await Course_1.Course.findById(course._id)
            .populate('instructors', 'firstName lastName avatar');
        res.json({
            success: true,
            data: updatedCourse,
        });
    }
    catch (error) {
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
    auth_1.auth,
    (0, express_validator_1.param)('id').isMongoId().withMessage('Valid course ID is required'),
    validateRequest_1.validateRequest,
], async (req, res) => {
    try {
        // Check if user is admin
        if (req.user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                error: 'Access denied. Admin only.',
            });
        }
        const course = await Course_1.Course.findById(req.params.id);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server error',
        });
    }
});
exports.default = router;
//# sourceMappingURL=courses.js.map