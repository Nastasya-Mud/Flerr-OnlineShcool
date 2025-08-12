import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, MessageCircle } from 'lucide-react';
import { Card, CardBody, CardBadge } from './UI';

interface ReviewCardProps {
  review: {
    id: string;
    user: {
      name: string;
      avatar?: string;
    };
    course?: {
      title: string;
      slug: string;
    };
    rating: number;
    title: string;
    content: string;
    date: string;
    helpfulCount: number;
    isVerified?: boolean;
  };
  onHelpfulClick?: (reviewId: string) => void;
}

const ReviewContainer = styled(Card)`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.lightLavender};
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const UserAvatar = styled.div<{ src?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ src, theme }) => 
    src ? `url(${src}) center/cover` : theme.colors.lavender
  };
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 600;
  font-size: 16px;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2px;
`;

const ReviewMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textLight};
`;

const CourseLink = styled.a`
  color: ${({ theme }) => theme.colors.purple};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const RatingStars = styled.div`
  display: flex;
  gap: 2px;
`;

const StarIcon = styled(Star)<{ filled: boolean }>`
  color: ${({ theme, filled }) => 
    filled ? theme.colors.warning : theme.colors.lightLavender
  };
  fill: ${({ filled }) => filled ? 'currentColor' : 'none'};
`;

const ReviewTitle = styled.h4`
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const ReviewContent = styled.p`
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  font-size: 14px;
`;

const ReviewFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.lightLavender};
`;

const ReviewDate = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textLight};
`;

const HelpfulButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 12px;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 16px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.lavender};
    color: ${({ theme }) => theme.colors.purple};
  }
`;

const ReviewCard: React.FC<ReviewCardProps> = ({ review, onHelpfulClick }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        size={14}
        filled={index < rating}
      />
    ));
  };

  const getUserInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ReviewContainer>
        <CardBody>
          <ReviewHeader>
            <UserAvatar src={review.user.avatar}>
              {!review.user.avatar && getUserInitials(review.user.name)}
            </UserAvatar>
            <UserInfo>
              <UserName>{review.user.name}</UserName>
              <ReviewMeta>
                <RatingStars>
                  {renderStars(review.rating)}
                </RatingStars>
                {review.course && (
                  <>
                    <span>•</span>
                    <CourseLink href={`/courses/${review.course.slug}`}>
                      {review.course.title}
                    </CourseLink>
                  </>
                )}
              </ReviewMeta>
            </UserInfo>
            {review.isVerified && (
              <CardBadge variant="success">Проверенный</CardBadge>
            )}
          </ReviewHeader>

          <ReviewTitle>{review.title}</ReviewTitle>
          <ReviewContent>{review.content}</ReviewContent>

          <ReviewFooter>
            <ReviewDate>{review.date}</ReviewDate>
            <HelpfulButton
              onClick={() => onHelpfulClick?.(review.id)}
            >
              <ThumbsUp size={14} />
              Полезно ({review.helpfulCount})
            </HelpfulButton>
          </ReviewFooter>
        </CardBody>
      </ReviewContainer>
    </motion.div>
  );
};

export default ReviewCard; 