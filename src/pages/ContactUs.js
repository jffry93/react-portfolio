import { useState } from 'react';
//PAGE ANIMATION
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  fade,
  pageAnimation,
  sliderContainer,
  sliderAnimation,
} from '../animation';

import ScrollTop from '../components/ScrollTop';
//IMAGES
import cntower from '../img/alex_wong.jpg';
import { SiNike } from 'react-icons/si';
import { MdClose } from 'react-icons/md';
//COMPONENTS
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap';

const ContactUs = () => {
  const [formValidation, setFormValidation] = useState(false);
  document.body.style.overflow = 'auto';
  return (
    <StyledContactStyle
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#121212' }}
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <StyledFrame1 variants={sliderAnimation}></StyledFrame1>
        <StyledFrame2 variants={sliderAnimation}></StyledFrame2>
        <StyledFrame3 variants={sliderAnimation}></StyledFrame3>
        <StyledFrame4 variants={sliderAnimation}></StyledFrame4>
      </motion.div>
      <motion.div variants={fade} className='cntower-background'>
        <StyledContactContainer id='unset-height'>
          <motion.div variants={fade} className='fade-container'>
            <ContactForm
              formValidation={formValidation}
              setFormValidation={setFormValidation}
            />

            <ContactMap />
          </motion.div>
        </StyledContactContainer>
      </motion.div>
      {formValidation && (
        <StyledStatus
          id='status'
          onClick={() => setFormValidation(!formValidation)}
        >
          <div className='success-container '>
            <MdClose
              size={25}
              className='close-popup'
              onClick={() => setFormValidation(!formValidation)}
            />
            <div className='check-container'>
              <SiNike size={65} className='success-icon' />
            </div>
            <h2>Awesome! </h2>
            <p>Your message went through.</p>
            <p>
              If you can't wait you can call me at{' '}
              <a href='tel:6474485732'>+1 (647) 448-5732</a> or message me on
              any social media platform.
            </p>
          </div>
        </StyledStatus>
      )}
    </StyledContactStyle>
  );
};

export default ContactUs;

const StyledContactStyle = styled(motion.div)`
  /* border: 3px solid yellow; */
  min-height: var(--container-height);
  height: 100%;
  /* padding: 0 2rem; */
  /* width: 100%;
  padding: 3rem 10rem; */
  /* justify-content: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* ::after {
    content: ''; // ::before and ::after both require content
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0.7;
  } */
  @media (max-width: 1050px) {
    padding: 0rem;
  }
  .cntower-background {
    background-image: url(${cntower}) !important;
    background-repeat: no-repeat !important;
    background-attachment: fixed !important;
    background-position: center !important;
    background-size: cover !important;
    width: 100%;
  }
`;
const StyledContactContainer = styled(motion.div)`
  width: 100%;
  /* max-width: calc(var(--max-width) - 4rem); */
  margin: auto;

  min-height: var(--container-height);
  /* max-height: 750px; */
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px) !important;

  /* border-radius: 8px; */
  /* overflow: hidden; */
  z-index: 2;

  .fade-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    @media (max-width: 700px) {
      flex-direction: column-reverse;
      border-radius: 0;

      max-height: unset;
    }
  }
`;

const StyledStatus = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  /* top: 10vh; */
  left: 0;
  height: var(--container-height);
  width: 100%;
  z-index: 2;
  .success-container {
    background-color: #ffffff;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    padding: 32px 16px 60px 16px;
    border-radius: 20px;
    .close-popup {
      color: grey;
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
    }
    .check-container {
      margin-bottom: 3rem;

      position: relative;
      padding: 3rem;
      border-radius: 50%;
      background-color: #87d184;
      .success-icon {
        position: relative;
        left: 6.66px;
        color: #f3f3f3;
      }
    }

    h2 {
      color: grey;
      margin-bottom: 32px;
    }
    p {
      color: grey;
      margin-bottom: 1rem;

      max-width: 400px;
      a {
        text-decoration: none;
        color: grey;
        /* font-weight: 700; */
      }
    }
  }
  /* position: fixed;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 8px;
  .success {
    background-color: rgb(211, 250, 153);
  }
  .error {
    background-color: rgb(250, 129, 92);
  } */
`;

const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const StyledFrame2 = styled(StyledFrame1)`
  background: #ff8efb;
`;

const StyledFrame3 = styled(StyledFrame1)`
  background: #8ed2ff;
`;

const StyledFrame4 = styled(StyledFrame1)`
  background: #8effa0;
`;
