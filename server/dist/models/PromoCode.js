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
exports.PromoCode = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const promoCodeSchema = new mongoose_1.Schema({
    code: {
        type: String,
        required: [true, 'Promo code is required'],
        unique: true,
        uppercase: true,
        trim: true,
        minlength: [3, 'Code must be at least 3 characters'],
        maxlength: [20, 'Code cannot exceed 20 characters'],
        match: [/^[A-Z0-9]+$/, 'Code must contain only uppercase letters and numbers'],
    },
    type: {
        type: String,
        enum: ['percentage', 'fixed'],
        required: [true, 'Type is required'],
    },
    value: {
        type: Number,
        required: [true, 'Value is required'],
        min: [0, 'Value cannot be negative'],
    },
    minPurchase: {
        type: Number,
        default: 0,
        min: [0, 'Minimum purchase cannot be negative'],
    },
    maxUses: {
        type: Number,
        min: [1, 'Max uses must be at least 1'],
    },
    usedCount: {
        type: Number,
        default: 0,
        min: [0, 'Used count cannot be negative'],
    },
    validFrom: {
        type: Date,
    },
    validUntil: {
        type: Date,
    },
    applicableCourses: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Course',
        }],
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
// Виртуальное поле для проверки активности промокода
promoCodeSchema.virtual('isValid').get(function () {
    const now = new Date();
    // Проверяем, активен ли промокод
    if (!this.isActive)
        return false;
    // Проверяем дату начала действия
    if (this.validFrom && now < this.validFrom)
        return false;
    // Проверяем дату окончания действия
    if (this.validUntil && now > this.validUntil)
        return false;
    // Проверяем лимит использования
    if (this.maxUses && this.usedCount >= this.maxUses)
        return false;
    return true;
});
// Виртуальное поле для оставшихся использований
promoCodeSchema.virtual('remainingUses').get(function () {
    if (!this.maxUses)
        return null;
    return Math.max(0, this.maxUses - this.usedCount);
});
// Метод для увеличения счетчика использований
promoCodeSchema.methods.incrementUsage = async function () {
    this.usedCount += 1;
    return await this.save();
};
// Метод для расчета скидки
promoCodeSchema.methods.calculateDiscount = function (totalAmount) {
    let discountAmount = 0;
    if (this.type === 'percentage') {
        discountAmount = (totalAmount * this.value) / 100;
    }
    else {
        discountAmount = this.value;
    }
    // Убеждаемся, что скидка не превышает общую сумму
    return Math.min(discountAmount, totalAmount);
};
// Middleware для валидации дат
promoCodeSchema.pre('save', function (next) {
    if (this.validFrom && this.validUntil && this.validFrom >= this.validUntil) {
        return next(new Error('Valid from date must be before valid until date'));
    }
    if (this.maxUses && this.usedCount > this.maxUses) {
        return next(new Error('Used count cannot exceed max uses'));
    }
    next();
});
// Индексы
promoCodeSchema.index({ code: 1 }, { unique: true });
promoCodeSchema.index({ isActive: 1 });
promoCodeSchema.index({ validUntil: 1 });
promoCodeSchema.index({ applicableCourses: 1 });
exports.PromoCode = mongoose_1.default.model('PromoCode', promoCodeSchema);
//# sourceMappingURL=PromoCode.js.map