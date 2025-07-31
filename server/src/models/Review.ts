import mongoose, { Document, Schema } from 'mongoose';

export interface IReview extends Document {
  user: mongoose.Types.ObjectId;
  course: mongoose.Types.ObjectId;
  instructor?: mongoose.Types.ObjectId;
  rating: number;
  title: string;
  content: string;
  pros?: string[];
  cons?: string[];
  isVerified: boolean;
  isActive: boolean;
  helpful: number;
  notHelpful: number;
  createdAt: Date;
  updatedAt: Date;
}

const reviewSchema = new Schema<IReview>({
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
  instructor: {
    type: Schema.Types.ObjectId,
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
reviewSchema.virtual('totalVotes').get(function() {
  return this.helpful + this.notHelpful;
});

// Виртуальное поле для процента полезности
reviewSchema.virtual('helpfulPercentage').get(function() {
  const total = this.totalVotes;
  if (total === 0) return 0;
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

export const Review = mongoose.model<IReview>('Review', reviewSchema); 