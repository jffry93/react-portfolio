import { useEffect, useState } from 'react';
import styled from 'styled-components';

const DonationBar = () => {
	const [joke, setJoke] = useState(null);
	useEffect(() => {
		const fetchJoke = async () => {
			const response = await fetch('https://icanhazdadjoke.com/slack');
			const json = await response.json();
			console.log(json.attachments[0].text.length);
			setJoke(json.attachments[0].text);
		};
		fetchJoke();

		// Set up the interval
		const intervalId = setInterval(fetchJoke, 12000);

		// Clear the interval when the component unmounts
		return () => clearInterval(intervalId);
	}, []);

	return (
		<StyledDonation className='donate-bar'>
			<a href='https://icanhazdadjoke.com/api' target='_blank' rel='noreferrer'>
				<span>{joke && `"${joke}"`} </span>
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
		text-align: center;
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
