import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const StyledButton = styled(motion.button)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          padding: 8px 16px;
          font-size: 14px;
          min-height: 36px;
        `;
      case 'large':
        return css`
          padding: 16px 32px;
          font-size: 18px;
          min-height: 56px;
        `;
      default:
        return css`
          padding: 12px 24px;
          font-size: 16px;
          min-height: 48px;
        `;
    }
  }}

  ${({ variant, theme }) => {
    switch (variant) {
      case 'secondary':
        return css`
          background: ${theme.colors.lavender};
          color: ${theme.colors.purple};
          &:hover:not(:disabled) {
            background: ${theme.colors.lightLavender};
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(147, 112, 219, 0.3);
          }
        `;
      case 'outline':
        return css`
          background: transparent;
          color: ${theme.colors.purple};
          border: 2px solid ${theme.colors.purple};
          &:hover:not(:disabled) {
            background: ${theme.colors.purple};
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(147, 112, 219, 0.3);
          }
        `;
      case 'ghost':
        return css`
          background: transparent;
          color: ${theme.colors.purple};
          &:hover:not(:disabled) {
            background: ${theme.colors.lavender};
            transform: translateY(-2px);
          }
        `;
      case 'danger':
        return css`
          background: ${theme.colors.error};
          color: white;
          &:hover:not(:disabled) {
            background: #d32f2f;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(211, 47, 47, 0.3);
          }
        `;
      default:
        return css`
          background: linear-gradient(135deg, ${theme.colors.purple}, ${theme.colors.charlotte});
          color: white;
          &:hover:not(:disabled) {
            background: linear-gradient(135deg, ${theme.colors.charlotte}, ${theme.colors.purple});
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(147, 112, 219, 0.4);
          }
        `;
    }
  }}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      transform: none !important;
      box-shadow: none !important;
    `}

  ${({ loading }) =>
    loading &&
    css`
      cursor: wait;
      pointer-events: none;
    `}
`;

const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// поддерживаем пропсы ссылок при as={Link}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button: React.FC<ButtonProps & { as?: any; to?: string }> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  children,
  onClick,
  type = 'button',
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      loading={loading}
      onClick={onClick}
      type={type}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {children}
    </StyledButton>
  );
};

export default Button; 