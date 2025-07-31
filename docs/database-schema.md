# Схема базы данных MongoDB

## Коллекции

### 1. Users (Пользователи)
```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  firstName: String,
  lastName: String,
  phone: String,
  avatar: String (URL),
  role: String (enum: ['student', 'admin', 'instructor']),
  createdAt: Date,
  updatedAt: Date,
  isActive: Boolean,
  subscription: {
    plan: String,
    startDate: Date,
    endDate: Date
  }
}
```

### 2. Courses (Курсы)
```javascript
{
  _id: ObjectId,
  title: String,
  slug: String (unique),
  description: String,
  shortDescription: String,
  price: Number,
  originalPrice: Number,
  duration: String,
  level: String (enum: ['beginner', 'intermediate', 'advanced']),
  category: String,
  image: String (URL),
  videoPreview: String (URL),
  lessons: [{
    title: String,
    description: String,
    videoUrl: String,
    duration: Number,
    isFree: Boolean
  }],
  instructors: [ObjectId (ref: 'Users')],
  materials: [String],
  requirements: [String],
  outcomes: [String],
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 3. Enrollments (Записи на курсы)
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: 'Users'),
  courseId: ObjectId (ref: 'Courses'),
  enrolledAt: Date,
  progress: Number (0-100),
  completedLessons: [ObjectId],
  certificate: {
    issuedAt: Date,
    certificateUrl: String
  },
  isActive: Boolean
}
```

### 4. Instructors (Преподаватели)
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: 'Users'),
  bio: String,
  experience: String,
  specializations: [String],
  socialLinks: {
    instagram: String,
    facebook: String,
    website: String
  },
  rating: Number,
  totalStudents: Number,
  isActive: Boolean
}
```

### 5. Suppliers (Поставщики)
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  contactInfo: {
    email: String,
    phone: String,
    website: String
  },
  categories: [String],
  location: String,
  rating: Number,
  isActive: Boolean,
  createdAt: Date
}
```

### 6. PromoCodes (Промокоды)
```javascript
{
  _id: ObjectId,
  code: String (unique),
  type: String (enum: ['percentage', 'fixed']),
  value: Number,
  minPurchase: Number,
  maxUses: Number,
  usedCount: Number,
  validFrom: Date,
  validUntil: Date,
  applicableCourses: [ObjectId (ref: 'Courses')],
  isActive: Boolean,
  createdAt: Date
}
```

### 7. Orders (Заказы)
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: 'Users'),
  items: [{
    courseId: ObjectId (ref: 'Courses'),
    price: Number,
    originalPrice: Number
  }],
  totalAmount: Number,
  discountAmount: Number,
  promoCode: String,
  status: String (enum: ['pending', 'paid', 'cancelled']),
  paymentMethod: String,
  paymentId: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 8. Reviews (Отзывы)
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: 'Users'),
  courseId: ObjectId (ref: 'Courses'),
  rating: Number (1-5),
  comment: String,
  isVerified: Boolean,
  createdAt: Date
}
```

### 9. Content (Контент)
```javascript
{
  _id: ObjectId,
  type: String (enum: ['about', 'mission', 'values']),
  title: String,
  content: String,
  images: [String],
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## Индексы

```javascript
// Users
db.users.createIndex({ "email": 1 }, { unique: true })

// Courses
db.courses.createIndex({ "slug": 1 }, { unique: true })
db.courses.createIndex({ "category": 1 })
db.courses.createIndex({ "isActive": 1 })

// Enrollments
db.enrollments.createIndex({ "userId": 1, "courseId": 1 }, { unique: true })
db.enrollments.createIndex({ "userId": 1 })

// PromoCodes
db.promocodes.createIndex({ "code": 1 }, { unique: true })
db.promocodes.createIndex({ "isActive": 1, "validUntil": 1 })

// Orders
db.orders.createIndex({ "userId": 1 })
db.orders.createIndex({ "status": 1 })

// Reviews
db.reviews.createIndex({ "courseId": 1 })
db.reviews.createIndex({ "userId": 1, "courseId": 1 }, { unique: true })
```