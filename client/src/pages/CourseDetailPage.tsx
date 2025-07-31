import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { 
  Star, Clock, Users, BookOpen, Play, ChevronRight, ChevronDown, 
  CheckCircle, Heart, Share2, ShoppingCart, Award, Target, 
  Calendar, MapPin, Phone, Mail, Globe, Instagram, Facebook 
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const Container = styled.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  padding: var(--spacing-xxl) 0;
  margin-bottom: var(--spacing-xxl);
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xxl);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const CourseInfo = styled.div``;

const CourseTitle = styled(motion.h1)`
  color: var(--color-text);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CourseSubtitle = styled(motion.p)`
  color: var(--color-text-light);
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
`;

const CourseMeta = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-muted);
    font-size: 0.9rem;
  }
`;

const CourseImage = styled.div<{ $imageUrl: string }>`
  height: 400px;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  background-image: ${props => props.$imageUrl ? `url(${props.$imageUrl})` : 'none'};
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius-lg);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    border-radius: var(--border-radius-lg);
  }
`;

const PlayButton = styled(motion.button)`
  position: relative;
  z-index: 2;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: white;
    transform: scale(1.1);
  }
  
  svg {
    color: var(--color-primary);
    margin-left: 4px;
  }
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-xxl);
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const ContentSection = styled.section`
  margin-bottom: var(--spacing-xxl);
