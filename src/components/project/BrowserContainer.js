import styled from 'styled-components';
import { motion } from 'framer-motion';
//APPEAR WHEN IN VIEWPORT
import { fade, slideRight } from '../../animation';
import { useScroll } from '../useScroll';
//ICONS
import bookIcon from '../../img/icons/book-open-solid.svg';

const BrowserContainer = ({ fonts, browserImg }) => {
  const [element, controls] = useScroll();
  return (
    <StyledBrowserContainer
      variants={fade}
      animate={controls}
      initial='hidden'
      ref={element}
      className='browser-container'
    >
      <StyledTypographyContainer className='typography-container'>
        <div className='title-with-icon'>
          <img src={bookIcon} alt='role icon' className='title-icon' />
          <h2>Fonts</h2>
        </div>
        {/* <h4>Absorb content easily.</h4> */}
        <div className='examples-container'>
          {fonts.map((font) => (
            <div className='font-family-container custom-card'>
              <div className='font-title'>
                <h4 className='family-title'>{font.title}</h4>
                <h4
                  style={{
                    fontFamily: `${font.fontFamily}`,
                    fontWeight: `${font.fontWeight}`,
                    letterSpacing: `${font.letterSpacing}`,
                    color: 'var(--secondary-text-color)',
                  }}
                >
                  {font.fontFamily}
                </h4>
              </div>

              <p
                className='font-example'
                style={{
                  fontFamily: `${font.fontFamily}`,
                  fontWeight: `${font.fontWeight}`,
                  letterSpacing: `${font.letterSpacing}`,
                }}
              >
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                Vv Ww Xx Yy Zz 1 2 3 4 5 6 7 8 9 0 ? !
              </p>
            </div>
          ))}
        </div>
      </StyledTypographyContainer>
      <motion.div
        variants={slideRight}
        animate={controls}
        initial='hidden'
        ref={element}
        className='browser-screenshot'
      >
        <img src={browserImg} alt='browser screenshot' />
      </motion.div>
    </StyledBrowserContainer>
  );
};

export default BrowserContainer;

const StyledBrowserContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1400px;
  margin: auto;
  padding: 0 var(--layout-padding);
  position: relative;
  @media (max-width: 650px) {
    flex-direction: column-reverse;
    align-items: flex-start;

    margin: unset;
    .browser-screenshot {
      padding: 0 0 160px;
    }
  }
  .browser-screenshot {
    width: 100%;
    min-width: clamp(900px, 60vw, 1000px);
    margin: 0 8px;
    @media (max-width: 450px) {
      margin: 0;
    }
  }
`;

const StyledTypographyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 650px) {
    margin: 0 var(--layout-padding);
  }
  .examples-container {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    .font-family-container {
      border-radius: 16px;

      display: flex;
      flex-direction: column;
      @media (max-width: 330px) {
        width: calc(100% - 24px);
      }
      .family-title {
        color: var(--primary-text-color);
        font-weight: 600;
        margin-bottom: 3px;
      }
      h3 {
        color: var(--secondary-text-color);
      }
      p {
        padding-top: 16px;
      }
    }
  }
`;
