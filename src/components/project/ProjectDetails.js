import { useState, useEffect } from 'react';
//react router
import { useNavigate, useLocation } from 'react-router-dom';
import ProjectState from '../../projectState';

//STYLING
import styled from 'styled-components';
import { motion } from 'framer-motion';
//APPEAR WHEN IN VIEWPORT
import { fade, titleAnimation, staggerContainer } from '../../animation';
import { useScroll } from '../useScroll';

//COMPONENTS
import HeaderContainer from './HeaderContainer';
import DeviceContainer from './DeviceContainer';
import RoleContainer from './RoleContainer';
// import BrowserContainer from './BrowserContainer';
import TabletContainer from './TabletContainer';
import SkillsContainer from './SkillsContainer';

const ProjectDetails = ({ caseDetail, setShowDetail }) => {
  let location = useLocation(); //used to find current pathname
  const url = location.pathname;
  let navigate = useNavigate(); //used for back button

  const [projectState, setProjectState] = useState(ProjectState);
  const [project, setProject] = useState(null);

  useEffect(() => {
    //Popuplate project data based on url path
    const currentProject = projectState.filter(
      (stateProject) => stateProject.path === url
    );
    setProject(currentProject); //add to state
    document.body.style.overflow = 'hidden';
  }, [projectState]);

  // close || go back when done with pop up
  const hidePopupHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      navigate(-1);
    }
  };
  //CLOSE POPUP WHEN CLICK ESC
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        document.body.style.overflow = 'auto';
        navigate(-1);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  //appear on scroll
  const [element, controls] = useScroll();

  return (
    <>
      {project && (
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          animate='show'
          exit='exit'
        >
          <StyledProjectShadow
            variants={titleAnimation}
            animate='show'
            initial='hidden'
            ref={element}
            className='shadow'
            onClick={(e) => hidePopupHandler(e)}
          >
            <StyledProjectDetail
              variants={fade}
              animate='show'
              initial='hidden'
              ref={element}
            >
              <>
                <HeaderContainer
                  title={project[0]?.title}
                  secondaryTitle={project[0]?.secondaryTitle}
                />
                <div className='main-container'>
                  <DeviceContainer
                    secondDescription={project[0]?.secondDescription}
                    url={project[0]?.url}
                    desktopImg={project[0]?.desktopImg}
                    mobileImg={project[0]?.mobileImg}
                  />
                  <div className='section-divider'></div>
                  <RoleContainer roles={project[0]?.roles} />
                  <div className='section-divider'></div>
                  <TabletContainer
                    ipadImg={project[0]?.ipadImg}
                    colours={project[0]?.colours}
                  />
                  <div className='section-divider'></div>
                  <SkillsContainer skills={project[0]?.icons} />
                  <div className='section-divider'></div>
                  <div className='final-container'>
                    <button className='shadow project-button'>Back</button>
                  </div>
                  <div className='section-divider'></div>
                </div>
              </>
            </StyledProjectDetail>
          </StyledProjectShadow>
        </motion.div>
      )}
    </>
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
  background: var(--primary-color);

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
    .title-icon {
      width: clamp(22px, 3vw, 30px);
      height: clamp(22px, 3vw, 30px);
    }
    h2 {
      margin-bottom: 0;
    }
  }

  .section-divider {
    padding: 116px;
    @media (max-width: 800px) {
      padding: 60px;
    }
    @media (max-width: 500px) {
      padding: 32px;
    }
  }

  img {
    width: 100%;
  }
  .main-container {
    background-color: #1e1e1e;
    position: relative;
    z-index: 1;
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
    button:hover {
      background-color: transparent;
    }
  }
`;
