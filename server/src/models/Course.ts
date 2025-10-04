import mongoose, { Document, Schema } from 'mongoose';

// Утилиты для генерации slug с поддержкой кириллицы и безопасной нормализацией
function transliterateToLatin(input: string): string {
  const map: Record<string, string> = {
    а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i',
    й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't',
    у: 'u', ф: 'f', х: 'h', ц: 'c', ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y',
    ь: '', э: 'e', ю: 'yu', я: 'ya',
    А: 'a', Б: 'b', В: 'v', Г: 'g', Д: 'd', Е: 'e', Ё: 'e', Ж: 'zh', З: 'z', И: 'i',
    Й: 'y', К: 'k', Л: 'l', М: 'm', Н: 'n', О: 'o', П: 'p', Р: 'r', С: 's', Т: 't',
    У: 'u', Ф: 'f', Х: 'h', Ц: 'c', Ч: 'ch', Ш: 'sh', Щ: 'sch', Ъ: '', Ы: 'y',
    Ь: '', Э: 'e', Ю: 'yu', Я: 'ya',
  };
  return input.split('').map(ch => map[ch] ?? ch).join('');
}

function toSlugBase(input: string): string {
  const latin = transliterateToLatin(input)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '');
  return latin
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .substring(0, 80);
}

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
      const base = toSlugBase(title);
      return base || `course-${Date.now()}`;
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

// Генерация slug до валидации
courseSchema.pre('validate', function(next) {
  if (!this.slug && this.title) {
    const base = toSlugBase(this.title);
    this.slug = base || `course-${Date.now()}`;
  }
  next();
});

// Гарантируем уникальность slug: при коллизии добавляем суффикс -2, -3, ...
courseSchema.pre('save', async function(next) {
  if (!this.isModified('slug')) return next();
  const base = toSlugBase(this.slug || this.title || '');
  let candidate = base || `course-${Date.now()}`;
  let counter = 2;

  while (await mongoose.models.Course.findOne({ slug: candidate, _id: { $ne: this._id } })) {
    candidate = `${base}-${counter}`;
    counter += 1;
    if (counter > 100) break; // защита от бесконечного цикла
  }

  this.slug = candidate;
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