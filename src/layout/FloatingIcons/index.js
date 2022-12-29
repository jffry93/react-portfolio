import styled from 'styled-components';
import Icons from './Icons';

const SocialLinks = () => {
	return (
		<StyledContainer className='social-media'>
			<Icons />
		</StyledContainer>
	);
};

export default SocialLinks;

const StyledContainer = styled.div`
	/* margin: auto; */
	position: fixed;
	top: 50%;
	right: 22px;
	transform: translate(0%, -50%);
	z-index: 3;
	transition: transform 0.6s ease-out;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
	color: rgba(0, 0, 0, 0.5);
	.icon-container {
		display: flex;
		align-items: center;
		justify-content: center;
		a {
			/* background-color: white; */
			padding: 10px;
			border-radius: 50%;
			line-height: 1;
			display: inline-flex;
			flex: 1;
		}
		.indeed-icon {
			position: relative;
			right: 1.35px;
		}
		.github,
		.indeed,
		.linkedin,
		.resume {
			color: white;
			border: 1px solid white;
			transition: all 0.2s ease;
		}
		.github:hover {
			background-color: #6e5494;
			color: #f3f3f3;
			border: 1px solid #6e5494;
		}
		.indeed:hover {
			background-color: #003a9b;
			color: #f3f3f3;
			border: 1px solid #003a9b;
		}
		.linkedin:hover {
			background-color: #0b66c2;
			color: #f3f3f3;
			border: 1px solid #0b66c2;
		}
		.resume:hover {
			background-color: var(--primary-accent);
			color: #f3f3f3;
			border: 1px solid var(--primary-accent);
		}
		/* .instagram {
      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
      color: #f3f3f3;
    } */
		a:hover {
			transform: scale(1.05) !important;
		}
		a:active {
			transform: scale(1);
		}
	}
	@media (max-width: 750px) {
		position: relative;
		top: 0%;
		left: 0%;
		transform: translate(-0%, 0%);
		transition: transform 0.6s ease-out;
		padding: 16px 0 8px;
		/* 
    height: 22px;
    width: 22px; */

		/* display: flex; */
		flex-direction: row;
		/* align-items: flex-end; */
		justify-content: center;
		gap: 16px;
		/* background-color: var(--primary-color); */
	}
`;
