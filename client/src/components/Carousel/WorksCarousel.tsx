import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CarouselRoot = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-xl) var(--spacing-md);
`;

const Track = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 320px;
  gap: var(--spacing-lg);
  overflow-x: auto;
  padding-bottom: var(--spacing-md);
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar { height: 8px; }
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  scroll-snap-align: start;
`;

const Shot = styled.div`
  height: 220px;
  background: var(--color-background-secondary);
  overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
`;

const Caption = styled.div`
  padding: var(--spacing-md);
  color: var(--color-text);
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


