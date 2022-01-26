import styled from 'styled-components';

const Project = ({
  title,
  url,
  img,
  description,
  setCaseDetail,
  setShowDetail,
}) => {
  const updateDetailHandler = () => {
    setCaseDetail({
      title: { title }.title,
      img: { img }.img,
    });
    setShowDetail(true);
    document.body.style.overflow = 'hidden';
  };
  return (
    <StyledProject onClick={updateDetailHandler}>
      <StyledImgContainer>
        <img src={img} alt='project image' />
      </StyledImgContainer>
      <StyledDetails>
        <h3>{title}</h3>
        <div>{description}</div>
        <a href={url}>GitHub Page</a>
      </StyledDetails>
    </StyledProject>
  );
};

export default Project;

const StyledProject = styled.div`
  border: 3px solid green;
  background-color: pink;
  border-radius: 20px;
  cursor: pointer;
  /* box-shadow: 00 30px rgba(0, 0, 0, 0.18); */
`;

const StyledImgContainer = styled.div`
  position: relative;
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
  }
`;

const StyledDetails = styled.div`
  padding: 3rem;
  h3 {
    color: white;
    font-weight: 700;
    font-size: 2rem;
    margin: 10px 0 15px 0;
  }
  div {
    color: white;
    font-size: 1.5rem;
    line-height: 1;
    letter-spacing: 2px;
    font-weight: 400;
    margin: 10px 0 15px 0;
  }
`;

const StyledProjectDetails = styled.div`
  /* display: none; */
`;
