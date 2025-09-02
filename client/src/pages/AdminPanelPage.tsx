import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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

  const tabs = [
    { id: 'users', label: 'Пользователи', icon: Users },
    { id: 'courses', label: 'Курсы', icon: BookOpen },
    { id: 'instructors', label: 'Преподаватели', icon: GraduationCap },
    { id: 'suppliers', label: 'Поставщики', icon: Package },
    { id: 'analytics', label: 'Аналитика', icon: BarChart3 },
    { id: 'settings', label: 'Настройки', icon: Settings },
  ];

  const stats = [
    { 
      icon: Users, 
      number: '1,234', 
      label: 'Всего пользователей', 
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
    },
    { 
      icon: BookOpen, 
      number: '42', 
      label: 'Активных курсов', 
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' 
    },
    { 
      icon: GraduationCap, 
      number: '18', 
      label: 'Преподавателей', 
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' 
    },
    { 
      icon: Package, 
      number: '156', 
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
                <Button $variant="primary">
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
                <TableRow>
                  <TableCell colSpan={5}>
                    <EmptyState>
                      <p>Пользователи будут отображаться здесь</p>
                    </EmptyState>
                  </TableCell>
                </TableRow>
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
                <Button $variant="primary">
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
                <TableRow>
                  <TableCell colSpan={5}>
                    <EmptyState>
                      <p>Курсы будут отображаться здесь</p>
                    </EmptyState>
                  </TableCell>
                </TableRow>
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
          {stats.map((stat, index) => (
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
    </Container>
  );
};

export default AdminPanelPage;
