import { Link, useLocation } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { useEffect } from 'react/cjs/react.production.min';
import styled from 'styled-components';

const Project = ({
  path,
  title,
  secondaryTitle,
  url,
  thumbImg,
  desktopImg,
  mobileImg,
  browserImg,
  ipadImg,
  roles,
  icons,
  highlights,
  colours,
  fonts,
  description,
  secondDescription,
  caseDetail,
  setCaseDetail,
  setShowDetail,
}) => {
  //DETAIL STATE HANDLER
  const updateDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    setCaseDetail({
      path: { path }.path,
      title: { title }.title,
      secondaryTitle: { secondaryTitle }.secondaryTitle,
      url: { url }.url,
      thumbImb: { thumbImg }.thumbImg,
      desktopImg: { desktopImg }.desktopImg,
      mobileImg: { mobileImg }.mobileImg,
      browserImg: { browserImg }.browserImg,
      ipadImg: { ipadImg }.ipadImg,
      description: { description }.description,
      secondDescription: { secondDescription }.secondDescription,
      roles: { roles }.roles,
      icons: { icons }.icons,
      highlights: { highlights }.highlights,
      colours: { colours }.colours,
      fonts: { fonts }.fonts,
    });
    setShowDetail(true);
  };

  //REACT ROUTER POPUP
  let location = useLocation();
  let state = location.state;
  // console.log(caseDetail.title);
  // console.log(location);

  return (
    <StyledProject>
      <StyledImgContainer onClick={updateDetailHandler}>
        <HashLink to={`${path}`} state={{ background: location }}>
          <div id='overlay'></div>
          <img src={thumbImg} alt='project image' />
        </HashLink>
      </StyledImgContainer>
      <StyledDetails>
        <h3>{title}</h3>
        <p>{secondaryTitle}</p>
        <div className='button-container'>
          <HashLink to={`${path}`} state={{ background: location }}>
            <button>Learn more</button>
          </HashLink>
          <a href={url[0].website} target='_blank'>
            <button>Visit Website</button>
          </a>
        </div>
      </StyledDetails>
    </StyledProject>
  );
};

export default Project;

const StyledProject = styled.div`
  position: relative;
  /* border: 1px solid white; */

  overflow: hidden;
  cursor: pointer;
`;

const StyledImgContainer = styled.div`
  /* position: relative;
  height: 60vh;
  min-height: 500px;
  max-height: 700px;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: rgba(0, 0, 0, 0.9);
    z-index: 2;

    content: " ";
  } */
  position: relative;
  #overlay {
    position: absolute;
    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.6);

    width: 100%;
    height: 100%;
    border: 1px solid var(--secondary-accent);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* min-height: 500px;
    max-height: 700px; */
    /* z-index: 1; */
  }

  img {
    width: 100%;
    height: 66vh;
    min-height: 500px;
    max-height: 900px;
    display: block;
    /* border-radius: 20px 20px 0 0; */
    object-fit: cover;
    z-index: 1;
  }
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  padding: 1.5rem 1.5rem 3rem 1.5rem;

  /* display: none; */
  opacity: 0;
  position: absolute;
  top: 50%;
  left: -15%;
  transform: translate(0%, -50%);

  height: auto;
  width: 100%;

  cursor: default;

  h3 {
    color: white;
    font-weight: 700;
    font-size: 1.7rem;
  }
  p {
    color: white;
    font-size: 1rem;
    line-height: 1;
    letter-spacing: 2px;
    font-weight: 400;
    /* padding: 16px 0 32px; */
  }
  .button-container {
    margin-top: 16px;
    display: flex;
    gap: 8px;
    background-color: unset !important;
  }

  button {
    /* border: 2px solid white; */
    padding: 0.7rem;
    font-size: 14px;
    text-decoration: none;
    color: white;
    min-width: 120px;
  }
  button:hover {
    background-color: #242424;
  }
  a {
    text-decoration: none;
    color: var(--primary-text-color);
  }
  @media (max-width: 450px) {
    .button-container {
      flex-direction: column;
    }
  }
`;

const StyledProjectDetails = styled.div`
  /* display: none; */
`;
