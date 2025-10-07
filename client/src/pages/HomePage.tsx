import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ArrowRight, Play, Star, Users, Award, BookOpen } from 'lucide-react';
import { coursesAPI } from '../api/courses';
import { instructorsAPI } from '../api/instructors';

const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--color-background) 0%, var(--color-background-secondary) 100%);
  padding: var(--spacing-xxl) 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="petals" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="2" fill="%23E6E6FA" opacity="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23petals)"/></svg>');
    opacity: 0.5;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
`;

const CTAButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: var(--border-radius-lg);
  font-weight: 600;
  font-size: 1.125rem;
  transition: var(--transition-fast);
  box-shadow: var(--shadow-md);
  
  &:hover {
    background: var(--color-hover-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;

const FeaturesSection = styled.section`
  padding: var(--spacing-xxl) 0;
  background: white;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

const FeatureCard = styled(motion.div)`
  background: var(--color-background);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
  color: white;
`;

const StatsSection = styled.section`
  padding: var(--spacing-xxl) 0;
  background: var(--color-background-secondary);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
`;

const StatItem = styled(motion.div)`
  h3 {
    font-size: 2.5rem;
    color: var(--color-primary);
    margin-bottom: var(--spacing-sm);
  }
  
  p {
    color: var(--color-text-light);
    font-size: 1.125rem;
  }
`;

const CoursesPreviewSection = styled.section`
  padding: var(--spacing-xxl) 0;
  background: white;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-xl);
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

const CourseCard = styled(motion.div)`
  background: var(--color-background);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const CourseImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;

const CourseContent = styled.div`
  padding: var(--spacing-lg);
`;

const CourseTitle = styled.h3`
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
`;

const CourseDescription = styled.p`
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
`;

const CoursePrice = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
`;

const ViewButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition-fast);
  
  &:hover {
    color: var(--color-hover-primary);
    gap: var(--spacing-md);
  }
`;

const HomePage: React.FC = () => {
  const [popularCourses, setPopularCourses] = useState<any[]>([]);
  const [featuredInstructors, setFeaturedInstructors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const features = [
    {
      icon: <BookOpen size={32} />,
      title: 'Профессиональные курсы',
      description: 'Изучайте флористику с ведущими экспертами отрасли',
    },
    {
      icon: <Users size={32} />,
      title: 'Сообщество',
      description: 'Присоединяйтесь к сообществу флористов и делитесь опытом',
    },
    {
      icon: <Award size={32} />,
      title: 'Сертификация',
      description: 'Получите сертификат по окончании курса',
    },
  ];

  const stats = [
    { number: '1000+', label: 'Студентов' },
    { number: '50+', label: 'Курсов' },
    { number: '20+', label: 'Преподавателей' },
    { number: '95%', label: 'Довольных клиентов' },
  ];

  useEffect(() => {
    const load = async () => {
      try {
        const [coursesRes, featuredRes] = await Promise.all([
          coursesAPI.getAll({ limit: 6, sort: 'createdAt', order: 'desc' }).catch(() => ({ data: [] })),
          instructorsAPI.getFeatured().catch(() => ({ data: [] })),
        ]);
        setPopularCourses(Array.isArray(coursesRes.data) ? coursesRes.data : []);
        setFeaturedInstructors(Array.isArray(featuredRes.data) ? featuredRes.data : []);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Изучайте искусство флористики онлайн
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Превратите свое увлечение цветами в прибыльную профессию. 
            Изучайте с лучшими преподавателями, практикуйтесь и создавайте 
            прекрасные композиции.
          </HeroSubtitle>
          <CTAButton
            to="/courses"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Начать обучение
            <ArrowRight size={20} />
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <div className="container">
          <SectionTitle>Почему выбирают Flerr?</SectionTitle>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </div>
      </FeaturesSection>

      <StatsSection>
        <div className="container">
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </StatItem>
            ))}
          </StatsGrid>
        </div>
      </StatsSection>

      <CoursesPreviewSection>
        <div className="container">
          <SectionTitle>Популярные курсы</SectionTitle>
          <CoursesGrid>
            {(loading ? [] : popularCourses).map((course: any, index: number) => (
              <CourseCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CourseImage>
                  <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </CourseImage>
                <CourseContent>
                  <CourseTitle>{course.title}</CourseTitle>
                  <CourseDescription>{course.shortDescription || course.description}</CourseDescription>
                  <CoursePrice>{course.price ? `${course.price} ₽` : 'Бесплатно'}</CoursePrice>
                  <ViewButton to="/courses">
                    Подробнее
                    <ArrowRight size={16} />
                  </ViewButton>
                </CourseContent>
              </CourseCard>
            ))}
          </CoursesGrid>
        </div>
      </CoursesPreviewSection>

      {featuredInstructors.length > 0 && (
        <CoursesPreviewSection>
          <div className="container">
            <SectionTitle>Наши преподаватели</SectionTitle>
            <CoursesGrid>
              {featuredInstructors.map((inst: any, index: number) => (
                <CourseCard key={inst._id || index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                  <CourseImage>
                    <img src={inst?.user?.avatar || 'https://via.placeholder.com/300x200?text=Instructor'} alt={inst?.user?.firstName || 'Инструктор'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </CourseImage>
                  <CourseContent>
                    <CourseTitle>{`${inst?.user?.firstName || ''} ${inst?.user?.lastName || ''}`.trim() || 'Преподаватель'}</CourseTitle>
                    <CourseDescription>{inst.bio?.slice(0, 140) || 'Преподаватель школы Flerr'}</CourseDescription>
                    <ViewButton to="/instructors">
                      Все преподаватели
                      <ArrowRight size={16} />
                    </ViewButton>
                  </CourseContent>
                </CourseCard>
              ))}
            </CoursesGrid>
          </div>
        </CoursesPreviewSection>
      )}
    </>
  );
};

export default HomePage; 