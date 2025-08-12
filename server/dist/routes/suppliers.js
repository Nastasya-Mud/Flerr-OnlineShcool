"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const validateRequest_1 = require("../middleware/validateRequest");
const auth_1 = require("../middleware/auth");
const Supplier_1 = require("../models/Supplier");
const router = express_1.default.Router();
// @route   GET /api/suppliers
// @desc    Get all suppliers (Public for students)
// @access  Public
router.get('/', [
    (0, express_validator_1.query)('page').optional().isInt({ min: 1 }),
    (0, express_validator_1.query)('limit').optional().isInt({ min: 1, max: 50 }),
    (0, express_validator_1.query)('search').optional().isString(),
    (0, express_validator_1.query)('category').optional().isString(),
    (0, express_validator_1.query)('region').optional().isString(),
    (0, express_validator_1.query)('verified').optional().isBoolean(),
    (0, express_validator_1.query)('featured').optional().isBoolean(),
    (0, express_validator_1.query)('sort').optional().isIn(['name', 'rating', 'createdAt']),
    (0, express_validator_1.query)('order').optional().isIn(['asc', 'desc']),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const filter = { isActive: true };
        if (req.query.search) {
            filter.$or = [
                { name: { $regex: req.query.search, $options: 'i' } },
                { description: { $regex: req.query.search, $options: 'i' } },
                { 'contactInfo.email': { $regex: req.query.search, $options: 'i' } },
            ];
        }
        if (req.query.category) {
            filter.categories = req.query.category;
        }
        if (req.query.region) {
            filter.regions = req.query.region;
        }
        if (req.query.verified !== undefined) {
            filter.isVerified = req.query.verified === 'true';
        }
        if (req.query.featured !== undefined) {
            filter.featured = req.query.featured === 'true';
        }
        const sort = {};
        const sortField = req.query.sort || 'rating';
        const sortOrder = req.query.order || 'desc';
        sort[sortField] = sortOrder === 'asc' ? 1 : -1;
        const suppliers = await Supplier_1.Supplier.find(filter)
            .sort(sort)
            .skip(skip)
            .limit(limit);
        const total = await Supplier_1.Supplier.countDocuments(filter);
        res.json({
            success: true,
            data: {
                suppliers,
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
// @route   GET /api/suppliers/:id
// @desc    Get supplier by ID (Public)
// @access  Public
router.get('/:id', [
    (0, express_validator_1.param)('id').isMongoId(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const supplier = await Supplier_1.Supplier.findById(req.params.id);
        if (!supplier || !supplier.isActive) {
            return res.status(404).json({
                success: false,
                error: 'Supplier not found',
            });
        }
        res.json({
            success: true,
            data: supplier,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
// @route   POST /api/suppliers
// @desc    Create supplier (Admin only)
// @access  Private/Admin
router.post('/', [
    auth_1.auth,
    (0, auth_1.requireRole)(['admin']),
    (0, express_validator_1.body)('name').isString().trim().isLength({ min: 2, max: 100 }),
    (0, express_validator_1.body)('description').isString().trim().isLength({ min: 20, max: 1000 }),
    (0, express_validator_1.body)('contactInfo.email').isEmail(),
    (0, express_validator_1.body)('contactInfo.phone').isString().trim(),
    (0, express_validator_1.body)('contactInfo.website').optional().isURL(),
    (0, express_validator_1.body)('contactInfo.address').optional().isString().trim(),
    (0, express_validator_1.body)('categories').isArray({ min: 1 }),
    (0, express_validator_1.body)('categories.*').isIn([
        'fresh-flowers',
        'dry-flowers',
        'artificial-flowers',
        'greenery',
        'accessories',
        'vases',
        'packaging',
        'tools',
        'ribbons',
        'decorative-elements',
        'seasonal',
        'luxury',
        'eco-friendly',
        'bulk-supplies',
        'wholesale'
    ]),
    (0, express_validator_1.body)('products').isArray({ min: 1 }),
    (0, express_validator_1.body)('products.*').isString().trim(),
    (0, express_validator_1.body)('regions').isArray({ min: 1 }),
    (0, express_validator_1.body)('regions.*').isString().trim(),
    (0, express_validator_1.body)('minimumOrder').optional().isFloat({ min: 0 }),
    (0, express_validator_1.body)('paymentMethods').isArray({ min: 1 }),
    (0, express_validator_1.body)('paymentMethods.*').isIn([
        'cash',
        'card',
        'bank-transfer',
        'online-payment',
        'invoice',
        'credit'
    ]),
    (0, express_validator_1.body)('deliveryOptions').isArray({ min: 1 }),
    (0, express_validator_1.body)('deliveryOptions.*').isIn([
        'pickup',
        'delivery',
        'express-delivery',
        'nationwide-shipping',
        'international-shipping'
    ]),
    (0, express_validator_1.body)('discount.percentage').optional().isFloat({ min: 0, max: 100 }),
    (0, express_validator_1.body)('discount.description').optional().isString().trim(),
    (0, express_validator_1.body)('discount.validUntil').optional().isISO8601(),
    (0, express_validator_1.body)('featured').optional().isBoolean(),
    (0, express_validator_1.body)('isVerified').optional().isBoolean(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const supplier = new Supplier_1.Supplier(req.body);
        await supplier.save();
        res.status(201).json({
            success: true,
            data: supplier,
            message: 'Supplier created successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
// @route   PUT /api/suppliers/:id
// @desc    Update supplier (Admin only)
// @access  Private/Admin
router.put('/:id', [
    auth_1.auth,
    (0, auth_1.requireRole)(['admin']),
    (0, express_validator_1.param)('id').isMongoId(),
    (0, express_validator_1.body)('name').optional().isString().trim().isLength({ min: 2, max: 100 }),
    (0, express_validator_1.body)('description').optional().isString().trim().isLength({ min: 20, max: 1000 }),
    (0, express_validator_1.body)('contactInfo.email').optional().isEmail(),
    (0, express_validator_1.body)('contactInfo.phone').optional().isString().trim(),
    (0, express_validator_1.body)('contactInfo.website').optional().isURL(),
    (0, express_validator_1.body)('contactInfo.address').optional().isString().trim(),
    (0, express_validator_1.body)('categories').optional().isArray({ min: 1 }),
    (0, express_validator_1.body)('categories.*').isIn([
        'fresh-flowers',
        'dry-flowers',
        'artificial-flowers',
        'greenery',
        'accessories',
        'vases',
        'packaging',
        'tools',
        'ribbons',
        'decorative-elements',
        'seasonal',
        'luxury',
        'eco-friendly',
        'bulk-supplies',
        'wholesale'
    ]),
    (0, express_validator_1.body)('products').optional().isArray({ min: 1 }),
    (0, express_validator_1.body)('products.*').isString().trim(),
    (0, express_validator_1.body)('regions').optional().isArray({ min: 1 }),
    (0, express_validator_1.body)('regions.*').isString().trim(),
    (0, express_validator_1.body)('minimumOrder').optional().isFloat({ min: 0 }),
    (0, express_validator_1.body)('paymentMethods').optional().isArray({ min: 1 }),
    (0, express_validator_1.body)('paymentMethods.*').isIn([
        'cash',
        'card',
        'bank-transfer',
        'online-payment',
        'invoice',
        'credit'
    ]),
    (0, express_validator_1.body)('deliveryOptions').optional().isArray({ min: 1 }),
    (0, express_validator_1.body)('deliveryOptions.*').isIn([
        'pickup',
        'delivery',
        'express-delivery',
        'nationwide-shipping',
        'international-shipping'
    ]),
    (0, express_validator_1.body)('discount.percentage').optional().isFloat({ min: 0, max: 100 }),
    (0, express_validator_1.body)('discount.description').optional().isString().trim(),
    (0, express_validator_1.body)('discount.validUntil').optional().isISO8601(),
    (0, express_validator_1.body)('featured').optional().isBoolean(),
    (0, express_validator_1.body)('isVerified').optional().isBoolean(),
    (0, express_validator_1.body)('isActive').optional().isBoolean(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const supplier = await Supplier_1.Supplier.findById(req.params.id);
        if (!supplier) {
            return res.status(404).json({
                success: false,
                error: 'Supplier not found',
            });
        }
        const updatedSupplier = await Supplier_1.Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.json({
            success: true,
            data: updatedSupplier,
            message: 'Supplier updated successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
// @route   DELETE /api/suppliers/:id
// @desc    Delete supplier (Admin only)
// @access  Private/Admin
router.delete('/:id', [
    auth_1.auth,
    (0, auth_1.requireRole)(['admin']),
    (0, express_validator_1.param)('id').isMongoId(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const supplier = await Supplier_1.Supplier.findById(req.params.id);
        if (!supplier) {
            return res.status(404).json({
                success: false,
                error: 'Supplier not found',
            });
        }
        // Мягкое удаление
        supplier.isActive = false;
        await supplier.save();
        res.json({
            success: true,
            message: 'Supplier deactivated successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
// @route   GET /api/suppliers/categories
// @desc    Get all supplier categories (Public)
// @access  Public
router.get('/categories/list', async (req, res) => {
    try {
        const categories = await Supplier_1.Supplier.distinct('categories', { isActive: true });
        res.json({
            success: true,
            data: categories,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
// @route   GET /api/suppliers/regions
// @desc    Get all supplier regions (Public)
// @access  Public
router.get('/regions/list', async (req, res) => {
    try {
        const regions = await Supplier_1.Supplier.distinct('regions', { isActive: true });
        res.json({
            success: true,
            data: regions,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
// @route   GET /api/suppliers/featured
// @desc    Get featured suppliers (Public)
// @access  Public
router.get('/featured/list', async (req, res) => {
    try {
        const featuredSuppliers = await Supplier_1.Supplier.find({
            featured: true,
            isActive: true
        })
            .sort({ rating: -1 })
            .limit(6);
        res.json({
            success: true,
            data: featuredSuppliers,
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
//# sourceMappingURL=suppliers.js.map