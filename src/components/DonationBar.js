import styled from 'styled-components';

import unicef from '../img/UNICEF_Logo.png';

const DonationBar = () => {
  return (
    <StyledDonation className='donate-bar'>
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
        <span>Donate to support families affected by the war in Ukraine</span>
      </a>
    </StyledDonation>
  );
};

export default DonationBar;

const StyledDonation = styled.div`
  position: absolute;
  top: 50px;
  z-index: 4;
  width: 100%;

  padding: 8px var(--layout-padding);
  background: var(--secondary-accent);
  backdrop-filter: blur(3px) !important;
  background-color: rgba(0, 0, 0, 0.5);
  input {
    width: 100px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    font-size: 12px;
    text-align: left;
    text-decoration: none;
    color: var(--primary-text-color);
  }
  a:hover {
    color: var(--secondary-text-color);
    input {
      filter: brightness(0) invert(0.7);
    }
  }

  @media (max-width: 550px) {
    flex-direction: row;
    gap: 8px;
  }
`;
