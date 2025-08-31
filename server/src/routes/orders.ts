import express, { Request } from 'express';
import { body, param, query } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';
import { auth, requireRole } from '../middleware/auth';
import { Order, IOrder } from '../models/Order';
import { Course } from '../models/Course';
import { PromoCode } from '../models/PromoCode';

const router = express.Router();

// @route   GET /api/orders
// @desc    Get user orders (Private)
// @access  Private
router.get('/', [
  auth,
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 50 }),
  query('status').optional().isIn(['pending', 'paid', 'cancelled', 'refunded']),
  query('sort').optional().isIn(['createdAt', 'total', 'status']),
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
    const sortField = req.query.sort as string || 'createdAt';
    const sortOrder = req.query.order as string || 'desc';
    sort[sortField] = sortOrder === 'asc' ? 1 : -1;
    
    const orders = await Order.find(filter)
      .populate('items.course', 'title slug image price')
      .populate('promoCode', 'code type value')
      .sort(sort)
      .skip(skip)
      .limit(limit);
    
    const total = await Order.countDocuments(filter);
    
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
  } catch (error) {
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
  auth,
  param('id').isMongoId(),
], validateRequest, async (req: Request, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('items.course', 'title slug image price originalPrice')
      .populate('promoCode', 'code type value description');
    
    if (!order) {
      return res.status(404).json({
        success: false,
        error: 'Order not found',
      });
    }
    
    // Проверяем права доступа
    if (req.user!.role !== 'admin' && req.user!._id.toString() !== order.user.toString()) {
      return res.status(403).json({
        success: false,
        error: 'Access denied',
      });
    }
    
    res.json({
      success: true,
      data: order,
    });
  } catch (error) {
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
  auth,
  body('items').isArray({ min: 1 }),
  body('items.*.courseId').isMongoId(),
  body('items.*.quantity').optional().isInt({ min: 1 }),
  body('promoCode').optional().isString().trim(),
  body('paymentMethod').isIn(['card', 'bank-transfer', 'online']),
  body('billingInfo.firstName').isString().trim().isLength({ min: 2, max: 50 }),
  body('billingInfo.lastName').isString().trim().isLength({ min: 2, max: 50 }),
  body('billingInfo.email').isEmail(),
  body('billingInfo.phone').optional().isString().trim(),
  body('billingInfo.address').optional().isString().trim(),
  body('notes').optional().isString().trim(),
], validateRequest, async (req: Request, res) => {
  try {
    const { items, promoCode, ...orderData } = req.body;
    
    // Получаем курсы и проверяем их существование
    const courseIds = items.map((item: any) => item.courseId);
    const courses = await Course.find({ _id: { $in: courseIds }, isActive: true });
    
    if (courses.length !== courseIds.length) {
      return res.status(400).json({
        success: false,
        error: 'One or more courses not found or inactive',
      });
    }
    
    // Формируем элементы заказа
    const orderItems = items.map((item: any) => {
      const course = courses.find(c => c._id.toString() === item.courseId);
      const quantity = item.quantity || 1;
      
      return {
        course: item.courseId,
        price: course!.price,
        originalPrice: course!.originalPrice || course!.price,
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
      promoCodeDoc = await PromoCode.findOne({ 
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
    
    const order = new Order({
      user: req.user!._id,
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
    
    const populatedOrder = await Order.findById(order._id)
      .populate('items.course', 'title slug image price')
      .populate('promoCode', 'code type value');
    
    res.status(201).json({
      success: true,
      data: populatedOrder,
      message: 'Order created successfully',
    });
  } catch (error) {
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
  auth,
  requireRole(['admin']),
  param('id').isMongoId(),
  body('status').isIn(['pending', 'paid', 'cancelled', 'refunded']),
  body('paymentStatus').optional().isIn(['pending', 'completed', 'failed']),
  body('notes').optional().isString().trim(),
], validateRequest, async (req: Request, res) => {
  try {
    const order = await Order.findById(req.params.id);
    
    if (!order) {
      return res.status(404).json({
        success: false,
        error: 'Order not found',
      });
    }
    
    const { status, paymentStatus, notes } = req.body;
    
    order.status = status;
    if (paymentStatus) order.paymentStatus = paymentStatus;
    if (notes) order.notes = notes;
    
    await order.save();
    
    const updatedOrder = await Order.findById(order._id)
      .populate('items.course', 'title slug image price')
      .populate('promoCode', 'code type value');
    
    res.json({
      success: true,
      data: updatedOrder,
      message: 'Order status updated successfully',
    });
  } catch (error) {
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
  auth,
  requireRole(['admin']),
], async (req: Request, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    const pendingOrders = await Order.countDocuments({ status: 'pending' });
    const paidOrders = await Order.countDocuments({ status: 'paid' });
    const cancelledOrders = await Order.countDocuments({ status: 'cancelled' });
    
    const totalRevenue = await Order.aggregate([
      { $match: { status: 'paid' } },
      { $group: { _id: null, total: { $sum: '$total' } } },
    ]);
    
    const monthlyStats = await Order.aggregate([
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
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

export default router; 