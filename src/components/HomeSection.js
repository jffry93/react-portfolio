// import home from '../img/home1.png';
import styled from 'styled-components';
import coffee from '../img/ibrahim.jpg';

//Styled
import { StyledOverlay, StyledHide } from '../Styles';

import { Link } from 'react-router-dom';
//SCROLL TO COMPONENT
import { NavHashLink } from 'react-router-hash-link';

//Framer Motion
import { motion } from 'framer-motion';
import { titleAnimation } from '../animation';
// import ScrollTop from './ScrollTop';

const HomeSection = () => {
  return (
    <StyledHomepageContainer viewport={{ once: true }}>
      <StyledOverlay className='overlay'>
        <StyledDescription className='heading content'>
          <StyledHide>
            <h2 variants={titleAnimation}>Hi, I'm Jeff.</h2>
            <h1 variants={titleAnimation}>Frontend Developer</h1>
            <motion.h3 variants={titleAnimation}>
              I build things for the web.
            </motion.h3>
          </StyledHide>
          <StyledHide className='buttons' id='buttons'>
            <Link href='#' to='/contact'>
              <motion.button>Let's talk</motion.button>
            </Link>
            <NavHashLink
              href='#'
              to='/work'
              // scroll={(el) =>
              //   el.scrollIntoView({ behavior: 'smooth', block: 'center' })
              // }
            >
              <motion.button>View Work</motion.button>
            </NavHashLink>
          </StyledHide>
        </StyledDescription>
      </StyledOverlay>
    </StyledHomepageContainer>
  );
};

export default HomeSection;

const StyledHomepageContainer = styled(motion.div)`
  height: var(--container-height);
  min-height: 500px;
  max-height: 850px;

  color: white;

  background-image: url(${coffee});
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */
  background-position: center;
  /* transform: scaleX(-1); */
  position: relative;
  @media (max-width: 750px) {
    #buttons {
      flex-direction: column;
      gap: 8px;
    }
  }

  .overlay {
    /* border: 1px solid red; */
    min-height: 500px;
    max-height: 850px;
    background-color: rgba(0, 0, 0, 0.5);
    /* transform: scaleX(-1); */
  }
  .buttons {
    display: flex;
    gap: 20px;
    margin-top: 1.35em;
    button {
      min-width: 140px;
      /* font-size: 1.625rem; */
      font-size: 17px;
    }
  }
`;
const StyledDescription = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  padding: var(--layout-secondary-padding);

  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 450px) {
    padding: var(--layout-padding);
  }

  //greeting
  h1 {
    margin: 16px 0;
  }
  h3 {
    /* font-size: clamp(1.5rem, 2.5vw, 2rem); */
    font-weight: 300;
    letter-spacing: 3px;
  }
`;
