import React from 'react';
import styled from 'styled-components';
import { authAPI } from '../api/auth';
import { Button, Input } from '../components/UI';
import toast from 'react-hot-toast';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Container = styled.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background: white;
  padding: var(--spacing-xxl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  max-width: 480px;
  width: 100%;
`;

const Title = styled.h1`
  color: var(--color-text);
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
`;

const Subtitle = styled.p`
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
`;

const ResetPasswordPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token') || '';
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      toast('Неверная или устаревшая ссылка');
      return;
    }
    if (!password || password.length < 6) {
      toast('Пароль должен быть не менее 6 символов');
      return;
    }
    if (password !== confirm) {
      toast('Пароли не совпадают');
      return;
    }
    try {
      setLoading(true);
      await authAPI.resetPassword({ token, newPassword: password });
      toast('Пароль успешно изменён');
      navigate('/login');
    } catch (err) {
      // ошибки перехватываются интерсептором
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Card>
        <Title>Сброс пароля</Title>
        <Subtitle>Введите новый пароль для вашего аккаунта</Subtitle>
        <form onSubmit={onSubmit}>
          <Field>
            <label htmlFor="password">Новый пароль</label>
            <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Field>
          <Field>
            <label htmlFor="confirm">Повторите пароль</label>
            <Input id="confirm" type="password" placeholder="••••••••" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
          </Field>
          <Button type="submit" loading={loading} fullWidth>
            Сохранить пароль
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default ResetPasswordPage;


