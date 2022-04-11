import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//components
// import HomeSection from '../components/HomeSection';
import styled from 'styled-components';
import { motion } from 'framer-motion';
//PAGE ANIMATION
import { fade } from '../animation';
//APPEAR WHEN IN VIEWPORT
// import { useScroll } from '../components/useScroll';
//COMPONENTS
// import HeaderContainer from '../components/project/HeaderContainer';
import DeviceContainer from '../components/project/DeviceContainer';
import RoleContainer from '../components/project/RoleContainer';
import BrowserContainer from '../components/project/BrowserContainer';
import TabletContainer from '../components/project/TabletContainer';
import SkillsContainer from '../components/project/SkillsContainer';
//JSON DATA
import { MovieState } from '../repoState';
//device pngs
// import macbook from '../img/devices/new-empty-macbook.png';
// import iphone from '../img/devices/empty-iphone.png';
// import ipad from '../img/devices/empty-ipad-horizontal.png';

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  //The Entire List of Movies Object
  const [movies, setMovies] = useState(MovieState);
  //Each individual Movie
  const [movie, setMovie] = useState(null);

  //UseEffect
  useEffect(() => {
    //movies.filter() is used to sort through the MovieState object and create a movie for each one
    //This still leaves this as an object
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
  console.log(movie);

  // const [element, controls] = useScroll();
  return (
    //added a fraction tag around to add a function
    <>
      {movie && (
        <StyledOverflow className='overflowContainer'>
          <StyledDetails
            variants={fade}
            initial='hidden'
            animate='show'
            exit='exit'
          >
            {/* <HeaderContainer
              title={movie.title}
              secondaryTitle={movie.secondaryTitle}
            /> */}
            <StyledTitle
            // variants={fade}
            // animate={controls}
            // initial='hidden'
            // ref={element}
            >
              <div className='title-container'>
                <h3>VOUS Beauty Clinic</h3>
                <h4>Ecommerce</h4>
              </div>
            </StyledTitle>
            <DeviceContainer
              secondDescription={movie.secondDescription}
              url={movie.links}
              desktopImg={movie.desktopImg}
              mobileImg={movie.mobileImg}
            />
            <div className='section-divider'></div>
            <RoleContainer roles={movie.roles} />
            <div className='section-divider'></div>
            <BrowserContainer
              fonts={movie.fonts}
              browserImg={movie.browserImg}
            />
            <div className='section-divider'></div>
            <TabletContainer ipadImg={movie.ipadImg} colours={movie.colours} />
            <div className='section-divider'></div>
            <SkillsContainer skills={movie.icons} />
            <div className='section-divider'></div>
            <StyledBackButton>
              <button>Back</button>
            </StyledBackButton>
          </StyledDetails>
        </StyledOverflow>
      )}
    </>
  );
};
const StyledOverflow = styled.div`
  width: 100vw;
  overflow: hidden;
`;

const StyledDetails = styled(motion.div)`
  color: white;
  min-height: var(--container-height);

  /* max-width: calc(var(--max-width) - 4rem); */
  /* margin: auto; */
  img {
    width: 100%;
  }
  /* button {
    width: fit-content;
    background-color: #121212;
    padding: 1rem 1.5rem;
    font-size: clamp(0.9rem, 0.5vw, 1rem);
    text-decoration: none;

    color: var(--secondary-text-color);
    border: var(--secondary-text-color) 1px solid;
  } */
  h2 {
    font-size: clamp(32px, 4vw, 40px);
  }
  .section-divider {
    padding: 116px;
    @media (max-width: 1100px) {
      padding: 60px;
    }
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
  .project-button {
    white-space: nowrap;

    background-color: #121212;
    padding: 16px;
    font-size: clamp(0.9rem, 0.5vw, 1rem);
    text-decoration: none;

    color: var(--secondary-text-color);
    border: var(--secondary-text-color) 1px solid;
  }
`;
const StyledTitle = styled(motion.div)`
  /* border: 1px solid yellow; */
  /* position: sticky;
  top: var(--navbar-height);
  z-index: 20; */

  background-color: #121212;
  /* padding: 4px var(--layout-padding); */
  .title-container {
    max-width: var(--max-width);
    margin: auto;
    padding: 4px var(--layout-padding);
  }

  h4 {
    color: var(--secondary-text-color);
    /* padding: 8px 0 0; */
  }

  @media (max-width: 450px) {
    padding: 12px var(--mobile-padding);
  }
`;

const StyledBackButton = styled.div`
  margin: 4rem 0;
  text-align: center;
  button {
    background-color: #121212;
    padding: 1.5rem 1.5rem;
    font-size: clamp(0.9rem, 0.5vw, 1rem);
    text-decoration: none;

    color: var(--secondary-text-color);
    border: var(--secondary-text-color) 1px solid;
  }
`;

export default MovieDetail;
