import { useState } from 'react';
//PAGE ANIMATION
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';
import styled from 'styled-components';
//IMAGES
import cntower from '../img/alex_wong.jpg';
import drake from '../img/icons/drake-sitting.png';
import { SiNike } from 'react-icons/si';
import { MdClose } from 'react-icons/md';
//COMPONENTS
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap';

const ContactUs = () => {
  const [formValidation, setFormValidation] = useState(false);
  document.body.style.overflow = 'auto';
  return (
    // <>
    //   <StyledDrake className='drake'>drake</StyledDrake>
    <StyledContactStyle
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#fff' }}
    >
      <StyledContactContainer>
        <ContactForm
          formValidation={formValidation}
          setFormValidation={setFormValidation}
        />
        <ContactMap />
      </StyledContactContainer>
      {formValidation && (
        <StyledStatus id='status'>
          <div className='success-container'>
            <MdClose
              size={25}
              className='close-popup'
              onClick={() => setFormValidation(!formValidation)}
            />
            <div className='check-container'>
              <SiNike size={65} className='success-icon' />
            </div>
            <h1>Awesome! </h1>
            <h3>Your message went through</h3>
            <h3>
              If you can't wait you can call me at{' '}
              <a href='tel:6474485732'>+1 (647) 448-5732</a>
            </h3>
          </div>
        </StyledStatus>
      )}
    </StyledContactStyle>
    // </>
  );
};

export default ContactUs;

const StyledDrake = styled(motion.div)`
  position: absolute;
  bottom: 33%;
  left: 7%;
  z-index: 10;
  @media (min-height: 2000px) {
    bottom: 42%;
  }
  @media (min-height: 1500px) {
    bottom: 40%;
  }
`;

const StyledContactStyle = styled(motion.div)`
  background-image: url(${cntower}) !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  background-position: center !important;
  background-size: cover !important;
  /* border: 3px solid yellow; */
  min-height: 90vh;
  height: 100%;
  width: 100%;
  padding: 3rem 10rem;
  /* justify-content: center; */
  display: block;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 1050px) {
    padding: 0rem;
  }
`;
const StyledContactContainer = styled.div`
  width: 100%;
  /* height: calc(90vh - 6rem); */
  min-height: clamp(650px, 100%, calc(90vh - 6rem));
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 3px solid green; */

  border-radius: 8px;
  overflow: hidden;
  @media (max-width: 1050px) {
    flex-direction: column-reverse;
    border-radius: 0;
  }
`;

const StyledStatus = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10vh;
  left: 0;
  height: 90vh;
  width: 100%;
  .success-container {
    background-color: #ffffff;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    padding: 3rem 5rem;
    border-radius: 8px;
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
        color: #ffffff;
      }
    }

    h1 {
      color: grey;
      margin-bottom: 2rem;
    }
    h3 {
      color: grey;
      margin-bottom: 1rem;
      font-weight: 500;
      font-size: 1.1rem;

      max-width: 200px;
      a {
        text-decoration: none;
        color: grey;
        font-weight: 700;
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
