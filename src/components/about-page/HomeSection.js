// import home from '../img/home1.png';
import styled from 'styled-components';
import coffee from '../../img/ibrahim.jpg';

//IMAGES
import unicef from '../../img/UNICEF_Logo.png';

//Styled
import { StyledOverlay, StyledHide } from '../../Styles';

import { Link } from 'react-router-dom';
//SCROLL TO COMPONENT
import { NavHashLink } from 'react-router-hash-link';

//Framer Motion
import { motion } from 'framer-motion';
import { titleAnimation } from '../../animation';
// import ScrollTop from './ScrollTop';

const HomeSection = () => {
  return (
    <StyledHomepageContainer viewport={{ once: true }}>
      <StyledOverlay className='overlay'>
        <div className='donate-bar'>
          <a
            href='https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjJmrXu84f3AhUibG8EHcSmCU8YABABGgJqZg&ae=2&ohost=www.google.com&cid=CAESbeD2b_uN3OPM-AHG8_RTOtt2MNYsgiK2soHGi_TZrINMKVjQDUpCF1bR-IiSeSM4BkR-Qygcl1yNFBLdksYHI-9AttzsoJoAPrbYIB4AoIj_vahKjG2RcIlQJmAAzSfccxGjnIu-0jLlbAx7NIs&sig=AOD64_3e6dFZg4dCJA53TV4vEX6sKwlWdA&q&adurl&ved=2ahUKEwiNrKzu84f3AhXKG80KHQQoCDwQ0Qx6BAgFEAE'
            target='_blank'
            rel='noreferrer'
          >
            <input
              type='image'
              src={unicef}
              name='unicefLogo'
              className='unicef-logo'
            />
          </a>
          <a
            href='https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjJmrXu84f3AhUibG8EHcSmCU8YABABGgJqZg&ae=2&ohost=www.google.com&cid=CAESbeD2b_uN3OPM-AHG8_RTOtt2MNYsgiK2soHGi_TZrINMKVjQDUpCF1bR-IiSeSM4BkR-Qygcl1yNFBLdksYHI-9AttzsoJoAPrbYIB4AoIj_vahKjG2RcIlQJmAAzSfccxGjnIu-0jLlbAx7NIs&sig=AOD64_3e6dFZg4dCJA53TV4vEX6sKwlWdA&q&adurl&ved=2ahUKEwiNrKzu84f3AhXKG80KHQQoCDwQ0Qx6BAgFEAE'
            target='_blank'
            rel='noreferrer'
          >
            Donate to support families affected by the war in Ukraine
          </a>
        </div>
        <StyledDescription className='heading content'>
          <StyledHide>
            <h2 variants={titleAnimation}>Hi, I'm Jeff.</h2>
            <h1 variants={titleAnimation}>Frontend Developer</h1>
            <motion.h3 variants={titleAnimation}>
              I build things for the web.
            </motion.h3>
          </StyledHide>
          <StyledHide className='buttons' id='buttons'>
            <Link href='#' to='/contact'>
              <motion.button>Let's talk</motion.button>
            </Link>
            <NavHashLink
              href='#'
              to='/work'
              // scroll={(el) =>
              //   el.scrollIntoView({ behavior: 'smooth', block: 'center' })
              // }
            >
              <motion.button>View Work</motion.button>
            </NavHashLink>
          </StyledHide>
        </StyledDescription>
      </StyledOverlay>
    </StyledHomepageContainer>
  );
};

export default HomeSection;

const StyledHomepageContainer = styled(motion.div)`
  height: var(--container-height);
  min-height: 500px;
  max-height: 850px;

  color: white;

  background-image: url(${coffee});
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */
  background-position: center;
  /* transform: scaleX(-1); */
  position: relative;
  @media (max-width: 750px) {
    #buttons {
      flex-direction: column;
      gap: 8px;
    }
  }

  .overlay {
    /* border: 1px solid red; */
    min-height: 500px;
    max-height: 850px;
    background-color: rgba(0, 0, 0, 0.5);
    /* transform: scaleX(-1); */
    display: flex;
    flex-direction: column;
  }
  .donate-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    padding: 8px var(--layout-padding);
    background-color: rgba(0, 0, 0, 0.6);
    input {
      width: 100px;
      object-fit: contain;
      filter: brightness(0) invert(1);
    }
    input:hover {
      filter: brightness(0) invert(0.7);
    }
    a {
      font-size: 14px;
      text-align: center;
      text-decoration: none;
      color: var(--primary-text-color);

      display: flex;
    }
    a:hover {
      color: var(--secondary-text-color);
    }
    @media (max-width: 550px) {
      flex-direction: column;
      gap: 8px;
    }
  }
  .buttons {
    display: flex;
    gap: 20px;
    margin-top: 1.35em;
    overflow: visible;
    button {
      min-width: 140px;
      /* font-size: 1.625rem; */
      font-size: 17px;
    }
  }
`;
const StyledDescription = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  padding: var(--layout-secondary-padding);

  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 450px) {
    padding: var(--layout-padding);
  }

  //greeting
  h1 {
    margin: 16px 0;
  }
  h3 {
    /* font-size: clamp(1.5rem, 2.5vw, 2rem); */
    font-weight: 300;
    letter-spacing: 3px;
  }
`;
