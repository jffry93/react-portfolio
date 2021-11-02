import React from 'react';
import home from '../img/home1.png';

const AboutSection = () => {
  return (
    <div>
      <div>
        <div className='description'>
          <div className='title'>
            <div className='hide'>
              <h2>We work to make</h2>
            </div>
            <div className='hide'>
              <h2>
                your <span>dreams</span>
              </h2>
            </div>
            <div className='hide'>
              <h2>come true</h2>
            </div>
          </div>
          <p>
            Contact us for any photography or videography ideas that you have.
            We have skills that pay the bills
          </p>
        </div>
        <img src={home} alt='Guy with a camera' />
      </div>
    </div>
  );
};

export default AboutSection;
