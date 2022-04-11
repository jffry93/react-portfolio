// import React from 'react';
// import clock from '../img/clock.svg';
// import diaphragm from '../img/diaphragm.svg';
// import money from '../img/money.svg';
// import teamwork from '../img/teamwork.svg';
//IMAGES
import myFace from '../../img/myFace.jpg';
//ICONS
import downloadIcon from '../../img/icons/download-solid.svg';
//Styles
import styled from 'styled-components';
//RESUME
import MyResume from '../../Resume/Jeffrey_Zalischi_Resume.pdf';

//scroll animation that runs when an element is in view
//Framer Motion
import { motion } from 'framer-motion';
import { fade, slideRight } from '../../animation';
import { useScroll } from '../useScroll';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledServices
      variants={fade}
      animate={controls}
      initial='hidden'
      ref={element}
      // id='about'
      // scroll={(el) => el.scrollIntoView({ block: 'center' })}
    >
      <StyledImage variants={slideRight}>
        <img src={myFace} alt='headshot' />
      </StyledImage>
      <StyledServicesDescription variants={fade}>
        <h2>About me</h2>
        <p>A developer that enjoys a well-written documentation.</p>
        <p>
          I’ve been translating designs into web applications, interacting with
          APIs and building modern reusable scalable components.
        </p>
        {/* <p>
          I’m extremely passionate about software development, learning new
          skills and making the most out of my day.
        </p> */}
        <p>
          Check out my{' '}
          <a
            className='github-link'
            href='https://github.com/jffry93'
            target='_blank'
          >
            Github
          </a>{' '}
          to see what I've been working on.
        </p>
        <motion.a
          variants={fade}
          className='resume'
          href={MyResume}
          download='Jeffrey_Zalischi_Resume'
          target='_blank'
        >
          {' '}
          <div className='download'></div> <span>Resume</span>
        </motion.a>
      </StyledServicesDescription>
    </StyledServices>
  );
};

const StyledServices = styled(motion.div)`
  /* border: 3px solid red; */

  /* min-height: 500px;
  height: var(--container-height); */
  max-width: 1024px;
  /* max-height: 800px; */
  margin: auto;

  padding: 116px var(--layout-secondary-padding) 119px;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 60px;

  /* 
  p {
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 1.65;
    color: white;
  } */
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    padding: 63px var(--layout-secondary-padding) 94px;
  }
  /* @media (max-width: 650px) {
    padding: 63px 44px 94px;
  } */
`;
const StyledServicesDescription = styled(motion.div)`
  /* border: 3px solid blue; */
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;

  z-index: 2;
  @media (max-width: 850px) {
    max-width: 650px;
  }
  h2 {
    margin-bottom: 8px;
  }
  .github-link {
    color: var(--secondary-text-color);
    font-weight: 600;
    transition: font-size 0.1s;
  }
  .github-link:hover {
    color: var(--primary-text-color);
    font-size: clamp(17px, 1.2vw, 18px);
  }

  .resume {
    margin-top: 32px;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 12px;

    padding: 0.7rem 1.4rem 0.7rem 1.1rem;
    border: 1px solid white;
    color: white;
    font-weight: 700;
    font-size: 17px;
    text-decoration: none;
    transform: scale(1);

    transition: background-color 0.5s, transform 0.5s;
    .download {
      width: 17px;
      height: 17px;
      background-color: white;
      background: url(${downloadIcon});
      background-repeat: no-repeat;
      transition: background 100ms ease-out;
    }

    span {
      font-size: 17px;
    }
  }
  .resume:hover {
    background-color: rgba(0, 0, 0, 0.5);
    transform: scale(1.03);
  }
`;

const StyledImage = styled(motion.div)`
  /* border: 1px solid white; */

  height: 400px;
  width: 400px;
  border-radius: 50%;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    /* border-radius: 50%; */
    /* height: unset; */
    /* width: 300px; */
    /* width: 100%; */
    /* max-height: 400px; */
    height: 250px;
    width: 250px;
  }

  img {
    /* min-height: 400px; */
    /* margin: auto; */
    /* height: 70vh; */
    width: 100%;
    /* min-width: 400px; */
    @media (max-width: 750px) {
      min-width: unset;
    }
  }
`;

export default ServicesSection;
