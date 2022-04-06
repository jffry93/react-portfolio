import React from 'react';
import HomeSection from '../components/HomeSection';
import ServicesSection from '../components/ServicesSection';
import PersonalProjects from '../components/PersonalProjects';
import FaqSection from '../components/FaqSection';
//PAGE ANIMATION
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation, fade } from '../animation';
import ScrollTop from '../components/ScrollTop';
import SkillsSections from '../components/SkillsSections';
import ProjectSection from '../components/ProjectSection';

const AboutUs = () => {
  document.body.style.overflow = 'auto';
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ overflow: 'hidden' }}
    >
      <ScrollTop />
      {/* <motion.div variants={sliderContainer}>
        <StyledFrame1 variants={sliderAnimation}></StyledFrame1>
        <StyledFrame2 variants={sliderAnimation}></StyledFrame2>
        <StyledFrame3 variants={sliderAnimation}></StyledFrame3>
        <StyledFrame4 variants={sliderAnimation}></StyledFrame4>
      </motion.div> */}
      <motion.div variants={fade}>
        <HomeSection />
        <ServicesSection />
        <SkillsSections />
        <ProjectSection />
        <FaqSection />
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;

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
