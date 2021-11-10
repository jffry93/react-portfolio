import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//ALL IMAGES
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//PAGE ANIMATION
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
const OurWork = () => {
  return (
    <StyledWork
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <StyledMovie>
        <h2>The Athlete</h2>
        <div className='line'></div>
        <Link to='/work/the-athlete'>
          <img src={athlete} alt='athlete' />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>The Racer</h2>
        <div className='line'></div>
        <Link to='/work/the-racer'>
          <img src={theracer} alt='the racer' />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>The Good times</h2>
        <div className='line'></div>
        <Link to='/work/good-times'>
          <img src={goodtimes} alt='the goodtimes' />
        </Link>
      </StyledMovie>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
`;

const StyledMovie = styled.div`
  padding-bottom: 10rem;
  h2 {
    color: #cccccc;
    padding: 1rem 0rem;
  }
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
