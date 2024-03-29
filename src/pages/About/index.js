import React from 'react';
import AboutSection from './components/bio/AboutSection';
import SkillsSections from './components/skills';
import ProjectSection from './components/contributions';
//PAGE ANIMATION
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation, fade } from '../../lib/framer-motion/animation';
import useScrollTop from '../../hooks/useScrollTop';
import ParallaxSection from './components/landing/ParallaxSection';
import DonationBar from '../../layout/DonationBar';

const AboutUs = () => {
	useScrollTop();
	document.body.style.overflow = 'auto';
	return (
		<motion.div
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			exit='exit'
			style={{ overflow: 'hidden', background: '#121212' }}
		>
			<StyledAboutContainer variants={fade}>
				<DonationBar />
				<ParallaxSection />
				<AboutSection />
				<SkillsSections />
				<ProjectSection />
			</StyledAboutContainer>
		</motion.div>
	);
};

export default AboutUs;
const StyledAboutContainer = styled(motion.div)`
	background-image: linear-gradient(135deg, #1b1b1b, #161616);
`;
