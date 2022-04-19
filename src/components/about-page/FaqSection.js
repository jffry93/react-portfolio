import React from 'react';
//Toggle Reusable Component
import Toggle from '../Toggle';
//Styles
import styled from 'styled-components';

//Framer Motion
//detects when layout changes
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from '../useScroll';
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
            <p>
              Once you know what kind of website you want we can start right
              away.
            </p>
            <p>Click here to get in contact with me.</p>
          </div>
        </Toggle>
        <Toggle title='Daily Schedule'>
          <div className='answer'>
            <p>Available Monday - Friday anytime between 9AM - 5PM EST.</p>
          </div>
        </Toggle>
        <Toggle title='Different Payment Methods'>
          <div className='answer'>
            <p>E-transfer, Bitcoin and Paypal.</p>
            <p>**Installment fees are optional**</p>
            <p>Payment information will be provided with the invoice.</p>
          </div>
        </Toggle>
        <Toggle title='What Products Do You Offer?'>
          <div className='answer'>
            <p>Anything related to the web! </p>
            <p> Some example include</p>
            <p>
              Translating designs into web applications, interacting with APIs
              and building modern reusable scalable components.
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
    padding: 0 var(--layout-secondary-padding) 60px;
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
    padding: 0rem var(--layout-secondary-padding);
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
      padding: 12px var(--layout-secondary-padding);
    }
  }
  @media (max-width: 500px) {
    h2 {
      padding: 0 var(--mobile-padding) 60px;
    }
    h4 {
      padding: 0rem var(--mobile-padding);
    }
    .answer {
      p {
        padding: 12px var(--mobile-padding);
      }
    }
  }
`;

export default FaqSection;
