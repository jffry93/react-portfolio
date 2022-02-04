// import React from 'react';
// import clock from '../img/clock.svg';
// import diaphragm from '../img/diaphragm.svg';
// import money from '../img/money.svg';
// import teamwork from '../img/teamwork.svg';
import headshot from '../img/ben_parker.jpg';
//Styles
import styled from 'styled-components';
//Reusable styles
import { StyledAbout } from '../Styles';
//scroll animation that runs when an element is in view
//Framer Motion
import { motion } from 'framer-motion';
import { fade } from '../animation';
import { useScroll } from './useScroll';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledServices
      variants={fade}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <StyledImage>
        <img src={headshot} alt='headshot' />
      </StyledImage>
      <StyledServicesDescription>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima in
          sint dignissimos debitis voluptate corporis voluptatem quae adipisci
          cupiditate,
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima in
          sint
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima in
          sint dignissimos debitis voluptate corporis voluptatem quae adipisci
          cupiditate,
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima in
          sint dignissimos debitis voluptate corporis voluptatem quae adipisci
          cupiditate,
        </p>
        <h3>Skills & Tools</h3>
        <p>
          Click on the icon to see <span>Developer Documentation</span>
        </p>
        <div>
          <a href='https://www.markdownguide.org'>
            {' '}
            <img
              height='50px'
              src='https://img.icons8.com/officel/344/markdown.png'
            />{' '}
          </a>
          <a href='https://www.w3.org/html/' target='_blank'>
            {' '}
            <img
              height='50px'
              src='https://img.icons8.com/color/48/000000/html-5.png'
            />{' '}
          </a>
          <a href='https://www.w3schools.com/css/' target='_blank'>
            {' '}
            <img
              height='50px'
              src='https://img.icons8.com/color/48/000000/css3.png'
            />{' '}
          </a>
          <a href='https://sass-lang.com/documentation/syntax' target='_blank'>
            {' '}
            <img
              width='50px'
              height='50px'
              src='https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg'
            />{' '}
          </a>
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
            target='_blank'
          >
            {' '}
            <img
              width='50px'
              height='50px'
              src='https://img.icons8.com/color/48/000000/javascript.png'
            />{' '}
          </a>
          <a href='https://jquery.com' target='_blank'>
            {' '}
            <img
              width='45px'
              height='45px'
              src='https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo.png'
            />{' '}
          </a>
          <a href='https://reactjs.org/' target='_blank'>
            {' '}
            <img
              width='50px'
              height='50px'
              src='https://img.icons8.com/color/48/000000/react-native.png'
            />{' '}
          </a>
          <a href='https://redux.js.org' target='_blank'>
            {' '}
            <img
              width='50px'
              height='50px'
              src='https://img.icons8.com/color/48/000000/redux.png'
            />{' '}
          </a>
          <a href='https://www.framer.com/motion/' target='_blank'>
            {' '}
            <img
              src='https://user-images.githubusercontent.com/38039349/60953119-d3c6f300-a2fc-11e9-9596-4978e5d52180.png'
              alt='postman'
              width='50px'
              height='50px'
            />{' '}
          </a>
          <a href='https://greensock.com/products/' target='_blank'>
            {' '}
            <img
              src='https://cpwebassets.codepen.io/assets/packs/greensock-logo-9db91ff4c4a50faa1690d4f3d7ffca6e.png'
              alt='gsap'
              width='50px'
              height='50px'
            />{' '}
          </a>
          <a href='https://getbootstrap.com' target='_blank'>
            {' '}
            <img
              width='50px'
              height='50px'
              src='https://img.icons8.com/color/48/000000/bootstrap.png'
            />{' '}
          </a>
          <a href='https://tailwindcss.com' target='_blank'>
            {' '}
            <img
              src='https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg'
              alt='postman'
              width='50px'
              height='50px'
            />{' '}
          </a>
          <a href='https://jestjs.io' target='_blank'>
            {' '}
            <img
              width='50px'
              height='50px'
              src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo.png'
            />{' '}
          </a>
          <a href='https://www.cypress.io/' target='_blank'>
            {' '}
            <img
              width='50px'
              height='50px'
              src='https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/113/000/original/Cypress.io_Round_Logo.png?1618514359'
            />{' '}
          </a>
          <a href='https://axios-http.com' target='_blank'>
            {' '}
            <img
              src='https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png'
              alt='Axios'
              width='50px'
              height='50px'
            />{' '}
          </a>
          <a href='https://www.npmjs.com/' target='_blank'>
            {' '}
            <img
              width='50px'
              height='50px'
              src='https://img.icons8.com/color/344/npm.png'
            />{' '}
          </a>
          <a href='https://mui.com' target='_blank'>
            {' '}
            <img
              width='50px'
              height='50px'
              src='https://img.icons8.com/color/344/material-ui.png'
            />{' '}
          </a>
          <a href='https://git-scm.com/' target='_blank'>
            {' '}
            <img
              width='50px'
              height='50px'
              src='https://img.icons8.com/color/48/000000/git.png'
            />{' '}
          </a>
          <a href='https://www.figma.com/' target='_blank'>
            {' '}
            <img
              width='45px'
              height='45px'
              src='https://img.icons8.com/color/344/figma--v1.png'
              alt='figma'
            />{' '}
          </a>
          <a
            href='https://www.adobe.com/ca/creativecloud/business/teams.html?sdid=KKQWX&mv=search&ef_id=Cj0KCQiAraSPBhDuARIsAM3Js4oa_6quAWB6b0z7m5ITJG7fGPz87HVOhybrLcQcvteeGOQu3BhcI9AaAmkbEALw_wcB:G:s&s_kwcid=AL!3085!3!495846071701!e!!g!!adobe!12231505439!122943076691&gclid=Cj0KCQiAraSPBhDuARIsAM3Js4oa_6quAWB6b0z7m5ITJG7fGPz87HVOhybrLcQcvteeGOQu3BhcI9AaAmkbEALw_wcB'
            target='_blank'
          >
            {' '}
            <img
              width='45px'
              height='45px'
              src='https://img.icons8.com/external-justicon-flat-justicon/344/external-adobe-social-media-justicon-flat-justicon.png'
              alt='express'
            />{' '}
          </a>
          <a href='https://glidejs.com/' target='_blank'>
            <img
              height='45px'
              src='https://camo.githubusercontent.com/9269a9ed4f6937f05b84f3e09abf733e57b90e52af260a6861ba189f72ee2ada/68747470733a2f2f676c6964656a732e636f6d2f696d616765732f676c6964656a732d6c6f676f747970652d6461726b2e706e67'
            />
          </a>
          <a
            href='https://www.squarespace.com/website-design/?channel=pbr&subchannel=go&campaign=pbr-dr-go-ca-en-squarespace-general-bmm&subcampaign=(brand-general_squarespaces_bmm)&&utm_source=google&utm_medium=pbr&utm_campaign=pbr-dr-go-ca-en-squarespace-general-bmm&utm_term=%2Bsquarespaces&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71BWTQrHPzNlNAj3PLrK1YEnRFlPhD9T3zNybnHk4k4bu5YWFh_1UYMaAnxdEALw_wcB&gclsrc=aw.ds'
            target='_blank'
          >
            <img
              height='50px'
              src='https://cdn.iconscout.com/icon/free/png-256/squarespace-3-739563.png'
            />
          </a>
          <a href='https://lesscss.org/' target='_blank'>
            <img
              height='50px'
              src='https://lesscss.org/public/img/less_logo.png'
            />
          </a>
          {/*         
   
      

 
    

    
    <a style="padding-right:8px;" href="https://www.npmjs.com/" target="_blank"> <img  width="40px" src="https://img.icons8.com/color/344/npm.png"/> </a>
    <!-- <a style="padding-right:8px;" href="https://nodejs.org" target="_blank"> <img width="40px" src="https://img.icons8.com/color/48/000000/nodejs.png"/> </a> 
    <a href="https://firebase.google.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/firebase.png"/> </a> 
    <a href="https://mui.com" target="_blank"> <img height="40px" width="40px" src="https://img.icons8.com/color/344/material-ui.png"/> </a>  
    <a href="https://nextjs.org" target="_blank"> <img height="40px" width="40px" src="https://qph.fs.quoracdn.net/main-qimg-744f96b18fb3ef81b05512d78b679e25"/> </a>    -->
    <a href="https://git-scm.com/" target="_blank"> <img width="37px" height='37px' src="https://img.icons8.com/color/48/000000/git.png"/> </a> 
    <a href="https://www.figma.com/" target="_blank"> <img width="37px" height='37px' src="https://img.icons8.com/color/344/figma--v1.png" alt="figma" width="48" height="48"/> </a> 
    <a href="https://www.adobe.com/ca/creativecloud/business/teams.html?sdid=KKQWX&mv=search&ef_id=Cj0KCQiAraSPBhDuARIsAM3Js4oa_6quAWB6b0z7m5ITJG7fGPz87HVOhybrLcQcvteeGOQu3BhcI9AaAmkbEALw_wcB:G:s&s_kwcid=AL!3085!3!495846071701!e!!g!!adobe!12231505439!122943076691&gclid=Cj0KCQiAraSPBhDuARIsAM3Js4oa_6quAWB6b0z7m5ITJG7fGPz87HVOhybrLcQcvteeGOQu3BhcI9AaAmkbEALw_wcB" target="_blank"> <img width="37px" height='37px' src="https://img.icons8.com/external-justicon-flat-justicon/344/external-adobe-social-media-justicon-flat-justicon.png" alt="express" width="40" height="40"/> </a> */}
        </div>

        <motion.button variants={fade}>Download Resume</motion.button>
      </StyledServicesDescription>
    </StyledServices>
  );
};

const StyledServices = styled.div`
  min-height: 90vh;

  display: flex;
  flex-direction: row-reverse;
  /* background: rgba(12, 12, 12); */
  padding: 10rem 10rem;
  h2,
  h3 {
    font-weight: 700 !important;
    font-size: 3rem;
    letter-spacing: 1px;
    color: white;
    padding-bottom: 0rem;
    margin: 0 0 3rem 0;
  }
  h3 {
    margin-top: 6rem;
  }
  p {
    padding: 1rem 0rem;
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 1.65;
    color: white;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;
const StyledServicesDescription = styled.div`
  flex: 1;
  margin-right: 10rem;
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

const StyledImage = styled.div`
  position: sticky;
  top: 25%;
  border: white 3px solid;
  border-radius: 20px;
  flex: 1;
  overflow: hidden;
  z-index: 1;

  height: 50vh;
  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 750px) {
    height: 300px;
    width: 300px;
    flex: none;
  }
`;

export default ServicesSection;
