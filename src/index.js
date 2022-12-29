import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//REACT ROUTER DOME
import { HashRouter } from 'react-router-dom';
//MAPBOX
import 'mapbox-gl/dist/mapbox-gl.css';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
