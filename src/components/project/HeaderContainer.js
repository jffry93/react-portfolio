import styled from 'styled-components';

const HeaderContainer = ({ title, secondaryTitle }) => {
  return (
    <StyledHeadingContainer>
      <div className='title-container'>
        <h3>{title}</h3>
        <h4>{secondaryTitle}</h4>
      </div>
      <button className='shadow'>CLOSE</button>
    </StyledHeadingContainer>
  );
};

export default HeaderContainer;

const StyledHeadingContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: #121212;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;

  padding: 12px var(--layout-padding);
  .title-container {
    display: flex;
    flex-direction: column;

    width: 100%;
  }
  h4 {
    color: var(--secondary-text-color);
    padding: 8px 0 0;
  }
  button {
    font-size: 15px;
    border-radius: 25px;
    padding: 0.7rem 1.1rem;
  }
  @media (max-width: 450px) {
    padding: 12px var(--mobile-padding);
  }
`;
