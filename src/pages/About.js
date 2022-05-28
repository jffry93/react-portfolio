import React from 'react';
import AboutSection from '../components/about-page/AboutSection';
import FaqSection from '../components/about-page/FaqSection';
import SkillsSections from '../components/about-page/SkillsSections';
import ProjectSection from '../components/about-page/ProjectSection';
//PAGE ANIMATION
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation, fade } from '../animation';
import ScrollTop from '../components/ScrollTop';
import ParallaxSection from '../components/about-page/ParallaxSection';
import DonationBar from '../components/DonationBar';

const AboutUs = () => {
  document.body.style.overflow = 'auto';
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ overflow: 'hidden', background: '#121212' }}
    >
      <ScrollTop />
      <StyledAboutContainer variants={fade}>
        <DonationBar />
        <ParallaxSection />
        <AboutSection />
        <SkillsSections />
        <ProjectSection />
        <FaqSection />
      </StyledAboutContainer>
    </motion.div>
  );
};

export default AboutUs;
const StyledAboutContainer = styled(motion.div)`
  background-image: linear-gradient(135deg, #1b1b1b, #161616);
`;

const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const StyledFrame2 = styled(StyledFrame1)`
  background: #ff8efb;
`;

const StyledFrame3 = styled(StyledFrame1)`
  background: #8ed2ff;
`;

const StyledFrame4 = styled(StyledFrame1)`
  background: #8effa0;
`;
