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
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
//install swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

const SkillsSections = () => {
  const [skills, setSkills] = useState(skillsState);

  return (
    <StyledSkillsContainer>
      <h1>Skills & Tools</h1>
      <h4>Some neat tricks I've picked up along the way</h4>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        className='swiper-js-container'
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
          type: 'bullets',
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
  max-width: 1600px;
  margin: auto;
  h1 {
    font-size: 3rem;
    letter-spacing: 1px;
  }
  h4 {
    letter-spacing: 1px;
    font-size: 1.125rem;
    padding: 1.5rem 0 3rem;
  }
  padding: 5rem 2rem;
  .swiper-js-container {
    padding-bottom: 50px;
  }
  .swiper-slide {
    height: auto;
  }
`;
