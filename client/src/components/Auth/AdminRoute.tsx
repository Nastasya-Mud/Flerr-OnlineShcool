import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

const LoadingSpinner = styled.div<{ size?: number }>`
  width: ${props => props.size || 40}px;
  height: ${props => props.size || 40}px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const AccessDenied = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
  padding: 2rem;
`;

const ErrorTitle = styled.h2`
  color: #e53e3e;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const ErrorMessage = styled.p`
  color: #4a5568;
  font-size: 1.1rem;
  max-width: 500px;
  line-height: 1.6;
`;

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingSpinner size={32} />
      </LoadingContainer>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login page with return url
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user?.role !== 'admin') {
    return (
      <AccessDenied>
        <ErrorTitle>Доступ запрещен</ErrorTitle>
        <ErrorMessage>
          У вас недостаточно прав для доступа к этой странице. 
          Администраторские функции доступны только пользователям с ролью администратора.
        </ErrorMessage>
      </AccessDenied>
    );
  }

  return <>{children}</>;
};

export default AdminRoute;
