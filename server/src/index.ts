import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import path from 'path';
import 'express-async-errors';
import dotenv from 'dotenv';
// import passport from 'passport';

import { connectDB } from './config/database';
import { errorHandler } from './middleware/errorHandler';
import { notFound } from './middleware/notFound';

// Routes
import authRoutes from './routes/auth';
import courseRoutes from './routes/courses';
import userRoutes from './routes/users';
import instructorRoutes from './routes/instructors';
import supplierRoutes from './routes/suppliers';
import promoCodeRoutes from './routes/promoCodes';
import orderRoutes from './routes/orders';
import reviewRoutes from './routes/reviews';
import contentRoutes from './routes/content';
import enrollmentRoutes from './routes/enrollments';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Initialize Passport (temporarily disabled)
// app.use(passport.initialize());

// Compression middleware
app.use(compression());

// Logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Flerr API is running',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);
app.use('/api/instructors', instructorRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/promo-codes', promoCodeRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/enrollments', enrollmentRoutes);

// Serve static files from React build
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, '../../client/dist');
  app.use(express.static(clientBuildPath));
  
  // Handle React Router (SPA) - все остальные маршруты отдают index.html
  app.get('*', (req, res) => {
    // Исключаем API маршруты
    if (req.path.startsWith('/api/')) {
      return res.status(404).json({ message: 'API route not found' });
    }
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
} else {
  // В development режиме показываем API информацию на корневом пути
  app.get('/', (req, res) => {
    res.json({
      message: 'Flerr Online School API',
      version: '1.0.0',
      environment: 'development',
      endpoints: {
        health: '/api/health',
        auth: '/api/auth',
        courses: '/api/courses',
        users: '/api/users',
        instructors: '/api/instructors',
        suppliers: '/api/suppliers',
        orders: '/api/orders',
        reviews: '/api/reviews',
        enrollments: '/api/enrollments'
      }
    });
  });
}

// Error handling middleware (только для API routes)
app.use('/api/*', notFound);
app.use(errorHandler);

// Start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📚 Flerr Online School API`);
      console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app; 