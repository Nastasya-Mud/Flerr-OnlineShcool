# API Документация

## Базовый URL
```
https://your-api-domain.onrender.com/api
```

## Аутентификация

Большинство эндпоинтов требуют JWT токен в заголовке:
```
Authorization: Bearer <token>
```

## Эндпоинты

### Аутентификация

#### POST /auth/register
Регистрация нового пользователя.

**Тело запроса:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "Иван",
  "lastName": "Иванов",
  "phone": "+7 (999) 123-45-67"
}
```

**Ответ:**
```json
{
  "success": true,
  "data": {
    "user": {
      "_id": "60d5ecb8b5c9c62b3c7c1b5e",
      "email": "user@example.com",
      "firstName": "Иван",
      "lastName": "Иванов",
      "role": "student",
      "isActive": true,
      "createdAt": "2024-01-01T00:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "message": "User registered successfully"
}
```

#### POST /auth/login
Вход в систему.

**Тело запроса:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Ответ:**
```json
{
  "success": true,
  "data": {
    "user": {
      "_id": "60d5ecb8b5c9c62b3c7c1b5e",
      "email": "user@example.com",
      "firstName": "Иван",
      "lastName": "Иванов",
      "role": "student"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "message": "Login successful"
}
```

#### GET /auth/me
Получение информации о текущем пользователе.

**Заголовки:**
```
Authorization: Bearer <token>
```

**Ответ:**
```json
{
  "success": true,
  "data": {
    "_id": "60d5ecb8b5c9c62b3c7c1b5e",
    "email": "user@example.com",
    "firstName": "Иван",
    "lastName": "Иванов",
    "role": "student",
    "isActive": true
  }
}
```

### Курсы

#### GET /courses
Получение списка курсов с пагинацией и фильтрацией.

**Параметры запроса:**
- `page` (number) - номер страницы (по умолчанию: 1)
- `limit` (number) - количество элементов на странице (по умолчанию: 12)
- `category` (string) - фильтр по категории
- `level` (string) - фильтр по уровню (beginner, intermediate, advanced)
- `search` (string) - поиск по названию и описанию
- `sort` (string) - сортировка (price, title, createdAt, popularity)
- `order` (string) - порядок сортировки (asc, desc)

**Пример запроса:**
```
GET /courses?page=1&limit=12&category=beginner&sort=price&order=asc
```

**Ответ:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "60d5ecb8b5c9c62b3c7c1b5e",
      "title": "Профессия флорист",
      "slug": "professiya-florist",
      "description": "Базовый курс для начинающих флористов",
      "shortDescription": "Изучите основы флористики",
      "price": 29900,
      "originalPrice": 35000,
      "duration": "3 месяца",
      "level": "beginner",
      "category": "basic",
      "image": "https://example.com/image.jpg",
      "instructors": [
        {
          "_id": "60d5ecb8b5c9c62b3c7c1b5f",
          "firstName": "Анна",
          "lastName": "Петрова",
          "avatar": "https://example.com/avatar.jpg"
        }
      ],
      "lessonCount": 24,
      "totalDuration": 1440,
      "discount": 15
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 12,
    "total": 50,
    "totalPages": 5,
    "hasNext": true,
    "hasPrev": false
  }
}
```

#### GET /courses/:slug
Получение детальной информации о курсе.

**Пример запроса:**
```
GET /courses/professiya-florist
```

**Ответ:**
```json
{
  "success": true,
  "data": {
    "_id": "60d5ecb8b5c9c62b3c7c1b5e",
    "title": "Профессия флорист",
    "slug": "professiya-florist",
    "description": "Подробное описание курса...",
    "shortDescription": "Изучите основы флористики",
    "price": 29900,
    "originalPrice": 35000,
    "duration": "3 месяца",
    "level": "beginner",
    "category": "basic",
    "image": "https://example.com/image.jpg",
    "videoPreview": "https://example.com/video.mp4",
    "lessons": [
      {
        "_id": "60d5ecb8b5c9c62b3c7c1b60",
        "title": "Введение в флористику",
        "description": "Основные принципы работы с цветами",
        "videoUrl": "https://example.com/lesson1.mp4",
        "duration": 45,
        "isFree": true
      }
    ],
    "instructors": [
      {
        "_id": "60d5ecb8b5c9c62b3c7c1b5f",
        "firstName": "Анна",
        "lastName": "Петрова",
        "avatar": "https://example.com/avatar.jpg",
        "bio": "Опытный флорист с 10-летним стажем"
      }
    ],
    "materials": ["Ножницы", "Лента", "Проволока"],
    "requirements": ["Базовые знания не требуются"],
    "outcomes": ["Создание букетов", "Работа с инструментами"],
    "lessonCount": 24,
    "totalDuration": 1440,
    "discount": 15
  }
}
```

### Промокоды

#### POST /promo-codes/validate
Валидация промокода.

**Тело запроса:**
```json
{
  "code": "WELCOME20",
  "courseId": "60d5ecb8b5c9c62b3c7c1b5e",
  "totalAmount": 29900
}
```

**Ответ:**
```json
{
  "success": true,
  "data": {
    "promoCode": {
      "_id": "60d5ecb8b5c9c62b3c7c1b61",
      "code": "WELCOME20",
      "type": "percentage",
      "value": 20,
      "discountAmount": 5980
    },
    "discountAmount": 5980,
    "finalAmount": 23920
  }
}
```

#### GET /promo-codes
Получение списка промокодов (только для админов).

**Заголовки:**
```
Authorization: Bearer <admin_token>
```

**Параметры запроса:**
- `page` (number) - номер страницы
- `limit` (number) - количество элементов на странице
- `isActive` (boolean) - фильтр по активности

**Ответ:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "60d5ecb8b5c9c62b3c7c1b61",
      "code": "WELCOME20",
      "type": "percentage",
      "value": 20,
      "minPurchase": 0,
      "maxUses": 100,
      "usedCount": 15,
      "validFrom": "2024-01-01T00:00:00.000Z",
      "validUntil": "2024-12-31T23:59:59.000Z",
      "isActive": true,
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 5,
    "totalPages": 1,
    "hasNext": false,
    "hasPrev": false
  }
}
```

### Заказы

#### POST /orders
Создание нового заказа.

**Заголовки:**
```
Authorization: Bearer <token>
```

**Тело запроса:**
```json
{
  "items": [
    {
      "courseId": "60d5ecb8b5c9c62b3c7c1b5e",
      "price": 29900,
      "originalPrice": 35000
    }
  ],
  "promoCode": "WELCOME20",
  "paymentMethod": "card"
}
```

**Ответ:**
```json
{
  "success": true,
  "data": {
    "_id": "60d5ecb8b5c9c62b3c7c1b62",
    "userId": "60d5ecb8b5c9c62b3c7c1b5e",
    "items": [
      {
        "courseId": "60d5ecb8b5c9c62b3c7c1b5e",
        "price": 29900,
        "originalPrice": 35000
      }
    ],
    "totalAmount": 29900,
    "discountAmount": 5980,
    "promoCode": "WELCOME20",
    "status": "pending",
    "paymentMethod": "card",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Записи на курсы

#### POST /enrollments
Запись на курс.

**Заголовки:**
```
Authorization: Bearer <token>
```

**Тело запроса:**
```json
{
  "courseId": "60d5ecb8b5c9c62b3c7c1b5e"
}
```

**Ответ:**
```json
{
  "success": true,
  "data": {
    "_id": "60d5ecb8b5c9c62b3c7c1b63",
    "userId": "60d5ecb8b5c9c62b3c7c1b5e",
    "courseId": "60d5ecb8b5c9c62b3c7c1b5e",
    "enrolledAt": "2024-01-01T00:00:00.000Z",
    "progress": 0,
    "completedLessons": [],
    "isActive": true
  }
}
```

#### GET /enrollments
Получение записей пользователя на курсы.

**Заголовки:**
```
Authorization: Bearer <token>
```

**Ответ:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "60d5ecb8b5c9c62b3c7c1b63",
      "courseId": {
        "_id": "60d5ecb8b5c9c62b3c7c1b5e",
        "title": "Профессия флорист",
        "image": "https://example.com/image.jpg"
      },
      "enrolledAt": "2024-01-01T00:00:00.000Z",
      "progress": 25,
      "completedLessons": ["60d5ecb8b5c9c62b3c7c1b60"],
      "isActive": true
    }
  ]
}
```

## Коды ошибок

### HTTP статусы

- `200` - Успешный запрос
- `201` - Ресурс создан
- `400` - Ошибка валидации
- `401` - Не авторизован
- `403` - Доступ запрещен
- `404` - Ресурс не найден
- `422` - Ошибка валидации данных
- `500` - Внутренняя ошибка сервера

### Формат ошибок

```json
{
  "success": false,
  "error": "Описание ошибки",
  "details": [
    {
      "field": "email",
      "message": "Email должен быть валидным",
      "value": "invalid-email"
    }
  ]
}
```

## Пагинация

Все эндпоинты, возвращающие списки, поддерживают пагинацию:

```json
{
  "pagination": {
    "page": 1,
    "limit": 12,
    "total": 100,
    "totalPages": 9,
    "hasNext": true,
    "hasPrev": false
  }
}
```

## Фильтрация и поиск

Поддерживаемые операторы:
- `eq` - равно
- `ne` - не равно
- `gt` - больше
- `gte` - больше или равно
- `lt` - меньше
- `lte` - меньше или равно
- `in` - входит в массив
- `nin` - не входит в массив
- `regex` - регулярное выражение

Пример:
```
GET /courses?price[gte]=10000&category[in]=basic,advanced
```

## Сортировка

Формат: `field:order`

Примеры:
```
GET /courses?sort=price:asc
GET /courses?sort=createdAt:desc
GET /courses?sort=title:asc
```

## Лимиты

- Максимальное количество элементов на странице: 50
- Максимальная длина строки поиска: 100 символов
- Максимальное количество фильтров: 10 