import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload } from 'lucide-react';
import toast from 'react-hot-toast';
import { coursesAPI } from '../../api/courses';

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
  max-width: 600px;
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
  gap: 1.5rem;
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
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.2s;
  font-family: inherit;
  
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

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  ${props => props.$variant === 'primary' ? `
    background: #667eea;
    color: white;
    border: 2px solid #667eea;
    
    &:hover {
      background: #5a67d8;
      border-color: #5a67d8;
    }
    
    &:disabled {
      background: #a0aec0;
      border-color: #a0aec0;
      cursor: not-allowed;
    }
  ` : `
    background: white;
    color: #4a5568;
    border: 2px solid #e2e8f0;
    
    &:hover {
      background: #f7fafc;
      border-color: #cbd5e0;
    }
  `}
`;

interface CreateCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const CreateCourseModal: React.FC<CreateCourseModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    shortDescription: '',
    price: '',
    originalPrice: '',
    duration: '',
    level: 'beginner',
    category: 'флористика',
    image: '',
    materials: '',
    requirements: '',
    outcomes: ''
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      toast.error('Название курса обязательно');
      return;
    }
    
    if (!formData.description.trim()) {
      toast.error('Описание курса обязательно');
      return;
    }

    try {
      setLoading(true);
      
      // Если выбран файл изображения — конвертируем в base64 data URL
      let imageValue = formData.image.trim();
      if (imageFile) {
        imageValue = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(imageFile);
        });
      }

      const courseData = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        shortDescription: formData.shortDescription.trim() || formData.title.trim(),
        price: formData.price ? parseInt(formData.price) : 0,
        originalPrice: formData.originalPrice ? parseInt(formData.originalPrice) : undefined,
        duration: formData.duration.trim() || '4 недели',
        level: formData.level,
        category: formData.category,
        image: imageValue || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
        instructors: [],
        materials: formData.materials ? formData.materials.split('\n').map(m => m.trim()).filter(Boolean) : [],
        requirements: formData.requirements ? formData.requirements.split('\n').map(r => r.trim()).filter(Boolean) : ['Желание учиться'],
        outcomes: formData.outcomes ? formData.outcomes.split('\n').map(o => o.trim()).filter(Boolean) : []
      };

      await coursesAPI.create(courseData);
      
      toast.success('Курс успешно создан!');
      onSuccess();
      onClose();
      
      // Сброс формы
      setFormData({
        title: '',
        description: '',
        shortDescription: '',
        price: '',
        originalPrice: '',
        duration: '',
        level: 'beginner',
        category: 'флористика',
        image: '',
        materials: '',
        requirements: '',
        outcomes: ''
      });
      setImageFile(null);
      
    } catch (error: any) {
      console.error('Error creating course:', error);
      toast.error(error.response?.data?.message || 'Ошибка создания курса');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <Modal
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Header>
              <Title>Создать новый курс</Title>
              <CloseButton onClick={onClose}>
                <X size={24} />
              </CloseButton>
            </Header>

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Название курса *</Label>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Основы флористики для начинающих"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Краткое описание</Label>
                <Input
                  type="text"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  placeholder="Базовый курс флористики"
                />
              </FormGroup>

              <FormGroup>
                <Label>Полное описание *</Label>
                <TextArea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Подробное описание курса, что будут изучать студенты..."
                  required
                />
              </FormGroup>

              <Row>
                <FormGroup>
                  <Label>Цена (₽)</Label>
                  <Input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="4900"
                    min="0"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Старая цена (₽)</Label>
                  <Input
                    type="number"
                    name="originalPrice"
                    value={formData.originalPrice}
                    onChange={handleChange}
                    placeholder="6900"
                    min="0"
                  />
                </FormGroup>
              </Row>

              <Row>
                <FormGroup>
                  <Label>Продолжительность</Label>
                  <Input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="4 недели"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Уровень</Label>
                  <Select name="level" value={formData.level} onChange={handleChange}>
                    <option value="beginner">Начинающий</option>
                    <option value="intermediate">Средний</option>
                    <option value="advanced">Продвинутый</option>
                  </Select>
                </FormGroup>
              </Row>

              <Row>
                <FormGroup>
                  <Label>Категория</Label>
                  <Select name="category" value={formData.category} onChange={handleChange}>
                    <option value="флористика">Флористика</option>
                    <option value="дизайн">Дизайн</option>
                    <option value="бизнес">Бизнес</option>
                    <option value="искусство">Искусство</option>
                  </Select>
                </FormGroup>
          <FormGroup>
            <Label>Изображение курса</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setImageFile(file);
              }}
            />
            <small style={{ color: '#718096' }}>Можно загрузить файл или оставить пустым и указать URL ниже</small>
            <Input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </FormGroup>
              </Row>

              <FormGroup>
                <Label>Материалы (каждый с новой строки)</Label>
                <TextArea
                  name="materials"
                  value={formData.materials}
                  onChange={handleChange}
                  placeholder="Живые цветы&#10;Инструменты флориста&#10;Упаковочные материалы"
                />
              </FormGroup>

              <FormGroup>
                <Label>Требования (каждое с новой строки)</Label>
                <TextArea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Желание учиться&#10;Базовые навыки работы с руками&#10;Креативность"
                />
              </FormGroup>

              <FormGroup>
                <Label>Чему научитесь (каждое с новой строки)</Label>
                <TextArea
                  name="outcomes"
                  value={formData.outcomes}
                  onChange={handleChange}
                  placeholder="Создавать красивые букеты&#10;Работать с живыми цветами&#10;Основы композиции"
                />
              </FormGroup>

              <ButtonGroup>
                <Button type="button" $variant="secondary" onClick={onClose}>
                  Отмена
                </Button>
                <Button type="submit" $variant="primary" disabled={loading}>
                  {loading ? 'Создание...' : 'Создать курс'}
                </Button>
              </ButtonGroup>
            </Form>
          </Modal>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default CreateCourseModal;
