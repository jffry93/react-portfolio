// import { useState } from 'react/cjs/react.development';

import styled from 'styled-components';
import { motion } from 'framer-motion';
//APPEAR WHEN IN VIEWPORT
import { fade, slideLeft } from '../../animation';
import { useScroll } from '../useScroll';
//DEVICE
import ipad from '../../img/devices/empty-ipad-horizontal.png';
//ICONS
import paletteIcon from '../../img/icons/palette-icon.svg';
//REACT ICONS
import { BsClipboard, BsClipboardCheck } from 'react-icons/bs';

const TabletContainer = ({ colours, ipadImg }) => {
  const [element, controls] = useScroll();

  // const [clipboard, setClipboard] = useState(false);

  const toggleClipboard = (e) => {
    const copied = e.currentTarget.childNodes[0].childNodes[0];
    console.log(copied);
    copied.style.display = 'block';

    setTimeout(() => {
      copied.style.display = 'none';
    }, 2000);
  };

  return (
    <StyledTabletContainer
      variants={fade}
      animate={controls}
      initial='hidden'
      ref={element}
      className='tablet-container'
    >
      <motion.div
        variants={slideLeft}
        animate={controls}
        initial='hidden'
        ref={element}
        className='tablet-image'
      >
        <img className='ipad-frame' src={ipad} alt='tablet' />
        <div className='ipad-img'>
          <img src={ipadImg} alt='tablet screenshot' />
        </div>
      </motion.div>
      <StyledColourContainer className='colour-container'>
        <div className='title-with-icon'>
          <img src={paletteIcon} alt='role icon' className='title-icon' />
          <h2>Palette</h2>
        </div>
        {/* <h3>Colors get the people going!</h3> */}
        <div className='palette-container'>
          <div className='colour-palettes'>
            {colours.map((colour) => (
              <div
                className='colour-palette'
                style={{ backgroundColor: `${colour.hexCode}` }}
                onClick={(e) => {
                  navigator.clipboard.writeText(`${colour.hexCode}`);
                  toggleClipboard(e);
                }}
              >
                <div className='clipboard-container'>
                  <BsClipboardCheck className='clipboard-check' />
                  <BsClipboard className='clipboard' />
                </div>
                <p>{colour.hexCode}</p>
              </div>
            ))}
          </div>
          <h5>Click on hexcode to copy to clipboard</h5>
        </div>
      </StyledColourContainer>
    </StyledTabletContainer>
  );
};

export default TabletContainer;

const StyledTabletContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  max-width: 1400px;
  margin: 0px auto;
  gap: 32px;

  padding-right: 22px;

  /* border: 1px solid red; */
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-end;
    padding-right: 0;
    gap: 60px;
    .tablet-image {
      margin: 0;
    }
  }
  .tablet-image {
    display: flex;
    position: relative;
    flex: 3;
    margin-left: 14px;

    .ipad-frame {
      position: relative;
      min-width: clamp(700px, 60vw, 1000px);
    }
    .ipad-img {
      position: absolute;
      top: 50%; /* position the top  edge of the element at the middle of the parent */
      left: 50%; /* position the left edge of the element at the middle of the parent */
      transform: translate(-50%, -50%);

      width: 95.3%;
      z-index: -1;
    }
  }
  @media (max-width: 750px) {
    .tablet-image {
      margin: 18px;
    }
  }
  @media (max-width: 500px) {
    .tablet-image {
      margin-right: 20px;
      .ipad-frame {
        min-width: clamp(450px, 60vw, 1000px);
      }
    }
  }
`;
const StyledColourContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin: 0 auto;
  text-align: left;

  @media (max-width: 750px) {
    width: calc(100% - 44px);
  }
  /* @media (max-width: 450px) {
    margin: auto;
    width: calc(100% - 44px);
  } */

  .palette-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 16px;
    background-color: #121212;
    padding: 1.5rem 1rem;
    width: 100%;
    .colour-palettes {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      width: 100%;
      .colour-palette {
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 8px;

        min-width: 250px;
        width: 100%;
        height: 80px;
        cursor: pointer;

        position: relative;
        .clipboard-container {
          position: absolute;
          top: 5px;
          right: 5px;
          .clipboard-check {
            position: absolute;
            top: 5px;
            right: 5px;
            display: none;
            fill: white;
          }
          .clipboard {
            position: absolute;
            top: 5px;
            right: 5px;
            display: block;
            fill: white;
          }
        }

        /* transition: all 0.5s ease; */
        @media (max-width: 750px) {
          max-width: unset;
          width: 100%;
          min-width: unset;
        }
      }
      .colour-palette:hover {
        transform: scale(1.01);
        p {
          font-size: clamp(20px, 1.2vw, 21px);
        }
      }
      p {
        font-weight: 600;
        cursor: pointer;
        padding: unset;
        /* transition: all 0.5s ease; */
      }
    }
    h5 {
      line-height: 1.6;
      text-align: center;
      padding: 16px 0 0;
      color: var(--secondary-text-color);
    }
  }
`;
