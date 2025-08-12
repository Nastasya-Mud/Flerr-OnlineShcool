import React from 'react';
import styled from 'styled-components';
import { authAPI } from '../api/auth';
import { Button, Input } from '../components/UI';
import toast from 'react-hot-toast';

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

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast('Введите e-mail');
      return;
    }
    try {
      setLoading(true);
      await authAPI.forgotPassword({ email });
      toast('Письмо со ссылкой отправлено');
    } catch (err) {
      // ошибки перехватываются в axios-интерсепторе
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Card>
        <Title>Восстановление пароля</Title>
        <Subtitle>Укажите e-mail, на который отправим ссылку для сброса пароля</Subtitle>
        <form onSubmit={onSubmit}>
          <Field>
            <label htmlFor="email">E-mail</label>
            <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Field>
          <Button type="submit" loading={loading} fullWidth>
            Отправить ссылку
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default ForgotPasswordPage;


