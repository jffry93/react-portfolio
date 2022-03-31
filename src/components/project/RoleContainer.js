import styled from 'styled-components';
//svg icons
import roleIcon from '../../img/icons/role-icon.svg';

const RoleContainer = ({ roles }) => {
  return (
    <StyledRoleContainer className='role-container'>
      <div className='title-with-icon'>
        <img src={roleIcon} alt='role icon' className='title-icon' />
        <h2>My Role</h2>
      </div>
      <h4>Some $h!t I got done on this project!</h4>

      <div className='roles-container'>
        {roles.map((role) => (
          <div className='role'>
            <div className='role-icon'>
              <img src={role.iconFa} alt='' />
              <h3>{role.title}</h3>
            </div>
            <p>{role.description}</p>
          </div>
        ))}
      </div>
    </StyledRoleContainer>
  );
};

export default RoleContainer;

const StyledRoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 var(--layout-padding);
  @media (max-width: 750px) {
    align-items: flex-start;
  }
  .title-icon {
    white-space: nowrap;
  }
  p {
    padding: 0;
    text-align: left;
    color: var(--secondary-text-color);
  }
  .roles-container {
    display: flex;
    gap: 2rem;
    justify-content: center;
    padding: 16px 0;
    width: 100%;
    @media (max-width: 750px) {
      flex-direction: column;
      .role {
        max-width: none;
      }
    }
  }
  .role {
    flex: 1;
    background-color: #121212;
    border-radius: 16px;
    padding: 1.5rem 1rem;
    max-width: 350px;
    width: 100%;
  }
  .role-icon {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;
