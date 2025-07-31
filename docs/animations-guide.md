# Руководство по анимациям и интерактивным элементам

## Принципы анимаций

### 1. Плавность и естественность
- Используйте кривые Безье для естественных переходов
- Избегайте резких движений
- Соблюдайте принцип инерции

### 2. Производительность
- Используйте `transform` и `opacity` для анимаций
- Избегайте анимации `width`, `height`, `margin`, `padding`
- Используйте `will-change` для оптимизации

### 3. Доступность
- Уважайте настройки `prefers-reduced-motion`
- Предоставляйте альтернативы для пользователей с ограниченными возможностями

## Рекомендуемые анимации

### 1. Переходы между страницами

```typescript
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};
```

### 2. Появление элементов

```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
```

### 3. Hover эффекты

```typescript
const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

const hoverLift = {
  whileHover: { 
    y: -5,
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
  },
};
```

### 4. Загрузка и состояния

```typescript
const loadingSpinner = {
  animate: {
    rotate: 360,
  },
  transition: {
    duration: 1,
    repeat: Infinity,
    ease: 'linear',
  },
};
```

## Интерактивные элементы

### 1. Кнопки

```typescript
const Button = styled(motion.button)`
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  border: none;
  background: var(--color-primary);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-fast);
  
  &:hover {
    background: var(--color-hover-primary);
  }
  
  &:active {
    transform: scale(0.98);
  }
`;
```

### 2. Карточки

```typescript
const Card = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
  
  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
  }
`;
```

### 3. Формы

```typescript
const Input = styled(motion.input)`
  width: 100%;
  padding: var(--spacing-md);
  border: 2px solid var(--color-text-muted);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  transition: var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(128, 0, 128, 0.1);
  }
`;
```

## Анимации для конкретных компонентов

### 1. Навигация

```typescript
const NavLink = styled(Link)<{ $isActive?: boolean }>`
  position: relative;
  color: ${props => props.$isActive ? 'var(--color-primary)' : 'var(--color-text)'};
  text-decoration: none;
  transition: var(--transition-fast);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    background: var(--color-primary);
    transition: var(--transition-fast);
  }
  
  &:hover::after {
    width: 100%;
  }
`;
```

### 2. Модальные окна

```typescript
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
`;

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};
```

### 3. Уведомления

```typescript
const Notification = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  background: var(--color-success);
  color: white;
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
  z-index: 1000;
`;

const notificationVariants = {
  initial: { opacity: 0, x: 300 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 300 },
};
```

## Оптимизация производительности

### 1. Использование `useReducedMotion`

```typescript
import { useReducedMotion } from 'framer-motion';

const Component = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const variants = shouldReduceMotion ? {} : {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  
  return <motion.div variants={variants}>...</motion.div>;
};
```

### 2. Ленивая загрузка анимаций

```typescript
import { useInView } from 'react-intersection-observer';

const Component = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      ...
    </motion.div>
  );
};
```

### 3. Оптимизация для мобильных устройств

```typescript
const isMobile = window.innerWidth < 768;

const mobileVariants = isMobile ? {} : {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};
```

## Рекомендации по цветовой схеме

### 1. Градиенты для анимаций

```css
.gradient-animation {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### 2. Hover эффекты

```css
.hover-effect {
  transition: all 0.3s ease;
}

.hover-effect:hover {
  background: var(--color-hover-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

## Тестирование анимаций

### 1. Проверка производительности

```typescript
// Используйте React DevTools Profiler
// Проверяйте FPS в браузере
// Тестируйте на слабых устройствах
```

### 2. Доступность

```typescript
// Проверяйте с включенным prefers-reduced-motion
// Тестируйте с программами чтения с экрана
// Убедитесь, что анимации не мешают навигации
```

## Заключение

Анимации должны:
- Улучшать пользовательский опыт
- Быть быстрыми и отзывчивыми
- Не мешать функциональности
- Уважать настройки доступности
- Оптимизироваться для производительности 