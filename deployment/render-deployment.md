# Деплой на Render

## Подготовка к деплою

### 1. Настройка базы данных MongoDB

1. Создайте аккаунт на [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Создайте новый кластер
3. Настройте сетевой доступ (Network Access) - разрешите доступ из всех IP (0.0.0.0/0)
4. Создайте пользователя базы данных
5. Получите строку подключения (Connection String)

### 2. Настройка AWS S3 (для хранения файлов)

1. Создайте аккаунт AWS
2. Создайте S3 bucket
3. Создайте IAM пользователя с правами на S3
4. Получите Access Key ID и Secret Access Key

### 3. Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```env
# Server Configuration
NODE_ENV=production
PORT=5000
CLIENT_URL=https://your-app-name.onrender.com

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/flerr-school

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# AWS S3 Configuration
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1
AWS_S3_BUCKET=flerr-school-assets

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Payment Gateway (Stripe)
STRIPE_SECRET_KEY=sk_live_your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=pk_live_your-stripe-publishable-key
```

## Деплой на Render

### 1. Создание Web Service

1. Зайдите на [Render](https://render.com)
2. Создайте новый Web Service
3. Подключите ваш GitHub репозиторий

### 2. Настройка Web Service

**Build Command:**
```bash
npm install && npm run build
```

**Start Command:**
```bash
npm start
```

**Environment Variables:**
Добавьте все переменные из `.env` файла в настройки Render.

### 3. Настройка Static Site (для Frontend)

1. Создайте новый Static Site на Render
2. Подключите тот же репозиторий
3. Укажите путь к папке `client/dist`

**Build Command:**
```bash
cd client && npm install && npm run build
```

**Publish Directory:**
```
client/dist
```

### 4. Настройка CORS

В настройках Web Service добавьте переменную окружения:
```
CORS_ORIGIN=https://your-static-site-name.onrender.com
```

## Структура проекта для деплоя

```
flerr-online-school/
├── server/                 # Backend
│   ├── src/
│   ├── package.json
│   └── ...
├── client/                 # Frontend
│   ├── src/
│   ├── package.json
│   └── ...
├── shared/                 # Общие типы
├── deployment/             # Инструкции по деплою
└── package.json           # Корневой package.json
```

## Корневой package.json

Создайте корневой `package.json`:

```json
{
  "name": "flerr-online-school",
  "version": "1.0.0",
  "description": "Online Floristry School Platform",
  "scripts": {
    "install:all": "npm install && cd server && npm install && cd ../client && npm install",
    "build": "cd server && npm run build && cd ../client && npm run build",
    "start": "cd server && npm start",
    "dev": "concurrently \"cd server && npm run dev\" \"cd client && npm run dev\""
  },
  "devDependencies": {
    "concurrently": "^7.6.0"
  }
}
```

## Проверка деплоя

1. Убедитесь, что все переменные окружения настроены
2. Проверьте логи в Render Dashboard
3. Протестируйте API endpoints
4. Проверьте работу фронтенда

## Мониторинг и логи

- Используйте Render Dashboard для мониторинга
- Настройте алерты для ошибок
- Регулярно проверяйте логи приложения

## Обновление приложения

1. Внесите изменения в код
2. Запушьте в GitHub
3. Render автоматически пересоберет и перезапустит приложение

## Безопасность

1. Используйте HTTPS (Render предоставляет автоматически)
2. Настройте правильные CORS заголовки
3. Используйте сильные пароли для базы данных
4. Регулярно обновляйте зависимости
5. Мониторьте логи на предмет подозрительной активности 