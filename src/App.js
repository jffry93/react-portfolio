import { useState } from 'react';
import '../src/assets/fonts/index.css';
//Styled
import GlobalStyle from './lib/styled-components/GlobalStyle';
//NavBar
import Nav from './layout/Nav';
//Different Pages
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
//React Router Dom
import { Route, useLocation } from 'react-router-dom';
import { Routes } from 'react-router-dom';
//Animation
//page transition
import { AnimatePresence } from 'framer-motion';
import Footer from './layout/Footer';
import ProjectDetails from './components/PersonalProject/ProjectDetails';
import Test from './data/style/SpaceStars.js/index.js';

function App() {
	const [navToggle, setNavToggle] = useState(false);

	const location = useLocation(); //url path
	const background = location.state && location.state.background; //pop up location

	return (
		<div className='App'>
			<GlobalStyle />
			<Nav navToggle={navToggle} setNavToggle={setNavToggle} />

			<AnimatePresence exitBeforeEnter>
				<Routes location={background || location}>
					<Route path='/*' element={<About />} />
					<Route path='/test' element={<Test />} />
					<Route path='/work' element={<Work />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
				{background && (
					<Routes>
						<Route path={`:path`} element={<ProjectDetails />} />
					</Routes>
				)}
			</AnimatePresence>

			<Footer />
		</div>
	);
}

export default App;
