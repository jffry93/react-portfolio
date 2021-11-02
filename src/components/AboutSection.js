import React from 'react';
import home from '../img/home1.png';
//Styled
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from '../Styles';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className='title'>
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span>
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>come true</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have skills that pay the bills
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home} alt='Guy with a camera' />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
