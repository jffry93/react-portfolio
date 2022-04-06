import styled from 'styled-components';
import { motion } from 'framer-motion';
//APPEAR WHEN IN VIEWPORT
import { fade, slideLeft } from '../../animation';
import { useScroll } from '../useScroll';
//device pngs
import macbook from '../../img/devices/new-empty-macbook.png';
import iphone from '../../img/devices/empty-iphone.png';

const DeviceContainer = ({ secondDescription, url, desktopImg, mobileImg }) => {
  const [element, controls] = useScroll();
  return (
    <StyledDescriptionContainer className='apple-container'>
      <motion.div
        variants={fade}
        animate={controls}
        initial='hidden'
        ref={element}
        className='description-container'
      >
        <div className='project-summary'>
          <h2>Summary</h2>
          <p>{secondDescription}</p>
          <div className='project-sites'>
            {url.map((url) => (
              <a href={url.website} target='_blank' className='project-button'>
                Visit {url.title}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
      <StyledAppleDevices
        variants={slideLeft}
        animate={controls}
        initial='hidden'
        ref={element}
        className='device-container'
      >
        <div className='macbook'>
          <img
            className='macbook-frame'
            src={macbook}
            alt='desktop screenshot'
          />
          <div className='macbook-img'>
            <img src={desktopImg} alt='desktop screenshot' />
          </div>
        </div>
        <div className='iphone'>
          <img className='iphone-frame' src={iphone} alt='mobile screenshot' />
          <div className='iphone-img'>
            <div className='status-bar'></div>
            <img src={mobileImg} alt='mobile screenshot' />
          </div>
        </div>
      </StyledAppleDevices>
    </StyledDescriptionContainer>
  );
};

export default DeviceContainer;
const StyledDescriptionContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;

  max-width: 1100px;
  margin: auto;

  /* background-color: #121212;
  border-top: 1px solid white;
  border-bottom: 1px solid white; */

  @media (max-width: 950px) {
    flex-direction: column-reverse;
  }
  .description-container {
    /* border: 1px solid blue; */
    flex: 1;
    padding: 32px var(--layout-padding);

    display: flex;
    flex-direction: column;
    justify-content: center;
    /* gap: 16px; */
    @media (max-width: 950px) {
      flex-direction: row;
      gap: 48px;
      max-width: 700px;
      margin: 0 auto;
    }
    @media (max-width: 700px) {
      flex-direction: column;
      gap: 32px;
    }
    p {
      padding: 16px 0 32px;
    }
    .project-summary {
      display: flex;
      flex-direction: column;
      gap: 0px;
    }
    //ARRANGEMENT OF BUTTONS
    .project-sites {
      display: flex;
      gap: 16px;
      a {
        text-align: center;
      }

      /* @media (max-width: 950px) {
        flex-direction: column;
        gap: 8px;
      }
      @media (max-width: 700px) {
        flex-direction: row;
        gap: 16px;
      } */
    }
  }
`;

const StyledAppleDevices = styled(motion.div)`
  position: relative;
  width: 100%;
  /* max-width: clamp(800px, 50vw, 1400px); */
  margin: auto;
  padding: 32px 2rem;
  flex: 4;

  /* border: 1px solid blue; */
  @media (max-width: 750px) {
    width: 150%;
    padding: 32px var(--layout-padding) 0;
    right: 50%;
  }
  .macbook {
    position: relative;
    .macbook-frame {
      position: relative;
      z-index: 2;
    }
    .macbook-img {
      position: absolute;
      top: 45.8%; /* position the top  edge of the element at the middle of the parent */
      left: 50%; /* position the left edge of the element at the middle of the parent */

      transform: translate(-50%, -50%);
      z-index: 1;
      width: 79%;
    }
  }
  .iphone {
    position: absolute;
    bottom: 30%;
    right: 5%;

    transform: translate(50%, 50%);
    width: 29%;
    max-width: 250px;

    margin: 5rem;
    z-index: 3;
    @media (max-width: 750px) {
      bottom: 20%;
    }
    .iphone-frame {
      position: relative;
      /* border: 1px solid red; */
    }
    .iphone-img {
      /* border: 1px solid pink; */
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 17px;
      overflow: hidden;
      transform: translate(-50%, -50%);
      z-index: -1;

      width: 62.2%;
      .status-bar {
        height: clamp(12px, 3.2vw, 17px);
        background-color: #1e1e1e;
      }
    }
  }
`;
