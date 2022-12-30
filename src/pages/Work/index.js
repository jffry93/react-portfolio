import styled from 'styled-components';
//PAGE ANIMATION
import { motion } from 'framer-motion';
import { pageAnimation, fade } from '../../lib/framer-motion/animation';
import useScrollTop from '../../hooks/useScrollTop';
//components
import PersonalProject from '../../components/PersonalProject';

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
			<motion.div variants={fade} className='paid-work'>
				<PersonalProject />
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
		max-width: 1600px;
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

export default OurWork;
