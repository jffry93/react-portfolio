import React, { useState } from 'react';
import styled from 'styled-components';
import MapBox from '../../../lib/mapbox';
import { mapCoordinates } from '../data/infoData';

const ContactMap = () => {
	const [lng, setLng] = useState(mapCoordinates.lng);
	const [lat, setLat] = useState(mapCoordinates.lat);

	return (
		<StyledMapContainer>
			<MapBox lng={lng} setLng={setLng} lat={lat} setLat={setLat} />
		</StyledMapContainer>
	);
};

export default ContactMap;

const StyledMapContainer = styled.div`
	flex: 1;
	width: 100%;
	position: sticky;
	top: var(--navbar-height);
	height: var(--container-height);
	@media (max-width: 1050px) {
		flex: 1.5;
	}
	@media (max-width: 700px) {
		height: unset;
		position: relative;
		top: 0;
	}

	.map-container {
		min-height: var(--container-height);
		height: 100%;
		position: sticky;
		top: 0;
		@media (max-width: 700px) {
			min-height: 300px;
			height: 30vh;
		}
		@media (max-width: 500px) {
			min-height: 200px;
			height: 30vh;
		}
	}
	.mapboxgl-marker {
		/* border: 3px solid pink; */
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.mapboxgl-ctrl-attrib {
		display: none;
	}
	.greeting-container {
		display: none;
		justify-content: center;
		align-items: center;
		gap: 10px;
		/* border: 3px solid green; */
		/* background-color: var(--primary-accent); */
		padding: 6.9px;
		/* border-radius: 50%; */
		position: absolute;
		top: 30px;

		h4 {
			white-space: nowrap;
		}
		img {
			width: 80px;
			height: 80px;
			object-fit: cover;
			border-radius: 50%;
		}
	}
	.sidebar {
		background-color: rgba(35, 55, 75, 0.9);
		color: #fff;
		padding: 6px 12px;
		font-family: monospace;
		z-index: 1;
		position: absolute;
		top: calc(10vh + 5rem);
		right: 10rem;
		margin: 12px;
		border-radius: 4px;
	}
`;
