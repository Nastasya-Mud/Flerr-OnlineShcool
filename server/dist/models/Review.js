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
exports.Review = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const reviewSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    course: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    instructor: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Instructor',
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200,
    },
    content: {
        type: String,
        required: true,
        trim: true,
        maxlength: 2000,
    },
    pros: [{
            type: String,
            trim: true,
            maxlength: 100,
        }],
    cons: [{
            type: String,
            trim: true,
            maxlength: 100,
        }],
    isVerified: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    helpful: {
        type: Number,
        default: 0,
        min: 0,
    },
    notHelpful: {
        type: Number,
        default: 0,
        min: 0,
    },
}, {
    timestamps: true,
});
// Виртуальное поле для общего рейтинга
reviewSchema.virtual('totalVotes').get(function () {
    return this.helpful + this.notHelpful;
});
// Виртуальное поле для процента полезности
reviewSchema.virtual('helpfulPercentage').get(function () {
    const total = this.totalVotes;
    if (total === 0)
        return 0;
    return Math.round((this.helpful / total) * 100);
});
// Уникальный индекс для предотвращения дублирования отзывов
reviewSchema.index({ user: 1, course: 1 }, { unique: true });
// Индексы
reviewSchema.index({ course: 1 });
reviewSchema.index({ instructor: 1 });
reviewSchema.index({ rating: -1 });
reviewSchema.index({ isActive: 1 });
reviewSchema.index({ isVerified: 1 });
reviewSchema.index({ createdAt: -1 });
reviewSchema.index({ helpful: -1 });
exports.Review = mongoose_1.default.model('Review', reviewSchema);
//# sourceMappingURL=Review.js.map