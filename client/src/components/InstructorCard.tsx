import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Star, MapPin, Award, Instagram, Facebook, Youtube } from 'lucide-react';
import { Card, CardHeader, CardBody, CardFooter, CardImage, CardBadge, Button } from './UI';

interface InstructorCardProps {
  instructor: {
    id: string;
    name: string;
    bio: string;
    image: string;
    experience: string;
    specialization: string[];
    rating: number;
    studentsCount: number;
    coursesCount: number;
    location: string;
    isFeatured?: boolean;
    isVerified?: boolean;
    socialMedia?: {
      instagram?: string;
      facebook?: string;
      youtube?: string;
    };
  };
}

const InstructorImage = styled(CardImage)`
  height: 250px;
`;

const InstructorName = styled.h3`
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.purple};
`;

const InstructorBio = styled.p`
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const InstructorStats = styled.div`
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

const SpecializationTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.lavender};
  color: ${({ theme }) => theme.colors.purple};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 12px;
  margin-bottom: 12px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

const SocialButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textLight};
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.lavender};
    color: ${({ theme }) => theme.colors.purple};
  }
`;

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <Card hover variant="elevated">
        <InstructorImage src={instructor.image} />
        {instructor.isFeatured && <CardBadge variant="warning">Рекомендуемый</CardBadge>}
        {instructor.isVerified && <CardBadge variant="success">Проверенный</CardBadge>}
        
        <CardBody>
          <InstructorName>{instructor.name}</InstructorName>
          <InstructorBio>{instructor.bio}</InstructorBio>
          
          <LocationInfo>
            <MapPin size={14} />
            {instructor.location}
          </LocationInfo>
          
          <InstructorStats>
            <StatItem>
              <Star size={14} />
              {instructor.rating}
            </StatItem>
            <StatItem>
              <Award size={14} />
              {instructor.experience}
            </StatItem>
            <StatItem>
              {instructor.studentsCount} студентов
            </StatItem>
            <StatItem>
              {instructor.coursesCount} курсов
            </StatItem>
          </InstructorStats>
          
          <SpecializationTags>
            {instructor.specialization.map((spec, index) => (
              <Tag key={index}>{spec}</Tag>
            ))}
          </SpecializationTags>
          
          {instructor.socialMedia && (
            <SocialLinks>
              {instructor.socialMedia.instagram && (
                <SocialButton as="a" href={instructor.socialMedia.instagram} target="_blank">
                  <Instagram size={16} />
                </SocialButton>
              )}
              {instructor.socialMedia.facebook && (
                <SocialButton as="a" href={instructor.socialMedia.facebook} target="_blank">
                  <Facebook size={16} />
                </SocialButton>
              )}
              {instructor.socialMedia.youtube && (
                <SocialButton as="a" href={instructor.socialMedia.youtube} target="_blank">
                  <Youtube size={16} />
                </SocialButton>
              )}
            </SocialLinks>
          )}
        </CardBody>
        
        <CardFooter>
          <Button variant="outline" fullWidth>
            Посмотреть курсы
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default InstructorCard; 