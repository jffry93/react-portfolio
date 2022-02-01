import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  console.log(caseDetail);
  return (
    <StyledProjectShadow className='shadow' onClick={hideDetailHandler}>
      <StyledProjectDetail>
        <div>
          <h2>{detail.title}</h2>
          <div className='shadow'>CLOSE X</div>
        </div>
        <img src={detail.img} alt='desktop screenshot' />
        <img src={detail.img} alt='mobile screenshot' />
        {/* <ul>
          Tools
          <li>React</li>
          <li>Javascript</li>
          <li>Sass</li>
        </ul>
        <div>
          <div>Green</div>
          <div>Red</div>
          <div>Blue</div>
        </div>
        <div>
          <h1>Different fonts used</h1>
        </div>
        <div>
          <a href=''>Github</a>
          <a href=''>Website</a>
        </div> */}
      </StyledProjectDetail>

      <StyledMainImg></StyledMainImg>
      <StyledProjectDescription></StyledProjectDescription>
    </StyledProjectShadow>
  );
};

export default ProjectDetails;

const StyledProjectShadow = styled(motion.div)`
  border: 3px solid yellow;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  position: fixed;
  top: 10vh;
  left: 0;
  z-index: 2;
  width: 100%;
  min-height: 90vh;

  background: rgba(0, 0, 0, 0.5);
`;

const StyledProjectDetail = styled(motion.div)`
  border: red 3px solid;
  width: 80%;
  overflow-y: scroll;

  position: absolute;
  z-index: 11;
  border-radius: 20px;
  padding: 2rem 20rem;
  background: white;

  color: black;
  img {
    width: 100%;
    display: block;
  }
`;

const StyledMainImg = styled.div``;

const StyledProjectDescription = styled.div``;
