import mongoose, { Document, Schema } from 'mongoose';

export interface IInstructor extends Document {
  user: mongoose.Types.ObjectId;
  bio: string;
  experience: number; // в годах
  specialties: string[];
  education: string[];
  certifications: string[];
  achievements: string[];
  socialMedia: {
    instagram?: string;
    facebook?: string;
    website?: string;
    youtube?: string;
  };
  rating: number;
  totalStudents: number;
  totalCourses: number;
  isActive: boolean;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const instructorSchema = new Schema<IInstructor>({
  user: {
    type: Schema.Types.ObjectId,
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
instructorSchema.virtual('fullName').get(function() {
  return this.populated('user') ? `${this.user.firstName} ${this.user.lastName}` : '';
});

// Виртуальное поле для email
instructorSchema.virtual('email').get(function() {
  return this.populated('user') ? this.user.email : '';
});

// Виртуальное поле для аватара
instructorSchema.virtual('avatar').get(function() {
  return this.populated('user') ? this.user.avatar : '';
});

// Индексы
instructorSchema.index({ user: 1 });
instructorSchema.index({ isActive: 1 });
instructorSchema.index({ featured: 1 });
instructorSchema.index({ specialties: 1 });
instructorSchema.index({ rating: -1 });
instructorSchema.index({ experience: -1 });

export const Instructor = mongoose.model<IInstructor>('Instructor', instructorSchema); 