import React from 'react';
//Toggle Reusable Component
import Toggle from '../Toggle';
//Styles
import styled from 'styled-components';
import { fade } from '../../animation';

//Framer Motion
//detects when layout changes
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from '../useScroll';
// import { fade } from '../animation';
import { NavHashLink } from 'react-router-hash-link';
const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={fade}
      animate={controls}
      initial='hidden'
      ref={element}
      className='faq'
    >
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How Do I Start?'>
          <div className='answer'>
            <p>
              I am always looking for the next exciting project. Once you know
              what needs to be built we can start right away.
            </p>

            <p>
              <NavHashLink href='#' to='/contact'>
                Click Here
              </NavHashLink>{' '}
              to get in contact with me.
            </p>
          </div>
        </Toggle>
        <Toggle title='Daily Schedule'>
          <div className='answer'>
            <p>Available Monday - Friday anytime between 9AM - 5PM EST.</p>

            <span>#WorkLifeBalance </span>
          </div>
        </Toggle>
        <Toggle title='Why Did You Choose Web Development?'>
          <div className='answer'>
            <p>
              We live in such an exciting time where there is no shortage of
              technology. If you can think it, it can be built.
            </p>

            <p>The only limitation is your imagination.</p>
          </div>
        </Toggle>
        <Toggle title='What Have You Built?'>
          <div className='answer'>
            <p>Anything related to the web and more! </p>
            <p>
              From translating designs into web applications, to interacting
              with APIs and building modern reusable scalable components. I've
              built e-commerce sites, professional portfolios, multiple
              applications and much more.
            </p>
            <br />
            <p>
              Check out my{' '}
              <a
                href='https://github.com/jffry93'
                className='github-link'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>{' '}
              to see all my project and recent work!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled.div`
  padding: 116px 0 0px;
  background-color: var(--primary-color);
  /* background: rgba(12, 12, 12, 0.5); */
  display: block;
  color: white;
  span {
    display: block;
    color: var(--primary-accent);
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
  /* h4 {
    margin: auto;
    max-width: var(--max-width);
    padding: 0rem var(--layout-secondary-padding);
  } */
  .question {
    padding: 32px 0;
    cursor: pointer;
  }
  .answer {
    padding: 32px 0rem;
    /* max-width: 600px; */
    p {
      margin: auto;
      max-width: var(--max-width);
      padding: 12px var(--layout-secondary-padding);
      color: var(--primary-text-color);
    }
    span {
      margin: auto;
      max-width: var(--max-width);
      padding: 12px var(--layout-secondary-padding);
      font-weight: bold;
      color: var(--secondary-text-color);
    }
  }
  a {
    color: var(--primary-accent);
    text-decoration: none;
  }
  a:hover {
    color: var(--primary-accent-shade);
  }
  a:active {
    color: var(--primary-accent);
  }
  @media (max-width: 500px) {
    h2,
    h4 {
      padding: 0rem var(--layout-padding);
    }
    .answer {
      p,
      span {
        padding: 12px var(--layout-padding);
      }
    }
  }
`;

export default FaqSection;
