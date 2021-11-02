import React from 'react';
//Styles
import styled from 'styled-components';
import { StyledAbout } from '../Styles';

const FaqSection = () => {
  return (
    <Faq className='faq'>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className='question'>
        <h4>How Do I Start?</h4>
        <div className='answer'>
          <div className='faq-line'></div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reiciendis, tempora!
          </p>
        </div>
      </div>
      <div className='question'>
        <h4>Daily Schedule</h4>
        <div className='answer'>
          <div className='faq-line'></div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reiciendis, tempora!
          </p>
        </div>
      </div>
      <div className='question'>
        <h4>Different Payment Methods</h4>
        <div className='answer'>
          <div className='faq-line'></div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reiciendis, tempora!
          </p>
        </div>
      </div>
      <div className='question'>
        <h4>What Products Do You Offer?</h4>
        <div className='answer'>
          <div className='faq-line'></div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reiciendis, tempora!
          </p>
        </div>
      </div>
    </Faq>
  );
};

const Faq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
