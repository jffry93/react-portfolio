import styled from 'styled-components';
import { motion } from 'framer-motion';
//REACT ICONS
import { RiCloseFill } from 'react-icons/ri';
//svg icons
import roleIcon from '../img/icons/role-icon.svg';
import highlightIcon from '../img/icons/award-icon.svg';
import toolIcon from '../img/icons/tools-icon.svg';
import paletteIcon from '../img/icons/palette-icon.svg';
import bookIcon from '../img/icons/book-open-solid.svg';
//device pngs
import macbook from '../img/devices/new-empty-macbook.png';
import iphone from '../img/devices/empty-iphone.png';
import ipad from '../img/devices/empty-ipad-horizontal.png';
//SCREENSHOTS
import vbcDesktop from '../img/projects/screenshots/vbc-shop-light.png';
import vbcIpad from '../img/projects/screenshots/vbc-ipad-930.png';

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
  console.log(caseDetail.url);
  return (
    <StyledProjectShadow className='shadow' onClick={hideDetailHandler}>
      <StyledProjectDetail>
        <div className='first-container'>
          <div className='title-container'>
            <h1>{project.title}</h1>
            <div className='shadow close-button'>
              <p className='shadow'>CLOSE</p>
              {/* <RiCloseFill size={23} className='shadow icon' /> */}
            </div>
          </div>
          <h3>{project.secondaryTitle} Website</h3>
        </div>
        <div className='apple-container'>
          <div className='description-container'>
            <div className='project-summary'>
              <h2>Summary of Project</h2>
              <h3>{project.secondDescription}</h3>
            </div>
            <div className='view-container'>
              {/* <h2>View Project</h2> */}
              <div className='project-sites'>
                {project.url.map((url) => (
                  <a
                    href={url.website}
                    target='_blank'
                    className='project-button'
                  >
                    Visit {url.title}
                  </a>
                ))}
              </div>
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
                <img src={project.desktopImg} alt='desktop screenshot' />
              </div>
            </div>
            <div className='iphone'>
              <img
                className='iphone-frame'
                src={iphone}
                alt='mobile screenshot'
              />
              <div className='iphone-img'>
                <img src={project.mobileImg} alt='mobile screenshot' />
              </div>
            </div>
          </div>
        </div>

        <div className='section-divider'></div>
        <div className='role-container'>
          <div className='title-with-icon'>
            <img src={roleIcon} alt='role icon' className='title-icon' />
            <h2>My Role</h2>
          </div>
          <h3>Some $h!t I got done on this project!</h3>

          <div className='roles-container'>
            {project.roles.map((role) => (
              <div className='role'>
                <div className='role-icon'>
                  <img src={role.iconFa} alt='' />
                  <h3>{role.title}</h3>
                </div>
                <p>{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='section-divider'></div>
        <div className='browser-container'>
          <div className='typography-container'>
            <div className='title-with-icon'>
              <img src={bookIcon} alt='role icon' className='title-icon' />
              <h2>Typography</h2>
            </div>
            <h3>Reading is boring enough...</h3>
            <div className='examples-container'>
              {project.fonts.map((font) => (
                <div className='font-family-container'>
                  <div className='font-title'>
                    <h3 className='family-title'>{font.title}</h3>
                    <h3>{font.fontFamily}</h3>
                  </div>

                  <h3
                    className='font-example'
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
          <div className='browser-screenshot'>
            <img src={vbcDesktop} alt='' />
          </div>
        </div>
        <div className='section-divider'></div>
        <div className='tablet-container'>
          <div className='tablet-image'>
            <img className='ipad-frame' src={ipad} alt='tablet screenshot' />
            <div className='ipad-img'>
              <img src={vbcIpad} alt='tablet screenshot' />
            </div>
          </div>
          <div className='colour-container'>
            <div className='title-with-icon'>
              <img src={paletteIcon} alt='role icon' className='title-icon' />
              <h2>Palette</h2>
            </div>
            <h3>Colors get the people going!</h3>
            <div className='palette-container'>
              <div className='colour-palettes'>
                {project.colours.map((colour) => (
                  <div
                    className='colour-palette'
                    style={{ backgroundColor: `${colour.hexCode}` }}
                  >
                    <p>{colour.hexCode}</p>
                  </div>
                ))}
              </div>
              <h5>Click on hexcode to copy to clipboard</h5>
            </div>
          </div>
        </div>
        <div className='section-divider'></div>
        <div className='skill-details'>
          <div className='title-with-icon'>
            <img src={toolIcon} alt='role icon' className='title-icon' />
            <h2>Skills & Tools</h2>
          </div>
          <h3>Jack of all trades, master of some.</h3>

          <div className='icon-container'>
            {project.icons.map((icon) => (
              <div className='skill'>
                <div className='tool-text-container'>
                  <h3>{icon.title}</h3>
                  <p>{icon.description}</p>
                </div>
                <div className='tool-button-container'>
                  <a
                    href={icon.linkUrl}
                    target='_blank'
                    className='project-button'
                  >
                    View Doc
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='section-divider'></div>
        <div className='example-container'>
          <div className='shadow'>
            <a className='shadow'>Back</a>
          </div>
        </div>
        <div className='section-divider'></div>

        {/* <div className='highlight-details'>
          <div className='title-with-icon'>
            <img
              src={highlightIcon}
              alt='highlight icon'
              className='title-icon'
            />
            <h2>Highlight</h2>
          </div>

          <div className='detail-container'>
            <h3>{project.highlights.title}</h3>
            {project.highlights.description.map((highlight) => (
              <div className='role'>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div> */}
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
  max-width: calc(var(--max-width) - 4rem);

  position: absolute;
  top: 0vh; /* position the top  edge of the element at the middle of the parent */
  /* left: 0%; position the left edge of the element at the middle of the parent */

  /* transform: translate(-50%, 0%); */
  z-index: 11;
  border-radius: 20px;
  background: #1e1e1e;

  /* margin: auto; */
  /* max-width: 1400px; */
  @media (max-width: 1600px) {
    width: 100%;
  }
  .back-button {
    background-color: white;
  }

  .close-button {
    display: flex;
    align-self: flex-start;
    align-items: center;
    gap: 5px;
    color: var(--primary-text-color);
    background-color: #000;
    padding: 0.25rem 1rem;
    border-radius: 25px;

    cursor: pointer;
    p {
      font-size: 1.125rem;
      font-weight: 400;
    }
    .icon {
      @media (max-width: 700px) {
        display: none;
      }
    }
  }
  .title-with-icon {
    display: flex;
    align-items: center;
    gap: 16px;
    h2 {
      letter-spacing: 1.125px;
      white-space: nowrap;
    }
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
  .first-container {
    position: sticky;
    top: 0;
    z-index: 20;
    background-color: #121212;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem 2rem;
    .title-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      gap: 2rem;
    }
    h1 {
      color: var(--primary-text-color);
      margin-bottom: 16px;

      letter-spacing: 1.125px;
      font-size: clamp(2.5rem, 5vw, 3rem);
      text-align: start;
    }
    h3 {
      color: var(--secondary-text-color);
      padding: 0 0 16px;
    }
  }

  .apple-container {
    display: flex;
    flex-direction: row;

    background-color: #121212;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    @media (max-width: 950px) {
      flex-direction: column-reverse;
    }
    .description-container {
      border: 1px solid blue;
      flex: 1;
      padding: 32px 2rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 16px;
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
      h3 {
        color: var(--secondary-text-color);
      }
      .view-container,
      .project-summary {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .project-summary {
        h2 {
          /* white-space: nowrap; */
        }
      }
      .view-container {
        h2 {
          /* white-space: nowrap; */
        }
        flex-wrap: wrap;

        .project-sites {
          /* border: blue 3px solid; */
          display: flex;
          /* flex-wrap: wrap; */

          gap: 16px;
          a {
            text-align: center;
            /* align-self: flex-start; */
            /* max-width: 120px; */
          }

          @media (max-width: 950px) {
            flex-direction: column;
          }
          @media (max-width: 700px) {
            flex-direction: row;
          }
        }
      }
    }
  }

  .device-container {
    position: relative;
    width: 100%;
    /* max-width: clamp(800px, 50vw, 1400px); */
    margin: auto;
    padding: 32px 2rem;
    flex: 4;

    border: 1px solid blue;
    @media (max-width: 750px) {
      width: 150%;
      padding: unset;
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
      bottom: -50%; /* position the top  edge of the element at the middle of the parent */
      right: 5%; /* position the left edge of the element at the middle of the parent */

      transform: translate(50%, -50%);
      width: 30%;

      margin: 5rem;
      z-index: 3;
      .iphone-frame {
        position: relative;
      }
      .iphone-img {
        border: 1px solid pink;
        position: absolute;
        top: 50%; /* position the top  edge of the element at the middle of the parent */
        left: 49%; /* position the left edge of the element at the middle of the parent */
        border-radius: 15px;
        overflow: hidden;
        transform: translate(-50%, -50%);
        z-index: -1;

        width: 61%;
      }
    }
  }

  .role-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 0 2rem;
    @media (max-width: 750px) {
      align-items: flex-start;
    }
    .title-icon {
      white-space: nowrap;
    }
    p {
      padding: 0;
      text-align: left;
      color: var(--secondary-text-color);
    }
    .roles-container {
      display: flex;
      gap: 2rem;
      justify-content: center;
      padding: 16px 0;
      @media (max-width: 750px) {
        flex-direction: column;
        .role {
          max-width: none;
        }
      }
    }
    .role {
      flex: 1;
      background-color: #121212;
      border-radius: 16px;
      padding: 1.5rem 1rem;
      max-width: 350px;
    }
    .role-icon {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 16px;
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
  .browser-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    /* margin: 0 2rem; */
    position: relative;
    @media (max-width: 750px) {
      flex-direction: column-reverse;
      align-items: flex-start;
      .browser-screenshot {
        padding: 0 0 160px;
      }
    }
    .browser-screenshot {
      min-width: clamp(900px, 60vw, 1200px);
      margin: 0 1rem;
    }
  }
  .typography-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    align-items: flex-start;
    gap: 16px;
    margin-left: 2rem;
    @media (max-width: 750px) {
      margin: 0 2rem;
    }
    .examples-container {
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

      .font-family-container {
        border-radius: 16px;
        background-color: #121212;
        padding: 1.5rem 1rem;
        max-width: 300px;

        display: flex;
        flex-direction: column;
        @media (max-width: 750px) {
          max-width: unset;
        }
        .family-title {
          color: var(--primary-text-color);
          font-weight: 600;
          margin-bottom: 2px;
        }
        h3 {
          color: var(--secondary-text-color);
        }
        .font-example {
          margin: 1rem 0 0;
        }
      }
    }
  }
  .colour-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin: 0 2rem;
    text-align: left;

    @media (max-width: 750px) {
      margin: 0 2rem;
      width: calc(100% - 4rem);
    }

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
        gap: 16px;
        width: 100%;
        .colour-palette {
          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 8px;
          max-width: 270px;
          /* min-width: 230px; */
          width: 30vw;
          height: 80px;
          cursor: pointer;
          @media (max-width: 750px) {
            max-width: unset;
            width: 100%;
            /* min-width: unset; */
          }
        }
        p {
          font-weight: 600;
          cursor: pointer;
        }
      }
      h5 {
        line-height: 1.6;
        text-align: center;
        padding: 16px 0 0;
        color: var(--secondary-text-color);
      }
    }
  }
  .tablet-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin: 5rem 0;
    gap: 2rem;
    @media (max-width: 750px) {
      flex-direction: column;
      align-items: flex-end;
      .tablet-image {
        margin: 0 0 160px;
      }
    }
    .tablet-image {
      display: flex;
      position: relative;
      flex: 3;
      margin-left: 2rem;
      @media (max-width: 750px) {
        margin-right: 2rem;
      }
      .ipad-frame {
        position: relative;
        min-width: clamp(700px, 60vw, 1200px);
      }
      .ipad-img {
        position: absolute;
        top: 50%; /* position the top  edge of the element at the middle of the parent */
        left: 50%; /* position the left edge of the element at the middle of the parent */
        transform: translate(-50%, -50%);

        width: 94.7%;
        z-index: -1;
      }
    }
  }

  .skill-details {
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 0 2rem;
    /* min-width: 400px; */

    .icon-container {
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(4, 1fr);
      @media (max-width: 950px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
      }
      .skill {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        gap: 24px;

        /* min-width: 250px; */
        background-color: #121212;
        border-radius: 16px;
        padding: 1.5rem 1rem;
        .tool-text-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          h3 {
            font-weight: 600;
          }
          p {
            color: var(--secondary-text-color);
          }
        }

        .tool-button-container {
          display: flex;
        }
      }
    }
  }

  .theme-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3rem;
    @media (max-width: 950px) {
      flex-direction: column;
    }
  }

  .example-container {
    text-align: center;
    a {
      background-color: #121212;
      padding: 1.5rem 1.5rem;
      font-size: clamp(0.9rem, 0.5vw, 1rem);
      text-decoration: none;

      color: var(--secondary-text-color);
      border: var(--secondary-text-color) 1px solid;
    }
  }
`;
