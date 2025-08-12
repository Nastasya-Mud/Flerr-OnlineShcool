import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { 
  User, Mail, Phone, MapPin, Calendar, Edit, Save, 
  BookOpen, Clock, Award, Star, Heart, Settings,
  LogOut, Camera, Eye, EyeOff, CheckCircle, XCircle
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const Container = styled.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`;

const ProfileHeader = styled.div`
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  padding: var(--spacing-xxl) 0;
  margin-bottom: var(--spacing-xxl);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AvatarSection = styled.div`
  position: relative;
`;

const Avatar = styled.div<{ $imageUrl?: string }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: white;
  background-image: ${props => props.$imageUrl ? `url(${props.$imageUrl})` : 'none'};
  background-size: cover;
  background-position: center;
  border: 4px solid white;
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--color-primary);
  position: relative;
`;

const AvatarUpload = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-hover-primary);
    transform: scale(1.1);
  }
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h1`
  color: var(--color-text);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const UserEmail = styled.p`
  color: var(--color-text-light);
  font-size: 1.125rem;
  margin-bottom: var(--spacing-md);
`;

const UserStats = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
  
  .stat {
    text-align: center;
    
    .number {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--color-primary);
      margin-bottom: 0.25rem;
    }
    
    .label {
      color: var(--color-text-muted);
      font-size: 0.875rem;
    }
  }
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-xxl);
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const Sidebar = styled.aside`
  height: fit-content;
`;

const ProfileCard = styled(motion.div)`
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-lg);
`;

const CardTitle = styled.h3`
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-lg);
`;

const Label = styled.label`
  display: block;
  color: var(--color-text);
  font-weight: 500;
  margin-bottom: var(--spacing-sm);
`;

const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid ${props => props.$hasError ? 'var(--color-error)' : 'var(--color-border)'};
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  background: white;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(128, 0, 128, 0.1);
  }
  
  &:disabled {
    background: var(--color-background-secondary);
    cursor: not-allowed;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  background: white;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(128, 0, 128, 0.1);
  }
`;

const ErrorMessage = styled.div`
  color: var(--color-error);
  font-size: 0.875rem;
  margin-top: var(--spacing-xs);
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: var(--spacing-md) var(--spacing-lg);
  border: none;
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  
  ${props => {
    switch (props.$variant) {
      case 'primary':
        return `
          background: var(--color-primary);
          color: white;
          
          &:hover {
            background: var(--color-hover-primary);
          }
        `;
      case 'secondary':
        return `
          background: var(--color-accent);
          color: var(--color-primary);
          
          &:hover {
            background: var(--color-primary);
            color: white;
          }
        `;
      case 'danger':
        return `
          background: var(--color-error);
          color: white;
          
          &:hover {
            background: #d32f2f;
          }
        `;
      default:
        return `
          background: var(--color-primary);
          color: white;
          
          &:hover {
            background: var(--color-hover-primary);
          }
        `;
    }
  }}
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

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CourseCard = styled(motion.div)`
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

const CourseImage = styled.div<{ $imageUrl: string }>`
  height: 160px;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  background-image: ${props => props.$imageUrl ? `url(${props.$imageUrl})` : 'none'};
  background-size: cover;
  background-position: center;
  position: relative;
`;

const CourseProgress = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  
  .progress-fill {
    height: 100%;
    background: var(--color-success);
    transition: width 0.3s ease;
  }
`;

const CourseInfo = styled.div`
  padding: var(--spacing-lg);
`;

const CourseTitle = styled.h4`
  color: var(--color-text);
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`;

const CourseMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--color-text-muted);
    font-size: 0.875rem;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: var(--color-border);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: var(--spacing-sm);
  
  .progress-fill {
    height: 100%;
    background: var(--color-success);
    transition: width 0.3s ease;
  }
