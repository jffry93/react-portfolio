import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//components
import HomeSection from '../components/HomeSection';
import styled from 'styled-components';
import { MovieState } from '../movieState';
//PAGE ANIMATION
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
//device pngs
import macbook from '../img/devices/new-empty-macbook.png';
import iphone from '../img/devices/empty-iphone.png';
import ipad from '../img/devices/empty-ipad-horizontal.png';

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

  return (
    //added a fraction tag around to add a function
    <>
      {movie && (
        <StyledOverflow className='overflowContainer'>
          <StyledDetails
            variants={pageAnimation}
            initial='hidden'
            animate='show'
            exit='exit'
          >
            <StyledTitle>
              <div className='title-container'>
                <h3>VOUS Beauty Clinic</h3>
                <h4>Ecommerce</h4>
              </div>
            </StyledTitle>
            <StyledHeadLine>
              <div className='apple-container'>
                <div className='description-container'>
                  <div className='project-summary'>
                    <h2>Summary</h2>
                    <p>{movie.secondDescription}</p>
                    <button>Visit Website</button>
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
                      <img src={movie.desktopImg} alt='desktop screenshot' />
                    </div>
                  </div>
                  <div className='iphone'>
                    <img
                      className='iphone-frame'
                      src={iphone}
                      alt='mobile screenshot'
                    />
                    <div className='iphone-img'>
                      <img src={movie.mobileImg} alt='mobile screenshot' />
                    </div>
                  </div>
                </div>
              </div>
            </StyledHeadLine>
            <StyledRoles>
              <div className='role-container'>
                <div className='roles-container'>
                  {movie.roles.map((role) => (
                    <div className='role custom-card'>
                      <div className='role-icon'>
                        <img src={role.iconFa} alt='' />
                        <h4>{role.title}</h4>
                      </div>
                      <div className='line'></div>
                      <p>{role.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </StyledRoles>
            <StyledTypography>
              <div className='browser-container'>
                <div className='typography-container'>
                  <div className='examples-container'>
                    {movie.fonts.map((font) => (
                      <div className='font-family-container'>
                        <div className='font-title'>
                          <h4 className='family-title'>{font.title}</h4>
                          <h3
                            style={{
                              fontFamily: `${font.fontFamily}`,
                              fontWeight: `${font.fontWeight}`,
                              letterSpacing: `${font.letterSpacing}`,
                            }}
                          >
                            {font.fontFamily}
                          </h3>
                        </div>

                        <p
                          className='font-example'
                          style={{
                            fontFamily: `${font.fontFamily}`,
                            fontWeight: `${font.fontWeight}`,
                            letterSpacing: `${font.letterSpacing}`,
                          }}
                        >
                          Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr
                          Ss Tt Uu Vv Ww Xx Yy Zz 1 2 3 4 5 6 7 8 9 0 ? !
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='browser-screenshot'>
                  <img src={movie.browserImg} alt='' />
                </div>
              </div>
            </StyledTypography>
            <StyledPalette>
              <div className='tablet-container'>
                <div className='tablet-image'>
                  <img
                    className='ipad-frame'
                    src={ipad}
                    alt='tablet screenshot'
                  />
                  <div className='ipad-img'>
                    <img src={movie.ipadImg} alt='tablet screenshot' />
                  </div>
                </div>
                <div className='colour-container'>
                  <div className='palette-container'>
                    <div className='colour-palettes'>
                      {movie.colours.map((colour) => (
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
            </StyledPalette>
            <StyledSkills>
              <div className='skill-details'>
                <div className='icon-container'>
                  {movie.icons.map((icon) => (
                    <div className='skill'>
                      <div className='tool-text-container'>
                        <h4>{icon.title}</h4>
                        <p>{icon.description}</p>
                      </div>
                      <div className='tool-button-container'>
                        <button target='_blank' className='project-button'>
                          View Doc
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </StyledSkills>
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
  /* overflow: hidden; */
`;

const StyledDetails = styled(motion.div)`
  color: white;
  min-height: var(--container-height);

  /* max-width: calc(var(--max-width) - 4rem); */
  /* margin: auto; */
  img {
    width: 100%;
  }
  button {
    width: fit-content;
    background-color: #121212;
    padding: 1rem 1.5rem;
    font-size: clamp(0.9rem, 0.5vw, 1rem);
    text-decoration: none;

    color: var(--secondary-text-color);
    border: var(--secondary-text-color) 1px solid;
  }
`;
const StyledTitle = styled(motion.div)`
  /* border: 1px solid yellow; */
  position: sticky;
  top: var(--navbar-height);
  z-index: 20;

  background-color: #121212;
  padding: 4px var(--layout-padding);
  .title-container {
    max-width: var(--max-width);
    margin: auto;
    padding: 0 var(--layout-secondary-padding);
  }

  h4 {
    color: var(--secondary-text-color);
    /* padding: 8px 0 0; */
  }

  @media (max-width: 450px) {
    padding: 12px var(--mobile-padding);
  }
`;

const StyledHeadLine = styled.div`
  /* border: 1px solid red; */
  height: 100%;
  max-width: 1400px;
  margin: auto;

  overflow: hidden;

  .apple-container {
    display: flex;
    flex-direction: row;

    @media (max-width: 950px) {
      flex-direction: column-reverse;
    }
    .description-container {
      flex: 1.5;
      padding: 4rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 16px;
      @media (max-width: 950px) {
        flex-direction: row;

        gap: 48px;
        max-width: 700px;
        margin: 0 auto;
        max-width: 600px;
      }
      @media (max-width: 700px) {
        flex-direction: column;
        gap: 32px;
        padding: 16px var(--layout-padding) 32px;
      }
      @media (max-width: 450px) {
        padding: 16px var(--mobile-padding) 32px;
      }
      p {
        margin: 0 0 16px;
      }

      .view-container,
      .project-summary {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .view-container {
        flex-wrap: wrap;

        .project-sites {
          display: flex;

          gap: 16px;
          a {
            text-align: center;
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
    padding: 32px 2rem 0;
    flex: 4;

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
`;
const StyledRoles = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  padding: 0 var(--layout-padding);

  height: 90vh;
  max-height: 700px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 750px) {
    height: auto;
    max-height: unset;
  }

  .role-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 60px;
    @media (max-width: 750px) {
      align-items: flex-start;
      padding: 60px var(--mobile-padding);
    }
    .line {
      width: 100%;
      background: #23d997;
      height: 0.3rem;
      margin: 1rem 0rem;
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
      width: 100%;
      @media (max-width: 750px) {
        flex-direction: column;
        .role {
          max-width: none;
        }
      }
    }
    .role {
      flex: 1;
      max-width: 350px;
      width: 100%;
    }
    .role-icon {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 16px;
      img {
        width: clamp(18px, 1vw, 30px);
        height: clamp(18px, 1vw, 30px);
      }
    }
  }
`;
const StyledTypography = styled.div`
  min-height: 50vh;
  /* margin: 4rem 0; */
  max-width: 1400px;
  margin: auto;

  .browser-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    /* margin: 0 2rem; */
    position: relative;

    .browser-screenshot {
      min-width: clamp(700px, 60vw, 1200px);
      margin: 0 1rem;
    }
    @media (max-width: 650px) {
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 0;
      .browser-screenshot {
        padding: 0 0 4rem;
        margin: 0 14px 0 0;
      }
    }
  }
  .typography-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    align-items: flex-start;
    gap: 16px;
    margin-left: 2rem;
    @media (max-width: 750px) {
      margin: 0 12px;
      padding: 4rem 0 0;
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
  /* img {
    width: 100%;
    object-fit: cover;
  } */
`;
const StyledPalette = styled.div`
  max-width: 1400px;
  margin: auto;
  .colour-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    margin: 0 2rem;
    text-align: left;

    @media (max-width: 750px) {
      margin: 4rem 12px 0;
      width: calc(100% - 24px);
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
      gap: 0;
      .tablet-image {
        margin: 4rem 0;
      }
    }
    .tablet-image {
      display: flex;
      position: relative;
      flex: 3;
      margin-left: 2rem;
      @media (max-width: 750px) {
        margin-right: 12px;
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
`;
const StyledSkills = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  height: 90vh;
  max-height: 700px;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 750px) {
    height: auto;
    max-height: unset;
  }
  .skill-details {
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 4rem 2rem;
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
