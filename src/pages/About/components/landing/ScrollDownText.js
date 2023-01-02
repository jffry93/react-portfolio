import styled from 'styled-components';

const ScrollDownText = () => {
	return <StyledContainer>Scroll Down</StyledContainer>;
};

export default ScrollDownText;

const StyledContainer = styled.h4`
	cursor: default;
	color: white;
	font-size: 18px;
	font-weight: 400;

	position: absolute;
	bottom: 16px;
	right: 50%;
	transform: translate(50%, -50%);

	animation: fade-in-out 2s linear infinite;
	z-index: 4;
`;
