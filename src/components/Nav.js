import hamburger from '../img/icons/icon-hamburger.svg';
import closeHamburger from '../img/icons/icon-close.svg';

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import { motion } from 'framer-motion';
import { useLocation } from 'react-router';
// import { StyledOverlay } from '../Styles';

const Nav = ({ navToggle, setNavToggle }) => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <div className='nav-container'>
        <h1>
          <Link id='Logo' to='/'>
            JZ
          </Link>
        </h1>
        <StyledNavToggle
          onClick={() => setNavToggle(!navToggle)}
          className={`${navToggle ? 'close-toggle' : 'hamburger-toggle'}`}
        >
          <span></span>
        </StyledNavToggle>
        <ul className={`${navToggle ? 'library-active' : ''}`}>
          <li>
            <Link href='#' to='/'>
              <span>ABOUT</span>
            </Link>
            {/* <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '50%' : '0%' }}
          /> */}
          </li>
          <li>
            <Link href='#' to='/work'>
              <span>WORK</span>
            </Link>
            {/* <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '50%' : '0%' }}
          /> */}
          </li>
          <li>
            <Link href='#' to='/contact'>
              <span>CONTACT</span>
            </Link>
            {/* <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
          /> */}
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  border: pink 3px solid;
  background: rgba(12, 12, 12);
  backdrop-filter: blur(0.15rem);
  .close-toggle {
    background: url(${closeHamburger});
    background-repeat: no-repeat;
    transition: background 100ms ease-out;
  }
  .hamburger-toggle {
    background: url(${hamburger});
    background-repeat: no-repeat;
    transition: background 100ms ease-out;
  }
  a {
    color: white;
    text-decoration: none;
  }
  .nav-container {
    min-height: var(--navbar-height);
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--gap, 1rem);

    margin: auto;
    width: 100%;
    max-width: var(--max-width);

    padding: 2rem; //site margin border
  }
  ul {
    display: flex;
    justify-content: center;
    gap: var(--gap, 2rem);

    list-style: none;
    white-space: nowrap;
    padding: 0;
    margin: 0;
  }

  //uses the value if the browser supports it
  /* @supports (backdrop-filter: blur(1rem)) {
    ul {
      background: hsl(0 0% 0% / 0.5);
      backdrop-filter: blur(
        1rem
      ); //firefox does not support backdrop-filter rn 01/21/22
    }
  } */
  li {
    font-weight: 700;
    letter-spacing: 1px;
    span {
      color: white;
    }
  }
  h1 {
    border: 3px solid white;
    padding: 26px 2px 0px 10px;
    background-color: transparent;
  }
  #Logo {
    color: white;
    font-size: 3rem;
    line-height: 0.5;
    font-family: 'Javascript';
  }
  //desktop
  @media (min-width: 750px) {
    ul {
      --gap: clamp(4rem, 4vw, 6rem); //reset --gap variable
    }
  }
  //mobile
  @media (max-width: 750px) {
    backdrop-filter: none;
    #Logo {
      display: inline-block;
    }
    ul {
      --gap: 4rem; //reset --gap variable

      position: fixed;
      inset: 0 0 0 30%;

      z-index: 2;
      height: 100vh;

      background: rgba(0, 0, 0, 0.5);

      flex-direction: column;
      padding: min(30vh, 10rem) 2em;

      transform: translateX(100%);
      transition: transform 250ms ease-out;
    }
    .library-active {
      transform: translateX(0%);
      backdrop-filter: blur(6rem) !important;
    }
    li {
      margin-left: 3rem;
      white-space: nowrap;
      /* padding: 0; */
    }
  }
`;
const StyledNavToggle = styled.button`
  display: none;
  @media (max-width: 750px) {
    display: block;
    padding: 0%;
    border: none;

    position: absolute;
    z-index: 9999; //OVER 9000!!!
    width: 2rem;
    aspect-ratio: 1;
    top: 50%;
    right: 0rem;
    transform: translate(-50%, -50%);
  }
`;

// const StyledLine = styled(motion.div)`
//   height: 0.3rem;
//   background: #23d997;
//   width: 0%;
//   position: absolute;
//   bottom: -80%;
//   left: 60%;
//   @media (max-width: 1300px) {
//     left: 0%;
//   }
// `;

export default Nav;
