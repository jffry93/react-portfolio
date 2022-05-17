import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
//email JS
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactInfo from './ContactInfo';
//REACT ICONS
import { BiError } from 'react-icons/bi';

const ContactForm = ({ formValidation, setFormValidation }) => {
  const [nameValidation, setNameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [messageValidation, setMessageValidation] = useState(false);

  //EMAIL JS
  const form = useRef(null);

  function validateForm(e) {
    // console.log(form.current[0]); //name
    function validateName() {
      if (form.current[0].value === '') {
        setNameValidation(true);
        return false;
      } else {
        setNameValidation(false);
      }
    }
    function validateEmail() {
      if (
        form.current[1].value
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        setEmailValidation(false);
      } else {
        setEmailValidation(true);
      }
    }
    function validateMessage() {
      if (form.current[3].value === '') {
        setMessageValidation(true);
      } else {
        setMessageValidation(false);
      }
    }
    validateName();
    validateEmail();
    validateMessage();
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wm8y8eo',
        'template_8mqb8d4',
        e.target,
        'user_l63HFouUVaxbBVgQdO1Td'
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormValidation(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  // function dontSendEmail(e) {
  //   e.preventDefault();
  //   console.log('all fields must be filled');
  // }

  // let emailID = form.current[1].value;
  // const re =
  //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // console.log(emailID); //email
  // if (emailID == '') {
  //   setEmailValidation(false);
  // } else {
  //   setEmailValidation(true);
  // }

  // console.log(form.current[3]); //message

  return (
    <StyledFormContainer>
      <StyledContactForm>
        <StyledForm ref={form} onSubmit={sendEmail} action=''>
          <h1>Let's Chat!</h1>
          <div className='contact-description'>
            <p>
              Please use this form to contact me and I will get back to you
              ASAP!
            </p>
          </div>
          <div className='form-group'>
            <label htmlFor='user_name'>
              {nameValidation ? (
                <div className='validation-popup'>
                  <BiError size={15} />
                  <p>New phone who dis?</p>
                </div>
              ) : (
                <>
                  <span>*</span>Name <span className='required'>Required</span>
                </>
              )}
            </label>
            <input
              className={`${nameValidation ? 'validation-input' : ''}`}
              type='text'
              name='user_name'
              placeholder='Enter Name or Alias'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='user-email'>
              {emailValidation ? (
                <div className='validation-popup'>
                  <BiError size={15} />
                  <p>I won't send you spam</p>
                </div>
              ) : (
                <>
                  <span>*</span>Email <span className='required'>Required</span>
                </>
              )}
            </label>
            <input
              className={`${emailValidation ? 'validation-input' : ''}`}
              type='email'
              name='user_email'
              placeholder='Enter a valid email address'
              required
            />
          </div>
          <div className='form-group'>
            <label className='not-required' htmlFor='user_subject'>
              Subject
            </label>
            <input
              type='text'
              name='user_subject'
              placeholder='Enter brief description'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>
              {messageValidation ? (
                <div className='validation-popup'>
                  <BiError size={15} />
                  <p>Use those fingers</p>
                </div>
              ) : (
                <>
                  <span>*</span>Message{' '}
                  <span className='required'>Required</span>
                </>
              )}
            </label>
            <textarea
              className={`${messageValidation ? 'validation-input' : ''}`}
              name='message'
              required
              placeholder='There is no characer limit'
              rows='5'
            />
          </div>
          <div className='form-group submit-group '>
            <input
              onClick={validateForm}
              type='submit'
              value='Send'
              id='submit-button'
            />
          </div>
        </StyledForm>
      </StyledContactForm>
      <ContactInfo />
    </StyledFormContainer>
  );
};

export default ContactForm;

const StyledFormContainer = styled(motion.div)`
  flex: 1.5;
  display: flex;
  align-items: center;
  gap: 60px;

  min-height: var(--container-height);

  padding: 16px 60px;
  @media (max-width: 1050px) {
    flex-direction: column;
    padding: 4rem;
  }
  @media (max-width: 700px) {
    min-height: unset;
    padding: 4rem 22px 32px;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    /* padding: 4rem 22px; */
  }
`;
const StyledContactForm = styled.div`
  /* height: calc(90vh - 10rem); */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  flex: 1.5;

  h1 {
    /* font-size: 2.4rem; */
    white-space: nowrap;
  }
  .contact-description {
    /* max-width: 250px; */
  }
  @media (max-width: 1050px) {
    justify-content: flex-end;
  }
`;

const StyledForm = styled.form`
  height: 100%;
  max-width: 350px;
  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: unset;
  }
  @media (max-width: 700px) {
  }
  p {
    margin: 8px 0 16px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 8px 0 0;
    color: white; /* font-size: 1.5rem; */
    label {
      font-weight: 600;
      font-size: 0.9rem;
    }

    span {
      color: var(--primary-accent);
      margin-right: 0.7rem;
      font-size: 0.9rem;
    }
    .required {
      margin-left: 2rem;
      color: var(--primary-accent);
    }
    .not-required {
      margin-left: 1.175rem;
    }
    .validation-popup {
      display: flex;
      align-items: center;

      gap: 1rem;
      /* margin-top: 0.5rem;
      margin-left: 1rem; */

      border-radius: 8px;

      color: #f0544f; /* background-color: red; */
      /* span {
        color: white;
        margin-left: 1rem;
        font-weight: 600;
      } */
      p {
        margin: 0;
        font-weight: 500;
        color: #f0544f;
        font-size: 0.9rem;
      }
    }
    .validation-input {
      outline: 1px solid #f0544f;
      outline-offset: -4px;
    }
  }
  .submit-group {
    margin: 4px 0;
    /* padding: 0.7rem 1rem; */
    background-color: #e6e5e5;
    border-radius: 8px;
    input {
      color: grey;
      background-color: var(--primary-text-color);
    }
  }

  input,
  textarea {
    width: 100%;
    padding: 0.7rem 1rem;

    border-radius: 3px;
    /* font-size: 1.5rem; */
    border: 1px solid #6d6d6d;
    margin-top: 5px; //LINE GAP INPUT AND LABEL
  }
  textarea {
    border-radius: 3px;
    resize: vertical;
  }
  /* button[type='submit'] {
    width: 100%;
    border: none;
    outline: none;
    padding: 20px;
    border-radius: 8px;
    background-color: black;
  } */
  #submit-button {
    width: 100%;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    height: 38px;
    cursor: pointer;

    background-color: #e6e5e5;
  }
  #submit-button:hover {
    background-color: #bcbcbc;
  }
`;
