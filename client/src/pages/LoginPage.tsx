import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
`;

const LoginCard = styled(motion.div)`
  background: white;
  padding: var(--spacing-xxl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  width: 100%;
  max-width: 400px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

const Title = styled.h1`
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`;

const Subtitle = styled.p`
  color: var(--color-text-light);
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 3rem;
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
  
  &::placeholder {
    color: var(--color-text-muted);
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--color-text-muted);
  cursor: pointer;
  padding: 0;
  
  &:hover {
    color: var(--color-text);
  }
`;

const ErrorMessage = styled.div`
  color: var(--color-error);
  font-size: 0.875rem;
  margin-top: var(--spacing-xs);
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const SubmitButton = styled.button<{ $isLoading?: boolean }>`
  width: 100%;
  padding: var(--spacing-md);
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  font-weight: 500;
  cursor: ${props => props.$isLoading ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  opacity: ${props => props.$isLoading ? 0.7 : 1};
  
  &:hover:not(:disabled) {
    background: var(--color-hover-primary);
    transform: translateY(-1px);
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: var(--spacing-lg) 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--color-border);
  }
  
  span {
    padding: 0 var(--spacing-md);
    color: var(--color-text-muted);
    font-size: 0.875rem;
  }
`;

const SocialButton = styled.button`
  width: 100%;
  padding: var(--spacing-md);
  background: white;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-background-secondary);
    border-color: var(--color-primary);
  }
`;

const Footer = styled.div`
  text-align: center;
  margin-top: var(--spacing-xl);
  color: var(--color-text-light);
  font-size: 0.875rem;
  
  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || '/';

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.email) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен содержать минимум 6 символов';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      await login(formData.email, formData.password);
      toast.success('Добро пожаловать!');
      navigate(from, { replace: true });
    } catch (error: any) {
      toast.error(error.message || 'Ошибка входа');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Очищаем ошибку при вводе
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <Container>
      <LoginCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header>
          <Title>Вход в аккаунт</Title>
          <Subtitle>Войдите в свой аккаунт для доступа к курсам</Subtitle>
        </Header>

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputIcon>
              <Mail size={20} />
            </InputIcon>
            <Input
              type="email"
              name="email"
              placeholder="Введите email"
              value={formData.email}
              onChange={handleInputChange}
              $hasError={!!errors.email}
            />
            {errors.email && (
              <ErrorMessage>
                <AlertCircle size={16} />
                {errors.email}
              </ErrorMessage>
            )}
          </InputGroup>

          <InputGroup>
            <InputIcon>
              <Lock size={20} />
            </InputIcon>
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Введите пароль"
              value={formData.password}
              onChange={handleInputChange}
              $hasError={!!errors.password}
            />
            <PasswordToggle
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </PasswordToggle>
            {errors.password && (
              <ErrorMessage>
                <AlertCircle size={16} />
                {errors.password}
              </ErrorMessage>
            )}
          </InputGroup>

          <SubmitButton type="submit" $isLoading={isLoading} disabled={isLoading}>
            {isLoading ? (
              <>
                <LoadingSpinner />
                Вход...
              </>
            ) : (
              'Войти'
            )}
          </SubmitButton>
        </Form>

        <Divider>
          <span>или</span>
        </Divider>

        <SocialButton 
          type="button" 
          onClick={() => toast('Google OAuth скоро будет доступен! Пока используйте обычный вход.')}
        >
          Войти через Google
        </SocialButton>

        <Footer>
          <p>
            Нет аккаунта?{' '}
            <Link to="/register">Зарегистрироваться</Link>
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            <Link to="/forgot-password">Забыли пароль?</Link>
          </p>
        </Footer>
      </LoginCard>
    </Container>
  );
};

export default LoginPage; 