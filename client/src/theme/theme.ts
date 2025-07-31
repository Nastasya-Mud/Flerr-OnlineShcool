import { theme as sharedTheme } from '../../shared/theme';

// Расширяем тему для клиентской части
export const theme = {
  ...sharedTheme,
  // Дополнительные настройки для клиента
  components: {
    button: {
      primary: {
        background: sharedTheme.colors.primary,
        color: 'white',
        border: 'none',
        '&:hover': {
          background: sharedTheme.colors.hoverPrimary,
        },
      },
      secondary: {
        background: 'transparent',
        color: sharedTheme.colors.text,
        border: `1px solid ${sharedTheme.colors.textMuted}`,
        '&:hover': {
          background: sharedTheme.colors.backgroundSecondary,
          borderColor: sharedTheme.colors.primary,
        },
      },
    },
    card: {
      background: sharedTheme.colors.background,
      borderRadius: sharedTheme.borderRadius.lg,
      boxShadow: sharedTheme.shadows.sm,
      '&:hover': {
        boxShadow: sharedTheme.shadows.md,
      },
    },
    input: {
      border: `1px solid ${sharedTheme.colors.textMuted}`,
      borderRadius: sharedTheme.borderRadius.md,
      '&:focus': {
        borderColor: sharedTheme.colors.primary,
        boxShadow: `0 0 0 3px ${sharedTheme.colors.primary}20`,
      },
    },
  },
}; 