`;

const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: var(--color-text-muted);
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

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    bio: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);

  // Моковые данные для демонстрации
  const mockUser = {
    _id: '1',
    firstName: 'Анна',
    lastName: 'Иванова',
    email: 'anna.ivanova@example.com',
    phone: '+7 (999) 123-45-67',
    location: 'Москва',
    bio: 'Начинающий флорист, увлекаюсь созданием букетов и композиций. Изучаю основы флористики и планирую открыть свою студию.',
    avatar: '/images/user-avatar.jpg',
    joinDate: '2024-01-15',
    completedCourses: 2,
    totalCourses: 5,
    averageRating: 4.8
  };

  const mockEnrolledCourses = [
    {
      _id: '1',
      title: 'Профессия флорист',
      image: '/images/course-1.jpg',
      progress: 75,
      completedLessons: 18,
      totalLessons: 24,
      lastAccessed: '2024-03-15',
      instructor: 'Анна Петрова'
    },
    {
      _id: '2',
      title: 'Интерьерные композиции',
      image: '/images/course-2.jpg',
      progress: 30,
      completedLessons: 6,
      totalLessons: 20,
      lastAccessed: '2024-03-10',
      instructor: 'Мария Сидорова'
    },
    {
      _id: '3',
      title: 'Коммерческий флорист',
      image: '/images/course-3.jpg',
      progress: 0,
      completedLessons: 0,
      totalLessons: 16,
      lastAccessed: '2024-03-01',
      instructor: 'Елена Козлова'
    }
  ];

  useEffect(() => {
    // Имитация загрузки данных
    setTimeout(() => {
      setFormData({
        firstName: mockUser.firstName,
        lastName: mockUser.lastName,
        email: mockUser.email,
        phone: mockUser.phone,
        location: mockUser.location,
        bio: mockUser.bio
      });
      setEnrolledCourses(mockEnrolledCourses);
      setLoading(false);
    }, 1000);
  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.firstName) {
      newErrors.firstName = 'Имя обязательно';
    }
    
    if (!formData.lastName) {
      newErrors.lastName = 'Фамилия обязательна';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) {
      return;
    }
    
    // Имитация сохранения
    toast.success('Профиль успешно обновлен!');
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      firstName: mockUser.firstName,
      lastName: mockUser.lastName,
      email: mockUser.email,
      phone: mockUser.phone,
      location: mockUser.location,
      bio: mockUser.bio
    });
    setErrors({});
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Очищаем ошибку при вводе
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Вы успешно вышли из аккаунта');
  };

  if (loading) {
    return (
      <Container>
        <div style={{ textAlign: 'center', padding: 'var(--spacing-xxl) 0' }}>
          Загрузка профиля...
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <ProfileHeader>
        <HeaderContent>
          <AvatarSection>
            <Avatar $imageUrl={mockUser.avatar}>
              {!mockUser.avatar && <User size={48} />}
            </Avatar>
            <AvatarUpload onClick={() => toast('Загрузка фото')}>
              <Camera size={20} />
            </AvatarUpload>
          </AvatarSection>
          
          <UserInfo>
            <UserName>{mockUser.firstName} {mockUser.lastName}</UserName>
            <UserEmail>{mockUser.email}</UserEmail>
            <UserStats>
              <div className="stat">
                <div className="number">{mockUser.completedCourses}</div>
                <div className="label">Завершенных курсов</div>
              </div>
              <div className="stat">
                <div className="number">{mockUser.totalCourses}</div>
                <div className="label">Всего курсов</div>
              </div>
              <div className="stat">
                <div className="number">{mockUser.averageRating}</div>
                <div className="label">Средний рейтинг</div>
              </div>
            </UserStats>
          </UserInfo>
        </HeaderContent>
      </ProfileHeader>

      <MainContent>
        <Sidebar>
          <ProfileCard
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CardTitle>
              <User size={20} />
              Личная информация
            </CardTitle>
            
            <FormGroup>
              <Label>Имя</Label>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                disabled={!isEditing}
                $hasError={!!errors.firstName}
              />
              {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <Label>Фамилия</Label>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                disabled={!isEditing}
                $hasError={!!errors.lastName}
              />
              {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                $hasError={!!errors.email}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <Label>Телефон</Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Город</Label>
              <Input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </FormGroup>
            
            <FormGroup>
              <Label>О себе</Label>
              <TextArea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="Расскажите о себе..."
              />
            </FormGroup>
            
            {isEditing ? (
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                <Button onClick={handleSave}>
                  <Save size={16} />
                  Сохранить
                </Button>
                <Button $variant="secondary" onClick={handleCancel}>
                  <XCircle size={16} />
                  Отмена
                </Button>
              </div>
            ) : (
              <Button onClick={() => setIsEditing(true)}>
                <Edit size={16} />
                Редактировать
              </Button>
            )}
          </ProfileCard>

          <ProfileCard
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <CardTitle>
              <Settings size={20} />
              Настройки
            </CardTitle>
            
            <Button $variant="secondary" style={{ marginBottom: 'var(--spacing-md)' }}>
              <Eye size={16} />
              Настройки приватности
            </Button>
            
            <Button $variant="secondary" style={{ marginBottom: 'var(--spacing-md)' }}>
              <Mail size={16} />
              Настройки уведомлений
            </Button>
            
            <Button $variant="danger" onClick={handleLogout}>
              <LogOut size={16} />
              Выйти из аккаунта
            </Button>
          </ProfileCard>
        </Sidebar>

        <div>
          <ContentSection>
            <SectionTitle>Мои курсы</SectionTitle>
            
            {enrolledCourses.length > 0 ? (
              <CoursesGrid>
                <AnimatePresence mode="wait">
                  {enrolledCourses.map((course, index) => (
                    <CourseCard
                      key={course._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CourseImage $imageUrl={course.image}>
                        <CourseProgress>
                          <div 
                            className="progress-fill" 
                            style={{ width: `${course.progress}%` }}
                          />
                        </CourseProgress>
                      </CourseImage>
                      
                      <CourseInfo>
                        <CourseTitle>{course.title}</CourseTitle>
                        
                        <CourseMeta>
                          <span>
                            <BookOpen size={14} />
                            {course.completedLessons}/{course.totalLessons} уроков
                          </span>
                          <span>
                            <Clock size={14} />
                            {course.lastAccessed}
                          </span>
                        </CourseMeta>
                        
                        <ProgressBar>
                          <div 
                            className="progress-fill" 
                            style={{ width: `${course.progress}%` }}
                          />
                        </ProgressBar>
                        
                        <ProgressText>
                          <span>Прогресс</span>
                          <span>{course.progress}%</span>
                        </ProgressText>
                        
                        <div style={{ marginTop: 'var(--spacing-md)' }}>
                          <Button $variant="primary" style={{ width: '100%' }}>
                            <BookOpen size={16} />
                            Продолжить обучение
                          </Button>
                        </div>
                      </CourseInfo>
                    </CourseCard>
                  ))}
                </AnimatePresence>
              </CoursesGrid>
            ) : (
              <EmptyState>
                <h3>У вас пока нет курсов</h3>
                <p>Запишитесь на курсы, чтобы начать обучение</p>
              </EmptyState>
            )}
          </ContentSection>
        </div>
      </MainContent>
    </Container>
  );
};

export default ProfilePage; 