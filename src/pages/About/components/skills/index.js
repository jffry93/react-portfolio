import { useState } from 'react';
import { FiGrid } from 'react-icons/fi';
import { BsViewList } from 'react-icons/bs';
//JSON DATA
import skillsState from '../../../../data/state/skillsState';
//STYLING
import styled from 'styled-components';
import { motion } from 'framer-motion';

//reveal when in viewport
import { useScroll } from '../../../../hooks/useScroll';

import SkillsList from './components/SkillsList';
import SkillsGrid from './components/SkillsGrid';

const SkillsSections = () => {
	const [skills] = useState(skillsState);
	const [displaySkills, setDisplaySkills] = useState(false);
	const [element, controls] = useScroll();
	console.log(displaySkills);
	return (
		<StyledSkillsContainer
			// variants={fade}
			animate={controls}
			initial='hidden'
			ref={element}
		>
			<motion.div className='skills-header'>
				<h2>
					<span>Skills</span> & <span>Tools</span>
				</h2>
				<StyledButtonContainer>
					<button
						className={!displaySkills ? 'active' : ''}
						onClick={() => setDisplaySkills(false)}
					>
						<BsViewList size='18px' />
						List
					</button>
					<button
						className={displaySkills ? 'active' : ''}
						onClick={() => setDisplaySkills(true)}
					>
						<FiGrid size='18px' />
						Grid
					</button>
				</StyledButtonContainer>
			</motion.div>
			{displaySkills ? (
				<SkillsGrid skills={skills} />
			) : (
				<SkillsList skills={skills} />
			)}
		</StyledSkillsContainer>
	);
};

export default SkillsSections;

const StyledButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		width: 120px;
	}
	.active {
		/* color: var(--primary-accent); */
		/* border-color: var(--primary-accent); */
		background-color: rgba(0, 0, 0, 0.8);
		/* font-size: clamp(17px, 1.2vw, 18px); */
	}
	.active:hover {
		color: var(--primary-accent);
		border-color: var(--primary-accent);
		/* font-size: clamp(17px, 1.2vw, 18px); */
	}
`;

const StyledSkillsContainer = styled(motion.div)`
	/* border: 3px solid yellow; */

	.skills-header {
		max-width: var(--max-width);
		margin: auto;

		padding: 116px var(--layout-secondary-padding) 16px;
		@media (max-width: 850px) {
			flex-direction: column-reverse;
			align-items: center;
			padding: 63px var(--layout-secondary-padding) 16px;
		}
		@media (max-width: 500px) {
			flex-direction: column-reverse;
			align-items: center;
			padding: 63px var(--layout-padding) 16px;
		}
	}
	h2 {
		text-align: center;
		color: var(--primary-text-color);
		padding-bottom: 16px;
		span {
			font-size: clamp(37px, 5vw, 53px);
		}
	}

	p {
		padding: 16px 0 24px;
	}
	.skills-container {
		padding-bottom: 119px;
		@media (max-width: 850px) {
			padding-bottom: 94px;
		}
		.swiper-container {
			overflow: visible;
		}
	}

	/* .swiper-js-container {
    padding-bottom: 119px;
    padding-top: 16px;
    @media (max-width: 850px) {
      padding-top: 37px;
      padding-bottom: 94px;
    }
  } */
	.swiper-js-container > .swiper-wrapper {
		transition-timing-function: linear;
	}
	.swiper-slide {
		height: auto;
		max-width: 320px;
		@media (max-width: 700px) {
			max-width: 270px;
		}
	}
`;
