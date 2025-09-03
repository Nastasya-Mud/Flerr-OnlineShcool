import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Mail, Lock, User, Phone, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
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

const RegisterCard = styled(motion.div)`
  background: white;
  padding: var(--spacing-xxl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  width: 100%;
  max-width: 500px;
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

const Input = styled.input<{ $hasError?: boolean; $hasSuccess?: boolean }>`
  width: 100%;
  padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 3rem;
  border: 1px solid ${props => {
    if (props.$hasError) return 'var(--color-error)';
    if (props.$hasSuccess) return 'var(--color-success)';
    return 'var(--color-border)';
  }};
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

const SuccessMessage = styled.div`
  color: var(--color-success);
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

const PasswordStrength = styled.div`
  margin-top: var(--spacing-xs);
`;

const StrengthBar = styled.div`
  height: 4px;
  background: var(--color-border);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: var(--spacing-xs);
`;

const StrengthFill = styled.div<{ $strength: number }>`
  height: 100%;
  background: ${props => {
    if (props.$strength <= 2) return 'var(--color-error)';
    if (props.$strength <= 3) return 'var(--color-warning)';
    return 'var(--color-success)';
  }};
  width: ${props => props.$strength * 25}%;
  transition: all 0.3s ease;
`;

const StrengthText = styled.div<{ $strength: number }>`
  font-size: 0.75rem;
  color: ${props => {
    if (props.$strength <= 2) return 'var(--color-error)';
    if (props.$strength <= 3) return 'var(--color-warning)';
    return 'var(--color-success)';
  }};
