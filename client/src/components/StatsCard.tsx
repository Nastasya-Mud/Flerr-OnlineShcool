import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card, CardBody } from './UI';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: string;
}

const StatsContainer = styled(Card)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.lavender}, ${({ theme }) => theme.colors.lightLavender});
  border: none;
  box-shadow: 0 4px 20px rgba(147, 112, 219, 0.15);
`;

const StatsContent = styled(CardBody)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
`;

const IconContainer = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${({ theme, color }) => color || theme.colors.purple};
  color: white;
  flex-shrink: 0;
`;

const StatsInfo = styled.div`
  flex: 1;
`;

const StatsTitle = styled.h3`
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textLight};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StatsValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.purple};
  margin-bottom: 4px;
`;

const TrendIndicator = styled.div<{ isPositive: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme, isPositive }) => 
    isPositive ? theme.colors.success : theme.colors.error
  };
`;

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  icon, 
  trend, 
  color 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <StatsContainer>
        <StatsContent>
          <IconContainer color={color}>
            {icon}
          </IconContainer>
          <StatsInfo>
            <StatsTitle>{title}</StatsTitle>
            <StatsValue>{value}</StatsValue>
            {trend && (
              <TrendIndicator isPositive={trend.isPositive}>
                {trend.isPositive ? '↗' : '↘'} {trend.value}%
              </TrendIndicator>
            )}
          </StatsInfo>
        </StatsContent>
      </StatsContainer>
    </motion.div>
  );
};

export default StatsCard; 