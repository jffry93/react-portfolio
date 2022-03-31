import styled from 'styled-components';
//ICON
import toolIcon from '../../img/icons/tools-icon.svg';

const SkillsContainer = ({ skills }) => {
  return (
    <StyledSkillsContainer className='skill-details'>
      <div className='title-with-icon'>
        <img src={toolIcon} alt='role icon' className='title-icon' />
        <h2>Skills & Tools</h2>
      </div>
      <h3>Jack of all trades, master of some.</h3>

      <div className='icon-container'>
        {skills.map((icon) => (
          <div className='skill'>
            <div className='tool-text-container'>
              <h3>{icon.title}</h3>
              <p>{icon.description}</p>
            </div>
            <div className='tool-button-container'>
              <a href={icon.linkUrl} target='_blank' className='project-button'>
                View Doc
              </a>
            </div>
          </div>
        ))}
      </div>
    </StyledSkillsContainer>
  );
};

export default SkillsContainer;

const StyledSkillsContainer = styled.div`
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
`;
