import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import ImageSlider from './ImageSlider';

// === THEME VARIABLES ===
const colors = {
  primary: '#007BFF',
  primaryDark: '#0056b3',
  bgLight: 'linear-gradient(135deg, #e0f7ff, #b3e5fc)',
  textDark: '#003366',
  textGray: '#555',
  white: '#ffffff',
};

const breakpoints = {
  mobile: '768px',
};

// === ANIMATIONS ===
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// === STYLED COMPONENTS ===
const HeroContainer = styled.section`
  background: ${colors.bgLight};
  padding: 6rem 1.25rem;
  font-family: 'Montserrat', sans-serif;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextSection = styled.div`
  flex: 1;
  padding-right: 2.5rem;
  animation: ${fadeInUp} 0.8s ease both;

  @media (max-width: ${breakpoints.mobile}) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${colors.textDark};
  margin-bottom: 1.875rem;
  line-height: 1.2;
  
  span {
    color: ${colors.primary};
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  color: ${colors.textGray};
  margin-bottom: 1.875rem;
  line-height: 1.6;
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 
    background-color 0.3s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
    
  &:hover {
    background-color: ${colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const SliderSection = styled.div`
  flex: 1;
  margin-left: 1.25rem;
  animation: ${fadeInUp} 1s ease both;
  
  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 0;
    width: 100%;
  }
`;

// === COMPONENT ===
export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <HeroContainer>
      <Content>
        <TextSection>
          <Title>
            Find and <span>Register</span> for <span>Live Webinars</span>
          </Title>
          <Subtitle>
            Discover global real estate investment opportunities from the comfort
            of your home or office.
          </Subtitle>
          <CTAButton onClick={() => navigate('/webinars')}>
            Explore Webinars
          </CTAButton>
        </TextSection>
        <SliderSection>
          <ImageSlider />
        </SliderSection>
      </Content>
    </HeroContainer>
  );
}
