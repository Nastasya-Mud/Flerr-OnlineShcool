import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Heart, Target, Users, Award, BookOpen, Star, CheckCircle } from 'lucide-react';

const Container = styled.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  padding: var(--spacing-xxl) 0;
  border-radius: var(--border-radius-lg);
`;

const HeroTitle = styled(motion.h1)`
  color: var(--color-text);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  color: var(--color-text-light);
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const MissionSection = styled.section`
  margin-bottom: var(--spacing-xxl);
`;

const SectionTitle = styled.h2`
  color: var(--color-text);
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
`;

const MissionCard = styled(motion.div)`
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

const MissionIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
  
  svg {
    color: white;
    width: 40px;
    height: 40px;
  }
`;

const MissionTitle = styled.h3`
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
`;

const MissionDescription = styled.p`
  color: var(--color-text-light);
  line-height: 1.6;
`;

const ValuesSection = styled.section`
  margin-bottom: var(--spacing-xxl);
  background: var(--color-background-secondary);
  padding: var(--spacing-xxl) 0;
  border-radius: var(--border-radius-lg);
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
`;

const ValueCard = styled(motion.div)`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  text-align: center;
  
  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  background: var(--color-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-md);
  
  svg {
    color: var(--color-primary);
    width: 30px;
    height: 30px;
  }
`;

const ValueTitle = styled.h4`
  color: var(--color-text);
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`;

const ValueDescription = styled.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ApproachSection = styled.section`
  margin-bottom: var(--spacing-xxl);
`;

const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
`;

const ApproachCard = styled(motion.div)`
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  border-left: 4px solid var(--color-primary);
`;

const ApproachNumber = styled.div`
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
`;

const ApproachTitle = styled.h3`
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
`;

const ApproachDescription = styled.p`
  color: var(--color-text-light);
  line-height: 1.6;
`;

const StatsSection = styled.section`
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  padding: var(--spacing-xxl) 0;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-xxl);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
  text-align: center;
`;

const StatItem = styled(motion.div)`
  color: white;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
`;

const StatLabel = styled.div`
  font-size: 1.125rem;
  opacity: 0.9;
`;

const BenefitsSection = styled.section`
  margin-bottom: var(--spacing-xxl);
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
`;

const BenefitCard = styled(motion.div)`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  
  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

const BenefitIcon = styled.div`
  width: 50px;
  height: 50px;
  background: var(--color-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    color: var(--color-primary);
    width: 24px;
    height: 24px;
  }
`;

const BenefitContent = styled.div`
  flex: 1;
`;

const BenefitTitle = styled.h4`
  color: var(--color-text);
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`;

