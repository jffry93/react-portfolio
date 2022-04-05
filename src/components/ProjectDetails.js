//STYLING
import styled from 'styled-components';
import { motion } from 'framer-motion';
//APPEAR WHEN IN VIEWPORT
import {
  fade,
  titleAnimation,
  pageAnimation,
  staggerContainer,
} from '../animation';
import { useScroll } from './useScroll';

//COMPONENTS
import HeaderContainer from './project/HeaderContainer';
import DeviceContainer from './project/DeviceContainer';
import RoleContainer from './project/RoleContainer';
import BrowserContainer from './project/BrowserContainer';
import TabletContainer from './project/TabletContainer';
import SkillsContainer from './project/SkillsContainer';

const ProjectDetails = ({ caseDetail, setShowDetail }) => {
  //HIDE POPUP
  const hideDetailHandler = (e) => {
    const element = e.target;
    // console.log(element);
    if (element.classList.contains('shadow')) {
      setShowDetail(false);
      document.body.style.overflow = 'auto';
    }
  };
  //appear on scroll
  const [element, controls] = useScroll();
  //state holding data of project that was selected
  const project = caseDetail;
  console.log(caseDetail);

  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      animate='show'
      // exit='exit'
    >
      <StyledProjectShadow
        variants={titleAnimation}
        animate='show'
        initial='hidden'
        // ref={element}
        // ref={element}
        className='shadow'
        onClick={hideDetailHandler}
      >
        <StyledProjectDetail
          variants={fade}
          animate='show'
          initial='hidden'
          // ref={element}
        >
          <HeaderContainer
            title={caseDetail.title}
            secondaryTitle={project.secondaryTitle}
          />
          <DeviceContainer
            secondDescription={project.secondDescription}
            url={project.url}
            desktopImg={project.desktopImg}
            mobileImg={project.mobileImg}
          />
          <div className='section-divider'></div>
          <RoleContainer roles={project.roles} />
          <div className='section-divider'></div>
          <BrowserContainer
            fonts={project.fonts}
            browserImg={project.browserImg}
          />
          <div className='section-divider'></div>
          <TabletContainer
            ipadImg={project.ipadImg}
            colours={project.colours}
          />
          <div className='section-divider'></div>
          <SkillsContainer skills={project.icons} />
          <div className='section-divider'></div>
          <div className='final-container'>
            <button className='shadow project-button'>Back</button>
          </div>
          <div className='section-divider'></div>
        </StyledProjectDetail>
      </StyledProjectShadow>
    </motion.div>
  );
};

export default ProjectDetails;

const StyledProjectShadow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;

  position: fixed;
  /* top: var(--navbar-height); */
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  min-height: 100vh;

  background: rgba(0, 0, 0, 0.7);
`;

const StyledProjectDetail = styled(motion.div)`
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  width: calc(100% - 4rem);
  max-width: 1400px;
  /* max-width: calc(var(--max-width) - 4rem); */

  position: absolute;
  top: 0vh; /* position the top  edge of the element at the middle of the parent */
  /* left: 0%; position the left edge of the element at the middle of the parent */

  /* transform: translate(-50%, 0%); */
  z-index: 11;
  /* border-top-left-radius: 20px;
  border-top-right-radius: 20px; */
  background: #1e1e1e;

  /* margin: auto; */
  /* max-width: 1400px; */
  @media (max-width: 1600px) {
    width: 100%;
  }
  h2 {
    font-size: clamp(32px, 4vw, 40px);
  }

  .title-with-icon {
    display: flex;
    align-items: center;
    gap: 8px;
    /* h2 {
      letter-spacing: 1.125px;
      white-space: nowrap;
    } */
    .title-icon {
      width: clamp(22px, 3vw, 30px);
      height: clamp(22px, 3vw, 30px);
    }
  }
  .section-divider {
    padding: 116px;
    @media (max-width: 800px) {
      padding: 60px;
    }
  }

  img {
    width: 100%;
  }
  .project-button {
    white-space: nowrap;

    background-color: #121212;
    padding: 16px;
    font-size: clamp(0.9rem, 0.5vw, 1rem);
    text-decoration: none;

    color: var(--secondary-text-color);
    border: var(--secondary-text-color) 1px solid;
  }

  .final-container {
    text-align: center;
    button {
      font-weight: lighter;
    }
  }
`;
