import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Menu, X, User, LogOut, BookOpen, Users, Package, Info, Settings } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(250,246,242,0.92);
  backdrop-filter: blur(12px) saturate(120%);
  border-bottom: 1px solid rgba(217,119,87,0.08);
  transition: var(--transition-normal);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const Logo = styled(Link)`
  font-family: var(--font-secondary);
  font-size: 1.65rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  letter-spacing: -0.01em;
  
  &:hover {
    color: var(--color-hover-primary);
    transform: scale(1.03);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${props => props.$isActive ? 'var(--color-primary)' : 'var(--color-text)'};
  text-decoration: none;
  font-weight: ${props => props.$isActive ? '600' : '400'};
  transition: var(--transition-fast);
  position: relative;
  
  &:hover {
    color: var(--color-primary);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    background: var(--color-primary);
    transition: var(--transition-fast);
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-weight: 500;
  transition: var(--transition-fast);
  cursor: pointer;
  
  ${props => props.$variant === 'primary' ? `
    background: var(--color-primary);
    color: white;
    border: none;
    
    &:hover {
      background: var(--color-hover-primary);
    }
  ` : `
    background: transparent;
    color: var(--color-text);
    border: 1px solid var(--color-text-muted);
    
    &:hover {
      background: var(--color-background-secondary);
      border-color: var(--color-primary);
    }
  `}
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  padding: var(--spacing-sm);
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-background-secondary);
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${props => props.$isActive ? 'var(--color-primary)' : 'var(--color-text)'};
  text-decoration: none;
  font-weight: ${props => props.$isActive ? '600' : '400'};
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-background-secondary);
  transition: var(--transition-fast);
  
  &:hover {
    color: var(--color-primary);
  }
`;

const UserMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-fast);
  
  &:hover {
    background: var(--color-hover-primary);
  }
`;

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/courses', label: 'Курсы' },
    { path: '/instructors', label: 'Преподаватели' },
    { path: '/suppliers', label: 'Поставщики' },
    { path: '/about', label: 'О нас' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
      }}
    >
      <Nav>
        <Logo to="/">Flerr</Logo>
        
        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              $isActive={isActive(item.path)}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>

        <AuthButtons>
          {isAuthenticated ? (
            <UserMenu>
              <UserAvatar>
                {user?.firstName?.charAt(0) || 'U'}
              </UserAvatar>
              <Link to="/profile">
                <Button $variant="secondary">
                  <User size={16} />
                  Профиль
                </Button>
              </Link>
              {user?.role === 'admin' && (
                <Link to="/admin">
                  <Button $variant="secondary">
                    <Settings size={16} />
                    Админ панель
                  </Button>
                </Link>
              )}
              <Button $variant="secondary" onClick={handleLogout}>
                <LogOut size={16} />
                Выйти
              </Button>
            </UserMenu>
          ) : (
            <>
              <Link to="/login">
                <Button $variant="secondary">Войти</Button>
              </Link>
              <Link to="/register">
                <Button $variant="primary">Регистрация</Button>
              </Link>
            </>
          )}
        </AuthButtons>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <MobileNavLink
                key={item.path}
                to={item.path}
                $isActive={isActive(item.path)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </MobileNavLink>
            ))}
            
            {isAuthenticated ? (
              <>
                <MobileNavLink to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                  <User size={16} />
                  Профиль
                </MobileNavLink>
                {user?.role === 'admin' && (
                  <MobileNavLink to="/admin" onClick={() => setIsMobileMenuOpen(false)}>
                    <Settings size={16} />
                    Админ панель
                  </MobileNavLink>
                )}
                <Button $variant="secondary" onClick={handleLogout}>
                  <LogOut size={16} />
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <MobileNavLink to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  Войти
                </MobileNavLink>
                <MobileNavLink to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  Регистрация
                </MobileNavLink>
              </>
            )}
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header; 