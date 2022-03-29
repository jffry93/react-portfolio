// import home from '../img/home1.png';

//Styled
import {
  StyledAbout,
  StyledOverlay,
  StyledAboutDescription,
  // StyledImage,
  StyledHide,
} from '../Styles';

//Framer Motion
import { motion } from 'framer-motion';
import { titleAnimation, fade } from '../animation';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledOverlay>
        <StyledAboutDescription>
          <StyledHide>
            <motion.h3 variants={titleAnimation}>Hi, I'm Jeff.</motion.h3>
          </StyledHide>

          {/* <StyledHide>
            <motion.h3 variants={titleAnimation}>Jeff</motion.h3>
          </StyledHide> */}
          <StyledHide>
            <motion.h2 variants={titleAnimation}>Frontend Developer</motion.h2>
          </StyledHide>
          <motion.h3 variants={titleAnimation}>
            I build things for the web.
          </motion.h3>
          <motion.button variants={fade}>Let's talk</motion.button>
          <motion.button variants={fade}>View Work</motion.button>
        </StyledAboutDescription>
      </StyledOverlay>
    </StyledAbout>
  );
};

export default AboutSection;
