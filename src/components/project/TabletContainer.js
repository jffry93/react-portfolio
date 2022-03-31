import styled from 'styled-components';
//DEVICE
import ipad from '../../img/devices/empty-ipad-horizontal.png';
//ICONS
import paletteIcon from '../../img/icons/palette-icon.svg';

const TabletContainer = ({ colours, ipadImg }) => {
  return (
    <StyledTabletContainer className='tablet-container'>
      <div className='tablet-image'>
        <img className='ipad-frame' src={ipad} alt='tablet' />
        <div className='ipad-img'>
          <img src={ipadImg} alt='tablet screenshot' />
        </div>
      </div>
      <StyledColourContainer className='colour-container'>
        <div className='title-with-icon'>
          <img src={paletteIcon} alt='role icon' className='title-icon' />
          <h2>Palette</h2>
        </div>
        {/* <h3>Colors get the people going!</h3> */}
        <div className='palette-container'>
          <div className='colour-palettes'>
            {colours.map((colour) => (
              <div
                className='colour-palette'
                style={{ backgroundColor: `${colour.hexCode}` }}
              >
                <p>{colour.hexCode}</p>
              </div>
            ))}
          </div>
          <h5>Click on hexcode to copy to clipboard</h5>
        </div>
      </StyledColourContainer>
    </StyledTabletContainer>
  );
};

export default TabletContainer;

const StyledTabletContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 5rem 0;
  gap: 2rem;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-end;
    .tablet-image {
      margin: 0 0 160px;
    }
  }
  .tablet-image {
    display: flex;
    position: relative;
    flex: 3;
    margin-left: 2rem;
    @media (max-width: 750px) {
      margin-right: 2rem;
    }
    .ipad-frame {
      position: relative;
      min-width: clamp(700px, 60vw, 1200px);
    }
    .ipad-img {
      position: absolute;
      top: 50%; /* position the top  edge of the element at the middle of the parent */
      left: 50%; /* position the left edge of the element at the middle of the parent */
      transform: translate(-50%, -50%);

      width: 94.7%;
      z-index: -1;
    }
  }
`;
const StyledColourContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin: 0 32px;
  text-align: left;

  @media (max-width: 750px) {
    width: calc(100% - 4rem);
  }

  .palette-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 16px;
    background-color: #121212;
    padding: 1.5rem 1rem;
    width: 100%;
    .colour-palettes {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      .colour-palette {
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 8px;
        /* max-width: 270px; */
        min-width: 250px;
        width: 100%;
        height: 80px;
        cursor: pointer;
        @media (max-width: 750px) {
          max-width: unset;
          width: 100%;
          min-width: unset;
        }
      }
      p {
        font-weight: 600;
        cursor: pointer;
      }
    }
    h5 {
      line-height: 1.6;
      text-align: center;
      padding: 16px 0 0;
      color: var(--secondary-text-color);
    }
  }
`;