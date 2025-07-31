import mongoose, { Document, Schema } from 'mongoose';

export interface IOrderItem {
  course: mongoose.Types.ObjectId;
  price: number;
  originalPrice: number;
  discount: number;
  promoCode?: string;
}

export interface IOrder extends Document {
  user: mongoose.Types.ObjectId;
  items: IOrderItem[];
  subtotal: number;
  discount: number;
  total: number;
  status: 'pending' | 'paid' | 'cancelled' | 'refunded';
  paymentMethod: 'card' | 'bank-transfer' | 'online';
  paymentStatus: 'pending' | 'completed' | 'failed';
  promoCode?: mongoose.Types.ObjectId;
  notes?: string;
  billingInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    address?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const orderItemSchema = new Schema<IOrderItem>({
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  originalPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  discount: {
    type: Number,
    default: 0,
    min: 0,
  },
  promoCode: String,
});

const orderSchema = new Schema<IOrder>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [orderItemSchema],
  subtotal: {
    type: Number,
    required: true,
    min: 0,
  },
  discount: {
    type: Number,
    default: 0,
    min: 0,
  },
  total: {
    type: Number,
    required: true,
    min: 0,
  },
  status: {
    type: String,
    enum: ['pending', 'paid', 'cancelled', 'refunded'],
    default: 'pending',
  },
  paymentMethod: {
    type: String,
    enum: ['card', 'bank-transfer', 'online'],
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  promoCode: {
    type: Schema.Types.ObjectId,
    ref: 'PromoCode',
  },
  notes: String,
  billingInfo: {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone: String,
    address: String,
  },
}, {
  timestamps: true,
});

// Виртуальное поле для номера заказа
orderSchema.virtual('orderNumber').get(function() {
  return `FL-${this._id.toString().slice(-8).toUpperCase()}`;
});

// Виртуальное поле для количества товаров
orderSchema.virtual('itemCount').get(function() {
  return this.items.length;
});

// Виртуальное поле для процента скидки
orderSchema.virtual('discountPercentage').get(function() {
  if (this.subtotal === 0) return 0;
  return Math.round((this.discount / this.subtotal) * 100);
});

// Индексы
orderSchema.index({ user: 1 });
orderSchema.index({ status: 1 });
orderSchema.index({ paymentStatus: 1 });
orderSchema.index({ createdAt: -1 });
orderSchema.index({ promoCode: 1 });
orderSchema.index({ 'billingInfo.email': 1 });

export const Order = mongoose.model<IOrder>('Order', orderSchema); 