// Общие типы для приложения

export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  role: 'student' | 'admin' | 'instructor';
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  subscription?: {
    plan: string;
    startDate: Date;
    endDate: Date;
  };
}

export interface Course {
  _id: string;
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
  lessons: Lesson[];
  instructors: string[];
  materials: string[];
  requirements: string[];
  outcomes: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Lesson {
  _id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: number; // в минутах
  isFree: boolean;
}

export interface Instructor {
  _id: string;
  userId: string;
  bio: string;
  experience: string;
  specializations: string[];
  socialLinks: {
    instagram?: string;
    facebook?: string;
    website?: string;
  };
  rating: number;
  totalStudents: number;
  isActive: boolean;
}

export interface Supplier {
  _id: string;
  name: string;
  description: string;
  contactInfo: {
    email: string;
    phone: string;
    website: string;
  };
  categories: string[];
  location: string;
  rating: number;
  isActive: boolean;
  createdAt: Date;
}

export interface PromoCode {
  _id: string;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minPurchase: number;
  maxUses: number;
  usedCount: number;
  validFrom: Date;
  validUntil: Date;
  applicableCourses: string[];
  isActive: boolean;
  createdAt: Date;
}

export interface Order {
  _id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  discountAmount: number;
  promoCode?: string;
  status: 'pending' | 'paid' | 'cancelled';
  paymentMethod: string;
  paymentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  courseId: string;
  price: number;
  originalPrice: number;
}

export interface Enrollment {
  _id: string;
  userId: string;
  courseId: string;
  enrolledAt: Date;
  progress: number;
  completedLessons: string[];
  certificate?: {
    issuedAt: Date;
    certificateUrl: string;
  };
  isActive: boolean;
}

export interface Review {
  _id: string;
  userId: string;
  courseId: string;
  rating: number;
  comment: string;
  isVerified: boolean;
  createdAt: Date;
}

export interface Content {
  _id: string;
  type: 'about' | 'mission' | 'values';
  title: string;
  content: string;
  images: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// API Response типы
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Auth типы
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// UI типы
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    textLight: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
}

// Animation типы
export interface AnimationConfig {
  duration: number;
  easing: string;
  delay?: number;
}

export interface PageTransition {
  enter: AnimationConfig;
  exit: AnimationConfig;
}