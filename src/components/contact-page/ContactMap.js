import React, { useRef, useEffect, useState } from 'react';

import myFace from '../../img/onlyFace.png';
import styled from 'styled-components';

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  'pk.eyJ1IjoiamZmcnk5MyIsImEiOiJja3l4NzJ1amYwMWR5MnVwbDQxa2Z2NHZvIn0.jkXVzTPcydwePjI4ZMw5zg';

const ContactMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-79.3832);
  const [lat, setLat] = useState(43.6952);
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
    waveGif.src = myFace;
    // 'https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif';
    // let greeting = document.createElement('h3');
    // let textNode = document.createTextNode('Hi');
    // greetingContainer.appendChild(greeting);
    greetingContainer.appendChild(waveGif);
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

  return (
    <StyledMapContainer>
      {/* <div className='sidebar'>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div> */}
      <div ref={mapContainer} className='map-container' />
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    /* border: 3px solid green; */
    background-color: var(--primary-accent);
    padding: 6.9px;
    border-radius: 50%;
    position: absolute;
    top: -69px;

    h3 {
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
