"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const validateRequest_1 = require("../middleware/validateRequest");
const auth_1 = require("../middleware/auth");
const Instructor_1 = require("../models/Instructor");
const User_1 = require("../models/User");
const router = express_1.default.Router();
// @route   GET /api/instructors
// @desc    Get all instructors (Public)
// @access  Public
router.get('/', [
    (0, express_validator_1.query)('page').optional().isInt({ min: 1 }),
    (0, express_validator_1.query)('limit').optional().isInt({ min: 1, max: 50 }),
    (0, express_validator_1.query)('search').optional().isString(),
    (0, express_validator_1.query)('specialty').optional().isString(),
    (0, express_validator_1.query)('featured').optional().isBoolean(),
    (0, express_validator_1.query)('sort').optional().isIn(['rating', 'experience', 'totalStudents', 'createdAt']),
    (0, express_validator_1.query)('order').optional().isIn(['asc', 'desc']),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const filter = { isActive: true };
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
        const sort = {};
        const sortField = req.query.sort || 'rating';
        const sortOrder = req.query.order || 'desc';
        sort[sortField] = sortOrder === 'asc' ? 1 : -1;
        const instructors = await Instructor_1.Instructor.find(filter)
            .populate('user', 'firstName lastName email avatar')
            .sort(sort)
            .skip(skip)
            .limit(limit);
        const total = await Instructor_1.Instructor.countDocuments(filter);
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
    }
    catch (error) {
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
    (0, express_validator_1.param)('id').isMongoId(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const instructor = await Instructor_1.Instructor.findById(req.params.id)
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
    }
    catch (error) {
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
    auth_1.auth,
    (0, auth_1.requireRole)(['admin']),
    (0, express_validator_1.body)('userId').isMongoId(),
    (0, express_validator_1.body)('bio').isString().trim().isLength({ min: 50, max: 1000 }),
    (0, express_validator_1.body)('experience').isInt({ min: 0, max: 50 }),
    (0, express_validator_1.body)('specialties').isArray({ min: 1 }),
    (0, express_validator_1.body)('specialties.*').isIn([
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
    (0, express_validator_1.body)('education').isArray({ min: 1 }),
    (0, express_validator_1.body)('education.*').isString().trim(),
    (0, express_validator_1.body)('certifications').optional().isArray(),
    (0, express_validator_1.body)('certifications.*').isString().trim(),
    (0, express_validator_1.body)('achievements').optional().isArray(),
    (0, express_validator_1.body)('achievements.*').isString().trim(),
    (0, express_validator_1.body)('socialMedia.instagram').optional().isURL(),
    (0, express_validator_1.body)('socialMedia.facebook').optional().isURL(),
    (0, express_validator_1.body)('socialMedia.website').optional().isURL(),
    (0, express_validator_1.body)('socialMedia.youtube').optional().isURL(),
    (0, express_validator_1.body)('featured').optional().isBoolean(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const { userId, ...instructorData } = req.body;
        // Проверяем, существует ли пользователь
        const user = await User_1.User.findById(userId);
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
        const existingInstructor = await Instructor_1.Instructor.findOne({ user: userId });
        if (existingInstructor) {
            return res.status(400).json({
                success: false,
                error: 'Instructor profile already exists for this user',
            });
        }
        const instructor = new Instructor_1.Instructor({
            user: userId,
            ...instructorData,
        });
        await instructor.save();
        const populatedInstructor = await Instructor_1.Instructor.findById(instructor._id)
            .populate('user', 'firstName lastName email avatar');
        res.status(201).json({
            success: true,
            data: populatedInstructor,
            message: 'Instructor profile created successfully',
        });
    }
    catch (error) {
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
    auth_1.auth,
    (0, express_validator_1.param)('id').isMongoId(),
    (0, express_validator_1.body)('bio').optional().isString().trim().isLength({ min: 50, max: 1000 }),
    (0, express_validator_1.body)('experience').optional().isInt({ min: 0, max: 50 }),
    (0, express_validator_1.body)('specialties').optional().isArray({ min: 1 }),
    (0, express_validator_1.body)('specialties.*').isIn([
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
    (0, express_validator_1.body)('education').optional().isArray({ min: 1 }),
    (0, express_validator_1.body)('education.*').isString().trim(),
    (0, express_validator_1.body)('certifications').optional().isArray(),
    (0, express_validator_1.body)('certifications.*').isString().trim(),
    (0, express_validator_1.body)('achievements').optional().isArray(),
    (0, express_validator_1.body)('achievements.*').isString().trim(),
    (0, express_validator_1.body)('socialMedia.instagram').optional().isURL(),
    (0, express_validator_1.body)('socialMedia.facebook').optional().isURL(),
    (0, express_validator_1.body)('socialMedia.website').optional().isURL(),
    (0, express_validator_1.body)('socialMedia.youtube').optional().isURL(),
    (0, express_validator_1.body)('featured').optional().isBoolean(),
    (0, express_validator_1.body)('isActive').optional().isBoolean(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const instructor = await Instructor_1.Instructor.findById(req.params.id);
        if (!instructor) {
            return res.status(404).json({
                success: false,
                error: 'Instructor not found',
            });
        }
        // Проверяем права доступа
        if (req.user.role !== 'admin' && req.user._id.toString() !== instructor.user.toString()) {
            return res.status(403).json({
                success: false,
                error: 'Access denied',
            });
        }
        // Только админ может изменять featured и isActive
        if (req.user.role !== 'admin') {
            delete req.body.featured;
            delete req.body.isActive;
        }
        const updatedInstructor = await Instructor_1.Instructor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('user', 'firstName lastName email avatar');
        res.json({
            success: true,
            data: updatedInstructor,
            message: 'Instructor profile updated successfully',
        });
    }
    catch (error) {
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
    auth_1.auth,
    (0, auth_1.requireRole)(['admin']),
    (0, express_validator_1.param)('id').isMongoId(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const instructor = await Instructor_1.Instructor.findById(req.params.id);
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
    }
    catch (error) {
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
        const featuredInstructors = await Instructor_1.Instructor.find({
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
exports.default = router;
//# sourceMappingURL=instructors.js.map