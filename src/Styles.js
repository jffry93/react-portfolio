import styled from 'styled-components';
import { motion } from 'framer-motion';
import coffee from './img/ibrahim.jpg';

export const StyledAbout = styled(motion.div)`
  min-height: var(--container-height);
  color: white;
  /* border: red 3px solid; */
  background-image: url(${coffee});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  /* @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
  } */
`;
export const StyledOverlay = styled.div`
  /* border: green 3px solid; */
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 2rem;
  min-height: var(--container-height);
  width: 100%;
  /* @media (max-width: 750px) {
    padding: 5rem 3rem;
  } */
`;
export const StyledAboutDescription = styled.div`
  max-width: calc(var(--max-width) - 4rem);
  margin: auto;
  width: 100%;

  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  gap: 16px;
  h2 {
    /* font-size: clamp(4rem, 10vw, 7rem); */
    font-weight: bold;
  }
  //greeting
  h3 {
    /* font-size: clamp(1.5rem, 2.5vw, 2rem); */
    font-weight: 300;
    letter-spacing: 3px;
  }
  //title
  h4 {
    /* font-size: clamp(1rem, 5vw, 3.3rem); */
    font-weight: 600;
    letter-spacing: 3px;
  }
  button {
    /* font-size: clamp(1rem, 3vw, 1.5rem); */
    border: white 3px solid;
    width: 200px;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
    }
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;