const BenefitDescription = styled.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.5;
`;

const AboutPage: React.FC = () => {
  const missionData = [
    {
      icon: <Heart />,
      title: 'Наша миссия',
      description: 'Сделать качественное образование в области флористики доступным для каждого, кто мечтает о творческой профессии.',
    },
    {
      icon: <Target />,
      title: 'Наша цель',
      description: 'Подготовить профессиональных флористов, способных создавать уникальные композиции и успешно вести бизнес.',
    },
    {
      icon: <Users />,
      title: 'Наше сообщество',
      description: 'Создать дружное сообщество флористов, где каждый может поделиться опытом и найти поддержку.',
    },
  ];

  const valuesData = [
    {
      icon: <Award />,
      title: 'Качество',
      description: 'Мы гарантируем высокое качество обучения и постоянное обновление программ.',
    },
    {
      icon: <Heart />,
      title: 'Забота',
      description: 'Индивидуальный подход к каждому студенту и поддержка на всех этапах обучения.',
    },
    {
      icon: <BookOpen />,
      title: 'Инновации',
      description: 'Использование современных технологий и актуальных методик преподавания.',
    },
    {
      icon: <Star />,
      title: 'Экспертиза',
      description: 'Обучение у ведущих специалистов с многолетним опытом в индустрии.',
    },
  ];

  const approachData = [
    {
      number: '01',
      title: 'Практический подход',
      description: 'Все курсы построены на практических занятиях. Вы не просто изучаете теорию, а сразу применяете знания на практике.',
    },
    {
      number: '02',
      title: 'Персональное сопровождение',
      description: 'Каждый студент получает индивидуальную поддержку от преподавателей и кураторов на протяжении всего обучения.',
    },
    {
      number: '03',
      title: 'Бизнес-ориентированность',
      description: 'Помимо творческих навыков, вы получаете знания по ведению бизнеса и продвижению в социальных сетях.',
    },
    {
      number: '04',
      title: 'Гибкое обучение',
      description: 'Учитесь в удобном для вас темпе. Доступ к материалам курса остается навсегда.',
    },
  ];

  const statsData = [
    { number: '500+', label: 'Выпускников' },
    { number: '15+', label: 'Экспертов' },
    { number: '95%', label: 'Успешных проектов' },
    { number: '24/7', label: 'Поддержка' },
  ];

  const benefitsData = [
    {
      icon: <CheckCircle />,
      title: 'Бонусные уроки',
      description: 'К каждому курсу прилагаются уроки по бизнесу и продвижению в социальных сетях.',
    },
    {
      icon: <CheckCircle />,
      title: 'Скидки на курсы',
      description: 'Скидка 20% на каждый следующий курс по бизнесу и социальным сетям.',
    },
    {
      icon: <CheckCircle />,
      title: 'База поставщиков',
      description: 'Доступ к проверенной базе поставщиков цветов и материалов для студентов.',
    },
    {
      icon: <CheckCircle />,
      title: 'Сертификат',
      description: 'Получение сертификата по завершении курса с возможностью трудоустройства.',
    },
  ];

  return (
    <Container>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          О школе Flerr
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Мы создаем будущее флористики, обучая талантливых людей создавать красоту 
          и строить успешный бизнес в мире цветов.
        </HeroSubtitle>
      </HeroSection>

      <MissionSection>
        <SectionTitle>Наша миссия и цели</SectionTitle>
        <MissionGrid>
          {missionData.map((item, index) => (
            <MissionCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MissionIcon>{item.icon}</MissionIcon>
              <MissionTitle>{item.title}</MissionTitle>
              <MissionDescription>{item.description}</MissionDescription>
            </MissionCard>
          ))}
        </MissionGrid>
      </MissionSection>

      <ValuesSection>
        <SectionTitle>Наши ценности</SectionTitle>
        <ValuesGrid>
          {valuesData.map((item, index) => (
            <ValueCard
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ValueIcon>{item.icon}</ValueIcon>
              <ValueTitle>{item.title}</ValueTitle>
              <ValueDescription>{item.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </ValuesSection>

      <ApproachSection>
        <SectionTitle>Наш подход к обучению</SectionTitle>
        <ApproachGrid>
          {approachData.map((item, index) => (
            <ApproachCard
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ApproachNumber>{item.number}</ApproachNumber>
              <ApproachTitle>{item.title}</ApproachTitle>
              <ApproachDescription>{item.description}</ApproachDescription>
            </ApproachCard>
          ))}
        </ApproachGrid>
      </ApproachSection>

      <StatsSection>
        <StatsGrid>
          {statsData.map((item, index) => (
            <StatItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StatNumber>{item.number}</StatNumber>
              <StatLabel>{item.label}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid>
      </StatsSection>

      <BenefitsSection>
        <SectionTitle>Преимущества обучения</SectionTitle>
        <BenefitsGrid>
          {benefitsData.map((item, index) => (
            <BenefitCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BenefitIcon>{item.icon}</BenefitIcon>
              <BenefitContent>
                <BenefitTitle>{item.title}</BenefitTitle>
                <BenefitDescription>{item.description}</BenefitDescription>
              </BenefitContent>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </BenefitsSection>
    </Container>
  );
};

export default AboutPage; 