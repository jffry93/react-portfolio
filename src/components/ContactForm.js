import { useState } from 'react';
import styled from 'styled-components';
//email JS
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formValidation, setFormValidation] = useState(false);
  const [nameValidation, setNameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [messageValidation, setMessageValidation] = useState(false);
  //EMAIL JS
  const form = useRef(null);
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

  function validateForm(e) {
    // console.log(form.current[0]); //name
    function validateName() {
      if (form.current[0].value == '') {
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
      if (form.current[3].value == '') {
        setMessageValidation(true);
      } else {
        setMessageValidation(false);
      }
    }
    validateName();
    validateEmail();
    validateMessage();
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
  }

  return (
    <div className='container'>
      <StyledForm novalidate ref={form} onSubmit={sendEmail} action=''>
        <div className='form-group'>
          <label>Name</label>
          <input type='text' name='user_name' required />
          {nameValidation && (
            <div>
              <span>ERROR</span> Please fill in name
            </div>
          )}
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type='email' name='user_email' required />
          {emailValidation && (
            <div>
              <span>ERROR</span> Please fill in email
            </div>
          )}
        </div>
        <div className='form-group'>
          <label>Subject</label>
          <input type='text' name='user_subject' />
        </div>
        <div className='form-group'>
          <label>Message</label>
          <textarea name='message' required />
          {messageValidation && (
            <div>
              <span>ERROR</span> Please fill in email
            </div>
          )}
        </div>
        <div className='form-group'>
          <input onClick={validateForm} type='submit' value='Send' />
        </div>
      </StyledForm>
      {formValidation && <StyledStatus id='status'>Success</StyledStatus>}
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
