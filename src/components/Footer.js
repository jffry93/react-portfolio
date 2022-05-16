import styled from 'styled-components';
import Signature from '../img/icons/white-sig.png';

const Footer = () => {
  return (
    <StyledFooter>
      <p>Created by</p>{' '}
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
  img {
    width: 70px;
  }
`;
