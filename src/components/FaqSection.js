import React from 'react';
//Toggle Reusable Component
import Toggle from './Toggle';
//Styles
import styled from 'styled-components';

//Framer Motion
//detects when layout changes
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
// import { fade } from '../animation';

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq className='faq'>
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
  padding: 116px 0 119px;
  background: rgba(12, 12, 12, 0.5);
  display: block;
  color: white;
  span {
    display: block;
  }
  h2 {
    margin: auto;
    max-width: var(--max-width);
    padding: 0 22px 60px;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 32px 0rem;
    width: 100%;
  }
  h4 {
    margin: auto;
    max-width: var(--max-width);
    padding: 0rem 22px;
  }
  .question {
    padding: 32px 0;
    cursor: pointer;
  }
  .answer {
    padding: 32px 0rem;
    p {
      margin: auto;
      max-width: var(--max-width);
      padding: 16px 22px;
    }
  }
`;

export default FaqSection;
