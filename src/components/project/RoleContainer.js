import { v4 as uuidv4 } from 'uuid';

import styled from 'styled-components';
import { motion } from 'framer-motion';
//APPEAR WHEN IN VIEWPORT
import { fade } from '../../animation';
import { useScroll } from '../useScroll';
//svg icons
import roleIcon from '../../img/icons/role-icon.svg';

const RoleContainer = ({ roles }) => {
  const [element, controls] = useScroll();
  return (
    <StyledRoleContainer
      variants={fade}
      animate={controls}
      initial='hidden'
      ref={element}
      className='role-container'
    >
      <div className='title-with-icon'>
        <img src={roleIcon} alt='role icon' className='title-icon' />
        <h2>Contributions</h2>
      </div>
      <h5>Some things I got done on this project!</h5>

      <div className='roles-container'>
        {roles?.map((role) => (
          <div key={uuidv4()} className='role custom-card'>
            <div className='role-icon'>
              <img src={role.iconFa} alt='' />
              <h4>{role.title}</h4>
            </div>
            <p>{role.description}</p>
          </div>
        ))}
      </div>
    </StyledRoleContainer>
  );
};

export default RoleContainer;

const StyledRoleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 var(--layout-padding);
  @media (max-width: 750px) {
    align-items: flex-start;
  }
  @media (max-width: 500px) {
    /* padding: var(--layout-padding); */
    /* border: 1px solid white; */
  }
  .title-icon {
    white-space: nowrap;
  }
  p {
    text-align: left;
    color: var(--secondary-text-color);
  }
  .roles-container {
    display: flex;
    gap: 16px;
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

    max-width: 350px;
    width: 100%;
  }
  .role-icon {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
    p {
      padding: 0;
    }
    img {
      width: clamp(18px, 1vw, 30px);
      height: clamp(18px, 1vw, 30px);
    }
  }
`;
