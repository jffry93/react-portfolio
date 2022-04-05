import { useState, useRef } from 'react';
import projectState from '../projectState';

//COMPONENTS
import Project from './Project';
import ProjectDetails from './ProjectDetails';
//STYLING
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade, slideDown } from '../animation';
//reveal when in viewport
import { useScroll } from './useScroll';
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
  const [caseDetail, setCaseDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  const [element, controls] = useScroll();

  console.log(projects);

  return (
    <StyledProjectSection
      variants={fade}
      animate={controls}
      initial='hidden'
      ref={element}
      id='home-projects'
    >
      {showDetail && (
        <ProjectDetails
          caseDetail={caseDetail}
          showDetail={showDetail}
          setShowDetail={setShowDetail}
        />
      )}
      <h2>Contributions</h2>
      {/* <p className='description'>Click on card to preview</p> */}

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
          1000: {
            slidesPerView: 3.5,
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
        disableOnInteraction={true}
        loop={true}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {projects.map((project) => (
          <SwiperSlide>
            <Project
              title={project.title}
              secondaryTitle={project.secondaryTitle}
              thumbImg={project.thumbImg}
              desktopImg={project.mainImg}
              mobileImg={project.secondaryImg}
              browserImg={project.browserImg}
              ipadImg={project.ipadImg}
              roles={project.roles}
              icons={project.icons}
              highlights={project.highlights}
              colours={project.colours}
              fonts={project.fonts}
              url={project.url}
              description={project.description}
              secondDescription={project.secondDescription}
              key={project.url}
              caseDetail={caseDetail}
              setCaseDetail={setCaseDetail}
              setShowDetail={setShowDetail}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledProjectSection>
  );
};

export default PersonalProjects;

const StyledProjectSection = styled(motion.div)`
  min-height: 570px;
  max-height: 900px;
  /* max-width: var(--max-width); */
  max-width: 1400px;
  width: 100%;

  margin: 116px auto 119px;

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

    transform: scale(0.8) !important;
    div:last-child {
      display: none;
      position: absolute;
      top: 50%;
      left: -20%;
      transform: translate(0%, -50%);

      height: auto;
      width: 100%;

      z-index: 3;
    }
  }

  .swiper-slide-next,
  .swiper-slide-prev {
    opacity: 0.45;
  }
  .swiper-slide-active {
    transform: scale(1) !important;

    div {
      overflow: visible;
      background-color: rgba(0, 0, 0, 0.9);
    }
    opacity: 1;
    div:last-child {
      display: block;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: white;
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
const StyledProjectList = styled.div`
  /* border: 3px solid red;
  width: 100%; */

  /* display: flex; */
  /* gap: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 5rem 0 0; */
  /* grid-gap: 10rem; */
  /* @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  } */
`;
