import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'spinner' | 'dots' | 'pulse';
  color?: string;
  text?: string;
  fullScreen?: boolean;
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.5;
  }
`;

const LoadingContainer = styled.div<{ fullScreen?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  ${({ fullScreen }) =>
    fullScreen &&
    `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(4px);
    z-index: 9999;
  `}
`;

const Spinner = styled.div<{ size?: string; color?: string }>`
  width: ${({ size }) => {
    switch (size) {
      case 'small':
        return '24px';
      case 'large':
        return '48px';
      default:
        return '32px';
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'small':
        return '24px';
      case 'large':
        return '48px';
      default:
        return '32px';
    }
  }};
  border: 3px solid ${({ theme, color }) => color || theme.colors.lightLavender};
  border-top: 3px solid ${({ theme, color }) => color || theme.colors.purple};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const Dot = styled.div<{ size?: string; color?: string; delay?: number }>`
  width: ${({ size }) => {
    switch (size) {
      case 'small':
        return '6px';
      case 'large':
        return '12px';
      default:
        return '8px';
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'small':
        return '6px';
      case 'large':
        return '12px';
      default:
        return '8px';
    }
  }};
  background: ${({ theme, color }) => color || theme.colors.purple};
  border-radius: 50%;
  animation: ${bounce} 1.4s ease-in-out infinite both;
  animation-delay: ${({ delay }) => delay}s;
`;

const PulseCircle = styled.div<{ size?: string; color?: string }>`
  width: ${({ size }) => {
    switch (size) {
      case 'small':
        return '24px';
      case 'large':
        return '48px';
      default:
        return '32px';
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'small':
        return '24px';
      case 'large':
        return '48px';
      default:
        return '32px';
    }
  }};
  background: ${({ theme, color }) => color || theme.colors.purple};
  border-radius: 50%;
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

const Loading: React.FC<LoadingProps> = ({
  size = 'medium',
  variant = 'spinner',
  color,
  text,
  fullScreen = false,
}) => {
  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return (
          <DotsContainer>
            <Dot size={size} color={color} delay={0} />
            <Dot size={size} color={color} delay={0.16} />
            <Dot size={size} color={color} delay={0.32} />
          </DotsContainer>
        );
      case 'pulse':
        return <PulseCircle size={size} color={color} />;
      default:
        return <Spinner size={size} color={color} />;
    }
  };

  return (
    <LoadingContainer fullScreen={fullScreen}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {renderLoader()}
      </motion.div>
      {text && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <LoadingText>{text}</LoadingText>
        </motion.div>
      )}
    </LoadingContainer>
  );
};

export default Loading; 