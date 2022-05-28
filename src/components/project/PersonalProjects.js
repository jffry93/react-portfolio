import { useState } from 'react';
import projectState from '../../projectState'; // All
//COMPONENTS
import Project from './Project';
//STYLING
import styled from 'styled-components';
import { motion } from 'framer-motion';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
//swiper core and modules
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  EffectCoverflow,
  EffectFade,
  Autoplay,
} from 'swiper';
//install swiper modules
SwiperCore.use([
  Navigation,
  Pagination,
  A11y,
  EffectCoverflow,
  EffectFade,
  Autoplay,
]);

const PersonalProjects = () => {
  const [projects, setProjects] = useState(projectState);

  return (
    <StyledProjectSection>
      <Swiper
        className='swiper-js-container'
        modules={[
          Navigation,
          Pagination,
          A11y,
          EffectCoverflow,
          EffectFade,
          Autoplay,
        ]}
        spaceBetween={0}
        watchSlidesProgress={true}
        touchRatio={0.2}
        slidesPerView={1.5}
        breakpoints={{
          1100: {
            slidesPerView: 3.4,
            spaceBetween: 0,
            coverflowEffect: {
              rotate: 30,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: true,
            },
          },
          600: {
            slidesPerView: 1.8,
          },
          500: {
            slidesPerView: 1.5,
          },
        }}
        navigation
        pagination={{
          clickable: true,
          type: 'bullets',
        }}
        effect='coverflow'
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        centeredSlides
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={500}
        loop={true}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <Project
              path={project.path}
              title={project.title}
              secondaryTitle={project.secondaryTitle}
              thumbImg={project.thumbImg}
              url={project.url}
              key={project.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledProjectSection>
  );
};

export default PersonalProjects;

const StyledProjectSection = styled(motion.div)`
  /* max-width: var(--max-width); */

  width: 100%;

  /* margin: 116px auto 119px; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    margin-bottom: 32px;
  }

  /* overflow-x: hidden; */
  /* display: grid;
  place-items: center center; */
  /* ${SwiperSlide} {
    div:first-child {
      div:last-child {
        display: none;
      }
    }
  } */
  @media (max-width: 600px) {
    /* padding: 5rem 0; */
  }

  .description {
    padding: 16px 0 32px;
  }
  .swiper-js-container {
    width: 100%;
    overflow: hidden;
    //pagination

    padding-bottom: 50px;
    /* .swiper-pagination {
      position: absolute;
      bottom: 0;
    } */
  }
  .swiper-slide {
    opacity: 0;
    position: relative;
    transition: transform 1.5s ease, opacity 1.5s ease;

    transform: scale(0.6) !important;
  }

  .swiper-slide-next,
  .swiper-slide-prev {
    opacity: 0.45;
    transition: transform 1.5s ease, opacity 1.5s ease;
    transform: scale(0.8) !important;
    div:last-child {
      display: none;
      opacity: 1;
      transition-property: opacity 0.6s ease-in !important;
    }
  }
  .swiper-slide-active {
    transform: scale(1) !important;
    opacity: 1;
    /* transition: transform 1.5s ease, opacity 1.5s ease; */
    z-index: 3;
    div {
      overflow: visible;
      background-color: rgba(0, 0, 0, 0.9);
    }

    div:last-child {
      opacity: 1;
      transition-property: opacity 0.6s ease-in !important;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: rgba(255, 255, 255, 0.5);
  }
  .swiper-pagination-bullet {
    background: grey;
  }
  .swiper-pagination-bullet-active {
    background: white;
  }
  .swiper-slide-shadow-right,
  .swiper-slide-shadow-left {
    /* border-radius: 20px; */
  }
`;
