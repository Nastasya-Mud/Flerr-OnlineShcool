import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const LoadingCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Title = styled.h2`
  color: #2d3748;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  color: #718096;
  margin: 0;
`;

const AuthCallbackPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      const token = searchParams.get('token');
      const error = searchParams.get('error');

      if (error) {
        toast.error('Ошибка входа через Google. Попробуйте еще раз.');
        navigate('/login');
        return;
      }

      if (token) {
        try {
          // Save token and get user info
          localStorage.setItem('token', token);
          
          // Get user info with the token
          const response = await fetch('/api/auth/me', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          if (response.ok) {
            const data = await response.json();
            // Update auth context with user data
            toast.success('Добро пожаловать!');
            // Force page reload to update auth context
            window.location.href = '/';
          } else {
            throw new Error('Failed to get user info');
          }
        } catch (error) {
          console.error('OAuth callback error:', error);
          toast.error('Произошла ошибка при входе');
          navigate('/login');
        }
      } else {
        toast.error('Не удалось получить токен авторизации');
        navigate('/login');
      }
    };

    handleCallback();
  }, [searchParams, navigate, login]);

  return (
    <Container>
      <LoadingCard>
        <LoadingSpinner />
        <Title>Авторизация</Title>
        <Message>Завершаем вход через Google...</Message>
      </LoadingCard>
    </Container>
  );
};

export default AuthCallbackPage;
