import mongoose, { Document, Schema } from 'mongoose';

export interface ISupplier extends Document {
  name: string;
  description: string;
  contactInfo: {
    email: string;
    phone: string;
    website?: string;
    address?: string;
  };
  categories: string[];
  products: string[];
  regions: string[];
  minimumOrder: number;
  paymentMethods: string[];
  deliveryOptions: string[];
  rating: number;
  totalReviews: number;
  isVerified: boolean;
  isActive: boolean;
  featured: boolean;
  discount: {
    percentage: number;
    description: string;
    validUntil?: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}

const supplierSchema = new Schema<ISupplier>({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  contactInfo: {
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    website: String,
    address: String,
  },
  categories: [{
    type: String,
    required: true,
    enum: [
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
    ],
  }],
  products: [{
    type: String,
    required: true,
  }],
  regions: [{
    type: String,
    required: true,
  }],
  minimumOrder: {
    type: Number,
    default: 0,
    min: 0,
  },
  paymentMethods: [{
    type: String,
    enum: [
      'cash',
      'card',
      'bank-transfer',
      'online-payment',
      'invoice',
      'credit'
    ],
  }],
  deliveryOptions: [{
    type: String,
    enum: [
      'pickup',
      'delivery',
      'express-delivery',
      'nationwide-shipping',
      'international-shipping'
    ],
  }],
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  totalReviews: {
    type: Number,
    default: 0,
    min: 0,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  discount: {
    percentage: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    description: String,
    validUntil: Date,
  },
}, {
  timestamps: true,
});

// Виртуальное поле для проверки активности скидки
supplierSchema.virtual('hasActiveDiscount').get(function() {
  if (!this.discount.percentage) return false;
  if (!this.discount.validUntil) return true;
  return new Date() <= this.discount.validUntil;
});

// Индексы
supplierSchema.index({ name: 1 });
supplierSchema.index({ isActive: 1 });
supplierSchema.index({ isVerified: 1 });
supplierSchema.index({ featured: 1 });
supplierSchema.index({ categories: 1 });
supplierSchema.index({ regions: 1 });
supplierSchema.index({ rating: -1 });
supplierSchema.index({ 'contactInfo.email': 1 });

export const Supplier = mongoose.model<ISupplier>('Supplier', supplierSchema); 