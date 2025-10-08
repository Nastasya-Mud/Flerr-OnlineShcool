import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { 
  Star, Users, Award, Calendar, MapPin, Phone, Mail, 
  Globe, Instagram, Facebook, Youtube, Search, Filter,
  BookOpen, Clock, Heart, Share2, ChevronRight
} from 'lucide-react';
import toast from 'react-hot-toast';
import { instructorsAPI } from '../api/instructors';

const Container = styled.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--spacing-lg);
`;

const Title = styled(motion.h1)`
  color: var(--color-text);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  color: var(--color-text-light);
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
`;

const Stats = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: var(--spacing-xl);
  flex-wrap: wrap;
  
  .stat {
    text-align: center;
    
    .number {
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 0.25rem;
    }
    
    .label {
      color: var(--color-text-muted);
      font-size: 0.875rem;
    }
  }
`;

const FiltersSection = styled.div`
  max-width: 1200px;
  margin: 0 auto var(--spacing-xxl);
  padding: 0 var(--spacing-lg);
`;

const FiltersContainer = styled.div`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  display: flex;
  gap: var(--spacing-lg);
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchInput = styled.div`
  flex: 1;
  min-width: 250px;
  position: relative;
  
  input {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 3rem;
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-md);
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(128, 0, 128, 0.1);
    }
  }
  
  svg {
    position: absolute;
    left: var(--spacing-md);
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-muted);
  }
`;

const FilterSelect = styled.select`
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  background: white;
  min-width: 150px;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const InstructorsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InstructorCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

const InstructorHeader = styled.div`
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InstructorAvatar = styled.div<{ $imageUrl: string }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: white;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* центрируем и кадрируем */
  }
`;

const InstructorInfo = styled.div`
  padding: var(--spacing-lg);
`;

const InstructorName = styled.h3`
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`;

const InstructorTitle = styled.p`
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: var(--spacing-md);
`;

const InstructorBio = styled.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
`;

const InstructorStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  
  .stat {
    text-align: center;
    
    .number {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--color-primary);
      margin-bottom: 0.25rem;
    }
    
    .label {
      font-size: 0.75rem;
      color: var(--color-text-muted);
    }
  }
`;

const InstructorMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-muted);
    font-size: 0.875rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  
  a {
    width: 36px;
    height: 36px;
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

const ActionButtons = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  
  button {
    flex: 1;
    padding: var(--spacing-sm);
    border: none;
    border-radius: var(--border-radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;

const PrimaryButton = styled.button`
  background: var(--color-primary);
  color: white;
  
  &:hover {
    background: var(--color-hover-primary);
  }
`;

const SecondaryButton = styled.button`
  background: var(--color-accent);
  color: var(--color-primary);
  
  &:hover {
    background: var(--color-primary);
    color: white;
  }
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

const FeaturedBadge = styled.div`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
`;

const InstructorsPage: React.FC = () => {
  const [instructors, setInstructors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [specializationFilter, setSpecializationFilter] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const res = await instructorsAPI.getAll({ limit: 50 });
        setInstructors(res.data || []);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filteredInstructors = instructors.filter((instructor: any) => {
    const fullName = `${instructor?.user?.firstName || ''} ${instructor?.user?.lastName || ''}`.trim();
    const specialization = (instructor?.specialties?.[0] || '').toLowerCase();
    const matchesSearch = fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         specialization.includes(searchTerm.toLowerCase());
    const matchesExperience = !experienceFilter || (instructor?.experience ?? 0) >= parseInt(experienceFilter);
    const matchesSpecialization = !specializationFilter || specialization === specializationFilter.toLowerCase();
    return matchesSearch && matchesExperience && matchesSpecialization;
  });

  const handleContact = (instructor: any) => {
    const fullName = `${instructor?.user?.firstName || ''} ${instructor?.user?.lastName || ''}`.trim();
    toast.success(`Связаться с ${fullName || 'преподавателем'}`);
  };

  const handleViewProfile = (instructor: any) => {
    const fullName = `${instructor?.user?.firstName || ''} ${instructor?.user?.lastName || ''}`.trim();
    toast(`Профиль ${fullName || 'преподавателя'}`);
  };

  const totalInstructors = instructors.length;
  const featuredInstructors = instructors.filter((i: any) => i.featured).length;
  const averageRating = instructors.length ? (instructors.reduce((sum: number, i: any) => sum + (i.rating || 0), 0) / instructors.length) : 0;

  if (loading) {
    return (
      <Container>
        <div style={{ textAlign: 'center', padding: 'var(--spacing-xxl) 0' }}>
          Загрузка преподавателей...
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Наши преподаватели
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Учитесь у лучших флористов России с многолетним опытом работы
        </Subtitle>
        <Stats
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="stat">
            <div className="number">{totalInstructors}</div>
            <div className="label">Преподавателей</div>
          </div>
          <div className="stat">
            <div className="number">{featuredInstructors}</div>
            <div className="label">Ведущих специалистов</div>
          </div>
          <div className="stat">
            <div className="number">{averageRating}</div>
            <div className="label">Средний рейтинг</div>
          </div>
        </Stats>
      </Header>

      <FiltersSection>
        <FiltersContainer>
          <SearchInput>
            <Search size={20} />
            <input
              type="text"
              placeholder="Поиск по имени или специализации..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchInput>
          
          <FilterSelect
            value={experienceFilter}
            onChange={(e) => setExperienceFilter(e.target.value)}
          >
            <option value="">Любой опыт</option>
            <option value="5">От 5 лет</option>
            <option value="10">От 10 лет</option>
            <option value="15">От 15 лет</option>
          </FilterSelect>
          
          <FilterSelect
            value={specializationFilter}
            onChange={(e) => setSpecializationFilter(e.target.value)}
          >
            <option value="">Все специализации</option>
            <option value="Свадебная флористика">Свадебная флористика</option>
            <option value="Интерьерные композиции">Интерьерные композиции</option>
            <option value="Коммерческая флористика">Коммерческая флористика</option>
            <option value="Обучение флористике">Обучение флористике</option>
          </FilterSelect>
        </FiltersContainer>
      </FiltersSection>

      <InstructorsGrid>
        <AnimatePresence mode="wait">
          {filteredInstructors.length > 0 ? (
            filteredInstructors.map((instructor, index) => (
              <InstructorCard
                key={instructor._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <InstructorHeader>
                  {instructor.featured && (
                    <FeaturedBadge>Ведущий специалист</FeaturedBadge>
                  )}
                  {(() => {
                    const avatar = instructor?.user?.avatar || '';
                    const fullName = `${instructor?.user?.firstName || ''} ${instructor?.user?.lastName || ''}`.trim();
                    return (
                      <InstructorAvatar $imageUrl={avatar}>
                        {avatar && <img src={avatar} alt={fullName || 'Преподаватель'} />}
                      </InstructorAvatar>
                    );
                  })()}
                </InstructorHeader>
                
                <InstructorInfo>
                  <InstructorName>{`${instructor?.user?.firstName || ''} ${instructor?.user?.lastName || ''}`.trim()}</InstructorName>
                  <InstructorTitle>{(instructor?.specialties?.[0] || '').replace(/-/g, ' ')}</InstructorTitle>
                  <InstructorBio>{instructor?.bio}</InstructorBio>
                  
                  <InstructorStats>
                    <div className="stat">
                      <div className="number">{instructor?.experience ?? 0}</div>
                      <div className="label">лет опыта</div>
                    </div>
                    <div className="stat">
                      <div className="number">{instructor?.totalStudents ?? 0}</div>
                      <div className="label">студентов</div>
                    </div>
                    <div className="stat">
                      <div className="number">{instructor?.totalCourses ?? 0}</div>
                      <div className="label">курсов</div>
                    </div>
                  </InstructorStats>
                  
                  <InstructorMeta>
                    <span>
                      <Star size={16} />
                      {instructor?.rating ?? 0}
                    </span>
                    <span>
                      <MapPin size={16} />
                      {instructor?.location || '—'}
                    </span>
                    <span>
                      <Award size={16} />
                      {(instructor?.specialties?.[0] || '').replace(/-/g, ' ')}
                    </span>
                  </InstructorMeta>
                  
                  <SocialLinks>
                    <a href="#" title="Instagram">
                      <Instagram size={18} />
                    </a>
                    <a href="#" title="Facebook">
                      <Facebook size={18} />
                    </a>
                    <a href="#" title="Website">
                      <Globe size={18} />
                    </a>
                  </SocialLinks>
                  
                  <ActionButtons>
                    <PrimaryButton onClick={() => handleViewProfile(instructor)}>
                      <BookOpen size={16} />
                      Профиль
                    </PrimaryButton>
                    <SecondaryButton onClick={() => handleContact(instructor)}>
                      <Mail size={16} />
                      Связаться
                    </SecondaryButton>
                  </ActionButtons>
                </InstructorInfo>
              </InstructorCard>
            ))
          ) : (
            <EmptyState>
              <h3>Преподаватели не найдены</h3>
              <p>Попробуйте изменить параметры поиска</p>
            </EmptyState>
          )}
        </AnimatePresence>
      </InstructorsGrid>
    </Container>
  );
};

export default InstructorsPage; 