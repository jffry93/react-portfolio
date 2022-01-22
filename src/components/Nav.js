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
            <span aria-hidden='true'>1.</span> ABOUT
          </Link>
          {/* <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '50%' : '0%' }}
          /> */}
        </li>
        <li>
          <Link href='#' to='/work'>
            <span aria-hidden='true'>2.</span> WORK
          </Link>
          {/* <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '50%' : '0%' }}
          /> */}
        </li>
        <li>
          <Link href='#' to='/contact'>
            <span aria-hidden='true'>3.</span> CONTACT
          </Link>
          {/* <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
          /> */}
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  /* min-height: 10vh; */
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap, 1rem);
  /* margin: auto; */
  width: 100%;
  padding: 1rem 0 1rem 10rem; //site margin border
  background: transparent;
  top: 0;
  /* z-index: 10; */
  border: pink 3px solid;
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
  ul {
    display: flex;
    list-style: none;
    white-space: nowrap;
    padding: 0;
    margin: 0;
    border: 3px solid purple;
    gap: var(--gap, 1rem);

    background: hsl(0 0% 0% / 0.9);
  }

  //uses the value if the browser supports it
  @supports (backdrop-filter: blur(1rem)) {
    ul {
      background: hsl(0 0% 100% / 0.1);
      backdrop-filter: blur(
        1rem
      ); //firefox does not support backdrop-filter rn 01/21/22
    }
  }
  li {
    /* padding-left: 10rem;
    position: relative; */
    border: 3px solid cyan;
    font-weight: 500;
    span {
      color: white;
      font-weight: 700;
      margin-inline-end: 0.5em;
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
    /* font-weight: bold; */
    font-family: 'Javascript';
    //font-weight: lighter;
  }
  //desktop
  @media (min-width: 750px) {
    ul {
      --gap: clamp(1.5rem, 5vw, 3rem);
      /* padding-block: 2rem; */
      /* padding-inline: clamp(3rem, 10vw, 10rem); */
      padding: 1rem 10rem 1rem 5rem;
    }
  }
  //mobile
  @media (max-width: 750px) {
    /* flex-direction: column; */
    padding: 2rem 1rem;
    #Logo {
      display: inline-block;
      /* margin: 2rem; */
    }
    ul {
      --gap: 2em;

      position: fixed;
      inset: 0 0 0 30%;
      /* background: steelblue; */
      z-index: 2;

      flex-direction: column;
      padding: min(30vh, 10rem) 2em;

      transform: translateX(100%);
      transition: transform 250ms ease-out;

      /* padding: 2rem; */
      /* justify-content: space-around; */
      /* width: 100%; */
    }
    .library-active {
      transform: translateX(0%);
    }
    li {
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
    top: 3.4rem;
    right: 2rem;
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
