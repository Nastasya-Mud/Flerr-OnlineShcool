import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Search, Filter, Star, Clock, Users, BookOpen, ChevronRight, Play } from 'lucide-react';

const Container = styled.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
`;

const Title = styled.h1`
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  font-size: 2.5rem;
  font-weight: 600;
`;

const Subtitle = styled.p`
  color: var(--color-text-light);
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

const FiltersSection = styled.div`
  background: var(--color-background-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-xl);
  box-shadow: var(--shadow-sm);
`;

const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: var(--spacing-md);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }
`;

const SearchInput = styled.div`
  position: relative;
  
  input {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md) var(--spacing-sm) 2.5rem;
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-md);
    font-size: 1rem;
    background: white;
    transition: all 0.2s ease;
    
    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(128, 0, 128, 0.1);
    }
  }
  
  svg {
    position: absolute;
    left: var(--spacing-sm);
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-muted);
  }
`;

const Select = styled.select`
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  background: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CourseCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

const CourseImage = styled.div<{ $imageUrl: string }>`
  height: 200px;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  background-image: ${props => props.$imageUrl ? `url(${props.$imageUrl})` : 'none'};
  background-size: cover;
  background-position: center;
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
  }
`;

const PlayButton = styled.div`
  position: relative;
  z-index: 2;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
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
    margin-left: 2px;
  }
`;

const CourseContent = styled.div`
  padding: var(--spacing-lg);
`;

const CourseTitle = styled.h3`
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  line-height: 1.4;
`;

const CourseDescription = styled.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: var(--spacing-md);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CourseMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  font-size: 0.875rem;
  color: var(--color-text-muted);
  
  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

const CoursePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
`;

const PriceInfo = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--spacing-sm);
`;

const CurrentPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
`;

const OriginalPrice = styled.span`
  font-size: 1rem;
  color: var(--color-text-muted);
  text-decoration: line-through;
`;

const Discount = styled.span`
  background: var(--color-success);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
`;

const ViewButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: var(--border-radius-md);
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-hover-primary);
    transform: translateY(-1px);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
  color: var(--color-text-muted);
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-xxl) 0;
  
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    border: 3px solid var(--color-border);
    border-top: 3px solid var(--color-primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [sortBy, setSortBy] = useState('createdAt');

  // Моковые данные для демонстрации
  const mockCourses = [
    {
      _id: '1',
      title: 'Профессия флорист',
      slug: 'florist-profession',
      description: 'Полный курс для начинающих флористов. Изучите основы композиции, работу с цветами и создание букетов.',
      price: 25000,
      originalPrice: 30000,
      image: '/images/course-1.jpg',
      duration: '3 месяца',
      level: 'beginner',
      category: 'profession',
      rating: 4.8,
      studentsCount: 156,
      lessonsCount: 24,
    },
    {
      _id: '2',
      title: 'Флорист-дизайнер',
      slug: 'florist-designer',
      description: 'Продвинутый курс для создания уникальных композиций и работы с современными техниками флористики.',
      price: 35000,
      originalPrice: 40000,
      image: '/images/course-2.jpg',
      duration: '4 месяца',
      level: 'intermediate',
      category: 'design',
      rating: 4.9,
      studentsCount: 89,
      lessonsCount: 32,
    },
    {
      _id: '3',
      title: 'Интерьерные композиции',
      slug: 'interior-compositions',
      description: 'Создание композиций из сухих и искусственных цветов для украшения интерьера.',
      price: 20000,
      originalPrice: 25000,
      image: '/images/course-3.jpg',
      duration: '2 месяца',
      level: 'intermediate',
      category: 'interior',
      rating: 4.7,
      studentsCount: 203,
      lessonsCount: 18,
    },
    {
      _id: '4',
      title: 'Коммерческий флорист',
      slug: 'commercial-florist',
      description: 'Базовый курс для работы в цветочных магазинах и создания коммерческих букетов.',
      price: 18000,
      originalPrice: 22000,
      image: '/images/course-4.jpg',
      duration: '2.5 месяца',
      level: 'beginner',
      category: 'commercial',
      rating: 4.6,
      studentsCount: 134,
      lessonsCount: 20,
    },
    {
      _id: '5',
      title: 'Свадебная флористика',
      slug: 'wedding-floristry',
      description: 'Мастер-классы по созданию свадебных букетов и украшений для торжественных мероприятий.',
      price: 28000,
      originalPrice: 32000,
      image: '/images/course-5.jpg',
      duration: '3 месяца',
      level: 'advanced',
      category: 'wedding',
      rating: 4.9,
      studentsCount: 67,
      lessonsCount: 28,
    },
  ];

  useEffect(() => {
    // Имитация загрузки данных
    setTimeout(() => {
      setCourses(mockCourses);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || course.category === categoryFilter;
    const matchesLevel = !levelFilter || course.level === levelFilter;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      case 'students':
        return b.studentsCount - a.studentsCount;
      default:
        return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
    }
  });

  const getDiscountPercentage = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  if (loading) {
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Курсы флористики</Title>
        <Subtitle>
          Выберите подходящий курс и начните свой путь в мире флористики. 
          Каждый курс включает бонусные уроки по бизнесу и социальным сетям.
        </Subtitle>
      </Header>

      <FiltersSection>
        <FiltersGrid>
          <SearchInput>
            <Search size={20} />
            <input
              type="text"
              placeholder="Поиск курсов..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchInput>
          
          <Select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="">Все категории</option>
            <option value="profession">Профессия</option>
            <option value="design">Дизайн</option>
            <option value="interior">Интерьер</option>
            <option value="commercial">Коммерция</option>
            <option value="wedding">Свадьба</option>
          </Select>
          
          <Select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)}>
            <option value="">Все уровни</option>
            <option value="beginner">Начинающий</option>
            <option value="intermediate">Средний</option>
            <option value="advanced">Продвинутый</option>
          </Select>
          
          <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="createdAt">По дате</option>
            <option value="price">По цене</option>
            <option value="rating">По рейтингу</option>
            <option value="students">По популярности</option>
          </Select>
        </FiltersGrid>
      </FiltersSection>

      <AnimatePresence mode="wait">
        {sortedCourses.length > 0 ? (
          <CoursesGrid>
            {sortedCourses.map((course, index) => (
              <CourseCard
                key={course._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <CourseImage $imageUrl={course.image}>
                  <PlayButton>
                    <Play size={24} />
                  </PlayButton>
                </CourseImage>
                
                <CourseContent>
                  <CourseTitle>{course.title}</CourseTitle>
                  <CourseDescription>{course.description}</CourseDescription>
                  
                  <CourseMeta>
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
                  
                  <CoursePrice>
                    <PriceInfo>
                      <CurrentPrice>{course.price.toLocaleString()} ₽</CurrentPrice>
                      {course.originalPrice > course.price && (
                        <>
                          <OriginalPrice>{course.originalPrice.toLocaleString()} ₽</OriginalPrice>
                          <Discount>-{getDiscountPercentage(course.originalPrice, course.price)}%</Discount>
                        </>
                      )}
                    </PriceInfo>
                    <ViewButton to={`/courses/${course.slug}`}>
                      Подробнее
                      <ChevronRight size={16} />
                    </ViewButton>
                  </CoursePrice>
                </CourseContent>
              </CourseCard>
            ))}
          </CoursesGrid>
        ) : (
          <EmptyState>
            <h3>Курсы не найдены</h3>
            <p>Попробуйте изменить параметры поиска или фильтры</p>
          </EmptyState>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default CoursesPage; 