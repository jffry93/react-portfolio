import styled from 'styled-components';
import CreatedBy from './components/CreatedBy';
import FaqSection from './components/Questions';
import FloatingIcons from '../FloatingIcons';

const Footer = () => {
	return (
		<StyledFooter>
			<FaqSection />
			<FloatingIcons />
			<CreatedBy />
		</StyledFooter>
	);
};

export default Footer;

const StyledFooter = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 0 0 8px;
	background-color: var(--primary-color);
	position: relative;
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
