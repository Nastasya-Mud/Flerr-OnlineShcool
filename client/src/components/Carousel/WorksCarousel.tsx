import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CarouselRoot = styled.div`
  position: relative;
  max-width: 1300px;
  margin: 0 auto;
  padding: var(--spacing-xl) var(--spacing-md);
`;

const Track = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 380px;
  gap: calc(var(--spacing-lg) + var(--spacing-sm));
  overflow-x: auto;
  padding-bottom: calc(var(--spacing-md) + var(--spacing-sm));
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar { height: 10px; }
  &::-webkit-scrollbar-track { background: var(--color-background-secondary); border-radius: 5px; }
  &::-webkit-scrollbar-thumb { background: var(--color-dusty-pink); border-radius: 5px; }
  &::-webkit-scrollbar-thumb:hover { background: var(--color-salmon); }
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: calc(var(--border-radius-lg) + 6px);
  box-shadow: 0 6px 16px rgba(217,119,87,0.1), 0 3px 6px rgba(244,162,97,0.06);
  overflow: hidden;
  scroll-snap-align: start;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 40px rgba(217,119,87,0.18), 0 10px 14px rgba(244,162,97,0.12);
  }
`;

const Shot = styled.div`
  height: 280px;
  background: var(--color-background-secondary);
  overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; object-position: center; filter: saturate(1.06) contrast(1.02); }
`;

const Caption = styled.div`
  padding: calc(var(--spacing-md) + var(--spacing-sm));
  color: var(--color-text);
  font-weight: 500;
`;

type Item = { id: string; image: string; title?: string };

interface WorksCarouselProps { items: Item[] }

const WorksCarousel: React.FC<WorksCarouselProps> = ({ items }) => {
  return (
    <CarouselRoot>
      <Track>
        {items.map((it, i) => (
          <Card key={it.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .4, delay: i * .05 }}>
            <Shot><img src={it.image} alt={it.title || 'Работа'} /></Shot>
            {it.title && <Caption>{it.title}</Caption>}
          </Card>
        ))}
      </Track>
    </CarouselRoot>
  );
};

export default WorksCarousel;


