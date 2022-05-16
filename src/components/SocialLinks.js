import styled from 'styled-components';

import { FaMapMarkerAlt, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiOutlineFileText } from 'react-icons/ai';

const SocialLinks = () => {
  return (
    <StyledContainer className='social-media'>
      <div className='icon-container'>
        <a
          href='https://github.com/jffry93'
          target='_blank'
          className='github'
          rel='noreferrer'
        >
          <BsGithub size={22} className='github-icon' />
        </a>
      </div>
      <div className='icon-container'>
        <a
          href='https://www.linkedin.com/in/jffry93/'
          target='_blank'
          className='linkedin'
        >
          <RiLinkedinFill size={22} className='linkedin-icon' />
        </a>
      </div>
      <div className='icon-container'>
        <a
          href='https://my.indeed.com/p/jeffreyz-n48gpy7'
          target='_blank'
          className='indeed'
          rel='noreferrer'
        >
          <div>
            <SiIndeed size={22} className='indeed-icon' />
          </div>
        </a>
      </div>
      <div className='icon-container'>
        <a
          href='https://www.instagram.com/jffry93/'
          target='_blank'
          className='instagram'
          rel='noreferrer'
        >
          <FaInstagram size={22} className='instagram-icon' />
        </a>
      </div>
      <div className='icon-container'>
        <a
          href='https://github.com/jffry93'
          target='_blank'
          className='resume'
          rel='noreferrer'
        >
          <AiOutlineFileText size={22} className='resume-icon' />
        </a>
      </div>
    </StyledContainer>
  );
};

export default SocialLinks;

const StyledContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 33px;
  transform: translate(0%, -45%);
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  color: rgba(0, 0, 0, 0.5);
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      /* background-color: white; */
      padding: 10px;
      border-radius: 50%;
      line-height: 1;
      display: inline-flex;
    }
    .indeed-icon {
      position: relative;
      right: 1.35px;
    }
    .github {
      background-color: #6e5494;
      color: #f3f3f3;
    }
    .indeed {
      background-color: #003a9b;
      color: #f3f3f3;
    }
    .linkedin {
      background-color: #0b66c2;
      color: #f3f3f3;
    }
    .resume {
      background-color: #d6249f;
      color: #f3f3f3;
    }
    .instagram {
      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
      color: #f3f3f3;
    }
    a:hover {
      transform: scale(1.05) !important;
    }
    a:active {
      transform: scale(1);
    }
  }
  @media (max-width: 600px) {
    position: relative;
    top: 0;
    right: 0;
    transform: translate(0%, 0%);
    padding: 16px 0 8px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
    color: rgba(0, 0, 0, 0.5);
  }
`;
