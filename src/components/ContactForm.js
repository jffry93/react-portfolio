import React from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  return (
    <StyledForm action=''>
      <div className='form-group'>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' className='firstName' name='firstName' />
      </div>
      <div className='form-group'>
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' className='lastName' name='lastName' />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' name='email' />
      </div>
      <div className='form-group'>
        <label htmlFor='message'>Message</label>
        <textarea cols='30' rows='10' id='message' name='message' />
      </div>
      <button type='submit'>Submit</button>
    </StyledForm>
  );
};

export default ContactForm;

const StyledForm = styled.div``;
