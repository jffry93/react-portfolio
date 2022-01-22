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
import { titleAnimation, fade, photoAnimation } from '../animation';
//wave animation on about page
import Wave from './Wave';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledOverlay>
        <StyledAboutDescription>
          <motion.div>
            <StyledHide>
              <motion.h3 variants={titleAnimation}>Hi, my name is</motion.h3>
            </StyledHide>
            {/* <StyledHide>
            <motion.h2 variants={titleAnimation}>
              <span>Jeff</span>
            </motion.h2>
          </StyledHide> */}
            <StyledHide>
              <motion.h2 variants={titleAnimation}>
                <span>Jeffrey</span> Zalischi
              </motion.h2>
            </StyledHide>
          </motion.div>
          <motion.h4 variants={fade}>Frontend Web Developer</motion.h4>
          <motion.button variants={fade}>Let's talk</motion.button>
        </StyledAboutDescription>
      </StyledOverlay>
    </StyledAbout>
  );
};

export default AboutSection;
