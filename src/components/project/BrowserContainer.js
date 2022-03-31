import styled from 'styled-components';
//ICONS
import bookIcon from '../../img/icons/book-open-solid.svg';

const BrowserContainer = ({ fonts, browserImg }) => {
  return (
    <StyledBrowserContainer className='browser-container'>
      <StyledTypographyContainer className='typography-container'>
        <div className='title-with-icon'>
          <img src={bookIcon} alt='role icon' className='title-icon' />
          <h2>Typography</h2>
        </div>
        {/* <h4>Absorb content easily.</h4> */}
        <div className='examples-container'>
          {fonts.map((font) => (
            <div className='font-family-container'>
              <div className='font-title'>
                <h3 className='family-title'>{font.title}</h3>
                <h3
                  style={{
                    fontFamily: `${font.fontFamily}`,
                    fontWeight: `${font.fontWeight}`,
                    letterSpacing: `${font.letterSpacing}`,
                  }}
                >
                  {font.fontFamily}
                </h3>
              </div>

              <p
                className='font-example'
                style={{
                  fontFamily: `${font.fontFamily}`,
                  fontWeight: `${font.fontWeight}`,
                  letterSpacing: `${font.letterSpacing}`,
                }}
              >
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                Vv Ww Xx Yy Zz 1 2 3 4 5 6 7 8 9 0 ? !
              </p>
            </div>
          ))}
        </div>
      </StyledTypographyContainer>
      <div className='browser-screenshot'>
        <img src={browserImg} alt='browser screenshot' />
      </div>
    </StyledBrowserContainer>
  );
};

export default BrowserContainer;

const StyledBrowserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0 var(--layout-padding);
  position: relative;
  @media (max-width: 650px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    .browser-screenshot {
      padding: 0 0 160px;
    }
  }
  .browser-screenshot {
    min-width: clamp(900px, 60vw, 1200px);
    margin: 0 8px;
  }
`;

const StyledTypographyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 750px) {
    /* margin: 0 var(--layout-padding); */
  }
  .examples-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    margin-top: 16px;

    .font-family-container {
      border-radius: 16px;
      background-color: #121212;
      padding: 1.5rem 1rem;

      display: flex;
      flex-direction: column;
      @media (max-width: 330px) {
        width: calc(100% - 22px);
      }
      .family-title {
        color: var(--primary-text-color);
        font-weight: 600;
        margin-bottom: 2px;
      }
      h3 {
        color: var(--secondary-text-color);
      }
    }
  }
`;
