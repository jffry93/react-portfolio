import styled from 'styled-components';
// import { Link } from 'react-router-dom';

//PAGE ANIMATION
import { motion } from 'framer-motion';
import { pageAnimation, fade } from '../../lib/framer-motion/animation';

import useScrollTop from '../../hooks/useScrollTop';
//components
import PersonalProject from '../../components/project/PersonalProjects';
// import SideCurtain from '../../assets/style/SideCurtain';

const OurWork = () => {
	useScrollTop();
	document.body.style.overflow = 'auto';

	return (
		<StyledWork
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			exit='exit'
			style={{ background: '#121212' }}
		>
			{/* <SideCurtain /> */}
			<motion.div variants={fade}>
				<motion.div variants={fade} className='paid-work'>
					<PersonalProject />
				</motion.div>
			</motion.div>
		</StyledWork>
	);
};

const StyledWork = styled(motion.div)`
	position: relative;
	overflow: hidden;
	/* min-height: 600px; */

	.paid-work {
		height: var(--container-height);
		min-height: 600px;
		max-width: 2000px;
		margin: auto;

		display: flex;
		align-items: center;
		justify-content: center;
	}
	.personal-work {
		max-width: var(--max-width);
		margin: 32px auto;
		padding: 0 var(--layout-padding);
	}
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

export default OurWork;
