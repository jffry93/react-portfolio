import styled from 'styled-components';

const Project = ({
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
  setCaseDetail,
  setShowDetail,
}) => {
  const updateDetailHandler = () => {
    setCaseDetail({
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
    document.body.style.overflow = 'hidden';
  };
  return (
    <StyledProject onClick={updateDetailHandler}>
      <StyledImgContainer>
        <div id='overlay'></div>
        <img src={thumbImg} alt='project image' />
      </StyledImgContainer>
      <StyledDetails>
        <h3>{title}</h3>
        <p>{secondaryTitle}</p>
        <button>Learn more</button>
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
    /* z-index: 1; */
  }
`;

const StyledDetails = styled.div`
  max-width: 400px;
  padding: 1.5rem 1.5rem 3rem 1.5rem;
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
    padding: 16px 0 32px;
  }
  button {
    /* border: 2px solid white; */
    padding: 0.7rem;
    font-size: 17px;
    text-decoration: none;
    color: white;
  }
  button:hover {
    background-color: #242424;
  }
`;

const StyledProjectDetails = styled.div`
  /* display: none; */
`;
