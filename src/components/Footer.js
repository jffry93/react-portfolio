import styled from 'styled-components';
import Signature from '../img/icons/white-sig.png';

const Footer = () => {
  return (
    <StyledFooter>
      <p>Created by</p>
      <a
        className='github-link'
        href='https://github.com/jffry93'
        target='_blank'
      >
        <img src={Signature} alt='Signature' />
      </a>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 4px;
  /* background-color: var(--secondary-accent); */
  background-color: var(--primary-color);
  p {
    font-size: 13px;
  }
  a {
    display: flex;
    align-items: center;
  }
  img {
    width: 50px;
    filter: brightness(0) saturate(100%) invert(100%) sepia(5%) saturate(5%)
      hue-rotate(44deg) brightness(114%) contrast(100%);
  }
`;
