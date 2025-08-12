import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Star, Truck, Shield } from 'lucide-react';
import { Card, CardHeader, CardBody, CardFooter, CardImage, CardBadge, Button } from './UI';

interface SupplierCardProps {
  supplier: {
    id: string;
    name: string;
    description: string;
    logo: string;
    categories: string[];
    regions: string[];
    contactInfo: {
      phone?: string;
      email?: string;
      website?: string;
    };
    rating: number;
    isVerified?: boolean;
    isFeatured?: boolean;
    isPremium?: boolean;
    discount?: number;
    deliveryInfo?: string;
  };
}

const SupplierLogo = styled(CardImage)`
  height: 120px;
  background-size: contain;
  background-color: white;
`;

const SupplierName = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.purple};
`;

const SupplierDescription = styled.p`
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CategoriesTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.lavender};
  color: ${({ theme }) => theme.colors.purple};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textLight};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.purple};
`;

const DiscountBadge = styled.span`
  background: ${({ theme }) => theme.colors.success};
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
`;

const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 12px;
  margin-bottom: 12px;
`;

const SupplierCard: React.FC<SupplierCardProps> = ({ supplier }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <Card hover variant="elevated">
        <SupplierLogo src={supplier.logo} />
        {supplier.isVerified && <CardBadge variant="success">Проверенный</CardBadge>}
        {supplier.isFeatured && <CardBadge variant="warning">Рекомендуемый</CardBadge>}
        {supplier.isPremium && <CardBadge variant="info">Премиум</CardBadge>}
        
        <CardBody>
          <SupplierName>{supplier.name}</SupplierName>
          <SupplierDescription>{supplier.description}</SupplierDescription>
          
          <RatingContainer>
            <Rating>
              <Star size={14} />
              {supplier.rating}
            </Rating>
            {supplier.discount && (
              <DiscountBadge>-{supplier.discount}%</DiscountBadge>
            )}
          </RatingContainer>
          
          <CategoriesTags>
            {supplier.categories.slice(0, 3).map((category, index) => (
              <Tag key={index}>{category}</Tag>
            ))}
            {supplier.categories.length > 3 && (
              <Tag>+{supplier.categories.length - 3}</Tag>
            )}
          </CategoriesTags>
          
          <ContactInfo>
            {supplier.contactInfo.phone && (
              <ContactItem>
                <Phone size={12} />
                {supplier.contactInfo.phone}
              </ContactItem>
            )}
            {supplier.contactInfo.email && (
              <ContactItem>
                <Mail size={12} />
                {supplier.contactInfo.email}
              </ContactItem>
            )}
            {supplier.contactInfo.website && (
              <ContactItem>
                <Globe size={12} />
                {supplier.contactInfo.website}
              </ContactItem>
            )}
          </ContactInfo>
          
          {supplier.deliveryInfo && (
            <DeliveryInfo>
              <Truck size={12} />
              {supplier.deliveryInfo}
            </DeliveryInfo>
          )}
        </CardBody>
        
        <CardFooter>
          <Button variant="outline" fullWidth>
            Связаться
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default SupplierCard; 