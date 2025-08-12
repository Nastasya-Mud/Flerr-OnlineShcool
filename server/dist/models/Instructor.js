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
exports.Instructor = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const instructorSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    bio: {
        type: String,
        required: true,
        maxlength: 1000,
    },
    experience: {
        type: Number,
        required: true,
        min: 0,
        max: 50,
    },
    specialties: [{
            type: String,
            required: true,
            enum: [
                'wedding-floristry',
                'commercial-floristry',
                'interior-compositions',
                'dry-flowers',
                'artificial-flowers',
                'business-floristry',
                'social-media',
                'event-floristry',
                'seasonal-compositions',
                'modern-floristry',
                'classical-floristry',
                'minimalist-compositions',
                'luxury-compositions',
                'eco-floristry',
                'sustainable-floristry'
            ],
        }],
    education: [{
            type: String,
            required: true,
        }],
    certifications: [{
            type: String,
        }],
    achievements: [{
            type: String,
        }],
    socialMedia: {
        instagram: String,
        facebook: String,
        website: String,
        youtube: String,
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    totalStudents: {
        type: Number,
        default: 0,
        min: 0,
    },
    totalCourses: {
        type: Number,
        default: 0,
        min: 0,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
// Виртуальное поле для полного имени
instructorSchema.virtual('fullName').get(function () {
    return this.populated('user') ? `${this.user.firstName} ${this.user.lastName}` : '';
});
// Виртуальное поле для email
instructorSchema.virtual('email').get(function () {
    return this.populated('user') ? this.user.email : '';
});
// Виртуальное поле для аватара
instructorSchema.virtual('avatar').get(function () {
    return this.populated('user') ? this.user.avatar : '';
});
// Индексы
instructorSchema.index({ user: 1 });
instructorSchema.index({ isActive: 1 });
instructorSchema.index({ featured: 1 });
instructorSchema.index({ specialties: 1 });
instructorSchema.index({ rating: -1 });
instructorSchema.index({ experience: -1 });
exports.Instructor = mongoose_1.default.model('Instructor', instructorSchema);
//# sourceMappingURL=Instructor.js.map