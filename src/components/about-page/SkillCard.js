import { useEffect } from 'react';

//STYLING
import styled from 'styled-components';

const SkillCard = ({
  title,
  secondTitle,
  description,
  documentation,
  color,
  color2,
  textColor,
}) => {
  useEffect(() => {
    // console.log(color);
  }, []);
  return (
    <StyledSkillCard color={color} color2={color2} textColor={textColor}>
      <h3>{title}</h3>
      <h4>{secondTitle}</h4>
      <div className='space-container'>
        <p>{description}</p>
        <a href={documentation} target='_blank' rel='noreferrer'>
          {title} Doc
        </a>
      </div>
    </StyledSkillCard>
  );
};

export default SkillCard;

const StyledSkillCard = styled.div`
  /* background-image: linear-gradient(
    155deg,
    ${(props) => props.color2 || props.color},
    ${(props) => props.color}
  ); */
  background-color: #000000;

  border-radius: 20px;
  padding: 1rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  h4 {
    /* font-size: 18px; */
    margin-top: 2px;
    color: ${(props) => props.color2 || props.color};
  }

  a {
    font-size: 15px;

    width: fit-content;
    border: 1px solid ${(props) => props.color2 || props.color};
    padding: 0.7rem;
    text-decoration: none;
    color: white;
    transition: transform 0.3s;
    background-image: linear-gradient(
      155deg,
      ${(props) => props.color2 || props.color},
      ${(props) => props.color}
    );
  }
  a:hover {
    /* border: 2px solid white; */
    transform: scale(1.03);
    background-color: rgba(36, 36, 36, 0.1);
  }
  .space-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: space-between;
  }
  &:hover {
    background-image: linear-gradient(
      155deg,
      ${(props) => props.color2 || props.color},
      ${(props) => props.color}
    );
    transform: scale(1.02);
    h4 {
      color: var(--primary-text-color);
    }
    a {
      border: white 1px solid;
      background-image: unset;
      background-color: rgba(0, 0, 0, 0.2);
    }

    h3,
    p,
    a {
      /* color: ${(props) => props.textColor || 'white'};
      transition: all 0.3s ease; */
    }
    a {
      /* border: 1px solid ${(props) => props.textColor || 'white'}; */
    }

    /* a:hover {
      background-color: transparent;
    } */
  }
  &:before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    /* background: ${(props) => props.color || '#181818'}; */
    background-image: linear-gradient(135deg, var(--secondary-accent), #2b2b2b);
    /* background-image: linear-gradient(
      155deg,
      ${(props) => props.color2 || props.color},
      ${(props) => props.color}
    ); */
    border-radius: 20px;
    z-index: -1;
    /* transition: all 0.3s linear; */
    opacity: 0.6;
  }
  &:hover:before {
    background: linear-gradient(155deg, #141414, #161616, #181818);
    opacity: 0.2;
  }
  @media (max-width: 500px) {
    p {
      font-size: 13px;
    }
  }
`;
