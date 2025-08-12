import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Star, Clock, Users, BookOpen, Play } from 'lucide-react';
import { Card, CardHeader, CardBody, CardFooter, CardImage, CardBadge, Button } from './UI';

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    originalPrice?: number;
    duration: string;
    level: string;
    rating: number;
    studentsCount: number;
    lessonsCount: number;
    category: string;
    isNew?: boolean;
    isPopular?: boolean;
    slug: string;
  };
}

const CourseImage = styled(CardImage)`
  height: 200px;
`;

const CourseTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.purple};
  line-height: 1.3;
`;

const CourseDescription = styled.p`
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CourseStats = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textLight};
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const CurrentPrice = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.purple};
`;

const OriginalPrice = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: line-through;
`;

const DiscountBadge = styled.span`
  background: ${({ theme }) => theme.colors.success};
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
`;

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const discountPercentage = course.originalPrice 
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <Card hover>
        <CourseImage src={course.image} />
        {course.isNew && <CardBadge variant="success">Новый</CardBadge>}
        {course.isPopular && <CardBadge variant="warning">Популярный</CardBadge>}
        
        <CardBody>
          <CourseTitle>{course.title}</CourseTitle>
          <CourseDescription>{course.description}</CourseDescription>
          
          <CourseStats>
            <StatItem>
              <Star size={14} />
              {course.rating}
            </StatItem>
            <StatItem>
              <Clock size={14} />
              {course.duration}
            </StatItem>
            <StatItem>
              <Users size={14} />
              {course.studentsCount}
            </StatItem>
            <StatItem>
              <BookOpen size={14} />
              {course.lessonsCount} уроков
            </StatItem>
          </CourseStats>
          
          <PriceContainer>
            <CurrentPrice>{course.price} ₽</CurrentPrice>
            {course.originalPrice && (
              <>
                <OriginalPrice>{course.originalPrice} ₽</OriginalPrice>
                <DiscountBadge>-{discountPercentage}%</DiscountBadge>
              </>
            )}
          </PriceContainer>
        </CardBody>
        
        <CardFooter>
          <Button
            variant="primary"
            fullWidth
            as={Link}
            to={`/courses/${course.slug}`}
          >
            <Play size={16} />
            Подробнее
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CourseCard; 