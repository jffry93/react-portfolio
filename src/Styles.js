import styled from 'styled-components';
import { motion } from 'framer-motion';
import coffee from './img/ibrahim.jpg';

export const StyledAbout = styled(motion.div)`
  min-height: 100vh;

  text-align: right;

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
  padding: 5rem 10rem;
  height: 100vh;
  width: 100%;
  @media (max-width: 750px) {
    padding: 5rem 3rem;
  }
`;
export const StyledAboutDescription = styled.div`
  /* border: 3px solid blue; */
  width: 100%;
  flex: 1;
  /* margin-right: 5rem; */
  /* z-index: 2; */
  //name
  h2 {
    font-size: clamp(4rem, 10vw, 7rem);
    font-weight: bold;
    margin: 1.5rem 0 6rem;
  }
  //greeting
  h3 {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: 300;
    letter-spacing: 3px;
    margin-top: 12rem;
  }
  //title
  h4 {
    font-size: clamp(1rem, 5vw, 3.3rem);
    font-weight: 600;
    letter-spacing: 3px;
    margin: 0 0 6rem;
  }
  button {
    font-size: clamp(1rem, 3vw, 1.5rem);
    border: white 3px solid;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0 5rem 0;
    }
  }
`;
export const StyledServicesDescription = styled.div`
  flex: 1;
  margin-left: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0 5rem 0;
    }
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const StyledHide = styled.div`
  overflow: hidden;
`;
