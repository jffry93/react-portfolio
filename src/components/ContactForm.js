import React from 'react';
import styled from 'styled-components';
//email JS
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  //EMAIL JS
  const form = useRef();
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
        },
        (error) => {
          console.log(error.text);
        }
      );
    // e.target.reset();
  }

  return (
    <div className='container'>
      <StyledForm onSubmit={sendEmail} action=''>
        <div className='form-group'>
          <label>Name</label>
          <input type='text' name='user_name' />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type='email' name='user_email' />
        </div>
        <div className='form-group'>
          <label>Message</label>
          <textarea name='message' />
        </div>
        <div className='form-group'>
          <input type='submit' value='Send' />
        </div>
      </StyledForm>
      <StyledStatus id='status'>Success</StyledStatus>
    </div>
  );
};

export default ContactForm;

const StyledForm = styled.form`
  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0;
    font-size: 1.5rem;
  }
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    border: 1px solid black;
    margin-top: 5px; //LINE GAP INPUT AND LABEL
  }
  textarea {
    resize: vertical;
  }
  button[type='submit'] {
    width: 100%;
    border: none;
    outline: none;
    padding: 20px;
    border-radius: 8px;
    background-color: black;
  }
`;

const StyledStatus = styled.div`
  border: 3px solid red;
  width: 100%;
  text-align: center;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 8px;
  .success {
    background-color: rgb(211, 250, 153);
  }
  .error {
    background-color: rgb(250, 129, 92);
  }
`;
