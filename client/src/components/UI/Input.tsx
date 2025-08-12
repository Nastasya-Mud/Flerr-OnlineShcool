import React, { forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  className?: string;
}

const InputContainer = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.purple};
  font-size: 14px;
`;

const InputWrapper = styled.div<{ hasError?: boolean; isFocused?: boolean; disabled?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  background: white;
  border: 2px solid ${({ theme, hasError, isFocused }) => {
    if (hasError) return theme.colors.error;
    if (isFocused) return theme.colors.purple;
    return theme.colors.lightLavender;
  }};
  border-radius: 12px;
  transition: all 0.2s ease;
  overflow: hidden;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      box-shadow: 0 0 0 3px rgba(147, 112, 219, 0.1);
    `}
`;

const StyledInput = styled(motion.input)<{ size?: string; hasIcon?: boolean }>`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ size, hasIcon }) => {
    const basePadding = size === 'small' ? '8px 12px' : size === 'large' ? '16px 20px' : '12px 16px';
    return hasIcon ? `0 16px 0 48px` : basePadding;
  }};
  min-height: ${({ size }) => (size === 'small' ? '36px' : size === 'large' ? '56px' : '48px')};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textLight};
  z-index: 1;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textLight};
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

const ErrorMessage = styled(motion.div)`
  margin-top: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.error};
  font-weight: 500;
`;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      placeholder,
      value,
      onChange,
      onBlur,
      onFocus,
      label,
      error,
      disabled = false,
      required = false,
      fullWidth = false,
      size = 'medium',
      icon,
      className,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
      <InputContainer fullWidth={fullWidth} className={className}>
        {label && (
          <InputLabel>
            {label}
            {required && <span style={{ color: '#d32f2f' }}> *</span>}
          </InputLabel>
        )}
        <InputWrapper hasError={!!error} isFocused={isFocused} disabled={disabled}>
          {icon && <InputIcon>{icon}</InputIcon>}
          <StyledInput
            ref={ref}
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            required={required}
            size={size}
            hasIcon={!!icon}
            {...props}
          />
          {type === 'password' && (
            <PasswordToggle
              type="button"
              onClick={togglePasswordVisibility}
              disabled={disabled}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </PasswordToggle>
          )}
        </InputWrapper>
        {error && (
          <ErrorMessage
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </ErrorMessage>
        )}
      </InputContainer>
    );
  }
);

Input.displayName = 'Input';

export default Input; 