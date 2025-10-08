"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const path_1 = __importDefault(require("path"));
require("express-async-errors");
const dotenv_1 = __importDefault(require("dotenv"));
// import passport from 'passport';
const database_1 = require("./config/database");
const errorHandler_1 = require("./middleware/errorHandler");
const notFound_1 = require("./middleware/notFound");
// Routes
const auth_1 = __importDefault(require("./routes/auth"));
const courses_1 = __importDefault(require("./routes/courses"));
const users_1 = __importDefault(require("./routes/users"));
const instructors_1 = __importDefault(require("./routes/instructors"));
const suppliers_1 = __importDefault(require("./routes/suppliers"));
const promoCodes_1 = __importDefault(require("./routes/promoCodes"));
const orders_1 = __importDefault(require("./routes/orders"));
const reviews_1 = __importDefault(require("./routes/reviews"));
const content_1 = __importDefault(require("./routes/content"));
const enrollments_1 = __importDefault(require("./routes/enrollments"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Security middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
}));
// Rate limiting
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
});
app.use('/api/', limiter);
// Body parsing middleware
app.use(express_1.default.json({ limit: '20mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '20mb' }));
// Initialize Passport (temporarily disabled)
// app.use(passport.initialize());
// Compression middleware
app.use((0, compression_1.default)());
// Logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
else {
    app.use((0, morgan_1.default)('combined'));
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
app.use('/api/auth', auth_1.default);
app.use('/api/courses', courses_1.default);
app.use('/api/users', users_1.default);
app.use('/api/instructors', instructors_1.default);
app.use('/api/suppliers', suppliers_1.default);
app.use('/api/promo-codes', promoCodes_1.default);
app.use('/api/orders', orders_1.default);
app.use('/api/reviews', reviews_1.default);
app.use('/api/content', content_1.default);
app.use('/api/enrollments', enrollments_1.default);
// Serve static files from React build
if (process.env.NODE_ENV === 'production') {
    const clientBuildPath = path_1.default.join(__dirname, '../../client/dist');
    app.use(express_1.default.static(clientBuildPath));
    // Handle React Router (SPA) - все остальные маршруты отдают index.html
    app.get('*', (req, res) => {
        // Исключаем API маршруты
        if (req.path.startsWith('/api/')) {
            return res.status(404).json({ message: 'API route not found' });
        }
        res.sendFile(path_1.default.join(clientBuildPath, 'index.html'));
    });
}
else {
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
app.use('/api/*', notFound_1.notFound);
app.use(errorHandler_1.errorHandler);
// Start server
const startServer = async () => {
    try {
        await (0, database_1.connectDB)();
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
            console.log(`📚 Flerr Online School API`);
            console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
        });
    }
    catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};
startServer();
exports.default = app;
//# sourceMappingURL=index.js.map