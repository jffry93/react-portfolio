import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PersonalProjects from '../components/PersonalProjects';
import FaqSection from '../components/FaqSection';
//PAGE ANIMATION
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <ScrollTop />
      <AboutSection />
      <ServicesSection />
      <PersonalProjects />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
