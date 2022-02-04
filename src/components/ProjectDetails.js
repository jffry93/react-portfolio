import styled from 'styled-components';
import { motion } from 'framer-motion';
//REACT ICONS
import { RiCloseFill } from 'react-icons/ri';
//FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//device pngs
import macbook from '../img/devices/empty-macbook.png';
import iphone from '../img/devices/empty-iphone.png';
//SCREENSHOTS
import vbcDesktop from '../img/projects/screenshots/vbc-shop-light.png';

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

  const detail = caseDetail;
  console.log(caseDetail.roles);
  return (
    <StyledProjectShadow className='shadow' onClick={hideDetailHandler}>
      <StyledProjectDetail>
        <div className='first-container'>
          <div className='title-container'>
            <h2>{detail.title}</h2>
            <h3>{detail.secondaryTitle} Website</h3>
          </div>
          <div className='shadow close-button'>
            CLOSE
            <RiCloseFill size={23} className='shadow' />
          </div>
        </div>
        <div className='device-container'>
          <div className='macbook'>
            <img
              className='macbook-frame'
              src={macbook}
              alt='desktop screenshot'
            />
            <div className='macbook-img'>
              <img src={detail.desktopImg} alt='desktop screenshot' />
            </div>
            <div className='iphone'>
              <img
                className='iphone-frame'
                src={iphone}
                alt='mobile screenshot'
              />
              <div className='iphone-img'>
                <img src={detail.mobileImg} alt='mobile screenshot' />
              </div>
            </div>
          </div>
        </div>
        <div className='case-details'>
          <div className='description-container'>
            <h2>{detail.description}</h2>
          </div>
          <div className='role-container'>
            <h2>My Role</h2>
            <div className='roles-container'>
              {detail.roles.map((role) => (
                <div className='role'>
                  <div className='role-icon'>
                    <img src={role.iconFa} alt='' />
                  </div>
                  <h4>{role.description}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className='highlight-container'>
            <div className='highlight-details'>
              <h2>Highlight</h2>
              <div className='detail-container'>
                <h3>{detail.highlights.title}</h3>
                {detail.highlights.description.map((highlight) => (
                  <div className='role'>
                    <h4>{highlight.description}</h4>
                  </div>
                ))}
              </div>
            </div>
            <div className='highlight-screenshot'>
              <img src={vbcDesktop} alt='' />
            </div>
          </div>
          <div className='skill-container'>
            <h2>Skills & Tools</h2>
            <h4>Click on icon to see developer documentation</h4>
            <div className='icon-container'>
              {detail.icons.map((icon) => (
                <a href={icon.linkUrl} target='_blank'>
                  <img src={icon.imgUrl} />
                </a>
              ))}
            </div>
          </div>
          <div className='colour-container'>
            <h2>Colour Palettes</h2>
            <div className='colour-palettes'>
              {detail.colours.map((colour) => (
                <div
                  className='colour-palette container'
                  style={{ backgroundColor: `${colour.hexCode}` }}
                >
                  <h2>{colour.hexCode}</h2>
                </div>
              ))}
            </div>
            <h4>Click on hexcode to copy to clipboard</h4>
          </div>

          <div className='font-container'>
            <h1>Typography</h1>
            <div className='font-familys-container'>
              {detail.fonts.map((font) => (
                <div
                  className='font-family-container'
                  style={{
                    fontFamily: `${font.fontFamily}`,
                    fontWeight: `${font.fontWeight}`,
                    letterSpacing: `${font.letterSpacing}`,
                  }}
                >
                  <h2>{font.fontFamily}</h2>
                  <h3
                    style={{
                      fontFamily: `${font.fontFamily}`,
                      fontWeight: `${font.fontWeight}`,
                      letterSpacing: `${font.letterSpacing}`,
                    }}
                  >
                    Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt
                    Uu Vv Ww Xx Yy Zz 1 2 3 4 5 6 7 8 9 0 ? !
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div className='example-container'>
            <a href={detail.url} target='_blank'>
              Visit Website
            </a>
          </div>
        </div>
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
  top: 10vh;
  left: 0;
  z-index: 2;

  width: 100%;
  min-height: 90vh;

  background: rgba(0, 0, 0, 0.4);
`;

const StyledProjectDetail = styled(motion.div)`
  overflow-y: scroll;
  overflow-x: hidden;
  width: calc(100% - 20rem);

  position: absolute;
  top: 0vh; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */

  transform: translate(-50%, 0%);
  z-index: 11;
  border-radius: 20px;
  background: #1e1e1e;

  /* margin: auto; */
  /* max-width: 1400px; */

  .close-button {
    /* position: absolute;
    top: 1rem;
    right: 2rem; */

    font-size: 1.125rem;
    font-weight: 400;
    padding: 1rem;

    display: flex;
    align-items: center;
    gap: 5px;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #e1e1e1;
  }
  h3 {
    font-size: 1.7rem;
    color: #e1e1e1;
  }
  h4 {
    font-size: 1.4rem;
    color: #e1e1e1;
  }
  p {
    color: black;
  }
  img {
    width: 100%;
  }
  .first-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 5rem 5rem 0rem 10rem;
    color: #e1e1e1;
    h2 {
      font-size: 3rem;
      font-weight: 600;
    }
    h3 {
      padding: 1rem 0 0;
      font-size: 1.5rem;
      font-weight: 300;
    }
  }
  .device-container {
    position: relative;
    width: 100%;

    padding: 0 5rem;
    .macbook {
      position: relative;
      flex: 4;
      .macbook-img {
        position: absolute;
        top: 46.8%; /* position the top  edge of the element at the middle of the parent */
        left: 50%; /* position the left edge of the element at the middle of the parent */

        transform: translate(-50%, -50%);
        z-index: -1;
        width: 69%;
      }
    }
    .iphone {
      position: absolute;
      top: 50%; /* position the top  edge of the element at the middle of the parent */
      right: 10%; /* position the left edge of the element at the middle of the parent */

      transform: translate(50%, -50%);
      width: 30%;

      margin: 5rem;
      .iphone-img {
        border: 1px solid pink;
        position: absolute;
        top: 50%; /* position the top  edge of the element at the middle of the parent */
        left: 49%; /* position the left edge of the element at the middle of the parent */
        border-radius: 1.2vw;
        overflow: hidden;
        transform: translate(-50%, -50%);
        z-index: -1;

        width: 61%;
      }
    }
  }
  .case-details {
    padding: 5rem 5rem;
    .container {
      padding: 3rem 0 2rem;
    }
  }
  .description-container {
    padding: 5rem 0 5rem;
    background-color: #121212;
    border-radius: 16px;

    h2 {
      padding: 1rem 5rem;
      text-align: center;
    }
  }
  .role-container {
    text-align: center;
    padding: 0 0 0;
    margin: 10rem 5rem;
    border: 1px solid green;
    h2 {
      font-size: 2.5rem;
      letter-spacing: 5px;
      padding: 0 0 3rem;
    }
    h4 {
      font-size: 1.125rem;
      max-width: 300px;
      padding: 0;
    }
    .roles-container {
      display: flex;
      justify-content: space-between;
      /* align-items: center; */

      text-align: center;
      border: 1px solid green;
    }
    .role-icon {
      filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(86deg) brightness(0%)
        contrast(0%);
      img {
        width: 50px;
        height: 50px;
        margin-bottom: 2rem;
      }
    }
  }

  .skill-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5rem 5rem;
    h2 {
      font-size: 3.5rem;
      padding: 0 0 1rem 0;
    }
    h2,
    h4 {
      margin: 0 2rem;
    }
    .icon-container {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 2rem;
      background-color: #121212;
      border-radius: 16px;
      img {
        max-width: 70px;
      }
    }
  }
  .highlight-container {
    padding: 5rem 0;
    display: flex;
    align-items: center;
    gap: 5rem;
    h2,
    h3 {
      padding: 0 0 3rem;
    }
    h2 {
      font-size: 3.5rem;
    }
    h3 {
      font-size: 1.7rem;
    }
    h4 {
      text-align: left;
      font-size: 1.4rem;
      padding: 0 0 1.5rem;
    }
    .highlight-details {
      display: flex;
      flex-direction: column;
      flex: 2;
      min-width: 300px;
    }

    .highlight-screenshot {
      display: flex;
      flex-direction: column;
      flex: 4;
      min-width: 1200px;
    }
  }
  .colour-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #111111;
    border-radius: 16px;
    h2 {
      font-size: 3rem;
      padding: 1rem 0 0;
    }
    .colour-palettes {
      display: flex;
      gap: 10rem;
      padding: 3rem 3rem;
      background-color: #1b1b1b;
      border-radius: 16px;

      max-width: 1200px;
      margin: 2rem auto 1rem;
    }
    .colour-palette {
      flex-direction: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      width: 200px;
      height: 200px;
      padding: 0;
      border-radius: 50%;
      h2 {
        font-size: 1.5rem;
        padding: 5rem;
        color: #e1e1e1;
      }
    }
  }
  .font-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 5rem 5rem;
    .font-familys-container {
      display: flex;

      gap: 5rem;
    }
    h1 {
      font-size: 3.5rem;
      padding: 0 2rem 5rem;
    }
    h2 {
      padding: 0 2rem 3rem;
      font-size: 1.7rem;
    }
    h3 {
      padding: 3rem;
      border-radius: 16px;
      font-size: 1.5rem;

      background-color: #121212;
      max-width: 350px;
    }
  }
  .example-container {
    padding: 10rem 0 5rem;
    text-align: center;
    a {
      background-color: #121212;
      padding: 2rem;
      font-size: 1.225rem;
      font-weight: 600;
      text-decoration: none;

      color: white;
      border: white 3px solid;
    }
  }
`;
