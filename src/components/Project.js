import styled from 'styled-components';

const Project = ({
  title,
  secondaryTitle,
  url,
  desktopImg,
  mobileImg,
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
      desktopImg: { desktopImg }.desktopImg,
      mobileImg: { mobileImg }.mobileImg,
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
        <img src={desktopImg} alt='project image' />
      </StyledImgContainer>
      <StyledDetails>
        <h3>{title}</h3>
        <p>{secondaryTitle}</p>
        <button href={url}>GitHub Repo</button>
      </StyledDetails>
    </StyledProject>
  );
};

export default Project;

const StyledProject = styled.div`
  position: relative;
  border: 1px solid white;

  overflow: hidden;
  cursor: pointer;
`;

const StyledImgContainer = styled.div`
  img {
    width: 100%;
    height: 60vh;
    min-height: 500px;
    max-height: 700px;
    display: block;
    /* border-radius: 20px 20px 0 0; */

    object-fit: cover;
  }
`;

const StyledDetails = styled.div`
  padding: 1.5rem 1.5rem 3rem 1.5rem;
  h3 {
    color: white;
    font-weight: 700;
    font-size: 2rem;
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
`;

const StyledProjectDetails = styled.div`
  /* display: none; */
`;
