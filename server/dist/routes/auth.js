"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_validator_1 = require("express-validator");
const validateRequest_1 = require("../middleware/validateRequest");
const auth_1 = require("../middleware/auth");
const User_1 = require("../models/User");
const mailer_1 = require("../utils/mailer");
const router = express_1.default.Router();
// Генерация JWT токена
const generateToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};
// @route   POST /api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', [
    (0, express_validator_1.body)('email')
        .isEmail()
        .withMessage('Please enter a valid email')
        .normalizeEmail(),
    (0, express_validator_1.body)('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    (0, express_validator_1.body)('firstName')
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage('First name must be between 2 and 50 characters'),
    (0, express_validator_1.body)('lastName')
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage('Last name must be between 2 and 50 characters'),
    (0, express_validator_1.body)('phone')
        .optional()
        .isMobilePhone('any')
        .withMessage('Please enter a valid phone number'),
    validateRequest_1.validateRequest,
], async (req, res) => {
    try {
        const { email, password, firstName, lastName, phone } = req.body;
        // Check if user already exists
        const existingUser = await User_1.User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: 'User already exists with this email',
            });
        }
        // Check if this should be the first admin user
        const existingUsers = await User_1.User.countDocuments();
        const isFirstUser = existingUsers === 0;
        // Create user
        const user = new User_1.User({
            email,
            password,
            firstName,
            lastName,
            phone,
            role: isFirstUser ? 'admin' : 'student', // First user becomes admin
        });
        await user.save();
        // Generate token
        const token = generateToken(user._id);
        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;
        res.status(201).json({
            success: true,
            data: {
                user: userResponse,
                token,
            },
            message: 'User registered successfully',
        });
    }
    catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            error: 'Server error during registration',
        });
    }
});
// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', [
    (0, express_validator_1.body)('email')
        .isEmail()
        .withMessage('Please enter a valid email')
        .normalizeEmail(),
    (0, express_validator_1.body)('password')
        .notEmpty()
        .withMessage('Password is required'),
    validateRequest_1.validateRequest,
], async (req, res) => {
    try {
        const { email, password } = req.body;
        // Find user by email
        const user = await User_1.User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials',
            });
        }
        // Check if user is active
        if (!user.isActive) {
            return res.status(401).json({
                success: false,
                error: 'Account is deactivated',
            });
        }
        // Check password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials',
            });
        }
        // Generate token
        const token = generateToken(user._id);
        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;
        res.json({
            success: true,
            data: {
                user: userResponse,
                token,
            },
            message: 'Login successful',
        });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            error: 'Server error during login',
        });
    }
});
// @route   GET /api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', auth_1.auth, async (req, res) => {
    try {
        const user = await User_1.User.findById(req.user._id).select('-password');
        res.json({
            success: true,
            data: user,
        });
    }
    catch (error) {
        console.error('Get user error:', error);
        res.status(500).json({
            success: false,
            error: 'Server error',
        });
    }
});
// @route   PUT /api/auth/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', [
    auth_1.auth,
    (0, express_validator_1.body)('firstName')
        .optional()
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage('First name must be between 2 and 50 characters'),
    (0, express_validator_1.body)('lastName')
        .optional()
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage('Last name must be between 2 and 50 characters'),
    (0, express_validator_1.body)('phone')
        .optional()
        .isMobilePhone('any')
        .withMessage('Please enter a valid phone number'),
    (0, express_validator_1.body)('avatar')
        .optional()
        .isURL()
        .withMessage('Please enter a valid URL for avatar'),
    validateRequest_1.validateRequest,
], async (req, res) => {
    try {
        const { firstName, lastName, phone, avatar } = req.body;
        const user = await User_1.User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found',
            });
        }
        // Update fields
        if (firstName)
            user.firstName = firstName;
        if (lastName)
            user.lastName = lastName;
        if (phone)
            user.phone = phone;
        if (avatar)
            user.avatar = avatar;
        await user.save();
        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;
        res.json({
            success: true,
            data: userResponse,
            message: 'Profile updated successfully',
        });
    }
    catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({
            success: false,
            error: 'Server error',
        });
    }
});
// @route   PUT /api/auth/change-password
// @desc    Change user password
// @access  Private
router.put('/change-password', [
    auth_1.auth,
    (0, express_validator_1.body)('currentPassword')
        .notEmpty()
        .withMessage('Current password is required'),
    (0, express_validator_1.body)('newPassword')
        .isLength({ min: 6 })
        .withMessage('New password must be at least 6 characters long'),
    validateRequest_1.validateRequest,
], async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const user = await User_1.User.findById(req.user._id).select('+password');
        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found',
            });
        }
        // Check current password
        const isMatch = await user.comparePassword(currentPassword);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                error: 'Current password is incorrect',
            });
        }
        // Update password
        user.password = newPassword;
        await user.save();
        res.json({
            success: true,
            message: 'Password changed successfully',
        });
    }
    catch (error) {
        console.error('Change password error:', error);
        res.status(500).json({
            success: false,
            error: 'Server error',
        });
    }
});
// @route   POST /api/auth/forgot-password
// @desc    Send password reset email
// @access  Public
router.post('/forgot-password', [
    (0, express_validator_1.body)('email')
        .isEmail()
        .withMessage('Please enter a valid email')
        .normalizeEmail(),
    validateRequest_1.validateRequest,
], async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User_1.User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found with this email',
            });
        }
        // Generate reset token (valid for 1 hour)
        const resetToken = jsonwebtoken_1.default.sign({ id: user._id, type: 'password-reset' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        await (0, mailer_1.sendPasswordResetEmail)(email, resetToken);
        res.json({
            success: true,
            message: 'Password reset email sent',
        });
    }
    catch (error) {
        console.error('Forgot password error:', error);
        res.status(500).json({
            success: false,
            error: 'Server error',
        });
    }
});
// @route   POST /api/auth/reset-password
// @desc    Reset password with token
// @access  Public
router.post('/reset-password', [
    (0, express_validator_1.body)('token')
        .notEmpty()
        .withMessage('Reset token is required'),
    (0, express_validator_1.body)('newPassword')
        .isLength({ min: 6 })
        .withMessage('New password must be at least 6 characters long'),
    validateRequest_1.validateRequest,
], async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        // Verify token
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (decoded.type !== 'password-reset') {
            return res.status(400).json({
                success: false,
                error: 'Invalid reset token',
            });
        }
        const user = await User_1.User.findById(decoded.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found',
            });
        }
        // Update password
        user.password = newPassword;
        await user.save();
        res.json({
            success: true,
            message: 'Password reset successfully',
        });
    }
    catch (error) {
        console.error('Reset password error:', error);
        res.status(500).json({
            success: false,
            error: 'Server error',
        });
    }
});
exports.default = router;
//# sourceMappingURL=auth.js.map