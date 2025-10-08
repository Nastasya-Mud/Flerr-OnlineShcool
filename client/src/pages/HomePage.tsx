import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ArrowRight, Play, Star, Users, Award, BookOpen } from 'lucide-react';
import { coursesAPI } from '../api/courses';
import { instructorsAPI } from '../api/instructors';
import WorksCarousel from '../components/Carousel/WorksCarousel';

const HeroSection = styled.section`
  /* Живые персиковые и терракотовые переливы */
  background: radial-gradient(1400px 700px at 10% -5%, rgba(244,162,97,0.18), transparent 60%),
              radial-gradient(1200px 600px at 90% 10%, rgba(217,119,87,0.15), transparent 60%),
              radial-gradient(1000px 500px at 50% 100%, rgba(168,218,220,0.12), transparent 60%),
              var(--color-background);
  padding: calc(var(--spacing-xxl) + 60px) 0 calc(var(--spacing-xxl) + 20px) 0;
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  /* Ботанические стебли у нижней кромки (терракотовые и персиковые) */
  &::before {
    content: '';
    position: absolute;
    inset: 0 0 0 0;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 600' preserveAspectRatio='xMidYMax slice'><defs><linearGradient id='g1' x1='0' y1='0' x2='0' y2='1'><stop offset='0%' stop-color='rgba(217,119,87,0.12)'/><stop offset='100%' stop-color='rgba(217,119,87,0)'/></linearGradient><linearGradient id='g2' x1='0' y1='0' x2='0' y2='1'><stop offset='0%' stop-color='rgba(244,162,97,0.14)'/><stop offset='100%' stop-color='rgba(244,162,97,0)'/></linearGradient></defs><g fill='none' stroke='url(%23g1)' stroke-width='2.5' stroke-linecap='round' opacity='0.7'><path d='M80 600 C120 520,100 440,70 360'/> <path d='M160 600 C210 480,180 400,160 320'/> <path d='M280 600 C330 500,320 420,320 320'/> <path d='M420 600 C460 520,460 440,440 320'/> <path d='M580 600 C620 520,620 430,600 330'/> <path d='M760 600 C800 520,800 430,780 330'/> <path d='M940 600 C980 520,980 430,960 330'/> <path d='M1120 600 C1160 520,1160 430,1140 330'/> <path d='M1300 600 C1340 520,1340 430,1320 330'/></g><g fill='url(%23g2)' opacity='0.6'><circle cx='210' cy='360' r='22'/><circle cx='640' cy='340' r='20'/><circle cx='1020' cy='370' r='18'/><circle cx='1280' cy='350' r='16'/></g></svg>");
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    opacity: 0.85;
    pointer-events: none;
  }
  
  /* Лёгкая дымка сверху для читабельности текста */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 35%;
    background: linear-gradient(to bottom, rgba(250,246,242,0.8), rgba(250,246,242,0));
    pointer-events: none;
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
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
  line-height: 1.15;
  font-family: var(--font-secondary);
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2.75rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.35rem;
  color: var(--color-text-light);
  margin-bottom: calc(var(--spacing-xl) + var(--spacing-md));
  line-height: 1.7;
  font-weight: 400;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: calc(var(--spacing-md) + 2px) calc(var(--spacing-xl) + var(--spacing-sm));
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: var(--border-radius-lg);
  font-weight: 600;
  font-size: 1.15rem;
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 20px rgba(217,119,87,0.25);
  
  &:hover {
    background: var(--color-hover-primary);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 14px 32px rgba(217,119,87,0.35);
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
  padding: calc(var(--spacing-xxl) + var(--spacing-lg)) 0;
  background: var(--color-background);
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.75rem;
  font-family: var(--font-secondary);
  color: var(--color-text);
  margin-bottom: calc(var(--spacing-xl) + var(--spacing-md));
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: calc(var(--spacing-xl) * 1.2);
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

const CourseCard = styled(motion.div)`
  background: white;
  border-radius: calc(var(--border-radius-lg) + 4px);
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(217,119,87,0.08), 0 2px 4px rgba(244,162,97,0.05);
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 36px rgba(217,119,87,0.15), 0 8px 12px rgba(244,162,97,0.1);
  }
`;

const CourseImage = styled.div`
  height: 260px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; object-position: top center; filter: saturate(1.05) contrast(1.03); }
`;

const CourseContent = styled.div`
  padding: calc(var(--spacing-lg) + var(--spacing-sm));
`;

const CourseTitle = styled.h3`
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
  font-size: 1.45rem;
  font-weight: 600;
`;

const CourseDescription = styled.p`
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
  font-size: 0.98rem;
  line-height: 1.6;
`;

const CoursePrice = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
`;

const ViewButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  &:hover {
    color: var(--color-hover-primary);
    gap: calc(var(--spacing-sm) + 4px);
    transform: translateX(2px);
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

  const showcase = [
    { id: '1', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200' },
    { id: '2', image: 'https://images.unsplash.com/photo-1508182311256-e3f7d50f2c07?w=1200' },
    { id: '3', image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1200' },
    { id: '4', image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200' },
  ];

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

      {/* Карусель работ */}
      <CoursesPreviewSection>
        <div className="container">
          <SectionTitle>Работы наших студентов</SectionTitle>
          <WorksCarousel items={showcase} />
        </div>
      </CoursesPreviewSection>
    </>
  );
};

export default HomePage; 