// import home from '../img/home1.png';
import styled from 'styled-components';
import coffee from '../img/ibrahim.jpg';
//Styled
import { StyledOverlay, StyledHide } from '../Styles';

//Framer Motion
import { motion } from 'framer-motion';
import { titleAnimation, fade } from '../animation';

const HomeSection = () => {
  return (
    <StyledHomepageContainer>
      <StyledOverlay className='overlay'>
        <StyledDescription className='heading content'>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>Hi, I'm Jeff.</motion.h2>
          </StyledHide>
          {/* <StyledHide>
            <motion.h3 variants={titleAnimation}>Jeff</motion.h3>
          </StyledHide> */}
          <StyledHide>
            <motion.h1 variants={titleAnimation}>Frontend Developer</motion.h1>
          </StyledHide>
          <StyledHide>
            <motion.h3 variants={titleAnimation}>
              I build things for the web.
            </motion.h3>
          </StyledHide>
          <StyledHide className='buttons' id='buttons'>
            <motion.button variants={fade}>Let's talk</motion.button>
            <motion.button variants={fade}>View Work</motion.button>
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
  max-height: 800px;
  color: white;

  background-image: url(${coffee});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  @media (max-width: 750px) {
    #buttons {
      flex-direction: column;
      gap: 8px;
    }
  }

  .overlay {
    min-height: 500px;
    max-height: 800px;
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
  h3 {
    /* font-size: clamp(1.5rem, 2.5vw, 2rem); */
    font-weight: 300;
    letter-spacing: 3px;
  }
`;
