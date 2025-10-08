import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  Package, 
  BarChart3, 
  Settings,
  Plus,
  Search,
  Filter
} from 'lucide-react';
import { coursesAPI } from '../api/courses';
import { usersAPI } from '../api/users';
import CreateCourseModal from '../components/Modal/CreateCourseModal';
import CreateUserModal from '../components/Modal/CreateUserModal';
import CreateInstructorModal from '../components/Modal/CreateInstructorModal';
import EditInstructorModal from '../components/Modal/EditInstructorModal';
import { instructorsAPI } from '../api/instructors';

const Container = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 0;
`;

const AdminHeader = styled.div`
  background: white;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #2d3748;
  margin: 0;
`;

const Subtitle = styled.p`
  color: #718096;
  margin: 0.5rem 0 0;
  font-size: 1.1rem;
`;

const Dashboard = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StatIcon = styled.div<{ $color: string }>`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: ${props => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const StatContent = styled.div`
  flex: 1;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  color: #718096;
  font-size: 0.9rem;
`;

const TabsContainer = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TabsHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #e2e8f0;
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: 1rem 2rem;
  border: none;
  background: ${props => props.$active ? '#667eea' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#4a5568'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.$active ? '#667eea' : '#f7fafc'};
  }
`;

const TabContent = styled.div`
  padding: 2rem;
  min-height: 400px;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 400px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #a0aec0;
  width: 18px;
  height: 18px;
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  ${props => props.$variant === 'primary' ? `
    background: #667eea;
    color: white;
    
    &:hover {
      background: #5a6fd8;
    }
  ` : `
    background: #f7fafc;
    color: #4a5568;
    border: 1px solid #e2e8f0;
    
    &:hover {
      background: #edf2f7;
    }
  `}
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background: #f7fafc;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #e2e8f0;
  
  &:hover {
    background: #f7fafc;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  text-align: left;
  color: #4a5568;
`;

const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #2d3748;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #718096;
`;

const AdminPanelPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [users, setUsers] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [instructors, setInstructors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreateCourseModalOpen, setIsCreateCourseModalOpen] = useState(false);
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
  const [isCreateInstructorModalOpen, setIsCreateInstructorModalOpen] = useState(false);
  const [editingInstructor, setEditingInstructor] = useState<any | null>(null);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCourses: 0,
    totalInstructors: 0,
    totalSuppliers: 0
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        console.log('Loading admin panel data...');
        
        // Загружаем пользователей и курсы параллельно с более надежной обработкой ошибок
        const [usersResponse, coursesResponse, instructorsResponse] = await Promise.all([
          usersAPI.getAll().catch((error) => {
            console.error('Users API error:', error);
            return { data: [] };
          }),
          coursesAPI.getAll().catch((error) => {
            console.error('Courses API error:', error);
            return { data: [] };
          }),
          instructorsAPI.getAll().catch((error) => {
            console.error('Instructors API error:', error);
            return { data: [] };
          }),
        ]);
        
        console.log('Users response:', usersResponse);
        console.log('Courses response:', coursesResponse);
        
        // Защита от undefined/null данных
        const usersData = Array.isArray(usersResponse?.data) ? usersResponse.data : [];
        const coursesData = Array.isArray(coursesResponse?.data) ? coursesResponse.data : [];
        const instructorsData = Array.isArray(instructorsResponse?.data) ? instructorsResponse.data : [];
        
        setUsers(usersData);
        setCourses(coursesData);
        setInstructors(instructorsData);
        
        // Обновляем статистику
        setStats({
          totalUsers: usersData.length,
          totalCourses: coursesData.length,
          totalInstructors: instructorsData.length,
          totalSuppliers: 0 // TODO: добавить после реализации API поставщиков
        });
        
        console.log('Admin data loaded successfully');
        
      } catch (error) {
        console.error('Error loading admin data:', error);
        const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка';
        setError(errorMessage);
        toast.error('Ошибка загрузки данных');
        
        // Устанавливаем пустые массивы в случае ошибки
        setUsers([]);
        setCourses([]);
        setInstructors([]);
        setStats({
          totalUsers: 0,
          totalCourses: 0,
          totalInstructors: 0,
          totalSuppliers: 0
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  const handleCourseCreated = () => {
    // Перезагружаем данные после создания курса
    const loadData = async () => {
      try {
        const [usersResponse, coursesResponse, instructorsResponse] = await Promise.all([
          usersAPI.getAll().catch((error) => {
            console.error('Users API error:', error);
            return { data: [] };
          }),
          coursesAPI.getAll().catch((error) => {
            console.error('Courses API error:', error);
            return { data: [] };
          }),
          instructorsAPI.getAll().catch((error) => {
            console.error('Instructors API error:', error);
            return { data: [] };
          }),
        ]);
        
        const usersData = Array.isArray(usersResponse?.data) ? usersResponse.data : [];
        const coursesData = Array.isArray(coursesResponse?.data) ? coursesResponse.data : [];
        const instructorsData = Array.isArray(instructorsResponse?.data) ? instructorsResponse.data : [];
        
        setUsers(usersData);
        setCourses(coursesData);
        setInstructors(instructorsData);
        
        setStats({
          totalUsers: usersData.length,
          totalCourses: coursesData.length,
          totalInstructors: instructorsData.length,
          totalSuppliers: 0
        });
        
      } catch (error) {
        console.error('Error reloading data:', error);
      }
    };
    
    loadData();
  };

  const tabs = [
    { id: 'users', label: 'Пользователи', icon: Users },
    { id: 'courses', label: 'Курсы', icon: BookOpen },
    { id: 'instructors', label: 'Преподаватели', icon: GraduationCap },
    { id: 'suppliers', label: 'Поставщики', icon: Package },
    { id: 'analytics', label: 'Аналитика', icon: BarChart3 },
    { id: 'settings', label: 'Настройки', icon: Settings },
  ];

  const statsData = [
    { 
      icon: Users, 
      number: stats.totalUsers.toString(), 
      label: 'Всего пользователей', 
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
    },
    { 
      icon: BookOpen, 
      number: stats.totalCourses.toString(), 
      label: 'Всего курсов', 
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' 
    },
    { 
      icon: GraduationCap, 
      number: stats.totalInstructors.toString(), 
      label: 'Преподавателей', 
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' 
    },
    { 
      icon: Package, 
      number: stats.totalSuppliers.toString(), 
      label: 'Поставщиков', 
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' 
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'users':
        return (
          <div>
            <ActionBar>
              <SearchContainer>
                <SearchIcon />
                <SearchInput placeholder="Поиск пользователей..." />
              </SearchContainer>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Button $variant="secondary">
                  <Filter size={18} />
                  Фильтры
                </Button>
                <Button $variant="primary" onClick={() => setIsCreateUserModalOpen(true)}>
                  <Plus size={18} />
                  Добавить пользователя
                </Button>
              </div>
            </ActionBar>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Имя</TableHeaderCell>
                  <TableHeaderCell>Email</TableHeaderCell>
                  <TableHeaderCell>Роль</TableHeaderCell>
                  <TableHeaderCell>Статус</TableHeaderCell>
                  <TableHeaderCell>Дата регистрации</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <tbody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={5}>
                      <EmptyState>
                        <p>Загрузка...</p>
                      </EmptyState>
                    </TableCell>
                  </TableRow>
                ) : users.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5}>
                      <EmptyState>
                        <p>Пользователи не найдены</p>
                      </EmptyState>
                    </TableCell>
                  </TableRow>
                ) : (
                  users.map((user: any) => (
                    <TableRow key={user?._id || Math.random()}>
                      <TableCell>{(user?.firstName || '') + ' ' + (user?.lastName || '')}</TableCell>
                      <TableCell>{user?.email || 'Не указан'}</TableCell>
                      <TableCell>
                        <span style={{ 
                          padding: '4px 8px', 
                          borderRadius: '4px', 
                          background: user?.role === 'admin' ? '#e3f2fd' : user?.role === 'instructor' ? '#f3e5f5' : '#e8f5e8',
                          color: user?.role === 'admin' ? '#1565c0' : user?.role === 'instructor' ? '#7b1fa2' : '#2e7d32'
                        }}>
                          {user?.role === 'admin' ? 'Админ' : user?.role === 'instructor' ? 'Преподаватель' : 'Студент'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span style={{ 
                          padding: '4px 8px', 
                          borderRadius: '4px', 
                          background: user?.isActive !== false ? '#e8f5e8' : '#ffebee',
                          color: user?.isActive !== false ? '#2e7d32' : '#c62828'
                        }}>
                          {user?.isActive !== false ? 'Активен' : 'Неактивен'}
                        </span>
                      </TableCell>
                      <TableCell>{user?.createdAt ? new Date(user.createdAt).toLocaleDateString('ru-RU') : 'Не указана'}</TableCell>
                    </TableRow>
                  ))
                )}
              </tbody>
            </Table>
          </div>
        );
      
      case 'courses':
        return (
          <div>
            <ActionBar>
              <SearchContainer>
                <SearchIcon />
                <SearchInput placeholder="Поиск курсов..." />
              </SearchContainer>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Button $variant="secondary">
                  <Filter size={18} />
                  Фильтры
                </Button>
                <Button $variant="primary" onClick={() => setIsCreateCourseModalOpen(true)}>
                  <Plus size={18} />
                  Добавить курс
                </Button>
              </div>
            </ActionBar>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Название</TableHeaderCell>
                  <TableHeaderCell>Категория</TableHeaderCell>
                  <TableHeaderCell>Цена</TableHeaderCell>
                  <TableHeaderCell>Студентов</TableHeaderCell>
                  <TableHeaderCell>Статус</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <tbody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={5}>
                      <EmptyState>
                        <p>Загрузка...</p>
                      </EmptyState>
                    </TableCell>
                  </TableRow>
                ) : courses.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5}>
                      <EmptyState>
                        <p>Курсы не найдены. <button onClick={() => setIsCreateCourseModalOpen(true)} style={{ color: '#667eea', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}>Добавить первый курс</button></p>
                      </EmptyState>
                    </TableCell>
                  </TableRow>
                ) : (
                  courses.map((course: any) => (
                    <TableRow key={course?._id || Math.random()}>
                      <TableCell>{course?.title || 'Название не указано'}</TableCell>
                      <TableCell>{course?.category || 'Без категории'}</TableCell>
                      <TableCell>{course?.price ? `${course.price} ₽` : 'Бесплатно'}</TableCell>
                      <TableCell>{course?.enrolledCount || 0}</TableCell>
                      <TableCell>
                        <span style={{ 
                          padding: '4px 8px', 
                          borderRadius: '4px', 
                          background: course?.isActive !== false ? '#e8f5e8' : '#ffebee',
                          color: course?.isActive !== false ? '#2e7d32' : '#c62828'
                        }}>
                          {course?.isActive !== false ? 'Активен' : 'Неактивен'}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </tbody>
            </Table>
          </div>
        );
      case 'instructors':
        return (
          <div>
            <ActionBar>
              <SearchContainer>
                <SearchIcon />
                <SearchInput placeholder="Поиск преподавателей..." />
              </SearchContainer>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Button $variant="primary" onClick={() => setIsCreateInstructorModalOpen(true)}>
                  <Plus size={18} />
                  Добавить преподавателя
                </Button>
              </div>
            </ActionBar>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Имя</TableHeaderCell>
                  <TableHeaderCell>Email</TableHeaderCell>
                  <TableHeaderCell>Опыт</TableHeaderCell>
                  <TableHeaderCell>Featured</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <tbody>
                {loading ? (
                  <TableRow><TableCell colSpan={4}><EmptyState>Загрузка...</EmptyState></TableCell></TableRow>
                ) : instructors.length === 0 ? (
                  <TableRow><TableCell colSpan={5}><EmptyState>Преподаватели не найдены</EmptyState></TableCell></TableRow>
                ) : (
                  instructors.map((i: any) => (
                    <TableRow key={i._id}>
                      <TableCell>{`${i?.user?.firstName || ''} ${i?.user?.lastName || ''}`.trim()}</TableCell>
                      <TableCell>{i?.user?.email}</TableCell>
                      <TableCell>{i?.experience ?? 0}</TableCell>
                      <TableCell>
                        <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                          <input
                            type="checkbox"
                            checked={!!i?.featured}
                            onChange={async (e) => {
                              try {
                                const updated = await instructorsAPI.update(i._id, { featured: e.target.checked });
                                setInstructors(prev => prev.map(x => x._id === i._id ? updated.data : x));
                              } catch (err) {
                                // ignore
                              }
                            }}
                          />
                          Показать на главной
                        </label>
                      </TableCell>
                      <TableCell>
                        <Button $variant="secondary" onClick={() => setEditingInstructor(i)}>Редактировать</Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </tbody>
            </Table>
          </div>
        );
      
      default:
        return (
          <EmptyState>
            <h3>Раздел в разработке</h3>
            <p>Этот функционал будет добавлен в ближайшее время</p>
          </EmptyState>
        );
    }
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AdminHeader>
        <HeaderContent>
          <div>
            <Title>Админская панель</Title>
            <Subtitle>Управление онлайн-школой Flerr</Subtitle>
          </div>
        </HeaderContent>
      </AdminHeader>

      <Dashboard>
        <StatsGrid>
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatIcon $color={stat.color}>
                <stat.icon size={24} />
              </StatIcon>
              <StatContent>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatContent>
            </StatCard>
          ))}
        </StatsGrid>

        <TabsContainer>
          <TabsHeader>
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                $active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={18} />
                {tab.label}
              </Tab>
            ))}
          </TabsHeader>
          
          <TabContent>
            {renderTabContent()}
          </TabContent>
        </TabsContainer>
      </Dashboard>
      
      <CreateCourseModal 
        isOpen={isCreateCourseModalOpen}
        onClose={() => setIsCreateCourseModalOpen(false)}
        onSuccess={handleCourseCreated}
      />
      <CreateUserModal
        isOpen={isCreateUserModalOpen}
        onClose={() => setIsCreateUserModalOpen(false)}
        onSuccess={handleCourseCreated}
      />
      <CreateInstructorModal
        isOpen={isCreateInstructorModalOpen}
        onClose={() => setIsCreateInstructorModalOpen(false)}
        onSuccess={handleCourseCreated}
        usersPrefetch={users}
      />
      <EditInstructorModal
        isOpen={!!editingInstructor}
        onClose={() => setEditingInstructor(null)}
        onSuccess={handleCourseCreated}
        instructor={editingInstructor}
      />
    </Container>
  );
};

export default AdminPanelPage;
