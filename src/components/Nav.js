import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id='Logo' to='/'>
          Actor Portfolio
        </Link>
      </h1>
      <ul>
        <li>
          <Link href='#' to='/'>
            1. About Us
          </Link>
        </li>
        <li>
          <Link href='#' to='/work'>
            2. Our Work
          </Link>
        </li>
        <li>
          <Link href='#' to='/contact'>
            3. Contact Us
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  #Logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
`;

export default Nav;
