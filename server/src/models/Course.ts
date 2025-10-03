import mongoose, { Document, Schema } from 'mongoose';

export interface ILesson {
  title: string;
  description: string;
  videoUrl: string;
  duration: number; // в минутах
  isFree: boolean;
}

export interface ICourse extends Document {
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice: number;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  image: string;
  videoPreview?: string;
  lessons: ILesson[];
  instructors: mongoose.Types.ObjectId[];
  materials: string[];
  requirements: string[];
  outcomes: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const lessonSchema = new Schema<ILesson>({
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

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: [true, 'Course title is required'],
    trim: true,
    maxlength: [100, 'Course title cannot exceed 100 characters'],
  },
  slug: {
    type: String,
    // Генерируем автоматически из title, поэтому не требуем в запросе
    required: false,
    default: function(this: any) {
      const title: string = (this.title || '').toString();
      return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    },
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
    // Делается необязательным: может отсутствовать, если нет скидки
    required: false,
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
  // Преподаватели теперь необязательны при создании курса
  instructors: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false,
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
courseSchema.virtual('totalDuration').get(function() {
  return this.lessons.reduce((total, lesson) => total + lesson.duration, 0);
});

// Виртуальное поле для количества уроков
courseSchema.virtual('lessonCount').get(function() {
  return this.lessons.length;
});

// Виртуальное поле для количества бесплатных уроков
courseSchema.virtual('freeLessonCount').get(function() {
  return this.lessons.filter(lesson => lesson.isFree).length;
});

// Виртуальное поле для скидки
courseSchema.virtual('discount').get(function() {
  if (this.originalPrice > this.price) {
    return Math.round(((this.originalPrice - this.price) / this.originalPrice) * 100);
  }
  return 0;
});

// Генерируем slug до валидации, чтобы обязательность slug не падала
courseSchema.pre('validate', function(next) {
  if (!this.slug && this.title) {
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

export const Course = mongoose.model<ICourse>('Course', courseSchema); 