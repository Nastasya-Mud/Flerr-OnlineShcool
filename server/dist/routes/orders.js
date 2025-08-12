"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const validateRequest_1 = require("../middleware/validateRequest");
const auth_1 = require("../middleware/auth");
const Order_1 = require("../models/Order");
const Course_1 = require("../models/Course");
const PromoCode_1 = require("../models/PromoCode");
const router = express_1.default.Router();
// @route   GET /api/orders
// @desc    Get user orders (Private)
// @access  Private
router.get('/', [
    auth_1.auth,
    (0, express_validator_1.query)('page').optional().isInt({ min: 1 }),
    (0, express_validator_1.query)('limit').optional().isInt({ min: 1, max: 50 }),
    (0, express_validator_1.query)('status').optional().isIn(['pending', 'paid', 'cancelled', 'refunded']),
    (0, express_validator_1.query)('sort').optional().isIn(['createdAt', 'total', 'status']),
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
        const sortField = req.query.sort || 'createdAt';
        const sortOrder = req.query.order || 'desc';
        sort[sortField] = sortOrder === 'asc' ? 1 : -1;
        const orders = await Order_1.Order.find(filter)
            .populate('items.course', 'title slug image price')
            .populate('promoCode', 'code type value')
            .sort(sort)
            .skip(skip)
            .limit(limit);
        const total = await Order_1.Order.countDocuments(filter);
        res.json({
            success: true,
            data: {
                orders,
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
// @route   GET /api/orders/:id
// @desc    Get order by ID (Private)
// @access  Private
router.get('/:id', [
    auth_1.auth,
    (0, express_validator_1.param)('id').isMongoId(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const order = await Order_1.Order.findById(req.params.id)
            .populate('items.course', 'title slug image price originalPrice')
            .populate('promoCode', 'code type value description');
        if (!order) {
            return res.status(404).json({
                success: false,
                error: 'Order not found',
            });
        }
        // Проверяем права доступа
        if (req.user.role !== 'admin' && req.user._id.toString() !== order.user.toString()) {
            return res.status(403).json({
                success: false,
                error: 'Access denied',
            });
        }
        res.json({
            success: true,
            data: order,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
// @route   POST /api/orders
// @desc    Create order (Private)
// @access  Private
router.post('/', [
    auth_1.auth,
    (0, express_validator_1.body)('items').isArray({ min: 1 }),
    (0, express_validator_1.body)('items.*.courseId').isMongoId(),
    (0, express_validator_1.body)('items.*.quantity').optional().isInt({ min: 1 }),
    (0, express_validator_1.body)('promoCode').optional().isString().trim(),
    (0, express_validator_1.body)('paymentMethod').isIn(['card', 'bank-transfer', 'online']),
    (0, express_validator_1.body)('billingInfo.firstName').isString().trim().isLength({ min: 2, max: 50 }),
    (0, express_validator_1.body)('billingInfo.lastName').isString().trim().isLength({ min: 2, max: 50 }),
    (0, express_validator_1.body)('billingInfo.email').isEmail(),
    (0, express_validator_1.body)('billingInfo.phone').optional().isString().trim(),
    (0, express_validator_1.body)('billingInfo.address').optional().isString().trim(),
    (0, express_validator_1.body)('notes').optional().isString().trim(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const { items, promoCode, ...orderData } = req.body;
        // Получаем курсы и проверяем их существование
        const courseIds = items.map((item) => item.courseId);
        const courses = await Course_1.Course.find({ _id: { $in: courseIds }, isActive: true });
        if (courses.length !== courseIds.length) {
            return res.status(400).json({
                success: false,
                error: 'One or more courses not found or inactive',
            });
        }
        // Формируем элементы заказа
        const orderItems = items.map((item) => {
            const course = courses.find(c => c._id.toString() === item.courseId);
            const quantity = item.quantity || 1;
            return {
                course: item.courseId,
                price: course.price,
                originalPrice: course.originalPrice || course.price,
                discount: 0,
                quantity,
            };
        });
        // Рассчитываем промежуточную сумму
        let subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        let discount = 0;
        let promoCodeDoc = null;
        // Применяем промокод если указан
        if (promoCode) {
            promoCodeDoc = await PromoCode_1.PromoCode.findOne({
                code: promoCode.toUpperCase(),
                isActive: true,
                validFrom: { $lte: new Date() },
                validUntil: { $gte: new Date() },
                usedCount: { $lt: '$maxUses' },
            });
            if (promoCodeDoc) {
                discount = promoCodeDoc.calculateDiscount(subtotal);
                // Обновляем скидки в элементах заказа
                if (discount > 0) {
                    const discountPerItem = discount / orderItems.length;
                    orderItems.forEach(item => {
                        item.discount = Math.min(item.price * item.quantity, discountPerItem);
                        item.promoCode = promoCode;
                    });
                }
            }
        }
        // Рассчитываем итоговую сумму
        const total = subtotal - discount;
        const order = new Order_1.Order({
            user: req.user._id,
            items: orderItems,
            subtotal,
            discount,
            total,
            promoCode: promoCodeDoc?._id,
            ...orderData,
        });
        await order.save();
        // Увеличиваем счетчик использования промокода
        if (promoCodeDoc) {
            await promoCodeDoc.incrementUsage();
        }
        const populatedOrder = await Order_1.Order.findById(order._id)
            .populate('items.course', 'title slug image price')
            .populate('promoCode', 'code type value');
        res.status(201).json({
            success: true,
            data: populatedOrder,
            message: 'Order created successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
// @route   PUT /api/orders/:id/status
// @desc    Update order status (Admin only)
// @access  Private/Admin
router.put('/:id/status', [
    auth_1.auth,
    (0, auth_1.requireRole)(['admin']),
    (0, express_validator_1.param)('id').isMongoId(),
    (0, express_validator_1.body)('status').isIn(['pending', 'paid', 'cancelled', 'refunded']),
    (0, express_validator_1.body)('paymentStatus').optional().isIn(['pending', 'completed', 'failed']),
    (0, express_validator_1.body)('notes').optional().isString().trim(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const order = await Order_1.Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({
                success: false,
                error: 'Order not found',
            });
        }
        const { status, paymentStatus, notes } = req.body;
        order.status = status;
        if (paymentStatus)
            order.paymentStatus = paymentStatus;
        if (notes)
            order.notes = notes;
        await order.save();
        const updatedOrder = await Order_1.Order.findById(order._id)
            .populate('items.course', 'title slug image price')
            .populate('promoCode', 'code type value');
        res.json({
            success: true,
            data: updatedOrder,
            message: 'Order status updated successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
// @route   GET /api/orders/stats/overview
// @desc    Get order statistics (Admin only)
// @access  Private/Admin
router.get('/stats/overview', [
    auth_1.auth,
    (0, auth_1.requireRole)(['admin']),
], async (req, res) => {
    try {
        const totalOrders = await Order_1.Order.countDocuments();
        const pendingOrders = await Order_1.Order.countDocuments({ status: 'pending' });
        const paidOrders = await Order_1.Order.countDocuments({ status: 'paid' });
        const cancelledOrders = await Order_1.Order.countDocuments({ status: 'cancelled' });
        const totalRevenue = await Order_1.Order.aggregate([
            { $match: { status: 'paid' } },
            { $group: { _id: null, total: { $sum: '$total' } } },
        ]);
        const monthlyStats = await Order_1.Order.aggregate([
            {
                $group: {
                    _id: {
                        year: { $year: '$createdAt' },
                        month: { $month: '$createdAt' },
                    },
                    count: { $sum: 1 },
                    revenue: { $sum: '$total' },
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
                total: totalOrders,
                pending: pendingOrders,
                paid: paidOrders,
                cancelled: cancelledOrders,
                revenue: totalRevenue[0]?.total || 0,
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
//# sourceMappingURL=orders.js.map