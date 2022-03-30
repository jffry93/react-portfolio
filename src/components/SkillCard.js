//STYLING
import styled from 'styled-components';

const SkillCard = ({ title, description, documentation }) => {
  return (
    <StyledSkillCard>
      <h3>{title}</h3>
      <div className='space-container'>
        <p>{description}</p>
        <a href={documentation} target='_blank'>
          {' '}
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
  h2 {
    font-size: 2rem;
  }
  a {
    width: fit-content;
    border: 2px solid white;
    padding: 1rem;
    text-decoration: none;
    color: white;
  }
  .space-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: space-between;
  }
`;
