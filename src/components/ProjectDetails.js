import styled from 'styled-components';
import { motion } from 'framer-motion';
//REACT ICONS

//COMPONENTS
import HeaderContainer from './project/HeaderContainer';
import DeviceContainer from './project/DeviceContainer';
import RoleContainer from './project/RoleContainer';
import BrowserContainer from './project/BrowserContainer';
import TabletContainer from './project/TabletContainer';
import SkillsContainer from './project/SkillsContainer';

const ProjectDetails = ({ caseDetail, setShowDetail }) => {
  const hideDetailHandler = (e) => {
    const element = e.target;
    console.log(element);
    if (element.classList.contains('shadow')) {
      console.log('popopopopopopopooooo');
      setShowDetail(false);
      document.body.style.overflow = 'auto';
    }
  };

  const project = caseDetail;
  console.log(caseDetail);
  return (
    <StyledProjectShadow className='shadow' onClick={hideDetailHandler}>
      <StyledProjectDetail>
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
        <TabletContainer ipadImg={project.ipadImg} colours={project.colours} />
        <div className='section-divider'></div>
        <SkillsContainer skills={project.icons} />
        <div className='section-divider'></div>
        <div className='final-container'>
          <button className='shadow'>Back</button>
        </div>
        <div className='section-divider'></div>
      </StyledProjectDetail>
    </StyledProjectShadow>
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

  .title-with-icon {
    display: flex;
    align-items: center;
    gap: 16px;
    /* h2 {
      letter-spacing: 1.125px;
      white-space: nowrap;
    } */
    .title-icon {
      width: clamp(27px, 1.5vw, 35px);
      height: clamp(27px, 1.5vw, 35px);
    }
  }
  .section-divider {
    padding: 80px;
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
  }
`;
