import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { 
  BookOpen, Clock, Award, Star, Users, TrendingUp, 
  Calendar, Target, CheckCircle, Play, Plus, 
  BarChart3, PieChart, Activity, ArrowUpRight
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const Container = styled.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`;

const Header = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  margin-bottom: var(--spacing-xxl);
`;

const WelcomeSection = styled.div`
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-lg);
`;

const WelcomeTitle = styled.h1`
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
`;

const WelcomeSubtitle = styled.p`
  color: var(--color-text-light);
  font-size: 1.125rem;
  margin-bottom: var(--spacing-lg);
`;

const QuickActions = styled.div`
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ActionButton = styled(Link)`
  padding: var(--spacing-md) var(--spacing-lg);
  background: white;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: var(--border-radius-md);
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-primary);
    color: white;
    transform: translateY(-2px);
  }
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xxl);
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--color-primary);
  }
`;

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
`;

const StatIcon = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius-md);
  background: ${props => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
`;

const StatLabel = styled.div`
  color: var(--color-text-muted);
  font-size: 0.875rem;
  margin-bottom: var(--spacing-sm);
`;

const StatChange = styled.div<{ $isPositive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: ${props => props.$isPositive ? 'var(--color-success)' : 'var(--color-error)'};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-xxl);
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const Section = styled.section`
  margin-bottom: var(--spacing-xxl);
`;

const SectionTitle = styled.h2`
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

const RecentCourses = styled.div`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
`;

const CourseItem = styled.div`
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
  transition: all 0.2s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: var(--color-background-secondary);
  }
`;

const CourseHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
`;

const CourseTitle = styled.h4`
  color: var(--color-text);
  font-size: 1.125rem;
  font-weight: 600;
`;

const CourseProgress = styled.div`
  font-size: 0.875rem;
  color: var(--color-primary);
  font-weight: 500;
`;

const CourseMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  color: var(--color-text-muted);
  font-size: 0.875rem;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: var(--color-border);
  border-radius: 3px;
  overflow: hidden;
  margin-top: var(--spacing-sm);
  
  .progress-fill {
    height: 100%;
    background: var(--color-success);
    transition: width 0.3s ease;
  }
`;

const ActivityCard = styled.div`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-lg);
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid var(--color-border);
  
  &:last-child {
    border-bottom: none;
  }
`;

const ActivityIcon = styled.div<{ $type: 'course' | 'achievement' | 'certificate' }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  ${props => {
    switch (props.$type) {
      case 'course':
        return 'background: var(--color-primary);';
      case 'achievement':
        return 'background: var(--color-success);';
      case 'certificate':
        return 'background: var(--color-warning);';
      default:
        return '';
    }
  }}
`;

const ActivityContent = styled.div`
  flex: 1;
`;

const ActivityTitle = styled.div`
  color: var(--color-text);
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const ActivityTime = styled.div`
  color: var(--color-text-muted);
  font-size: 0.875rem;
`;

const ChartContainer = styled.div`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`;

const ChartPlaceholder = styled.div`
  height: 200px;
  background: var(--color-background-secondary);
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 1.125rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
  color: var(--color-text-muted);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-md);
  }
  
  p {
    font-size: 1rem;
  }
`;

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>({});
  const [recentCourses, setRecentCourses] = useState<any[]>([]);
  const [activities, setActivities] = useState<any[]>([]);

  // Моковые данные для демонстрации
  const mockStats = {
    totalCourses: 5,
    completedCourses: 2,
    totalHours: 48,
    averageRating: 4.8,
    certificates: 3,
    achievements: 12,
    weeklyProgress: 15,
    monthlyProgress: 25
  };

  const mockRecentCourses = [
    {
      _id: '1',
      title: 'Профессия флорист',
      progress: 75,
      lastAccessed: '2 часа назад',
      instructor: 'Анна Петрова',
      nextLesson: 'Урок 19: Создание свадебных букетов'
    },
    {
      _id: '2',
      title: 'Интерьерные композиции',
      progress: 30,
      lastAccessed: '1 день назад',
      instructor: 'Мария Сидорова',
      nextLesson: 'Урок 7: Работа с сухими цветами'
    },
    {
      _id: '3',
      title: 'Коммерческий флорист',
      progress: 0,
      lastAccessed: '3 дня назад',
      instructor: 'Елена Козлова',
      nextLesson: 'Урок 1: Введение в коммерческую флористику'
    }
  ];

  const mockActivities = [
    {
      _id: '1',
      type: 'course',
      title: 'Завершен курс "Основы флористики"',
      time: '2 дня назад',
      icon: BookOpen
    },
    {
      _id: '2',
      type: 'achievement',
      title: 'Получено достижение "Первые шаги"',
      time: '3 дня назад',
      icon: Award
    },
    {
      _id: '3',
      type: 'certificate',
      title: 'Получен сертификат по курсу "Базовые техники"',
      time: '1 неделю назад',
      icon: CheckCircle
    },
    {
      _id: '4',
      type: 'course',
      title: 'Начат новый курс "Интерьерные композиции"',
      time: '1 неделю назад',
      icon: Play
    }
  ];

  useEffect(() => {
    // Имитация загрузки данных
    setTimeout(() => {
      setStats(mockStats);
      setRecentCourses(mockRecentCourses);
      setActivities(mockActivities);
      setLoading(false);
    }, 1000);
  }, []);

  const getCurrentTime = () => {
    const now = new Date();
    const hour = now.getHours();
    
    if (hour < 12) return 'Доброе утро';
    if (hour < 18) return 'Добрый день';
    return 'Добрый вечер';
  };

  if (loading) {
    return (
      <Container>
        <div style={{ textAlign: 'center', padding: 'var(--spacing-xxl) 0' }}>
          Загрузка панели управления...
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <WelcomeSection>
          <WelcomeTitle>
            {getCurrentTime()}, {user?.firstName || 'Студент'}!
          </WelcomeTitle>
          <WelcomeSubtitle>
            Продолжайте обучение и развивайте свои навыки флориста
          </WelcomeSubtitle>
          <QuickActions>
            <ActionButton to="/courses">
              <BookOpen size={20} />
              Найти курсы
            </ActionButton>
            <ActionButton to="/profile">
              <Target size={20} />
              Мои курсы
            </ActionButton>
            <ActionButton to="/suppliers">
              <Plus size={20} />
              Поставщики
            </ActionButton>
          </QuickActions>
        </WelcomeSection>
      </Header>

      <MainContent>
        <StatsGrid>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StatHeader>
              <StatIcon $color="var(--color-primary)">
                <BookOpen size={24} />
              </StatIcon>
              <StatChange $isPositive={true}>
                <ArrowUpRight size={16} />
                +15%
              </StatChange>
            </StatHeader>
            <StatValue>{stats.totalCourses}</StatValue>
            <StatLabel>Всего курсов</StatLabel>
            <ProgressBar>
              <div 
                className="progress-fill" 
                style={{ width: `${(stats.completedCourses / stats.totalCourses) * 100}%` }}
              />
            </ProgressBar>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <StatHeader>
              <StatIcon $color="var(--color-success)">
                <CheckCircle size={24} />
              </StatIcon>
              <StatChange $isPositive={true}>
                <ArrowUpRight size={16} />
                +8%
              </StatChange>
            </StatHeader>
            <StatValue>{stats.completedCourses}</StatValue>
            <StatLabel>Завершенных курсов</StatLabel>
            <ProgressBar>
              <div 
                className="progress-fill" 
                style={{ width: `${(stats.completedCourses / stats.totalCourses) * 100}%` }}
              />
            </ProgressBar>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StatHeader>
              <StatIcon $color="var(--color-warning)">
                <Clock size={24} />
              </StatIcon>
              <StatChange $isPositive={true}>
                <ArrowUpRight size={16} />
                +12%
              </StatChange>
            </StatHeader>
            <StatValue>{stats.totalHours}</StatValue>
            <StatLabel>Часов обучения</StatLabel>
            <ProgressBar>
              <div 
                className="progress-fill" 
                style={{ width: `${(stats.totalHours / 100) * 100}%` }}
              />
            </ProgressBar>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <StatHeader>
              <StatIcon $color="var(--color-primary)">
                <Star size={24} />
              </StatIcon>
              <StatChange $isPositive={true}>
                <ArrowUpRight size={16} />
                +5%
              </StatChange>
            </StatHeader>
            <StatValue>{stats.averageRating}</StatValue>
            <StatLabel>Средний рейтинг</StatLabel>
            <ProgressBar>
              <div 
                className="progress-fill" 
                style={{ width: `${(stats.averageRating / 5) * 100}%` }}
              />
            </ProgressBar>
          </StatCard>
        </StatsGrid>

        <ContentGrid>
          <div>
            <Section>
              <SectionTitle>
                <BookOpen size={24} />
                Недавние курсы
              </SectionTitle>
              
              {recentCourses.length > 0 ? (
                <RecentCourses>
                  <AnimatePresence mode="wait">
                    {recentCourses.map((course, index) => (
                      <CourseItem
                        key={course._id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CourseHeader>
                          <CourseTitle>{course.title}</CourseTitle>
                          <CourseProgress>{course.progress}%</CourseProgress>
                        </CourseHeader>
                        
                        <CourseMeta>
                          <span>
                            <Users size={14} />
                            {course.instructor}
                          </span>
                          <span>
                            <Clock size={14} />
                            {course.lastAccessed}
                          </span>
                        </CourseMeta>
                        
                        <div style={{ 
                          color: 'var(--color-text-light)', 
                          fontSize: '0.875rem',
                          marginTop: 'var(--spacing-sm)'
                        }}>
                          Следующий урок: {course.nextLesson}
                        </div>
                        
                        <ProgressBar>
                          <div 
                            className="progress-fill" 
                            style={{ width: `${course.progress}%` }}
                          />
                        </ProgressBar>
                      </CourseItem>
                    ))}
                  </AnimatePresence>
                </RecentCourses>
              ) : (
                <EmptyState>
                  <h3>У вас пока нет курсов</h3>
                  <p>Запишитесь на курсы, чтобы начать обучение</p>
                </EmptyState>
              )}
            </Section>

            <Section>
              <SectionTitle>
                <BarChart3 size={24} />
                Прогресс обучения
              </SectionTitle>
              
              <ChartContainer>
                <ChartPlaceholder>
                  <BarChart3 size={48} />
                  <div style={{ marginLeft: 'var(--spacing-md)' }}>
                    График прогресса обучения
                  </div>
                </ChartPlaceholder>
              </ChartContainer>
            </Section>
          </div>

          <div>
            <Section>
              <SectionTitle>
                <Activity size={24} />
                Последняя активность
              </SectionTitle>
              
              <ActivityCard>
                <AnimatePresence mode="wait">
                  {activities.map((activity, index) => (
                    <ActivityItem
                      key={activity._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ActivityIcon $type={activity.type}>
                        <activity.icon size={20} />
                      </ActivityIcon>
                      
                      <ActivityContent>
                        <ActivityTitle>{activity.title}</ActivityTitle>
                        <ActivityTime>{activity.time}</ActivityTime>
                      </ActivityContent>
                    </ActivityItem>
                  ))}
                </AnimatePresence>
              </ActivityCard>
            </Section>

            <Section>
              <SectionTitle>
                <PieChart size={24} />
                Статистика
              </SectionTitle>
              
              <ChartContainer>
                <ChartPlaceholder>
                  <PieChart size={48} />
                  <div style={{ marginLeft: 'var(--spacing-md)' }}>
                    Круговая диаграмма достижений
                  </div>
                </ChartPlaceholder>
              </ChartContainer>
            </Section>

            <Section>
              <SectionTitle>
                <Award size={24} />
                Достижения
              </SectionTitle>
              
              <ActivityCard>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(2, 1fr)', 
                  gap: 'var(--spacing-md)' 
                }}>
                  <div style={{ textAlign: 'center', padding: 'var(--spacing-md)' }}>
                    <div style={{ 
                      fontSize: '2rem', 
                      fontWeight: '700', 
                      color: 'var(--color-primary)',
                      marginBottom: '0.5rem'
                    }}>
                      {stats.certificates}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                      Сертификатов
                    </div>
                  </div>
                  
                  <div style={{ textAlign: 'center', padding: 'var(--spacing-md)' }}>
                    <div style={{ 
                      fontSize: '2rem', 
                      fontWeight: '700', 
                      color: 'var(--color-success)',
                      marginBottom: '0.5rem'
                    }}>
                      {stats.achievements}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                      Достижений
                    </div>
                  </div>
                </div>
              </ActivityCard>
            </Section>
          </div>
        </ContentGrid>
      </MainContent>
    </Container>
  );
};

export default DashboardPage; 