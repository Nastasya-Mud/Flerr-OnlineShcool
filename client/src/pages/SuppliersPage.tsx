import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { 
  Star, MapPin, Phone, Mail, Globe, Instagram, Facebook, 
  Search, Filter, Package, Truck, Award, Shield, 
  Heart, Share2, ChevronRight, CheckCircle, Clock
} from 'lucide-react';
import toast from 'react-hot-toast';

const Container = styled.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--spacing-lg);
`;

const Title = styled(motion.h1)`
  color: var(--color-text);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  color: var(--color-text-light);
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
`;

const Stats = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: var(--spacing-xl);
  flex-wrap: wrap;
  
  .stat {
    text-align: center;
    
    .number {
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 0.25rem;
    }
    
    .label {
      color: var(--color-text-muted);
      font-size: 0.875rem;
    }
  }
`;

const FiltersSection = styled.div`
  max-width: 1200px;
  margin: 0 auto var(--spacing-xxl);
  padding: 0 var(--spacing-lg);
`;

const FiltersContainer = styled.div`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  display: flex;
  gap: var(--spacing-lg);
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchInput = styled.div`
  flex: 1;
  min-width: 250px;
  position: relative;
  
  input {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 3rem;
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-md);
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(128, 0, 128, 0.1);
    }
  }
  
  svg {
    position: absolute;
    left: var(--spacing-md);
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-muted);
  }
`;

const FilterSelect = styled.select`
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  background: white;
  min-width: 150px;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const SuppliersGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SupplierCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

const SupplierHeader = styled.div`
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SupplierLogo = styled.div<{ $imageUrl: string }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: white;
  background-image: ${props => props.$imageUrl ? `url(${props.$imageUrl})` : 'none'};
  background-size: cover;
  background-position: center;
  border: 4px solid white;
  box-shadow: var(--shadow-md);
`;

const SupplierInfo = styled.div`
  padding: var(--spacing-lg);
`;

const SupplierName = styled.h3`
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`;

const SupplierCategory = styled.p`
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: var(--spacing-md);
`;

const SupplierDescription = styled.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
`;

const SupplierStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  
  .stat {
    text-align: center;
    
    .number {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--color-primary);
      margin-bottom: 0.25rem;
    }
    
    .label {
      font-size: 0.75rem;
      color: var(--color-text-muted);
    }
  }
`;

const SupplierMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-muted);
    font-size: 0.875rem;
  }
`;

const Badges = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
`;

const Badge = styled.span<{ $type: 'verified' | 'featured' | 'premium' }>`
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  ${props => {
    switch (props.$type) {
      case 'verified':
        return `
          background: var(--color-success);
          color: white;
        `;
      case 'featured':
        return `
          background: var(--color-primary);
          color: white;
        `;
      case 'premium':
        return `
          background: var(--color-warning);
          color: white;
        `;
      default:
        return '';
    }
  }}
`;

const ContactInfo = styled.div`
  margin-bottom: var(--spacing-md);
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-muted);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    
    a {
      color: var(--color-primary);
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  
  a {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--color-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    text-decoration: none;
    transition: all 0.2s ease;
    
    &:hover {
      background: var(--color-primary);
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  
  button {
    flex: 1;
    padding: var(--spacing-sm);
    border: none;
    border-radius: var(--border-radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;

const PrimaryButton = styled.button`
  background: var(--color-primary);
  color: white;
  
  &:hover {
    background: var(--color-hover-primary);
  }
`;

const SecondaryButton = styled.button`
  background: var(--color-accent);
  color: var(--color-primary);
  
  &:hover {
    background: var(--color-primary);
    color: white;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
  color: var(--color-text-muted);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-md);
  }
  
  p {
    font-size: 1rem;
  }
