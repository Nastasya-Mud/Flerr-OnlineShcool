import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const FooterContainer = styled.footer`
  background: var(--color-background-secondary);
  border-top: 1px solid var(--color-background-tertiary);
  padding: var(--spacing-xxl) 0 var(--spacing-lg);
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const FooterSection = styled.div`
  h3 {
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
    font-size: 1.25rem;
  }
  
  p {
    color: var(--color-text-light);
    line-height: 1.6;
    margin-bottom: var(--spacing-sm);
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: var(--spacing-sm);
  }
  
  a {
    color: var(--color-text-light);
    text-decoration: none;
    transition: var(--transition-fast);
    
    &:hover {
      color: var(--color-primary);
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-light);
  
  svg {
    color: var(--color-primary);
    flex-shrink: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--color-primary);
    color: white;
    transition: var(--transition-fast);
    
    &:hover {
      background: var(--color-hover-primary);
      transform: translateY(-2px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: var(--spacing-lg);
  margin-top: var(--spacing-xl);
  border-top: 1px solid var(--color-background-tertiary);
  color: var(--color-text-muted);
  font-size: 0.875rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Flerr</h3>
          <p>
            Онлайн школа флористики, где вы научитесь создавать прекрасные композиции 
            и превратите свое увлечение в прибыльную профессию.
          </p>
          <SocialLinks>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Курсы</h3>
          <ul>
            <li><Link to="/courses">Все курсы</Link></li>
            <li><Link to="/courses?category=beginner">Для начинающих</Link></li>
            <li><Link to="/courses?category=advanced">Продвинутые</Link></li>
            <li><Link to="/courses?category=wedding">Свадебная флористика</Link></li>
            <li><Link to="/courses?category=interior">Интерьерные композиции</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Информация</h3>
          <ul>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/instructors">Преподаватели</Link></li>
            <li><Link to="/suppliers">Поставщики</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
            <li><Link to="/privacy">Политика конфиденциальности</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Контакты</h3>
          <ContactInfo>
            <Mail size={16} />
            <span>info@flerr-school.com</span>
          </ContactInfo>
          <ContactInfo>
            <Phone size={16} />
            <span>+7 (999) 123-45-67</span>
          </ContactInfo>
          <ContactInfo>
            <MapPin size={16} />
            <span>Москва, ул. Цветочная, 1</span>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <div className="container">
          © 2024 Flerr Online School. Все права защищены.
        </div>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 