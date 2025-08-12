"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const validateRequest_1 = require("../middleware/validateRequest");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
// @route   GET /api/content
// @desc    Get content with filters (Public)
// @access  Public
router.get('/', [
    (0, express_validator_1.query)('page').optional().isInt({ min: 1 }),
    (0, express_validator_1.query)('limit').optional().isInt({ min: 1, max: 50 }),
    (0, express_validator_1.query)('type').optional().isIn(['article', 'news', 'blog', 'guide']),
    (0, express_validator_1.query)('category').optional().isString(),
    (0, express_validator_1.query)('search').optional().isString(),
    (0, express_validator_1.query)('sort').optional().isIn(['createdAt', 'title', 'views']),
    (0, express_validator_1.query)('order').optional().isIn(['asc', 'desc']),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        // Моковые данные для демонстрации
        const mockContent = [
            {
                _id: '1',
                title: 'Основы композиции в флористике',
                slug: 'floristry-composition-basics',
                type: 'article',
                category: 'techniques',
                excerpt: 'Изучите основные принципы создания красивых композиций из цветов.',
                content: 'Полный текст статьи о композиции...',
                image: '/images/content-1.jpg',
                author: 'Анна Петрова',
                views: 1250,
                publishedAt: new Date('2024-01-15'),
                isPublished: true,
            },
            {
                _id: '2',
                title: 'Тренды флористики 2024',
                slug: 'floristry-trends-2024',
                type: 'news',
                category: 'trends',
                excerpt: 'Обзор самых популярных направлений в флористике этого года.',
                content: 'Полный текст новости о трендах...',
                image: '/images/content-2.jpg',
                author: 'Мария Иванова',
                views: 890,
                publishedAt: new Date('2024-01-10'),
                isPublished: true,
            },
            {
                _id: '3',
                title: 'Как открыть цветочный магазин',
                slug: 'how-to-open-flower-shop',
                type: 'guide',
                category: 'business',
                excerpt: 'Пошаговое руководство по открытию собственного цветочного бизнеса.',
                content: 'Полный текст руководства...',
                image: '/images/content-3.jpg',
                author: 'Елена Сидорова',
                views: 2100,
                publishedAt: new Date('2024-01-05'),
                isPublished: true,
            },
        ];
        let filteredContent = mockContent;
        if (req.query.type) {
            filteredContent = filteredContent.filter(item => item.type === req.query.type);
        }
        if (req.query.category) {
            filteredContent = filteredContent.filter(item => item.category === req.query.category);
        }
        if (req.query.search) {
            const searchTerm = req.query.search.toLowerCase();
            filteredContent = filteredContent.filter(item => item.title.toLowerCase().includes(searchTerm) ||
                item.excerpt.toLowerCase().includes(searchTerm));
        }
        // Сортировка
        const sortField = req.query.sort || 'publishedAt';
        const sortOrder = req.query.order || 'desc';
        filteredContent.sort((a, b) => {
            let aValue = a[sortField];
            let bValue = b[sortField];
            if (sortField === 'publishedAt') {
                aValue = new Date(aValue).getTime();
                bValue = new Date(bValue).getTime();
            }
            if (sortOrder === 'asc') {
                return aValue > bValue ? 1 : -1;
            }
            else {
                return aValue < bValue ? 1 : -1;
            }
        });
        const total = filteredContent.length;
        const paginatedContent = filteredContent.slice(skip, skip + limit);
        res.json({
            success: true,
            data: {
                content: paginatedContent,
                pagination: {
                    page,
                    limit,
                    total,
                    pages: Math.ceil(total / limit),
                },
            },
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
// @route   GET /api/content/:slug
// @desc    Get content by slug (Public)
// @access  Public
router.get('/:slug', [
    (0, express_validator_1.param)('slug').isString().trim().notEmpty(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        const { slug } = req.params;
        // Моковые данные для демонстрации
        const mockContent = {
            _id: '1',
            title: 'Основы композиции в флористике',
            slug: 'floristry-composition-basics',
            type: 'article',
            category: 'techniques',
            excerpt: 'Изучите основные принципы создания красивых композиций из цветов.',
            content: `
        <h2>Введение в композицию</h2>
        <p>Композиция в флористике - это искусство гармоничного расположения цветов и других элементов в пространстве.</p>
        
        <h2>Основные принципы</h2>
        <ul>
          <li><strong>Баланс:</strong> Равновесие между всеми элементами композиции</li>
          <li><strong>Пропорция:</strong> Соотношение размеров элементов друг к другу</li>
          <li><strong>Ритм:</strong> Повторение элементов для создания движения</li>
          <li><strong>Контраст:</strong> Различия в цвете, форме, текстуре</li>
        </ul>
        
        <h2>Практические советы</h2>
        <p>Начните с простых композиций и постепенно усложняйте их. Не бойтесь экспериментировать!</p>
      `,
            image: '/images/content-1.jpg',
            author: 'Анна Петрова',
            authorBio: 'Профессиональный флорист с 10-летним опытом работы',
            views: 1250,
            publishedAt: new Date('2024-01-15'),
            isPublished: true,
            tags: ['композиция', 'основы', 'флористика'],
            relatedContent: ['2', '3'],
        };
        if (mockContent.slug !== slug) {
            return res.status(404).json({
                success: false,
                error: 'Content not found',
            });
        }
        res.json({
            success: true,
            data: mockContent,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
// @route   POST /api/content
// @desc    Create content (Admin only)
// @access  Private/Admin
router.post('/', [
    auth_1.auth,
    (0, auth_1.requireRole)(['admin']),
    (0, express_validator_1.body)('title').isString().trim().isLength({ min: 5, max: 200 }),
    (0, express_validator_1.body)('slug').isString().trim().isLength({ min: 3, max: 100 }),
    (0, express_validator_1.body)('type').isIn(['article', 'news', 'blog', 'guide']),
    (0, express_validator_1.body)('category').isString().trim(),
    (0, express_validator_1.body)('excerpt').isString().trim().isLength({ min: 10, max: 500 }),
    (0, express_validator_1.body)('content').isString().trim().isLength({ min: 50 }),
    (0, express_validator_1.body)('image').optional().isURL(),
    (0, express_validator_1.body)('author').isString().trim(),
    (0, express_validator_1.body)('authorBio').optional().isString().trim(),
    (0, express_validator_1.body)('tags').optional().isArray(),
    (0, express_validator_1.body)('tags.*').isString().trim(),
    (0, express_validator_1.body)('isPublished').optional().isBoolean(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        // Здесь будет логика создания контента
        const contentData = {
            ...req.body,
            views: 0,
            publishedAt: req.body.isPublished ? new Date() : null,
        };
        res.status(201).json({
            success: true,
            data: contentData,
            message: 'Content created successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
// @route   PUT /api/content/:id
// @desc    Update content (Admin only)
// @access  Private/Admin
router.put('/:id', [
    auth_1.auth,
    (0, auth_1.requireRole)(['admin']),
    (0, express_validator_1.param)('id').isMongoId(),
    (0, express_validator_1.body)('title').optional().isString().trim().isLength({ min: 5, max: 200 }),
    (0, express_validator_1.body)('slug').optional().isString().trim().isLength({ min: 3, max: 100 }),
    (0, express_validator_1.body)('type').optional().isIn(['article', 'news', 'blog', 'guide']),
    (0, express_validator_1.body)('category').optional().isString().trim(),
    (0, express_validator_1.body)('excerpt').optional().isString().trim().isLength({ min: 10, max: 500 }),
    (0, express_validator_1.body)('content').optional().isString().trim().isLength({ min: 50 }),
    (0, express_validator_1.body)('image').optional().isURL(),
    (0, express_validator_1.body)('author').optional().isString().trim(),
    (0, express_validator_1.body)('authorBio').optional().isString().trim(),
    (0, express_validator_1.body)('tags').optional().isArray(),
    (0, express_validator_1.body)('tags.*').isString().trim(),
    (0, express_validator_1.body)('isPublished').optional().isBoolean(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        // Здесь будет логика обновления контента
        res.json({
            success: true,
            data: { id: req.params.id, ...req.body },
            message: 'Content updated successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
// @route   DELETE /api/content/:id
// @desc    Delete content (Admin only)
// @access  Private/Admin
router.delete('/:id', [
    auth_1.auth,
    (0, auth_1.requireRole)(['admin']),
    (0, express_validator_1.param)('id').isMongoId(),
], validateRequest_1.validateRequest, async (req, res) => {
    try {
        // Здесь будет логика удаления контента
        res.json({
            success: true,
            message: 'Content deleted successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
// @route   GET /api/content/categories
// @desc    Get content categories (Public)
// @access  Public
router.get('/categories/list', async (req, res) => {
    try {
        const categories = [
            { id: 'techniques', name: 'Техники', count: 15 },
            { id: 'trends', name: 'Тренды', count: 8 },
            { id: 'business', name: 'Бизнес', count: 12 },
            { id: 'materials', name: 'Материалы', count: 20 },
            { id: 'inspiration', name: 'Вдохновение', count: 25 },
        ];
        res.json({
            success: true,
            data: categories,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
// @route   GET /api/content/popular
// @desc    Get popular content (Public)
// @access  Public
router.get('/popular/list', async (req, res) => {
    try {
        const popularContent = [
            {
                _id: '1',
                title: 'Основы композиции в флористике',
                slug: 'floristry-composition-basics',
                excerpt: 'Изучите основные принципы создания красивых композиций из цветов.',
                image: '/images/content-1.jpg',
                views: 1250,
                publishedAt: new Date('2024-01-15'),
            },
            {
                _id: '2',
                title: 'Тренды флористики 2024',
                slug: 'floristry-trends-2024',
                excerpt: 'Обзор самых популярных направлений в флористике этого года.',
                image: '/images/content-2.jpg',
                views: 890,
                publishedAt: new Date('2024-01-10'),
            },
            {
                _id: '3',
                title: 'Как открыть цветочный магазин',
                slug: 'how-to-open-flower-shop',
                excerpt: 'Пошаговое руководство по открытию собственного цветочного бизнеса.',
                image: '/images/content-3.jpg',
                views: 2100,
                publishedAt: new Date('2024-01-05'),
            },
        ];
        res.json({
            success: true,
            data: popularContent,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
        });
    }
});
exports.default = router;
//# sourceMappingURL=content.js.map