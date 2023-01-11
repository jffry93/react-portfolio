import React, { useRef, useEffect, useState } from 'react';

import myFace from '../../assets/img/onlyFace.png';

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
	'pk.eyJ1IjoiamZmcnk5MyIsImEiOiJja3l4NzJ1amYwMWR5MnVwbDQxa2Z2NHZvIn0.jkXVzTPcydwePjI4ZMw5zg';

const MapBox = ({ lng, setLng, lat, setLat }) => {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [zoom, setZoom] = useState(11);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/jffry93/ckyxjsho0000y14s904241u4p',
			center: [lng, lat],
			zoom: zoom,
		});
		const marker1 = new mapboxgl.Marker({
			color: '#f2816f',
		})
			.setLngLat([-79.3832, 43.6952])
			.addTo(map.current);
		//ADD CONTAINER TO INCLUDE GIF AND TEXT
		let greetingContainer = document.createElement('div');
		greetingContainer.classList.add('greeting-container');
		let waveGif = document.createElement('img');
		waveGif.src =
			'https://res.cloudinary.com/dcfqlsnzh/image/upload/v1673469927/cgmp3z3ki78pouub1nx5.png';
		// 'https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif';
		let greeting = document.createElement('h4');
		greeting.innerText = "I'm here!";
		greetingContainer.appendChild(greeting);
		// greetingContainer.appendChild(waveGif);
		// greeting.appendChild(textNode);
		// console.log(greeting);
		marker1._element.appendChild(greetingContainer);

		const nav = new mapboxgl.NavigationControl({
			visualizePitch: true,
		});
		map.current.addControl(nav, 'bottom-right');
	});
	useEffect(() => {
		if (!map.current) return; // wait for map to initialize
		map.current.on('move', () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});
	}); // Create a default Marker and add it to the map.

	return <div ref={mapContainer} className='map-container' />;
};

export default MapBox;
