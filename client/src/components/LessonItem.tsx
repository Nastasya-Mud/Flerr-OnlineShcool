import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Play, Lock, CheckCircle, Clock, FileText, Video } from 'lucide-react';
import { Card, CardBody } from './UI';

interface LessonItemProps {
  lesson: {
    id: string;
    title: string;
    description?: string;
    duration: string;
    type: 'video' | 'text' | 'quiz' | 'assignment';
    isCompleted?: boolean;
    isLocked?: boolean;
    isCurrent?: boolean;
    thumbnail?: string;
  };
  onClick?: () => void;
  showProgress?: boolean;
}

const LessonContainer = styled(Card)<{ isCurrent?: boolean; isCompleted?: boolean }>`
  background: ${({ theme, isCurrent, isCompleted }) => {
    if (isCurrent) return theme.colors.lavender;
    if (isCompleted) return theme.colors.background;
    return 'white';
  }};
  border: 2px solid ${({ theme, isCurrent }) => 
    isCurrent ? theme.colors.purple : theme.colors.lightLavender
  };
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(147, 112, 219, 0.15);
  }
`;

const LessonContent = styled(CardBody)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
`;

const LessonIcon = styled.div<{ type: string; isCompleted?: boolean; isLocked?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${({ theme, type, isCompleted, isLocked }) => {
    if (isLocked) return theme.colors.lightLavender;
    if (isCompleted) return theme.colors.success;
    switch (type) {
      case 'video':
        return theme.colors.purple;
      case 'quiz':
        return theme.colors.warning;
      case 'assignment':
        return theme.colors.error;
      default:
        return theme.colors.charlotte;
    }
  }};
  color: white;
  flex-shrink: 0;
`;

const LessonInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const LessonTitle = styled.h4<{ isCompleted?: boolean }>`
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme, isCompleted }) => 
    isCompleted ? theme.colors.textLight : theme.colors.text
  };
  text-decoration: ${({ isCompleted }) => isCompleted ? 'line-through' : 'none'};
  line-height: 1.3;
`;

const LessonDescription = styled.p`
  margin: 0 0 8px 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const LessonMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textLight};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StatusIndicator = styled.div<{ status: 'completed' | 'current' | 'locked' | 'available' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme, status }) => {
    switch (status) {
      case 'completed':
        return theme.colors.success;
      case 'current':
        return theme.colors.purple;
      case 'locked':
        return theme.colors.lightLavender;
      default:
        return theme.colors.lavender;
    }
  }};
  color: white;
  flex-shrink: 0;
`;

const getLessonIcon = (type: string) => {
  switch (type) {
    case 'video':
      return <Play size={16} />;
    case 'quiz':
      return <FileText size={16} />;
    case 'assignment':
      return <FileText size={16} />;
    default:
      return <FileText size={16} />;
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle size={14} />;
    case 'current':
      return <Play size={14} />;
    case 'locked':
      return <Lock size={14} />;
    default:
      return <Play size={14} />;
  }
};

const LessonItem: React.FC<LessonItemProps> = ({ 
  lesson, 
  onClick, 
  showProgress = false 
}) => {
  const getStatus = () => {
    if (lesson.isCompleted) return 'completed';
    if (lesson.isLocked) return 'locked';
    if (lesson.isCurrent) return 'current';
    return 'available';
  };

  const status = getStatus();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ x: 4 }}
    >
      <LessonContainer
        isCurrent={lesson.isCurrent}
        isCompleted={lesson.isCompleted}
        onClick={onClick}
      >
        <LessonContent>
          <LessonIcon 
            type={lesson.type} 
            isCompleted={lesson.isCompleted}
            isLocked={lesson.isLocked}
          >
            {getLessonIcon(lesson.type)}
          </LessonIcon>
          
          <LessonInfo>
            <LessonTitle isCompleted={lesson.isCompleted}>
              {lesson.title}
            </LessonTitle>
            {lesson.description && (
              <LessonDescription>{lesson.description}</LessonDescription>
            )}
            <LessonMeta>
              <MetaItem>
                <Clock size={12} />
                {lesson.duration}
              </MetaItem>
              <MetaItem>
                {lesson.type === 'video' ? <Video size={12} /> : <FileText size={12} />}
                {lesson.type === 'video' ? 'Видео' : lesson.type === 'quiz' ? 'Тест' : 'Задание'}
              </MetaItem>
            </LessonMeta>
          </LessonInfo>
          
          <StatusIndicator status={status}>
            {getStatusIcon(status)}
          </StatusIndicator>
        </LessonContent>
      </LessonContainer>
    </motion.div>
  );
};

export default LessonItem; 