import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
	sliderAnimation,
	sliderContainer,
} from '../../lib/framer-motion/animation';

const SideCurtain = () => {
	return (
		<motion.div variants={sliderContainer}>
			<StyledFrame1 variants={sliderAnimation}></StyledFrame1>
			<StyledFrame2 variants={sliderAnimation}></StyledFrame2>
			<StyledFrame3 variants={sliderAnimation}></StyledFrame3>
			<StyledFrame4 variants={sliderAnimation}></StyledFrame4>
		</motion.div>
	);
};

export default SideCurtain;

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
