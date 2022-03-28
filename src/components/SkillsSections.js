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
        <h1>Skills & Tools</h1>
        <h4>Some neat tricks I've picked up along the way</h4>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        className='swiper-js-container'
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
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
  padding: 5rem 0;
  .skills-header {
    max-width: calc(var(--max-width) - 4rem);
    margin: auto;
    padding: 0 2rem;
  }

  h1 {
    font-size: 3rem;
    letter-spacing: 1px;
  }
  h4 {
    letter-spacing: 1px;
    font-size: 1.125rem;
    padding: 1.5rem 0 3rem;
  }

  .swiper-js-container {
    padding-bottom: 50px;
  }
  .swiper-js-container > .swiper-wrapper {
    transition-timing-function: linear;
  }
  .swiper-slide {
    height: auto;
    max-width: 350px;
    @media (max-width: 700px) {
      max-width: 250px;
    }
  }
`;
