import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number; // 0-100
  label?: string;
  showPercentage?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  animated?: boolean;
}

const ProgressContainer = styled.div`
  width: 100%;
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const ProgressTrack = styled.div<{ size?: string }>`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightLavender};
  border-radius: ${({ size }) => size === 'small' ? '4px' : size === 'large' ? '12px' : '8px'};
  overflow: hidden;
  height: ${({ size }) => size === 'small' ? '4px' : size === 'large' ? '12px' : '8px'};
`;

const ProgressFill = styled(motion.div)<{ 
  progress: number; 
  size?: string; 
  color?: string;
  animated?: boolean;
}>`
  height: 100%;
  background: ${({ theme, color }) => color || `linear-gradient(90deg, ${theme.colors.purple}, ${theme.colors.charlotte})`};
  border-radius: ${({ size }) => size === 'small' ? '4px' : size === 'large' ? '12px' : '8px'};
  width: ${({ progress }) => progress}%;
  transition: ${({ animated }) => animated ? 'width 0.8s ease-out' : 'none'};
`;

const PercentageText = styled.span`
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 600;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  showPercentage = true,
  size = 'medium',
  color,
  animated = true,
}) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <ProgressContainer>
      {(label || showPercentage) && (
        <ProgressLabel>
          {label && <span>{label}</span>}
          {showPercentage && (
            <PercentageText>{Math.round(clampedProgress)}%</PercentageText>
          )}
        </ProgressLabel>
      )}
      <ProgressTrack size={size}>
        <ProgressFill
          progress={clampedProgress}
          size={size}
          color={color}
          animated={animated}
          initial={animated ? { width: 0 } : {}}
          animate={animated ? { width: `${clampedProgress}%` } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </ProgressTrack>
    </ProgressContainer>
  );
};

export default ProgressBar; 