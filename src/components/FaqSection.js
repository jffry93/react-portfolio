import React from 'react';
//Toggle Reusable Component
import Toggle from './Toggle';
//Styles
import styled from 'styled-components';
import { StyledAbout } from '../Styles';
//Framer Motion
//detects when layout changes
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { fade } from '../animation';

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={fade}
      ref={element}
      animate={controls}
      initial='hidden'
      className='faq'
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How Do I Start?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis, tempora!
            </p>
          </div>
        </Toggle>
        <Toggle title='Daily Schedule'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis, tempora!
            </p>
          </div>
        </Toggle>
        <Toggle title='Different Payment Methods'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis, tempora!
            </p>
          </div>
        </Toggle>
        <Toggle title='What Products Do You Offer?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis, tempora!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled.div`
  padding: 10rem 0;
  background: rgba(12, 12, 12, 0.5);
  display: block;
  color: white;
  span {
    display: block;
  }
  h2 {
    margin: auto;
    max-width: var(--max-width);
    padding: 0 2rem 2rem;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  h4 {
    margin: auto;
    max-width: var(--max-width);
    padding: 0rem 2rem;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      margin: auto;
      max-width: var(--max-width);
      padding: 1rem 2rem;
    }
  }
`;

export default FaqSection;
