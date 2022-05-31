import { v4 as uuidv4 } from 'uuid';

import styled from 'styled-components';
import { motion } from 'framer-motion';
//APPEAR WHEN IN VIEWPORT
import { fade, slideLeft, slideRight, slideUp } from '../../animation';
import { useScroll } from '../useScroll';
//device pngs
import macbook from '../../img/devices/new-empty-macbook.png';
import iphone from '../../img/devices/newiphonetest5.png';

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
            {url?.map((url) => (
              <a
                key={uuidv4()}
                href={url.website}
                target='_blank'
                className='project-button'
              >
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
        // className='device-container'
      >
        <motion.div
          variants={fade}
          animate={controls}
          initial='hidden'
          className='iphone'
        >
          <img className='iphone-frame' src={iphone} alt='mobile screenshot' />
          <div className='iphone-img'>
            <div className='status-bar'></div>
            <img src={mobileImg} alt='mobile screenshot' />
          </div>
        </motion.div>
        <motion.div
          variants={slideLeft}
          animate={controls}
          initial='hidden'
          className='macbook'
        >
          <img
            className='macbook-frame'
            src={macbook}
            alt='desktop screenshot'
          />
          <div className='macbook-img'>
            <img src={desktopImg} alt='desktop screenshot' />
          </div>
        </motion.div>
      </StyledAppleDevices>
    </StyledDescriptionContainer>
  );
};

export default DeviceContainer;

const StyledDescriptionContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;

  max-width: 1200px;
  margin: auto;
  gap: unset;
  padding: 0 var(--layout-padding);
  /* background-color: #121212;
  border-top: 1px solid white;
  border-bottom: 1px solid white; */

  @media (max-width: 950px) {
    flex-direction: column-reverse;
    gap: 32px;
  }
  .description-container {
    /* border: 1px solid blue; */
    flex: 1.7;
    padding: 0px var(--layout-padding) 0 0;

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
      h2 {
        margin-bottom: 0;
      }
    }
    //ARRANGEMENT OF BUTTONS
    .project-sites {
      display: flex;
      gap: 16px;
      a {
        text-align: center;
        transition: all 0.5s ease;
      }
      a:hover {
        transform: scale(1.03);
        background-color: transparent;
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
  padding: 32px 0;
  flex: 4;

  @media (max-width: 750px) {
    width: 150%;
    /* padding: 32px var(--layout-padding) 0; */
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
    /* display: flex; */

    position: absolute;
    top: 50%;
    right: 0%;

    transform: translate(0%, -50%);
    width: 20%;
    /* width: clamp(100px, 100%, 150px); */
    z-index: 3;

    .iphone-frame {
      position: relative;
      /* border: 1px solid pink; */
      /* border: 1px solid red; */
    }
    .iphone-img {
      display: flex;
      flex-direction: column;
      z-index: -1;

      position: absolute;
      top: 49%;
      left: 50%;
      overflow: hidden;
      transform: translate(-50%, -50%);
      z-index: -1;
      border-radius: clamp(14px, 3vw, 19px);
      width: 96%;
      background-color: #1e1e1e;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
        rgba(0, 0, 0, 0.05) 0px 5px 10px;

      .status-bar {
        height: clamp(10px, 3vw, 17px);
        background-color: #1e1e1e;
      }

      @media (max-width: 350px) {
        top: 48%;
      }
    }
  }
`;
