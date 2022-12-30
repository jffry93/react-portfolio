import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade } from '../../../../lib/framer-motion/animation';
import PersonalProjects from '../../../../components/PersonalProject';
import { useScroll } from '../../../../hooks/useScroll';

const ProjectSection = () => {
	const [element, controls] = useScroll();
	return (
		<StyledContributions
			variants={fade}
			animate={controls}
			initial='hidden'
			ref={element}
		>
			<h2 className='title'>Contributions</h2>
			<PersonalProjects />
		</StyledContributions>
	);
};

export default ProjectSection;

const StyledContributions = styled(motion.div)`
	/* border: 1px solid white; */
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 116px 0 119px;
	margin: auto;
	max-width: 1600px;
	.title {
		text-align: center;
		padding: 0 0 40px;
		font-size: clamp(37px, 5vw, 53px);
		color: var(--primary-text-color);
	}
`;
