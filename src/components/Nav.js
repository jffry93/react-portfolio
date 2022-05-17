//ICONS
import hamburger from '../img/icons/icon-hamburger.svg';
import closeHamburger from '../img/icons/icon-close.svg';
import downloadIcon from '../img/icons/download-solid.svg';

import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';

//RESUME
import MyResume from '../Resume/Jeffrey_Zalischi_Resume.pdf';

//import { motion } from 'framer-motion';
import { useLocation } from 'react-router';
import SocialLinks from './FloatingIcons';
// import { StyledOverlay } from '../Styles';

const Nav = ({ navToggle, setNavToggle }) => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <div className='nav-container'>
        <HashLink
          to='/'
          // scroll={(el) =>
          //   el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          // }
        >
          <h2 id='logo'>JZ</h2>
        </HashLink>

        <ul className={`${navToggle ? 'library-active' : ''}`}>
          <li
            onClick={() => {
              if (window.innerWidth < 750) {
                setNavToggle(!navToggle);
              }
            }}
          >
            <NavHashLink
              activeClassName='selected'
              href='#'
              to='/'
              // scroll={(el) =>
              //   el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              // }
            >
              <span>About</span>
            </NavHashLink>
            {/* <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '50%' : '0%' }}
          /> */}
          </li>
          <li
            onClick={() => {
              if (window.innerWidth < 750) {
                setNavToggle(!navToggle);
              }
            }}
          >
            <NavHashLink activeClassName='selected' href='#' to='/work'>
              <span>Work</span>
            </NavHashLink>
            {/* <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '50%' : '0%' }}
          /> */}
          </li>
          <li
            onClick={() => {
              if (window.innerWidth < 750) {
                setNavToggle(!navToggle);
              }
            }}
          >
            <NavHashLink activeClassName='selected' href='#' to='/contact'>
              <span>Contact</span>
            </NavHashLink>
            {/* <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
          /> */}
          </li>

          <a
            className='resume'
            href={MyResume}
            download='Jeffrey_Zalischi_Resume'
            target='_blank'
          >
            <div className='download'></div> <span>Resume</span>
          </a>
        </ul>
        <StyledNavToggle
          onClick={() => setNavToggle(!navToggle)}
          className={`${navToggle ? 'close-toggle' : 'hamburger-toggle'}`}
        ></StyledNavToggle>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  /* border: pink 3px solid; */
  background: var(--primary-color);
  backdrop-filter: blur(0.15rem);

  a {
    color: white;
    text-decoration: none;
  }
  .nav-container {
    height: var(--navbar-height);
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--gap, 1rem);

    margin: auto;
    width: 100%;
    max-width: var(--max-width);
    padding: 0 var(--layout-padding);

    //mobile
    @media (max-width: 450px) {
      padding: 0 var(--mobile-padding);
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--gap, 2rem);

    list-style: none;
    white-space: nowrap;
    padding: 0;
    margin: 0;

    font-size: 12px;

    li {
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      span {
        color: white;
      }
      span:hover {
        color: var(--primary-accent);
      }

      .active {
        span {
          color: var(--primary-accent);
        }
      }
    }

    .resume {
      display: flex;
      align-items: center;
      gap: 12px;

      padding: 0.7rem 1.4rem 0.7rem 1.1rem;
      border: 1px solid white;
      font-weight: 600;
      transition: all 0.2s ease-out;
      .download {
        width: 12px;
        height: 12px;
        background-color: white;
        background: url(${downloadIcon});
        background-repeat: no-repeat;
      }

      span {
        font-size: 12px;
      }
    }

    .resume:hover {
      background-color: var(--primary-accent);
      border: 1px solid var(--primary-accent);
      transform: scale(1.03);

      /* background-color: rgba(39, 39, 39, 0.3); */
      color: var(--primary-text-color);
      /* border: 1px solid var(--primary-accent); */
      .download {
        /* filter: brightness(0) saturate(100%) invert(78%) sepia(34%)
          saturate(5165%) hue-rotate(315deg) brightness(101%) contrast(90%); */
      }
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
  }
  h2 {
    border: 1.5px solid white;
    padding: 16px 2px 4px 7px;
    background-color: transparent;
  }
  #logo {
    color: white;
    font-size: 22px;
    line-height: 0.5;
    font-family: 'Javascript';
  }
  //desktop
  @media (min-width: 750px) {
    ul {
      --gap: clamp(4rem, 4vw, 6rem); //reset --gap variable
    }
  }
  //tablet
  @media (max-width: 750px) {
    backdrop-filter: none;
    #Logo {
      display: inline-block;
    }
    ul {
      --gap: 4rem; //reset --gap variable

      position: fixed;
      /* inset: 0 0 0 30%; */
      inset: 0 0 0 0%;

      z-index: 2;
      height: 100vh;

      background: rgba(0, 0, 0, 0.5);

      flex-direction: column;

      padding: min(30vh, 10rem) 2em;

      transform: translateX(100%);
      transition: transform 250ms ease-out;
      font-size: 16px;
      li {
        /* margin-left: 3rem; */
        white-space: nowrap;
        /* padding: 0; */
      }
      button {
        .download {
          width: 16px;
          height: 16px;
        }
        span {
          font-size: 16px;
        }
      }
    }
    .library-active {
      transform: translateX(0%);
      backdrop-filter: blur(6rem) !important;
    }
  }
`;
const StyledNavToggle = styled.button`
  display: none;
  &.close-toggle {
    fill: white;
    background: url(${closeHamburger});
    background-repeat: no-repeat;
    transition: background 100ms ease-out;
  }
  &.hamburger-toggle {
    background: url(${hamburger});
    background-repeat: no-repeat;
    transition: background 100ms ease-out;
  }
  &.hamburger-toggle,
  &.close-toggle {
    filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(193deg)
      brightness(101%) contrast(101%);
  }
  &.hamburger-toggle:hover,
  &.close-toggle:hover {
    filter: brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(5039%)
      hue-rotate(186deg) brightness(117%) contrast(76%);
  }
  @media (max-width: 750px) {
    display: block;
    padding: 0%;
    border: none;

    position: absolute;
    z-index: 9999; //OVER 9000!!!
    width: 2rem;
    aspect-ratio: 1;
    top: 13px;
    right: calc(var(--layout-padding) - 8px);
    /* transform: translate(-50%, -50%); */
  }
  //mobile
  @media (max-width: 450px) {
    right: calc(var(--mobile-padding) - 8px);
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
