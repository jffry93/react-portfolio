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
      <StyledServicesDescription>
        <h2>About me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima in
          sint dignissimos debitis voluptate corporis voluptatem quae adipisci
          cupiditate,
        </p>
        <motion.button variants={fade}>Download Resume</motion.button>
      </StyledServicesDescription>
      <StyledImage>
        <img src={headshot} alt='headshot' />
      </StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled.div`
  border: 3px solid red;

  /* min-height: 500px;
  height: var(--container-height); */
  max-width: 1200px;
  /* max-height: 800px; */

  margin: auto;

  padding: 5rem;

  display: flex;
  align-items: center;

  gap: 32px;
  @media (max-width: 750px) {
    padding: 5rem 2rem;
  }

  h2,
  h3 {
    font-weight: 700 !important;
    font-size: 3rem;
    letter-spacing: 1px;
    color: white;
  }

  p {
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 1.65;
    color: white;
  }
  @media (max-width: 750px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const StyledServicesDescription = styled.div`
  border: 3px solid blue;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;

  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  button {
    margin-top: 32px;
    width: fit-content;
    text-align: left;
  }
`;

const StyledImage = styled.div`
  border: 3px solid green;

  flex: 1;
  height: 70vh;
  /* min-height: 400px; */
  max-height: 700px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 750px) {
    /* border-radius: 50%; */
    /* height: unset; */
    /* width: 300px; */
    width: 100%;
    max-height: 400px;
  }

  img {
    /* min-height: 400px; */
    /* margin: auto; */
    /* height: 70vh; */
    width: 100%;
    min-width: 500px;
    @media (max-width: 750px) {
      /* min-width: unset; */
    }
  }
`;

export default ServicesSection;
