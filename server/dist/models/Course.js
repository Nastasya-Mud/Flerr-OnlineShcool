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
exports.Course = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const lessonSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'Lesson title is required'],
        trim: true,
        maxlength: [100, 'Lesson title cannot exceed 100 characters'],
    },
    description: {
        type: String,
        required: [true, 'Lesson description is required'],
        trim: true,
    },
    videoUrl: {
        type: String,
        required: [true, 'Video URL is required'],
    },
    duration: {
        type: Number,
        required: [true, 'Lesson duration is required'],
        min: [1, 'Duration must be at least 1 minute'],
    },
    isFree: {
        type: Boolean,
        default: false,
    },
});
const courseSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'Course title is required'],
        trim: true,
        maxlength: [100, 'Course title cannot exceed 100 characters'],
    },
    slug: {
        type: String,
        required: [true, 'Course slug is required'],
        unique: true,
        lowercase: true,
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Course description is required'],
        trim: true,
    },
    shortDescription: {
        type: String,
        required: [true, 'Short description is required'],
        trim: true,
        maxlength: [200, 'Short description cannot exceed 200 characters'],
    },
    price: {
        type: Number,
        required: [true, 'Course price is required'],
        min: [0, 'Price cannot be negative'],
    },
    originalPrice: {
        type: Number,
        required: [true, 'Original price is required'],
        min: [0, 'Original price cannot be negative'],
    },
    duration: {
        type: String,
        required: [true, 'Course duration is required'],
        trim: true,
    },
    level: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        required: [true, 'Course level is required'],
    },
    category: {
        type: String,
        required: [true, 'Course category is required'],
        trim: true,
    },
    image: {
        type: String,
        required: [true, 'Course image is required'],
    },
    videoPreview: {
        type: String,
    },
    lessons: [lessonSchema],
    instructors: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'At least one instructor is required'],
        }],
    materials: [{
            type: String,
            trim: true,
        }],
    requirements: [{
            type: String,
            trim: true,
        }],
    outcomes: [{
            type: String,
            trim: true,
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
// Виртуальное поле для общей продолжительности курса
courseSchema.virtual('totalDuration').get(function () {
    return this.lessons.reduce((total, lesson) => total + lesson.duration, 0);
});
// Виртуальное поле для количества уроков
courseSchema.virtual('lessonCount').get(function () {
    return this.lessons.length;
});
// Виртуальное поле для количества бесплатных уроков
courseSchema.virtual('freeLessonCount').get(function () {
    return this.lessons.filter(lesson => lesson.isFree).length;
});
// Виртуальное поле для скидки
courseSchema.virtual('discount').get(function () {
    if (this.originalPrice > this.price) {
        return Math.round(((this.originalPrice - this.price) / this.originalPrice) * 100);
    }
    return 0;
});
// Middleware для создания slug из названия
courseSchema.pre('save', function (next) {
    if (this.isModified('title') && !this.slug) {
        this.slug = this.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }
    next();
});
// Индексы
courseSchema.index({ slug: 1 });
courseSchema.index({ category: 1 });
courseSchema.index({ level: 1 });
courseSchema.index({ isActive: 1 });
courseSchema.index({ price: 1 });
courseSchema.index({ instructors: 1 });
exports.Course = mongoose_1.default.model('Course', courseSchema);
//# sourceMappingURL=Course.js.map