`;

const SectionTitle = styled.h2`
  color: var(--color-text);
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
`;

const Description = styled.div`
  color: var(--color-text-light);
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xl);
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  border-left: 4px solid var(--color-primary);
  
  h4 {
    color: var(--color-text);
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
  }
  
  p {
    color: var(--color-text-light);
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const LessonsSection = styled.div`
  margin-bottom: var(--spacing-xl);
`;

const LessonItem = styled.div<{ $isCompleted?: boolean }>`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-md);
  border-left: 4px solid ${props => props.$isCompleted ? 'var(--color-success)' : 'var(--color-border)'};
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
`;

const LessonHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
`;

const LessonTitle = styled.h4`
  color: var(--color-text);
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

const LessonDuration = styled.span`
  color: var(--color-text-muted);
  font-size: 0.875rem;
`;

const LessonDescription = styled.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.5;
`;

const Sidebar = styled.aside`
  position: sticky;
  top: var(--spacing-lg);
  height: fit-content;
`;

const PurchaseCard = styled(motion.div)`
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  margin-bottom: var(--spacing-lg);
`;

const PriceInfo = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-lg);
`;

const CurrentPrice = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
`;

const OriginalPrice = styled.div`
  font-size: 1.25rem;
  color: var(--color-text-muted);
  text-decoration: line-through;
  margin-bottom: var(--spacing-sm);
`;

const Discount = styled.div`
  background: var(--color-success);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
`;

const PrimaryButton = styled.button`
  width: 100%;
  padding: var(--spacing-md);
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  
  &:hover {
    background: var(--color-hover-primary);
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled.button`
  width: 100%;
  padding: var(--spacing-md);
  background: white;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  
  &:hover {
    background: var(--color-primary);
    color: white;
  }
`;

const CourseStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
`;

const StatItem = styled.div`
  text-align: center;
  padding: var(--spacing-md);
  background: var(--color-background-secondary);
  border-radius: var(--border-radius-md);
  
  .stat-number {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 0.25rem;
  }
  
  .stat-label {
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }
`;

const InstructorCard = styled(motion.div)`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  text-align: center;
`;

const InstructorAvatar = styled.div<{ $imageUrl: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  background-image: ${props => props.$imageUrl ? `url(${props.$imageUrl})` : 'none'};
  background-size: cover;
  background-position: center;
  margin: 0 auto var(--spacing-md);
`;

const InstructorName = styled.h4`
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`;

const InstructorBio = styled.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: var(--spacing-md);
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  
  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--color-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    text-decoration: none;
    transition: all 0.2s ease;
    
    &:hover {
      background: var(--color-primary);
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const CourseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isAuthenticated } = useAuth();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Моковые данные для демонстрации
  const mockCourse = {
    _id: '1',
    title: 'Профессия флорист',
    slug: 'florist-profession',
    description: 'Полный курс для начинающих флористов. Изучите основы композиции, работу с цветами и создание букетов. Курс включает практические занятия и бонусные уроки по бизнесу и социальным сетям.',
    shortDescription: 'Станьте профессиональным флористом с нуля',
    price: 25000,
    originalPrice: 30000,
    image: '/images/course-1.jpg',
    videoPreview: '/videos/course-preview.mp4',
    duration: '3 месяца',
    level: 'beginner',
    category: 'profession',
    rating: 4.8,
    studentsCount: 156,
    lessonsCount: 24,
    instructor: {
      _id: '1',
      name: 'Анна Петрова',
      avatar: '/images/instructor-1.jpg',
      bio: 'Профессиональный флорист с 10-летним опытом работы. Основатель студии "Цветочная мастерская".',
      experience: 10,
      rating: 4.9,
      socialMedia: {
        instagram: '@anna_florist',
        facebook: 'anna.petrovna',
        website: 'www.annaflorist.com'
      }
    },
    lessons: [
      {
        _id: '1',
        title: 'Введение в флористику',
        description: 'Основные принципы и инструменты флориста',
        duration: '45 мин',
        isFree: true,
        isCompleted: false
      },
      {
        _id: '2',
        title: 'Основы композиции',
        description: 'Изучаем принципы создания гармоничных композиций',
        duration: '60 мин',
        isFree: false,
        isCompleted: false
      },
      {
        _id: '3',
        title: 'Работа с цветами',
        description: 'Правила обработки и подготовки цветов',
        duration: '75 мин',
        isFree: false,
        isCompleted: false
      },
      {
        _id: '4',
        title: 'Создание букетов',
        description: 'Практическое занятие по созданию букетов',
        duration: '90 мин',
        isFree: false,
        isCompleted: false
      }
    ],
    features: [
      {
        title: 'Практические занятия',
        description: 'Каждый урок включает практические задания'
      },
      {
        title: 'Бонусные уроки',
        description: 'Уроки по бизнесу и продвижению в соцсетях'
      },
      {
        title: 'Сертификат',
        description: 'Получите сертификат по завершении курса'
      },
      {
        title: 'Поддержка',
        description: 'Индивидуальная поддержка от преподавателя'
      }
    ],
    requirements: [
      'Желание учиться и развиваться',
      'Базовые навыки работы с компьютером',
      'Доступ к интернету'
    ],
    outcomes: [
      'Создание профессиональных композиций',
      'Знание основ флористики',
      'Навыки ведения бизнеса',
      'Умение продвигать себя в соцсетях'
    ]
  };

  useEffect(() => {
    // Имитация загрузки данных
    setTimeout(() => {
      setCourse(mockCourse);
      setLoading(false);
    }, 1000);
  }, [slug]);

  const getDiscountPercentage = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  const handleEnroll = () => {
    if (!isAuthenticated) {
      toast.error('Войдите в аккаунт для записи на курс');
      return;
    }
    toast.success('Вы успешно записались на курс!');
    setIsEnrolled(true);
  };

  const handlePreview = () => {
    toast.info('Воспроизведение превью курса');
  };

  if (loading) {
    return (
      <Container>
        <div style={{ textAlign: 'center', padding: 'var(--spacing-xxl) 0' }}>
          Загрузка курса...
        </div>
      </Container>
    );
  }

  if (!course) {
    return (
      <Container>
        <div style={{ textAlign: 'center', padding: 'var(--spacing-xxl) 0' }}>
          Курс не найден
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <CourseInfo>
            <CourseTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {course.title}
            </CourseTitle>
            <CourseSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {course.shortDescription}
            </CourseSubtitle>
            <CourseMeta
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span>
                <Star size={16} />
                {course.rating}
              </span>
              <span>
                <Clock size={16} />
                {course.duration}
              </span>
              <span>
                <Users size={16} />
                {course.studentsCount} студентов
              </span>
              <span>
                <BookOpen size={16} />
                {course.lessonsCount} уроков
              </span>
            </CourseMeta>
          </CourseInfo>
          <CourseImage $imageUrl={course.image}>
            <PlayButton
              onClick={handlePreview}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={32} />
            </PlayButton>
          </CourseImage>
        </HeroContent>
      </HeroSection>

      <MainContent>
        <div>
          <ContentSection>
            <SectionTitle>Описание курса</SectionTitle>
            <Description>{course.description}</Description>
          </ContentSection>

          <ContentSection>
            <SectionTitle>Что вы получите</SectionTitle>
            <FeaturesGrid>
              {course.features.map((feature: any, index: number) => (
                <FeatureCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </FeatureCard>
              ))}
            </FeaturesGrid>
          </ContentSection>

          <ContentSection>
            <SectionTitle>Программа курса</SectionTitle>
            <LessonsSection>
              {course.lessons.map((lesson: any, index: number) => (
                <LessonItem key={lesson._id} $isCompleted={lesson.isCompleted}>
                  <LessonHeader>
                    <LessonTitle>
                      {lesson.isCompleted && <CheckCircle size={16} color="var(--color-success)" />}
                      {lesson.title}
                      {lesson.isFree && (
                        <span style={{ 
                          background: 'var(--color-success)', 
                          color: 'white', 
                          padding: '0.25rem 0.5rem', 
                          borderRadius: 'var(--border-radius-sm)', 
                          fontSize: '0.75rem' 
                        }}>
                          Бесплатно
                        </span>
                      )}
                    </LessonTitle>
                    <LessonDuration>{lesson.duration}</LessonDuration>
                  </LessonHeader>
                  <LessonDescription>{lesson.description}</LessonDescription>
                </LessonItem>
              ))}
            </LessonsSection>
          </ContentSection>

          <ContentSection>
            <SectionTitle>Требования</SectionTitle>
            <ul style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              {course.requirements.map((req: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{req}</li>
              ))}
            </ul>
          </ContentSection>

          <ContentSection>
            <SectionTitle>Результаты обучения</SectionTitle>
            <ul style={{ color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              {course.outcomes.map((outcome: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{outcome}</li>
              ))}
            </ul>
          </ContentSection>
        </div>

        <Sidebar>
          <PurchaseCard
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <PriceInfo>
              <CurrentPrice>{course.price.toLocaleString()} ₽</CurrentPrice>
              {course.originalPrice > course.price && (
                <>
                  <OriginalPrice>{course.originalPrice.toLocaleString()} ₽</OriginalPrice>
                  <Discount>-{getDiscountPercentage(course.originalPrice, course.price)}%</Discount>
                </>
              )}
            </PriceInfo>

            <CourseStats>
              <StatItem>
                <div className="stat-number">{course.lessonsCount}</div>
                <div className="stat-label">Уроков</div>
              </StatItem>
              <StatItem>
                <div className="stat-number">{course.duration}</div>
                <div className="stat-label">Длительность</div>
              </StatItem>
            </CourseStats>

            <ActionButtons>
              {isEnrolled ? (
                <PrimaryButton>
                  <BookOpen size={20} />
                  Перейти к курсу
                </PrimaryButton>
              ) : (
                <PrimaryButton onClick={handleEnroll}>
                  <ShoppingCart size={20} />
                  Записаться на курс
                </PrimaryButton>
              )}
              <SecondaryButton>
                <Heart size={20} />
                Добавить в избранное
              </SecondaryButton>
            </ActionButtons>

            <div style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
              Гарантия возврата денег в течение 30 дней
            </div>
          </PurchaseCard>

          <InstructorCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <InstructorAvatar $imageUrl={course.instructor.avatar} />
            <InstructorName>{course.instructor.name}</InstructorName>
            <InstructorBio>{course.instructor.bio}</InstructorBio>
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                Опыт: {course.instructor.experience} лет
              </span>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginLeft: 'var(--spacing-md)' }}>
                Рейтинг: {course.instructor.rating} ⭐
              </span>
            </div>
            <SocialLinks>
              <a href="#" title="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" title="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" title="Website">
                <Globe size={20} />
              </a>
            </SocialLinks>
          </InstructorCard>
        </Sidebar>
      </MainContent>
    </Container>
  );
};

export default CourseDetailPage; 