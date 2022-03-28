// import React from 'react';
// import clock from '../img/clock.svg';
// import diaphragm from '../img/diaphragm.svg';
// import money from '../img/money.svg';
// import teamwork from '../img/teamwork.svg';
import headshot from '../img/ben_parker.jpg';
//Styles
import styled from 'styled-components';
//Reusable styles
import { StyledAbout } from '../Styles';
//scroll animation that runs when an element is in view
//Framer Motion
import { motion } from 'framer-motion';
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
        <img src={headshot} alt='headshot' />
      </StyledImage>
      <StyledServicesDescription>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima in
          sint dignissimos debitis voluptate corporis voluptatem quae adipisci
          cupiditate,
        </p>
        <motion.button variants={fade}>Download Resume</motion.button>
      </StyledServicesDescription>
    </StyledServices>
  );
};

const StyledServices = styled.div`
  min-height: var(--container-height);
  max-width: var(--max-width);
  margin: auto;

  padding: 5rem 2rem;

  display: flex;
  flex-direction: row-reverse;

  h2,
  h3 {
    font-weight: 700 !important;
    font-size: 3rem;
    letter-spacing: 1px;
    color: white;
    padding-bottom: 0rem;
    margin: 0 0 3rem 0;
  }
  h3 {
    margin-top: 6rem;
  }
  p {
    padding: 1rem 0rem;
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 1.65;
    color: white;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;
const StyledServicesDescription = styled.div`
  flex: 1;
  margin-right: 10rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0 5rem 0;
    }
  }
`;

const StyledImage = styled.div`
  position: sticky;
  top: 25%;
  border: white 3px solid;
  border-radius: 20px;
  flex: 1;
  overflow: hidden;
  z-index: 1;

  height: 50vh;
  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 750px) {
    height: 300px;
    width: 300px;
    flex: none;
  }
`;

export default ServicesSection;
