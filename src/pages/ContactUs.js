//PAGE ANIMATION
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';
import styled from 'styled-components';

import cntower from '../img/alex_wong.jpg';

//COMPONENTS
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap';

const ContactUs = () => {
  document.body.style.overflow = 'auto';
  return (
    <StyledContactStyle
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#fff' }}
    >
      <StyledContactContainer>
        <ContactForm />
        <ContactMap />
      </StyledContactContainer>
    </StyledContactStyle>
  );
};

// const StyledTitle = styled.div`
//   margin-bottom: 4rem;
//   color: black;
//   @media (max-width: 1300px) {
//     margin-top: 5rem;
//   }
// `;

// const StyledHide = styled.div`
//   overflow: hidden;
// `;

// const StyledCircle = styled.div`
//   border-radius: 50%;
//   width: 3rem;
//   height: 3rem;
//   background: #353535;
// `;

// const StyledSocial = styled(motion.div)`
//   display: flex;
//   align-items: center;
//   h2 {
//     margin: 2rem;
//   }
// `;

export default ContactUs;

const StyledContactStyle = styled(motion.div)`
  background-image: url(${cntower}) !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  background-position: center !important;
  background-size: cover !important;
  /* border: 3px solid yellow; */
  min-height: 90vh;
  width: 100%;
  padding: 3rem 10rem;
  /* justify-content: center; */
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

// const StyledMapContainer = styled.div`
//   width: 100%;
// `;
