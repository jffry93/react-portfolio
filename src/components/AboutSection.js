import React from 'react';
import home from '../img/home1.png';
//Styled
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from '../Styles';

//Framer Motion
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>
              your <span>dreams</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>come true</motion.h2>
          </StyledHide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have skills that pay the bills
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home} alt='Guy with a camera' />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
