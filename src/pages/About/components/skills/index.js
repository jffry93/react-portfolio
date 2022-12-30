import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

//JSON DATA
import skillsState from '../../../../data/state/skillsState';
//COMPONENTS
import SkillCard from './components/SkillCard';
//STYLING
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade } from '../../../../lib/framer-motion/animation';
//reveal when in viewport
import { useScroll } from '../../../../hooks/useScroll';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
//swiper core and modules
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';

//install swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const SkillsSections = () => {
	const [skills] = useState(skillsState);
	const [element, controls] = useScroll();

	return (
		<StyledSkillsContainer
			variants={fade}
			animate={controls}
			initial='hidden'
			ref={element}
		>
			<motion.div className='skills-header'>
				<h2>
					<span>Skills</span> & <span>Tools</span>
				</h2>
				{/* <p>Some neat tricks I've picked up along the way</p> */}
			</motion.div>
			<div className='skills-container'>
				<Swiper
					modules={[Navigation, Pagination, A11y, Autoplay]}
					className='swiper-js-container'
					// onSlideChange={() => console.log('slide change')}
					loop={true}
					freeMode={true}
					touchRatio={1}
					slidesPerView='auto'
					grabCursor={true}
					spaceBetween={30}
					// pagination={{
					//   clickable: true,
					//   type: 'bullets',
					// }}
					autoplay={{
						delay: 1,
						onMouseEnter: () => this.swiper.autoplay.stop(),
						disableOnInteraction: false,
					}}
					speed={2000}
					breakpoints={{
						700: {
							pagination: {
								clickable: true,
								type: 'bullets',
							},
						},
					}}
				>
					{skills.map((skill, i) => (
						<SwiperSlide key={uuidv4()}>
							<SkillCard
								title={skill.title}
								secondTitle={skill.secondTitle}
								description={skill.description}
								documentation={skill.documentation}
								color={skill.hexCode}
								color2={skill.hexCode2}
								textColor={skill.textColor}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</StyledSkillsContainer>
	);
};

export default SkillsSections;

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
