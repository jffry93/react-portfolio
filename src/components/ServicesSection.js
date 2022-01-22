import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
//Styles
import styled from 'styled-components';
//Reusable styles
import { StyledAbout, StyledServicesDescription, StyledImage } from '../Styles';
//scroll animation that runs when an element is in view
import { fade } from '../animation';
import { useScroll } from './useScroll';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledServices
      variants={fade}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <StyledImage>
        <img src={home2} alt='Img of a camera' />
      </StyledImage>
      <StyledServicesDescription>
        <h2>
          High <span>Quality</span> services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className='icon'>
              <img src={clock} alt='clock' />
              <h3>Efficent</h3>
            </div>
            <p>Never missed a deadline</p>
          </StyledCard>
          <StyledCard>
            <div className='icon'>
              <img src={diaphragm} alt='diaphragm' />
              <h3>Modern</h3>
            </div>
            <p>I use the latest tools and libraries</p>
          </StyledCard>
          <StyledCard>
            <div className='icon'>
              <img src={money} alt='moneyz' />
              <h3>Affordable</h3>
            </div>
            <p>Let's find something that works for you</p>
          </StyledCard>
          <StyledCard>
            <div className='icon'>
              <img src={teamwork} alt='teamwork' />
              <h3>Custom</h3>
            </div>
            <p>A unique design for your business needs</p>
          </StyledCard>
        </StyledCards>
      </StyledServicesDescription>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem;
  }
`;
const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
