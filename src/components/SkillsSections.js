import { useState } from 'react';
//JSON DATA
import skillsState from '../skillsState';
//COMPONENTS
import SkillCard from './SkillCard';
//STYLING
import styled from 'styled-components';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
//swiper core and modules
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
//install swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const SkillsSections = () => {
  const [skills, setSkills] = useState(skillsState);

  return (
    <StyledSkillsContainer>
      <div className='skills-header'>
        <h2>Skills & Tools</h2>
        <p>Some neat tricks I've picked up along the way</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        className='swiper-js-container'
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        loop={true}
        // freeMode={true}
        // touchRatio={1}
        slidesPerView='auto'
        grabCursor={true}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        //   type: 'bullets',
        // }}
        autoplay={{
          delay: 1,
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
        {skills.map((skill) => (
          <SwiperSlide>
            <SkillCard
              title={skill.title}
              description={skill.description}
              documentation={skill.documentation}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSkillsContainer>
  );
};

export default SkillsSections;

const StyledSkillsContainer = styled.div`
  /* border: 3px solid yellow; */

  .skills-header {
    max-width: var(--max-width);
    margin: auto;

    padding: 116px var(--layout-secondary-padding) 0;
    @media (max-width: 850px) {
      flex-direction: column-reverse;
      align-items: center;
      padding: 63px var(--layout-secondary-padding) 0;
    }
    @media (max-width: 650px) {
      align-items: center;
      padding: 63px var(--layout-padding) 0;
    }
  }

  p {
    padding: 16px 0 16px;
  }

  .swiper-js-container {
    padding-bottom: 119px;
    padding-top: 16px;
    @media (max-width: 850px) {
      padding-top: 37px;
      padding-bottom: 94px;
    }
  }
  .swiper-js-container > .swiper-wrapper {
    transition-timing-function: linear;
  }
  .swiper-slide {
    height: auto;
    max-width: 320px;
    @media (max-width: 700px) {
      max-width: 250px;
    }
  }
`;
