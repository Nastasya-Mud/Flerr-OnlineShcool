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
exports.Enrollment = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const enrollmentSchema = new mongoose_1.Schema({
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
    order: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Order',
    },
    status: {
        type: String,
        enum: ['active', 'completed', 'paused', 'cancelled'],
        default: 'active',
    },
    progress: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,
    },
    currentLesson: {
        type: Number,
        default: 0,
        min: 0,
    },
    completedLessons: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Course.lessons',
        }],
    startDate: {
        type: Date,
        default: Date.now,
    },
    completionDate: Date,
    lastAccessDate: {
        type: Date,
        default: Date.now,
    },
    certificate: {
        issued: {
            type: Boolean,
            default: false,
        },
        issuedDate: Date,
        certificateId: String,
    },
    notes: String,
}, {
    timestamps: true,
});
// Виртуальное поле для проверки завершения курса
enrollmentSchema.virtual('isCompleted').get(function () {
    return this.status === 'completed' || this.progress === 100;
});
// Виртуальное поле для времени обучения
enrollmentSchema.virtual('studyTime').get(function () {
    if (!this.startDate)
        return 0;
    const endDate = this.completionDate || new Date();
    return Math.floor((endDate.getTime() - this.startDate.getTime()) / (1000 * 60 * 60 * 24)); // дни
});
// Виртуальное поле для оставшихся уроков
enrollmentSchema.virtual('remainingLessons').get(function () {
    return this.populated('course') ? this.course.lessons.length - this.currentLesson : 0;
});
// Метод для обновления прогресса
enrollmentSchema.methods.updateProgress = function (completedLessonsCount, totalLessons) {
    this.progress = Math.round((completedLessonsCount / totalLessons) * 100);
    this.currentLesson = completedLessonsCount;
    this.lastAccessDate = new Date();
    if (this.progress === 100 && this.status === 'active') {
        this.status = 'completed';
        this.completionDate = new Date();
    }
    return this.save();
};
// Метод для завершения урока
enrollmentSchema.methods.completeLesson = function (lessonId) {
    if (!this.completedLessons.includes(lessonId)) {
        this.completedLessons.push(lessonId);
    }
    this.lastAccessDate = new Date();
    return this.save();
};
// Уникальный индекс для предотвращения дублирования записей
enrollmentSchema.index({ user: 1, course: 1 }, { unique: true });
// Индексы
enrollmentSchema.index({ user: 1 });
enrollmentSchema.index({ course: 1 });
enrollmentSchema.index({ status: 1 });
enrollmentSchema.index({ progress: -1 });
enrollmentSchema.index({ startDate: -1 });
enrollmentSchema.index({ lastAccessDate: -1 });
enrollmentSchema.index({ 'certificate.issued': 1 });
exports.Enrollment = mongoose_1.default.model('Enrollment', enrollmentSchema);
//# sourceMappingURL=Enrollment.js.map