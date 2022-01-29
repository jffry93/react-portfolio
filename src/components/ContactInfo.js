import styled from 'styled-components';
//REACT-ICONS
import { FaMapMarkerAlt, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { RiLinkedinFill } from 'react-icons/ri';

const ContactInfo = () => {
  return (
    <StyledContactInfo>
      <h1 className='contact-heading'>Contact Info</h1>
      <div className='contact-detail'>
        <div className='info-group'>
          <span>
            <FaMapMarkerAlt size={15} />
          </span>
          <div className='location'>
            <p>HOMETOWN</p>
            <a href='https://www.google.com/maps/place/Toronto,+ON/@43.717899,-79.6582408,10z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843'>
              Toronto ON
            </a>
          </div>
        </div>
        <div className='info-group'>
          <span>
            <FaPhoneAlt size={13} />
          </span>
          <a href='tel:6474485732'>+1 (647) 448-5732</a>
        </div>
        <div className='info-group'>
          <span>
            <GrMail size={15} />
          </span>
          <a href='mailto:jay.zalischi@gmail.com'>jay.zalischi@gmail.com</a>
        </div>
      </div>
      <div className='line'></div>
      <div className='social-media'>
        <div className='icon-container'>
          <span>
            <BsGithub size={22} />
          </span>
        </div>
        <div className='icon-container'>
          <span>
            <RiLinkedinFill size={22} />
          </span>
        </div>
        <div className='icon-container'>
          <span>
            <div>
              <SiIndeed size={22} className='indeed-icon' />
            </div>
          </span>
        </div>
        <div className='icon-container'>
          <span>
            <FaInstagram size={22} />
          </span>
        </div>
      </div>
      <div className='footer'>
        <p>Designed by </p>
        <p>Jeffrey Zalischi</p>
      </div>
    </StyledContactInfo>
  );
};

export default ContactInfo;

const StyledContactInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  h1 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    white-space: nowrap;
  }
  .contact-detail {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .info-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      text-decoration: none;
      color: white;
      font-size: 0.9rem;
    }
    svg {
      color: white;
    }
  }
  .location {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-weight: 600;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: white;
    margin: 1.5rem 0;
  }
  .social-media {
    display: grid;
    justify-content: center;
    gap: 1.5rem;
    color: rgba(0, 0, 0, 0.5);
    .icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        background-color: white;
        padding: 10px;
        border-radius: 50%;
        line-height: 1;
        display: inline-flex;
      }
      .indeed-icon {
        position: relative;
        right: 1.665px;
      }
    }
  }
  .footer {
    margin: 3rem 0 0 0;
    text-align: center;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    white-space: nowrap;
  }
`;
