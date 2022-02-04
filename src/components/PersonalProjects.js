import { useState, useRef } from 'react';
import projectState from '../projectState';

//COMPONENTS
import Project from './Project';
import ProjectDetails from './ProjectDetails';
//STYLING
import styled from 'styled-components';
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
} from 'swiper';
//install swiper modules
SwiperCore.use([Navigation, Pagination, A11y, EffectCoverflow]);

const PersonalProjects = () => {
  const [projects, setProjects] = useState(projectState);
  const [caseDetail, setCaseDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  return (
    <StyledProjectSection>
      {showDetail && (
        <ProjectDetails
          caseDetail={caseDetail}
          showDetail={showDetail}
          setShowDetail={setShowDetail}
        />
      )}
      <h1>Personal Projects</h1>
      <h4>Click on card to preview Case Study</h4>

      <Swiper
        className='swiper-js-container'
        modules={[Navigation, Pagination, A11y, EffectCoverflow]}
        spaceBetween={50}
        watchSlidesProgress={true}
        slidesPerView={3}
        breakpoints={{
          1050: {
            slidesPerView: 3,
            spaceBetween: 40,
            coverflowEffect: {
              rotate: 10,
              stretch: -50,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            },
          },
        }}
        navigation
        pagination={{
          clickable: true,
          type: 'bullets',
        }}
        effect='coverflow'
        centeredSlides
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {projects.map((project) => (
          <SwiperSlide>
            <Project
              title={project.title}
              secondaryTitle={project.secondaryTitle}
              desktopImg={project.mainImg}
              mobileImg={project.secondaryImg}
              roles={project.roles}
              icons={project.icons}
              highlights={project.highlights}
              colours={project.colours}
              fonts={project.fonts}
              url={project.url}
              description={project.description}
              key={project.url}
              caseDetail={caseDetail}
              setCaseDetail={setCaseDetail}
              setShowDetail={setShowDetail}
            ></Project>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledProjectSection>
  );
};

export default PersonalProjects;

const StyledProjectSection = styled.div`
  min-height: 90vh;
  width: 100%;
  padding: 5rem 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* overflow-x: hidden; */
  /* display: grid;
  place-items: center center; */

  h1,
  h4 {
    text-align: center;
  }

  h1 {
    font-weight: 700 !important;
    font-size: 3rem;
    letter-spacing: 1px;
    color: white;
  }
  h4 {
    color: white;
    letter-spacing: 1px;
    font-size: 1.125rem;
    font-weight: 400;
    padding: 1.5rem 0 3rem;
  }
  .swiper-js-container {
    width: 100%;
  }
  .swiper-slide {
    opacity: 0.3;
  }
  .swiper-slide-next,
  .swiper-slide-prev {
    opacity: 0.8;
  }
  .swiper-slide-active {
    opacity: 1;
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
    border-radius: 20px;
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