`;

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState<{ [key: string]: boolean }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const calculatePasswordStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return Math.min(strength, 4);
  };

  const getPasswordStrengthText = (strength: number): string => {
    switch (strength) {
      case 0: return 'Очень слабый';
      case 1: return 'Слабый';
      case 2: return 'Средний';
      case 3: return 'Хороший';
      case 4: return 'Отличный';
      default: return '';
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const newSuccess: { [key: string]: boolean } = {};
    
    // Имя
    if (!formData.firstName) {
      newErrors.firstName = 'Имя обязательно';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'Имя должно содержать минимум 2 символа';
    } else {
      newSuccess.firstName = true;
    }
    
    // Фамилия
    if (!formData.lastName) {
      newErrors.lastName = 'Фамилия обязательна';
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'Фамилия должна содержать минимум 2 символа';
    } else {
      newSuccess.lastName = true;
    }
    
    // Email
    if (!formData.email) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    } else {
      newSuccess.email = true;
    }
    
    // Телефон
    if (formData.phone && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Введите корректный номер телефона';
    } else if (formData.phone) {
      newSuccess.phone = true;
    }
    
    // Пароль
    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Пароль должен содержать минимум 8 символов';
    } else {
      newSuccess.password = true;
    }
    
    // Подтверждение пароля
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Подтвердите пароль';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    } else if (formData.confirmPassword) {
      newSuccess.confirmPassword = true;
    }
    
    setErrors(newErrors);
    setSuccess(newSuccess);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Исключаем confirmPassword из данных для отправки
      const { confirmPassword, ...registrationData } = formData;
      await register(registrationData);
      toast.success('Регистрация успешна! Добро пожаловать!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || 'Ошибка регистрации');
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
    
    // Обновляем успех
    if (success[name]) {
      setSuccess(prev => ({ ...prev, [name]: false }));
    }
  };

  const passwordStrength = calculatePasswordStrength(formData.password);

  return (
    <Container>
      <RegisterCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header>
          <Title>Создать аккаунт</Title>
          <Subtitle>Присоединяйтесь к сообществу флористов</Subtitle>
        </Header>

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputIcon>
              <User size={20} />
            </InputIcon>
            <Input
              type="text"
              name="firstName"
              placeholder="Имя"
              value={formData.firstName}
              onChange={handleInputChange}
              $hasError={!!errors.firstName}
              $hasSuccess={success.firstName}
            />
            {errors.firstName && (
              <ErrorMessage>
                <AlertCircle size={16} />
                {errors.firstName}
              </ErrorMessage>
            )}
            {success.firstName && (
              <SuccessMessage>
                <CheckCircle size={16} />
                Отлично!
              </SuccessMessage>
            )}
          </InputGroup>

          <InputGroup>
            <InputIcon>
              <User size={20} />
            </InputIcon>
            <Input
              type="text"
              name="lastName"
              placeholder="Фамилия"
              value={formData.lastName}
              onChange={handleInputChange}
              $hasError={!!errors.lastName}
              $hasSuccess={success.lastName}
            />
            {errors.lastName && (
              <ErrorMessage>
                <AlertCircle size={16} />
                {errors.lastName}
              </ErrorMessage>
            )}
            {success.lastName && (
              <SuccessMessage>
                <CheckCircle size={16} />
                Отлично!
              </SuccessMessage>
            )}
          </InputGroup>

          <InputGroup>
            <InputIcon>
              <Mail size={20} />
            </InputIcon>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              $hasError={!!errors.email}
              $hasSuccess={success.email}
            />
            {errors.email && (
              <ErrorMessage>
                <AlertCircle size={16} />
                {errors.email}
              </ErrorMessage>
            )}
            {success.email && (
              <SuccessMessage>
                <CheckCircle size={16} />
                Отлично!
              </SuccessMessage>
            )}
          </InputGroup>

          <InputGroup>
            <InputIcon>
              <Phone size={20} />
            </InputIcon>
            <Input
              type="tel"
              name="phone"
              placeholder="Телефон (необязательно)"
              value={formData.phone}
              onChange={handleInputChange}
              $hasError={!!errors.phone}
              $hasSuccess={success.phone}
            />
            {errors.phone && (
              <ErrorMessage>
                <AlertCircle size={16} />
                {errors.phone}
              </ErrorMessage>
            )}
            {success.phone && (
              <SuccessMessage>
                <CheckCircle size={16} />
                Отлично!
              </SuccessMessage>
            )}
          </InputGroup>

          <InputGroup>
            <InputIcon>
              <Lock size={20} />
            </InputIcon>
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleInputChange}
              $hasError={!!errors.password}
              $hasSuccess={success.password}
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
            {formData.password && !errors.password && (
              <PasswordStrength>
                <StrengthBar>
                  <StrengthFill $strength={passwordStrength} />
                </StrengthBar>
                <StrengthText $strength={passwordStrength}>
                  {getPasswordStrengthText(passwordStrength)}
                </StrengthText>
              </PasswordStrength>
            )}
          </InputGroup>

          <InputGroup>
            <InputIcon>
              <Lock size={20} />
            </InputIcon>
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Подтвердите пароль"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              $hasError={!!errors.confirmPassword}
              $hasSuccess={success.confirmPassword}
            />
            <PasswordToggle
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </PasswordToggle>
            {errors.confirmPassword && (
              <ErrorMessage>
                <AlertCircle size={16} />
                {errors.confirmPassword}
              </ErrorMessage>
            )}
            {success.confirmPassword && (
              <SuccessMessage>
                <CheckCircle size={16} />
                Пароли совпадают!
              </SuccessMessage>
            )}
          </InputGroup>

          <SubmitButton type="submit" $isLoading={isLoading} disabled={isLoading}>
            {isLoading ? (
              <>
                <LoadingSpinner />
                Регистрация...
              </>
            ) : (
              'Создать аккаунт'
            )}
          </SubmitButton>
        </Form>

        <Divider>
          <span>или</span>
        </Divider>

        <SocialButton 
          type="button" 
          onClick={() => toast('Google OAuth скоро будет доступен! Пока используйте обычную регистрацию.')}
        >
          Зарегистрироваться через Google
        </SocialButton>

        <Footer>
          <p>
            Уже есть аккаунт?{' '}
            <Link to="/login">Войти</Link>
          </p>
        </Footer>
      </RegisterCard>
    </Container>
  );
};

export default RegisterPage; 