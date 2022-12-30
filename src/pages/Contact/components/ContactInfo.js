import styled from 'styled-components';
import InfoDetail from './InfoDetail';

const ContactInfo = () => {
	return (
		<StyledContactInfo>
			<div className='contact-detail'>
				<InfoDetail />
			</div>
			<div className='line'></div>
			<div className='footer'>
				<h5>Made in </h5>
				<h4>Canada</h4>
			</div>
		</StyledContactInfo>
	);
};

export default ContactInfo;

const StyledContactInfo = styled.div`
	width: 100%;
	max-width: 300px;
	display: flex;
	flex-direction: column;
	flex: 1;
	@media (max-width: 1050px) {
		justify-content: flex-start;
		max-width: unset;
	}

	.contact-detail {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}
	.info-group {
		display: flex;
		align-items: center;
		justify-content: space-between;
		a {
			text-decoration: none;
			color: white;
			font-size: 0.9rem;
		}
		svg {
			color: white;
		}
	}

	.info-group:hover {
		a {
			transform: scale(1.03);
			color: var(--primary-accent);
		}
		svg {
			transform: scale(1.03);
			color: var(--primary-accent);
		}
	}
	.location {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		img {
			-webkit-transform: scaleX(-1);
			transform: scaleX(-1);
			width: 35px;
			height: 35px;

			position: absolute;
			top: -16.5px;
			left: 57px;
		}
		p {
			font-weight: 600;
		}
	}

	.line {
		width: 100%;
		height: 1px;
		background-color: white;
		margin: 32px 0;
	}
	.social-media {
		display: flex;
		/* flex-direction: column; */
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
			}
			.indeed-icon {
				position: relative;
				right: 1.35px;
			}
			.github {
				background-color: #6e5494;
				color: #f3f3f3;
			}
			.indeed {
				background-color: #003a9b;
				color: #f3f3f3;
			}
			.linkedin {
				background-color: #0b66c2;
				color: #f3f3f3;
			}
			.instagram {
				background: radial-gradient(
					circle at 30% 107%,
					#fdf497 0%,
					#fdf497 5%,
					#fd5949 45%,
					#d6249f 60%,
					#285aeb 90%
				);
				color: #f3f3f3;
			}
		}
		.icon-container:hover {
			transform: scale(0.95);
		}

		@media (max-width: 1050px) {
			grid-row: auto;
			flex-direction: row;
		}
	}
	.footer {
		margin: 3rem 0 0 0;
		text-align: center;
		/* font-size: 0.9rem; */
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		white-space: nowrap;
	}
`;
