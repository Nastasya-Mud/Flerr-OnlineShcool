import { Theme } from '../types';

export const theme: Theme = {
  colors: {
    // Основные цвета
    primary: '#800080', // Purple
    secondary: '#B4A5A5', // Charlotte
    accent: '#E6E6FA', // Lilac
    
    // Фоновые цвета
    background: '#F8F7FF', // Светлый Lilac
    backgroundSecondary: '#E6E6FA', // Lilac
    backgroundTertiary: '#F0F0FF', // Очень светлый Lilac
    
    // Текстовые цвета
    text: '#2D1B3D', // Темный Purple
    textLight: '#6B4E71', // Средний Purple
    textMuted: '#9B8BA5', // Светлый Purple
    
    // Состояния
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
    
    // Градиенты
    gradientPrimary: 'linear-gradient(135deg, #E6E6FA 0%, #F0F0FF 100%)',
    gradientSecondary: 'linear-gradient(135deg, #800080 0%, #6B4E71 100%)',
    gradientAccent: 'linear-gradient(135deg, #B4A5A5 0%, #9B8BA5 100%)',
    
    // Hover эффекты
    hoverPrimary: '#E0DCFF', // Осветленный Lilac
    hoverSecondary: '#A595A5', // Осветленный Charlotte
    hoverAccent: '#D0C0FF', // Осветленный акцент
  },
  
  fonts: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    secondary: '"Playfair Display", Georgia, serif',
  },
  
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem',  // 8px
    md: '1rem',    // 16px
    lg: '1.5rem',  // 24px
    xl: '2rem',    // 32px
    xxl: '3rem',   // 48px
  },
  
  borderRadius: {
    sm: '0.25rem', // 4px
    md: '0.5rem',  // 8px
    lg: '1rem',    // 16px
    xl: '1.5rem',  // 24px
  },
  
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    lg: '0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.06)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
  },
  
  transitions: {
    fast: 'all 0.15s ease-in-out',
    normal: 'all 0.3s ease-in-out',
    slow: 'all 0.5s ease-in-out',
  },
  
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '1024px',
    lg: '1200px',
    xl: '1440px',
  },
  
  // Анимации
  animations: {
    fadeIn: {
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    slideIn: {
      from: { transform: 'translateX(-100%)' },
      to: { transform: 'translateX(0)' },
    },
    scaleIn: {
      from: { transform: 'scale(0.9)', opacity: 0 },
      to: { transform: 'scale(1)', opacity: 1 },
    },
    bounce: {
      '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
      '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
      '70%': { transform: 'translate3d(0, -15px, 0)' },
      '90%': { transform: 'translate3d(0, -4px, 0)' },
    },
  },
};

// Утилиты для работы с темой
export const getColor = (colorKey: keyof Theme['colors']) => theme.colors[colorKey];

export const getSpacing = (spacingKey: keyof Theme['spacing']) => theme.spacing[spacingKey];

export const getBorderRadius = (radiusKey: keyof Theme['borderRadius']) => theme.borderRadius[radiusKey];

export const getShadow = (shadowKey: keyof Theme['shadows']) => theme.shadows[shadowKey];

export const getTransition = (transitionKey: keyof Theme['transitions']) => theme.transitions[transitionKey];

// CSS переменные для использования в стилях
export const cssVariables = `
  :root {
    --color-primary: ${theme.colors.primary};
    --color-secondary: ${theme.colors.secondary};
    --color-accent: ${theme.colors.accent};
    --color-background: ${theme.colors.background};
    --color-background-secondary: ${theme.colors.backgroundSecondary};
    --color-text: ${theme.colors.text};
    --color-text-light: ${theme.colors.textLight};
    --color-text-muted: ${theme.colors.textMuted};
    
    --font-primary: ${theme.fonts.primary};
    --font-secondary: ${theme.fonts.secondary};
    
    --spacing-xs: ${theme.spacing.xs};
    --spacing-sm: ${theme.spacing.sm};
    --spacing-md: ${theme.spacing.md};
    --spacing-lg: ${theme.spacing.lg};
    --spacing-xl: ${theme.spacing.xl};
    --spacing-xxl: ${theme.spacing.xxl};
    
    --border-radius-sm: ${theme.borderRadius.sm};
    --border-radius-md: ${theme.borderRadius.md};
    --border-radius-lg: ${theme.borderRadius.lg};
    --border-radius-xl: ${theme.borderRadius.xl};
    
    --shadow-sm: ${theme.shadows.sm};
    --shadow-md: ${theme.shadows.md};
    --shadow-lg: ${theme.shadows.lg};
    --shadow-xl: ${theme.shadows.xl};
    
    --transition-fast: ${theme.transitions.fast};
    --transition-normal: ${theme.transitions.normal};
    --transition-slow: ${theme.transitions.slow};
  }
`; 