import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';
import { usersAPI } from '../../api/users';
import { instructorsAPI } from '../../api/instructors';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
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
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #718096;
  padding: 0.5rem;
  border-radius: 8px;
  
  &:hover {
    background: #f7fafc;
    color: #2d3748;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #2d3748;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const ButtonBar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid transparent;
  
  ${props => props.$variant === 'primary' ? `
    background: #667eea;
    color: white;
    border-color: #667eea;
    &:hover { background: #5a67d8; border-color: #5a67d8; }
    &:disabled { background: #a0aec0; border-color: #a0aec0; cursor: not-allowed; }
  ` : `
    background: white;
    color: #4a5568;
    border-color: #e2e8f0;
    &:hover { background: #f7fafc; border-color: #cbd5e0; }
  `}
`;

interface CreateInstructorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const SPECIALTIES = [
  'wedding-floristry',
  'commercial-floristry',
  'interior-compositions',
  'dry-flowers',
  'artificial-flowers',
  'business-floristry',
  'social-media',
  'event-floristry',
  'seasonal-compositions',
  'modern-floristry',
  'classical-floristry',
  'minimalist-compositions',
  'luxury-compositions',
  'eco-floristry',
  'sustainable-floristry'
];

const CreateInstructorModal: React.FC<CreateInstructorModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [form, setForm] = useState({
    userId: '',
    bio: '',
    experience: 0,
    specialties: [] as string[],
    education: '' as string,
    certifications: '' as string,
    achievements: '' as string,
    instagram: '',
    facebook: '',
    website: '',
    youtube: '',
    featured: false,
  });

  useEffect(() => {
    if (!isOpen) return;
    const load = async () => {
      try {
        // Загружаем всех пользователей, чтобы можно было выбрать и студента
        const res = await usersAPI.getAll({ limit: 200 });
        setUsers(res.data || []);
      } catch (e) {
        // ignore
      }
    };
    load();
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.userId) { toast.error('Выберите пользователя'); return; }
    if (form.bio.trim().length < 50) { toast.error('Био минимум 50 символов'); return; }

    try {
      setLoading(true);
      // Если выбранный пользователь не instructor — повысим роль автоматически
      const selectedUser = users.find(u => u._id === form.userId);
      if (selectedUser && selectedUser.role !== 'instructor') {
        try {
          await usersAPI.update(form.userId, { role: 'instructor', isActive: true });
        } catch (e) {
          // Если не удалось сменить роль — продолжать нельзя, backend потребует instructor
          toast.error('Не удалось назначить роль преподавателя пользователю');
          setLoading(false);
          return;
        }
      }

      const payload = {
        userId: form.userId,
        bio: form.bio.trim(),
        experience: Number(form.experience) || undefined,
        specialties: form.specialties.length ? form.specialties : undefined,
        education: form.education ? form.education.split('\n').map(s => s.trim()).filter(Boolean) : undefined,
        certifications: form.certifications ? form.certifications.split('\n').map(s => s.trim()).filter(Boolean) : undefined,
        achievements: form.achievements ? form.achievements.split('\n').map(s => s.trim()).filter(Boolean) : undefined,
        socialMedia: {
          instagram: form.instagram || undefined,
          facebook: form.facebook || undefined,
          website: form.website || undefined,
          youtube: form.youtube || undefined,
        },
        featured: form.featured ? true : undefined,
      };
      await instructorsAPI.create(payload);
      toast.success('Профиль преподавателя создан');
      onSuccess();
      onClose();
      setForm({ userId: '', bio: '', experience: 0, specialties: [], education: '', certifications: '', achievements: '', instagram: '', facebook: '', website: '', youtube: '', featured: false });
    } catch (error: any) {
      toast.error(error?.response?.data?.error || 'Ошибка создания преподавателя');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <Modal initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} onClick={(e) => e.stopPropagation()}>
            <Header>
              <Title>Добавить преподавателя</Title>
              <CloseButton onClick={onClose}><X size={24} /></CloseButton>
            </Header>

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Пользователь (роль instructor)</Label>
                <Select value={form.userId} onChange={(e) => setForm({ ...form, userId: e.target.value })}>
                  <option value="">— Выберите пользователя —</option>
                  {users.map((u) => (
                    <option key={u._id} value={u._id}>{`${u.firstName || ''} ${u.lastName || ''}`.trim() || u.email}</option>
                  ))}
                </Select>
              </FormGroup>

              <TextArea placeholder="Биография (мин. 50 символов)" value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} />

              <FormRow>
                <FormGroup>
                  <Label>Опыт (лет)</Label>
                  <Input type="number" min="0" max="50" value={form.experience} onChange={(e) => setForm({ ...form, experience: Number(e.target.value) })} />
                </FormGroup>
                <FormGroup>
                  <Label>Специализации</Label>
                  <Select multiple value={form.specialties} onChange={(e) => setForm({ ...form, specialties: Array.from(e.target.selectedOptions).map(o => o.value) })}>
                    {SPECIALTIES.map(s => (<option key={s} value={s}>{s}</option>))}
                  </Select>
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label>Образование (каждое с новой строки)</Label>
                <TextArea value={form.education} onChange={(e) => setForm({ ...form, education: e.target.value })} />
              </FormGroup>

              <FormGroup>
                <Label>Сертификаты (каждый с новой строки)</Label>
                <TextArea value={form.certifications} onChange={(e) => setForm({ ...form, certifications: e.target.value })} />
              </FormGroup>

              <FormGroup>
                <Label>Достижения (каждое с новой строки)</Label>
                <TextArea value={form.achievements} onChange={(e) => setForm({ ...form, achievements: e.target.value })} />
              </FormGroup>

              <FormRow>
                <Input placeholder="Instagram URL" value={form.instagram} onChange={(e) => setForm({ ...form, instagram: e.target.value })} />
                <Input placeholder="Facebook URL" value={form.facebook} onChange={(e) => setForm({ ...form, facebook: e.target.value })} />
              </FormRow>
              <FormRow>
                <Input placeholder="Website URL" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
                <Input placeholder="YouTube URL" value={form.youtube} onChange={(e) => setForm({ ...form, youtube: e.target.value })} />
              </FormRow>

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

export default CreateInstructorModal;
