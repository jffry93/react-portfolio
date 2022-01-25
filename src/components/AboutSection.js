import home from '../img/home1.png';

//Styled
import {
  StyledAbout,
  StyledOverlay,
  StyledAboutDescription,
  StyledImage,
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
            <motion.h3 variants={titleAnimation}>Hi, my name is</motion.h3>
          </StyledHide>

          <StyledHide>
            <motion.h2 variants={titleAnimation}>Jeffrey Zalischi</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h4 variants={titleAnimation}>
              Frontend Web Developer & <span>Designer</span>
            </motion.h4>
          </StyledHide>
          <motion.button variants={fade}>Let's talk</motion.button>
        </StyledAboutDescription>
      </StyledOverlay>
    </StyledAbout>
  );
};

export default AboutSection;
