"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supplier = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const supplierSchema = new mongoose_1.Schema({
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
supplierSchema.virtual('hasActiveDiscount').get(function () {
    if (!this.discount.percentage)
        return false;
    if (!this.discount.validUntil)
        return true;
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
exports.Supplier = mongoose_1.default.model('Supplier', supplierSchema);
//# sourceMappingURL=Supplier.js.map