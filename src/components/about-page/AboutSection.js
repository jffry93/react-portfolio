// import React from 'react';
// import clock from '../img/clock.svg';
// import diaphragm from '../img/diaphragm.svg';
// import money from '../img/money.svg';
// import teamwork from '../img/teamwork.svg';
//IMAGES
import { BsGithub } from 'react-icons/bs';
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
    <StyledContainer>
      <StyledAbout
        variants={fade}
        animate={controls}
        initial='hidden'
        ref={element}
        // id='about'
        // scroll={(el) => el.scrollIntoView({ block: 'center' })}
      >
        <StyledImage variants={slideRight}>
          <div className='picture'></div>
        </StyledImage>
        <StyledServicesDescription variants={fade}>
          <h2>
            <span className='about'>About</span> me
          </h2>
          <p>A developer that enjoys a well-written documentation.</p>
          <p>
            Using modern javascript frameworks I've been translating designs
            into web applications, interacting with REST APIs and building
            modern reusable scalable components.
          </p>
          <p>
            Check out my
            <a
              className='github-link'
              href='https://github.com/jffry93'
              target='_blank'
            >
              Github
            </a>
            to see what I've been working on.
          </p>
          <div className='button-container'>
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
            <motion.a
              variants={fade}
              className='resume'
              href='https://github.com/jffry93'
              target='_blank'
            >
              {' '}
              <BsGithub size={22} /> <span>Github</span>
            </motion.a>
          </div>
        </StyledServicesDescription>
      </StyledAbout>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)``;

const StyledAbout = styled(motion.div)`
  /* min-height: 500px;
  height: var(--container-height); */
  /* max-height: 800px; */
  max-width: 900px;
  margin: auto;
  padding: 116px 60px 119px;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    padding: 63px var(--layout-secondary-padding) 94px;
  }
  @media (max-width: 500px) {
    padding: 63px var(--layout-padding) 94px;
  }
`;
const StyledServicesDescription = styled(motion.div)`
  /* border: 3px solid blue; */
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;

  max-width: 450px;

  @media (max-width: 850px) {
    /* max-width: 650px; */
  }
  h2 {
    margin-bottom: 8px;
  }
  .about {
    font-size: clamp(37px, 5vw, 53px);
  }
  .github-link {
    text-decoration: none;
    color: var(--primary-accent);
    font-weight: 600;
    transition: color 0.2s;
    padding: 0px 4px;
  }
  .github-link:hover {
    color: var(--primary-accent-shade);
    /* font-size: clamp(17px, 1.2vw, 18px); */
  }
  .button-container {
    display: flex;
    gap: 8px;
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

    transition: background-color 0.3s, transform 0.5s;
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
    /* background-color: rgba(0, 0, 0, 0.5); */
    background-color: var(--primary-accent);
    border: 1px solid var(--primary-accent);
    transform: scale(1.03);
  }
  .resume:active {
    /* background-color: rgba(0, 0, 0, 0.5); */
    background-color: var(--primary-accent-shade);
    border: 1px solid var(--primary-accent-shade);
    transform: scale(1);
  }
`;

const StyledImage = styled(motion.div)`
  border-radius: 50%;

  height: 250px;
  width: 250px;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  .picture {
    height: 100%;
    width: 100%;
    border-radius: 50%;

    background-image: url(${myFace});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  @media (max-width: 500px) {
    /* border-radius: 50%; */
    /* height: unset; */
    /* width: 300px; */
    /* width: 100%; */
    /* max-height: 400px; */
    height: 200px;
    width: 200px;
    border: 3px solid rgba(255, 255, 255, 1);
    padding: 6px;
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
