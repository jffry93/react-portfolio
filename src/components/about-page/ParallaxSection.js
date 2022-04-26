//IMAGES
import styled from 'styled-components';
import stars from '../../img/parallax2/space.png';
import layer1 from '../../img/parallax2/layer1.png';
import layer2 from '../../img/parallax2/layer2.png';
import unicef from '../../img/UNICEF_Logo.png';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
//FRAMER MOTION
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//REACT ROUTER
import { NavHashLink } from 'react-router-hash-link';

const ParallaxSection = () => {
  const { scrollY, scrollYProgress } = useViewportScroll();
  // console.log(scrollY);
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 60]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 8]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });
  console.log(scrollYProgress);

  const grow = {
    start: { scale: 1 },
    end: {
      scale: 1.05,
    },
  };

  return (
    <StyledParallaxContainer>
      <motion.div
        className='background-img'
        style={{ y: y1, x: -0 }}
      ></motion.div>
      <div className='donate-bar'>
        <a
          href='https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjJmrXu84f3AhUibG8EHcSmCU8YABABGgJqZg&ae=2&ohost=www.google.com&cid=CAESbeD2b_uN3OPM-AHG8_RTOtt2MNYsgiK2soHGi_TZrINMKVjQDUpCF1bR-IiSeSM4BkR-Qygcl1yNFBLdksYHI-9AttzsoJoAPrbYIB4AoIj_vahKjG2RcIlQJmAAzSfccxGjnIu-0jLlbAx7NIs&sig=AOD64_3e6dFZg4dCJA53TV4vEX6sKwlWdA&q&adurl&ved=2ahUKEwiNrKzu84f3AhXKG80KHQQoCDwQ0Qx6BAgFEAE'
          target='_blank'
          rel='noreferrer'
        >
          <input
            type='image'
            src={unicef}
            name='unicefLogo'
            className='unicef-logo'
          />
        </a>
        <a
          href='https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjJmrXu84f3AhUibG8EHcSmCU8YABABGgJqZg&ae=2&ohost=www.google.com&cid=CAESbeD2b_uN3OPM-AHG8_RTOtt2MNYsgiK2soHGi_TZrINMKVjQDUpCF1bR-IiSeSM4BkR-Qygcl1yNFBLdksYHI-9AttzsoJoAPrbYIB4AoIj_vahKjG2RcIlQJmAAzSfccxGjnIu-0jLlbAx7NIs&sig=AOD64_3e6dFZg4dCJA53TV4vEX6sKwlWdA&q&adurl&ved=2ahUKEwiNrKzu84f3AhXKG80KHQQoCDwQ0Qx6BAgFEAE'
          target='_blank'
          rel='noreferrer'
        >
          Donate to support families affected by the war in Ukraine
        </a>
      </div>
      <div className='container'>
        <motion.div className='content' style={{ y: y3, x: -0 }}>
          <h2>Hi, I'm Jeff</h2>
          <h1>Frontend Developer</h1>
          <h3>Your digital space is limitless</h3>
          <p></p>
          <div className='button-container'>
            <NavHashLink href='#' to='/contact'>
              <button>Let's Talk</button>
            </NavHashLink>
            <NavHashLink href='#' to='/work'>
              <button>View Work</button>
            </NavHashLink>
          </div>
        </motion.div>
        <motion.img src={layer2} alt='' style={{ y: y2, x: -0 }} />
        <motion.img src={layer1} alt='' />
      </div>
    </StyledParallaxContainer>
  );
};

export default ParallaxSection;

const StyledParallaxContainer = styled.div`
  height: var(--container-height);
  min-height: 500px;

  position: relative;
  overflow: hidden;

  .background-img {
    /* content: ''; // ::before and ::after both require content */
    position: absolute;
    top: 0;
    left: 0;

    background-image: url(${stars});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 1);
    opacity: 0.7;
    z-index: 1;
  }
  .container {
    height: 100%;
    width: 100%;

    position: absolute;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 0 var(--layout-secondary-padding);

    display: flex;
    flex-direction: column;
    gap: 8px;

    position: relative;
    z-index: 3;

    .button-container {
      display: flex;
      gap: 8px;
      margin-top: 24px;
    }
  }
  img {
    width: 100%;
    min-width: 800px;
    position: absolute;
    bottom: 0;
    z-index: 2;
  }
  .donate-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    padding: 8px var(--layout-padding);
    background-color: rgba(0, 0, 0, 0.6);

    position: relative;
    z-index: 4;
    input {
      width: 100px;
      object-fit: contain;
      filter: brightness(0) invert(1);
    }
    input:hover {
      filter: brightness(0) invert(0.7);
    }
    a {
      font-size: 12px;
      text-align: left;
      text-decoration: none;
      color: var(--primary-text-color);

      display: flex;
    }
    a:hover {
      color: var(--secondary-text-color);
    }
  }
  @media (max-width: 550px) {
    .content {
      padding: 0 var(--layout-padding);
    }
    .text {
      padding: 0 var(--layout-padding);
    }
    .donate-bar {
      flex-direction: row;
      gap: 8px;
    }
    /* padding: 8px var(--mobile-padding); */
  }
`;