`;

const SuppliersPage: React.FC = () => {
  const [suppliers, setSuppliers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  // Моковые данные для демонстрации
  const mockSuppliers = [
    {
      _id: '1',
      name: 'Цветочный Рай',
      category: 'Свежие цветы',
      description: 'Поставщик свежих цветов премиум-класса. Работаем с лучшими плантациями Голландии, Эквадора и Кении. Доставка по всей России.',
      logo: '/images/supplier-1.jpg',
      rating: 4.9,
      productsCount: 150,
      deliveryTime: '1-2 дня',
      region: 'Москва',
      isVerified: true,
      isFeatured: true,
      isPremium: true,
      contact: {
        phone: '+7 (495) 123-45-67',
        email: 'info@flowerparadise.ru',
        website: 'www.flowerparadise.ru'
      },
      socialMedia: {
        instagram: '@flowerparadise',
        facebook: 'flowerparadise.ru'
      }
    },
    {
      _id: '2',
      name: 'Сухие Цветы',
      category: 'Сухие цветы',
      description: 'Специализируемся на поставке качественных сухих цветов и декоративных элементов для интерьерных композиций.',
      logo: '/images/supplier-2.jpg',
      rating: 4.7,
      productsCount: 89,
      deliveryTime: '3-5 дней',
      region: 'Санкт-Петербург',
      isVerified: true,
      isFeatured: false,
      isPremium: false,
      contact: {
        phone: '+7 (812) 987-65-43',
        email: 'sales@dryflowers.ru',
        website: 'www.dryflowers.ru'
      },
      socialMedia: {
        instagram: '@dryflowers',
        facebook: 'dryflowers.ru'
      }
    },
    {
      _id: '3',
      name: 'Искусственные Цветы',
      category: 'Искусственные цветы',
      description: 'Производитель высококачественных искусственных цветов для декора и флористики. Широкий ассортимент и доступные цены.',
      logo: '/images/supplier-3.jpg',
      rating: 4.5,
      productsCount: 234,
      deliveryTime: '2-3 дня',
      region: 'Екатеринбург',
      isVerified: true,
      isFeatured: false,
      isPremium: true,
      contact: {
        phone: '+7 (343) 456-78-90',
        email: 'info@artificialflowers.ru',
        website: 'www.artificialflowers.ru'
      },
      socialMedia: {
        instagram: '@artificialflowers',
        facebook: 'artificialflowers.ru'
      }
    },
    {
      _id: '4',
      name: 'Флористические Материалы',
      category: 'Материалы и инструменты',
      description: 'Поставщик профессиональных материалов и инструментов для флористов. Ленты, проволока, флористическая губка, ножницы.',
      logo: '/images/supplier-4.jpg',
      rating: 4.8,
      productsCount: 567,
      deliveryTime: '1-3 дня',
      region: 'Москва',
      isVerified: true,
      isFeatured: true,
      isPremium: false,
      contact: {
        phone: '+7 (495) 234-56-78',
        email: 'sales@floristmaterials.ru',
        website: 'www.floristmaterials.ru'
      },
      socialMedia: {
        instagram: '@floristmaterials',
        facebook: 'floristmaterials.ru'
      }
    },
    {
      _id: '5',
      name: 'Упаковка для Букетов',
      category: 'Упаковка',
      description: 'Специализируемся на поставке качественной упаковки для букетов и подарков. Бумага, ленты, коробки, пакеты.',
      logo: '/images/supplier-5.jpg',
      rating: 4.6,
      productsCount: 123,
      deliveryTime: '2-4 дня',
      region: 'Казань',
      isVerified: true,
      isFeatured: false,
      isPremium: false,
      contact: {
        phone: '+7 (843) 345-67-89',
        email: 'info@packaging.ru',
        website: 'www.packaging.ru'
      },
      socialMedia: {
        instagram: '@packaging',
        facebook: 'packaging.ru'
      }
    },
    {
      _id: '6',
      name: 'Экзотические Цветы',
      category: 'Свежие цветы',
      description: 'Поставщик экзотических цветов и редких сортов. Орхидеи, антуриумы, стрелиции и другие тропические растения.',
      logo: '/images/supplier-6.jpg',
      rating: 4.9,
      productsCount: 78,
      deliveryTime: '3-7 дней',
      region: 'Новосибирск',
      isVerified: true,
      isFeatured: true,
      isPremium: true,
      contact: {
        phone: '+7 (383) 456-78-90',
        email: 'sales@exoticflowers.ru',
        website: 'www.exoticflowers.ru'
      },
      socialMedia: {
        instagram: '@exoticflowers',
        facebook: 'exoticflowers.ru'
      }
    }
  ];

  useEffect(() => {
    // Имитация загрузки данных
    setTimeout(() => {
      setSuppliers(mockSuppliers);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || supplier.category === categoryFilter;
    const matchesRegion = !regionFilter || supplier.region === regionFilter;
    
    return matchesSearch && matchesCategory && matchesRegion;
  });

  const handleContact = (supplier: any) => {
    toast.success(`Связаться с ${supplier.name}`);
  };

  const handleViewCatalog = (supplier: any) => {
    toast.info(`Переход к каталогу ${supplier.name}`);
  };

  const totalSuppliers = suppliers.length;
  const verifiedSuppliers = suppliers.filter(s => s.isVerified).length;
  const featuredSuppliers = suppliers.filter(s => s.isFeatured).length;

  if (loading) {
    return (
      <Container>
        <div style={{ textAlign: 'center', padding: 'var(--spacing-xxl) 0' }}>
          Загрузка поставщиков...
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          База поставщиков
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Надежные поставщики цветов, материалов и инструментов для флористов
        </Subtitle>
        <Stats
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="stat">
            <div className="number">{totalSuppliers}</div>
            <div className="label">Поставщиков</div>
          </div>
          <div className="stat">
            <div className="number">{verifiedSuppliers}</div>
            <div className="label">Проверенных</div>
          </div>
          <div className="stat">
            <div className="number">{featuredSuppliers}</div>
            <div className="label">Рекомендуемых</div>
          </div>
        </Stats>
      </Header>

      <FiltersSection>
        <FiltersContainer>
          <SearchInput>
            <Search size={20} />
            <input
              type="text"
              placeholder="Поиск по названию, категории или описанию..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchInput>
          
          <FilterSelect
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">Все категории</option>
            <option value="Свежие цветы">Свежие цветы</option>
            <option value="Сухие цветы">Сухие цветы</option>
            <option value="Искусственные цветы">Искусственные цветы</option>
            <option value="Материалы и инструменты">Материалы и инструменты</option>
            <option value="Упаковка">Упаковка</option>
          </FilterSelect>
          
          <FilterSelect
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
          >
            <option value="">Все регионы</option>
            <option value="Москва">Москва</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
            <option value="Екатеринбург">Екатеринбург</option>
            <option value="Казань">Казань</option>
            <option value="Новосибирск">Новосибирск</option>
          </FilterSelect>
        </FiltersContainer>
      </FiltersSection>

      <SuppliersGrid>
        <AnimatePresence mode="wait">
          {filteredSuppliers.length > 0 ? (
            filteredSuppliers.map((supplier, index) => (
              <SupplierCard
                key={supplier._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <SupplierHeader>
                  <SupplierLogo $imageUrl={supplier.logo} />
                </SupplierHeader>
                
                <SupplierInfo>
                  <SupplierName>{supplier.name}</SupplierName>
                  <SupplierCategory>{supplier.category}</SupplierCategory>
                  <SupplierDescription>{supplier.description}</SupplierDescription>
                  
                  <SupplierStats>
                    <div className="stat">
                      <div className="number">{supplier.rating}</div>
                      <div className="label">рейтинг</div>
                    </div>
                    <div className="stat">
                      <div className="number">{supplier.productsCount}</div>
                      <div className="label">товаров</div>
                    </div>
                    <div className="stat">
                      <div className="number">{supplier.deliveryTime}</div>
                      <div className="label">доставка</div>
                    </div>
                  </SupplierStats>
                  
                  <SupplierMeta>
                    <span>
                      <Star size={16} />
                      {supplier.rating}
                    </span>
                    <span>
                      <MapPin size={16} />
                      {supplier.region}
                    </span>
                    <span>
                      <Package size={16} />
                      {supplier.category}
                    </span>
                  </SupplierMeta>
                  
                  <Badges>
                    {supplier.isVerified && (
                      <Badge $type="verified">
                        <Shield size={12} />
                        Проверен
                      </Badge>
                    )}
                    {supplier.isFeatured && (
                      <Badge $type="featured">
                        <Award size={12} />
                        Рекомендуемый
                      </Badge>
                    )}
                    {supplier.isPremium && (
                      <Badge $type="premium">
                        <Star size={12} />
                        Премиум
                      </Badge>
                    )}
                  </Badges>
                  
                  <ContactInfo>
                    <div className="contact-item">
                      <Phone size={14} />
                      <a href={`tel:${supplier.contact.phone}`}>{supplier.contact.phone}</a>
                    </div>
                    <div className="contact-item">
                      <Mail size={14} />
                      <a href={`mailto:${supplier.contact.email}`}>{supplier.contact.email}</a>
                    </div>
                    <div className="contact-item">
                      <Globe size={14} />
                      <a href={`https://${supplier.contact.website}`} target="_blank" rel="noopener noreferrer">
                        {supplier.contact.website}
                      </a>
                    </div>
                  </ContactInfo>
                  
                  <SocialLinks>
                    <a href="#" title="Instagram">
                      <Instagram size={18} />
                    </a>
                    <a href="#" title="Facebook">
                      <Facebook size={18} />
                    </a>
                    <a href="#" title="Website">
                      <Globe size={18} />
                    </a>
                  </SocialLinks>
                  
                  <ActionButtons>
                    <PrimaryButton onClick={() => handleViewCatalog(supplier)}>
                      <Package size={16} />
                      Каталог
                    </PrimaryButton>
                    <SecondaryButton onClick={() => handleContact(supplier)}>
                      <Phone size={16} />
                      Связаться
                    </SecondaryButton>
                  </ActionButtons>
                </SupplierInfo>
              </SupplierCard>
            ))
          ) : (
            <EmptyState>
              <h3>Поставщики не найдены</h3>
              <p>Попробуйте изменить параметры поиска</p>
            </EmptyState>
          )}
        </AnimatePresence>
      </SuppliersGrid>
    </Container>
  );
};

export default SuppliersPage; 