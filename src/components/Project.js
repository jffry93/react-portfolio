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
        <p>{description}</p>
        <a href={url}>GitHub Repo</a>
      </StyledDetails>
    </StyledProject>
  );
};

export default Project;

const StyledProject = styled.div`
  position: relative;
  border: 1px solid white;
  /* background-color: rgba(0, 0, 0, 1); */
  /* border-radius: 20px; */
  overflow: hidden;
  cursor: pointer;
  /* box-shadow: 00 30px rgba(0, 0, 0, 0.18); */
`;

const StyledImgContainer = styled.div`
  /* position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  ::after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 20px 20px 0 0;
    background-image: linear-gradient(135deg, #0100ec, #fb36f4);
    opacity: 0.3;
  }
  img {
    width: 100%;
    display: block;
    border-radius: 20px 20px 0 0;
  } */
  img {
    width: 100%;
    height: 50vh;
    min-height: 400px;
    max-height: 700px;
    display: block;
    /* border-radius: 20px 20px 0 0; */

    object-fit: cover;
  }
`;

const StyledDetails = styled.div`
  padding: 0 2rem 5rem;
  h3 {
    color: white;
    font-weight: 700;
    font-size: 2rem;
    margin: 1rem 0 1rem 0;
  }
  p {
    color: white;
    font-size: 1rem;
    line-height: 1;
    letter-spacing: 2px;
    font-weight: 400;
    margin: 1rem 0 3rem;
  }
  a {
    border: 2px solid white;
    padding: 1rem;
    text-decoration: none;
    color: white;
  }
`;

const StyledProjectDetails = styled.div`
  /* display: none; */
`;
