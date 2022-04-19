//STYLING
import styled from 'styled-components';

const SkillCard = ({ title, description, documentation }) => {
  console.log(documentation);
  return (
    <StyledSkillCard>
      <h3>{title}</h3>
      <div className='space-container'>
        <p>{description}</p>
        <a href={documentation} target='_blank' rel='noreferrer'>
          {title} Doc
        </a>
      </div>
    </StyledSkillCard>
  );
};

export default SkillCard;

const StyledSkillCard = styled.div`
  background-color: #121212;
  border-radius: 20px;
  padding: 1rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;

  p {
    /* font-size: 13px; */
  }
  a {
    font-size: 15px;

    width: fit-content;
    border: 1px solid white;
    padding: 0.7rem;
    text-decoration: none;
    color: white;
    transition: all 0.5s ease;
  }
  a:hover {
    font-size: 1.05rem;
    background-color: #242424;
  }
  .space-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: space-between;
  }
  /* &:hover {
    transform: scale(1.03);
  } */
  @media (max-width: 500px) {
    p {
      font-size: 13px;
    }
  }
`;
