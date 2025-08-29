import mongoose, { Document, Schema } from 'mongoose';

export interface IEnrollment extends Document {
  user: mongoose.Types.ObjectId;
  course: mongoose.Types.ObjectId;
  order?: mongoose.Types.ObjectId;
  status: 'active' | 'completed' | 'paused' | 'cancelled';
  progress: number; // процент завершения (0-100)
  currentLesson: number;
  completedLessons: mongoose.Types.ObjectId[];
  startDate: Date;
  completionDate?: Date;
  lastAccessDate: Date;
  certificate?: {
    issued: boolean;
    issuedDate?: Date;
    certificateId: string;
  };
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  
  // Методы
  updateProgress(completedLessonsCount: number, totalLessons: number): Promise<this>;
  completeLesson(lessonId: mongoose.Types.ObjectId): Promise<this>;
}

const enrollmentSchema = new Schema<IEnrollment>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  order: {
    type: Schema.Types.ObjectId,
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
    type: Schema.Types.ObjectId,
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
enrollmentSchema.virtual('isCompleted').get(function() {
  return this.status === 'completed' || this.progress === 100;
});

// Виртуальное поле для времени обучения
enrollmentSchema.virtual('studyTime').get(function() {
  if (!this.startDate) return 0;
  const endDate = this.completionDate || new Date();
  return Math.floor((endDate.getTime() - this.startDate.getTime()) / (1000 * 60 * 60 * 24)); // дни
});

// Виртуальное поле для оставшихся уроков
enrollmentSchema.virtual('remainingLessons').get(function() {
  return this.populated('course') ? (this.course as any).lessons.length - this.currentLesson : 0;
});

// Метод для обновления прогресса
enrollmentSchema.methods.updateProgress = function(completedLessonsCount: number, totalLessons: number) {
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
enrollmentSchema.methods.completeLesson = function(lessonId: mongoose.Types.ObjectId) {
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

export const Enrollment = mongoose.model<IEnrollment>('Enrollment', enrollmentSchema);