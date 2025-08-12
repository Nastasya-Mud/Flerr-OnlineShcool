import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  hover?: boolean;
  onClick?: () => void;
  className?: string;
}

const StyledCard = styled(motion.div)<CardProps>`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'elevated':
        return `
          box-shadow: 0 8px 32px rgba(147, 112, 219, 0.15);
          border: 1px solid ${theme.colors.lavender};
        `;
      case 'outlined':
        return `
          border: 2px solid ${theme.colors.lavender};
          box-shadow: none;
        `;
      default:
        return `
          box-shadow: 0 4px 20px rgba(147, 112, 219, 0.1);
          border: 1px solid ${theme.colors.lightLavender};
        `;
    }
  }}

  ${({ hover, onClick }) =>
    hover &&
    `
    cursor: pointer;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(147, 112, 219, 0.2);
    }
  `}
`;

const CardHeader = styled.div`
  padding: 20px 24px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightLavender};
`;

const CardBody = styled.div`
  padding: 20px 24px;
`;

const CardFooter = styled.div`
  padding: 16px 24px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.lightLavender};
  background: ${({ theme }) => theme.colors.background};
`;

const CardImage = styled.div<{ src: string; height?: string }>`
  width: 100%;
  height: ${({ height }) => height || '200px'};
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(147, 112, 219, 0.1),
      rgba(230, 230, 250, 0.1)
    );
  }
`;

const CardBadge = styled.span<{ variant?: 'success' | 'warning' | 'info' | 'error' }>`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'success':
        return `
          background: ${theme.colors.success};
          color: white;
        `;
      case 'warning':
        return `
          background: ${theme.colors.warning};
          color: white;
        `;
      case 'error':
        return `
          background: ${theme.colors.error};
          color: white;
        `;
      default:
        return `
          background: ${theme.colors.purple};
          color: white;
        `;
    }
  }}
`;

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hover = false,
  onClick,
  className,
  ...props
}) => {
  return (
    <StyledCard
      variant={variant}
      hover={hover}
      onClick={onClick}
      className={className}
      whileHover={hover ? { scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

export { Card, CardHeader, CardBody, CardFooter, CardImage, CardBadge };
export default Card; 