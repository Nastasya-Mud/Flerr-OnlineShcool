import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Search, Filter, Star, Clock, Users, BookOpen, ChevronRight, Play } from 'lucide-react';
import { Button, Card, CardHeader, CardBody, CardFooter, CardImage, CardBadge, Input, Loading } from '../components/UI';
import { useQuery } from 'react-query';
import { coursesAPI } from '../api/courses';
import type { Course } from '../../../shared/types';

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

const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
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

const Toolbar = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  justify-content: flex-end;
  margin-bottom: var(--spacing-md);
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>(searchParams.get('q') || '');
  const [debouncedSearch, setDebouncedSearch] = useState<string>(searchParams.get('q') || '');
  const [categoryFilter, setCategoryFilter] = useState<string>(searchParams.get('category') || '');
  const [levelFilter, setLevelFilter] = useState<string>(searchParams.get('level') || '');
  const [sortBy, setSortBy] = useState<'createdAt' | 'price' | 'rating' | 'students'>(
    (searchParams.get('sort') as any) || 'createdAt'
  );
  const [page, setPage] = useState<number>(Number(searchParams.get('page') || 1));
  const [limit] = useState(12);

  // Debounce для поиска
  React.useEffect(() => {
    const id = setTimeout(() => setDebouncedSearch(searchTerm), 400);
    return () => clearTimeout(id);
  }, [searchTerm]);

  const mapSort = (val: string) => {
    if (val === 'students') return 'popularity';
    if (val === 'price') return 'price';
    if (val === 'createdAt') return 'createdAt';
    // rating не поддерживается API — используем createdAt как дефолт
    return 'createdAt';
  };

  const { data, isLoading, isError } = useQuery(
    ['courses', { page, limit, debouncedSearch, categoryFilter, levelFilter, sortBy }],
    async () => {
      const res = await coursesAPI.list({
        page,
        limit,
        search: debouncedSearch || undefined,
        category: categoryFilter || undefined,
        level: (levelFilter as any) || undefined,
        sort: mapSort(sortBy) as any,
        order: 'desc',
      });
      return res.data;
    },
    { keepPreviousData: true }
  );

  const courses: Course[] = data?.data ?? [];
  const pagination = data?.pagination;

  // Sync state -> URL
  React.useEffect(() => {
    const next = new URLSearchParams();
    if (searchTerm) next.set('q', searchTerm);
    if (categoryFilter) next.set('category', categoryFilter);
    if (levelFilter) next.set('level', levelFilter);
    if (sortBy && sortBy !== 'createdAt') next.set('sort', sortBy);
    if (page && page !== 1) next.set('page', String(page));
    setSearchParams(next, { replace: true });
  }, [searchTerm, categoryFilter, levelFilter, sortBy, page, setSearchParams]);

  // Локальная сортировка и фильтрация больше не нужны — это делает API
  const sortedCourses = courses;

  const getDiscountPercentage = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  if (isLoading) {
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
        <Toolbar>
          <Button
            onClick={() => {
              setSearchTerm('');
              setCategoryFilter('');
              setLevelFilter('');
              setSortBy('createdAt');
              setPage(1);
            }}
            variant="secondary"
          >
            Сбросить фильтры
          </Button>
        </Toolbar>
        <FiltersGrid>
          <SearchInputWrapper>
            <Search size={20} />
            <Input
              type="text"
              placeholder="Поиск курсов..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
            />
          </SearchInputWrapper>
          
          <Select value={categoryFilter} onChange={(e) => { setCategoryFilter(e.target.value); setPage(1); }}>
            <option value="">Все категории</option>
            <option value="profession">Профессия</option>
            <option value="design">Дизайн</option>
            <option value="interior">Интерьер</option>
            <option value="commercial">Коммерция</option>
            <option value="wedding">Свадьба</option>
          </Select>
          
          <Select value={levelFilter} onChange={(e) => { setLevelFilter(e.target.value); setPage(1); }}>
            <option value="">Все уровни</option>
            <option value="beginner">Начинающий</option>
            <option value="intermediate">Средний</option>
            <option value="advanced">Продвинутый</option>
          </Select>
          
          <Select value={sortBy} onChange={(e) => { setSortBy(e.target.value as any); setPage(1); }}>
            <option value="createdAt">По дате</option>
            <option value="price">По цене</option>
            <option value="rating">По рейтингу</option>
            <option value="students">По популярности</option>
          </Select>
        </FiltersGrid>
      </FiltersSection>

      <AnimatePresence mode="wait">
        {isError ? (
          <EmptyState>
            <h3>Ошибка загрузки</h3>
            <p>Попробуйте обновить страницу или позже.</p>
          </EmptyState>
        ) : sortedCourses.length > 0 ? (
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
                    {typeof (course as any).rating !== 'undefined' && (
                      <span>
                        <Star size={16} />
                        {(course as any).rating}
                      </span>
                    )}
                    <span>
                      <Clock size={16} />
                      {course.duration}
                    </span>
                    {typeof (course as any).studentsCount !== 'undefined' && (
                      <span>
                        <Users size={16} />
                        {(course as any).studentsCount} студентов
                      </span>
                    )}
                    <span>
                      <BookOpen size={16} />
                      {(course.lessons?.length ?? 0)} уроков
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

      {pagination && (pagination.totalPages > 1) && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
          <Button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={!pagination.hasPrev}>
            Назад
          </Button>
          <span style={{ alignSelf: 'center' }}>
            Страница {pagination.page} из {pagination.totalPages}
          </span>
          <Button onClick={() => setPage((p) => p + 1)} disabled={!pagination.hasNext}>
            Далее
          </Button>
        </div>
      )}
    </Container>
  );
};

export default CoursesPage; 