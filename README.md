# Flerr - Онлайн Школа Флористики

Современная web-платформа для обучения флористике с красивым дизайном и удобным интерфейсом.

## Технический стек

- **Frontend**: React + TypeScript
- **Backend**: Node.js + Express
- **База данных**: MongoDB
- **Хостинг**: Render
- **Хранение файлов**: AWS S3

## Цветовая схема

- **Основной фон**: Lilac (#E6E6FA) / Dull Lavender (#E6E6FA)
- **Текст и акценты**: Purple (#800080)
- **Кнопки/иконки**: Charlotte (#B4A5A5)
- **Hover-эффекты**: Осветленные оттенки

## Структура проекта

```
flerr-online-school/
├── client/                 # React frontend
├── server/                 # Node.js backend
├── shared/                 # Общие типы и утилиты
├── docs/                   # Документация
└── deployment/             # Конфигурация деплоя
```

## Быстрый старт

1. Установка зависимостей:
```bash
npm install
cd client && npm install
cd ../server && npm install
```

2. Настройка переменных окружения:
```bash
cp .env.example .env
```

3. Запуск в режиме разработки:
```bash
npm run dev
```

## Деплой на Render

Подробные инструкции по деплою находятся в папке `deployment/`.