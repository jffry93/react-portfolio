import { v4 as uuidv4 } from 'uuid';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
//swiper core and modules
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import SkillCard from './SkillCard';

//install swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const SkillsList = ({ skills }) => {
	return (
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
				{skills &&
					skills.map((skill, i) => (
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
	);
};

export default SkillsList;
