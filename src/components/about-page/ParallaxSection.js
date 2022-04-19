import styled from 'styled-components';
import stars from '../../img/parallax/background.png';
import layer1 from '../../img/parallax/layer1.png';
import layer2 from '../../img/parallax/layer2-less.png';
import clouds from '../../img/parallax/clouds.png';
import unicef from '../../img/UNICEF_Logo.png';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Scroll } from 'framer-motion';

const ParallaxSection = () => {
  return (
    <StyledParallaxContainer>
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
      <div className='content'>
        <div className='text'>
          <h2>Your</h2>
          <h1>Digital Space </h1>
          <h2>is limitless</h2>
          <div className='button-container'>
            <button>Let's Talk</button>
            <button>View Work</button>
          </div>
        </div>
        <img src={layer1} alt='' />
        <img src={layer2} alt='' />
        <img src={clouds} alt='' />
      </div>
    </StyledParallaxContainer>
  );
};

export default ParallaxSection;

const StyledParallaxContainer = styled.div`
  height: var(--container-height);
  background-image: url(${stars});
  background-repeat: no-repeat;
  background-size: cover;

  background-position: center;
  position: relative;

  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 0 22px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    z-index: 2;

    .button-container {
      display: flex;
      gap: 8px;
      margin-top: 24px;
    }
  }
  img {
    position: absolute;
    bottom: 0;
    width: 100%;
    min-width: 800px;
  }
  .donate-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    padding: 8px var(--layout-padding);
    background-color: rgba(0, 0, 0, 0.6);
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
    @media (max-width: 550px) {
      flex-direction: row;
      gap: 8px;

      /* padding: 8px var(--mobile-padding); */
    }
  }
`;
