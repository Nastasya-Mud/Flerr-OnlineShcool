import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';
import { authAPI } from '../../api/auth';
import { usersAPI } from '../../api/users';

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const Modal = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 560px;
  max-height: 90vh;
  overflow: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  margin: 0;
  color: #2d3748;
`;

const Close = styled.button`
  background: none; border: 0; cursor: pointer; color: #718096; padding: .5rem; border-radius: 8px;
  &:hover { background: #f7fafc; color: #2d3748; }
`;

const Form = styled.form`
  display: flex; flex-direction: column; gap: 1rem;
`;

const Row = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const Input = styled.input`
  padding: .75rem; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1rem;
  &:focus { outline: none; border-color: #667eea; }
`;

const Select = styled.select`
  padding: .75rem; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1rem; background: white;
  &:focus { outline: none; border-color: #667eea; }
`;

const ButtonBar = styled.div`
  display: flex; justify-content: flex-end; gap: 1rem; margin-top: .5rem;
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: .75rem 1.25rem; border-radius: 8px; font-weight: 600; cursor: pointer; border: 2px solid transparent;
  ${p => p.$variant === 'primary' ? `background:#667eea;color:#fff;border-color:#667eea; &:hover{background:#5a67d8;border-color:#5a67d8}` : `background:#fff;color:#4a5568;border-color:#e2e8f0; &:hover{background:#f7fafc;border-color:#cbd5e0}`}
`;

interface Props { isOpen: boolean; onClose: () => void; onSuccess: () => void; }

const CreateUserModal: React.FC<Props> = ({ isOpen, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<'student' | 'instructor' | 'admin'>('instructor');
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password || !form.firstName || !form.lastName) {
      toast.error('Заполните все поля');
      return;
    }
    try {
      setLoading(true);
      // Регистрируем пользователя
      const { data } = await authAPI.register({
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        password: form.password,
        phone: ''
      } as any);
      const userId = data.user._id;
      // Если выбрана роль, меняем её через /users/:id
      if (role !== 'student') {
        await usersAPI.update(userId, { role, isActive: true });
      }
      toast.success('Пользователь создан');
      onSuccess();
      onClose();
      setForm({ firstName: '', lastName: '', email: '', password: '' });
      setRole('instructor');
    } catch (error: any) {
      const msg = error?.response?.data?.error || error?.response?.data?.message || 'Ошибка создания пользователя';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <Modal initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .95 }} onClick={(e) => e.stopPropagation()}>
            <Header>
              <Title>Добавить пользователя</Title>
              <Close onClick={onClose}><X size={22} /></Close>
            </Header>

            <Form onSubmit={handleSubmit}>
              <Row>
                <Input placeholder="Имя" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                <Input placeholder="Фамилия" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
              </Row>
              <Input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <Input type="password" placeholder="Пароль" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
              <Select value={role} onChange={(e) => setRole(e.target.value as any)}>
                <option value="student">Студент</option>
                <option value="instructor">Преподаватель</option>
                <option value="admin">Админ</option>
              </Select>

              <ButtonBar>
                <Button type="button" $variant="secondary" onClick={onClose}>Отмена</Button>
                <Button type="submit" $variant="primary" disabled={loading}>{loading ? 'Создание...' : 'Создать'}</Button>
              </ButtonBar>
            </Form>
          </Modal>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default CreateUserModal;
