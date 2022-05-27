import { useState } from 'react';
import '../src/index.css';
//Styled
import GlobalStyle from './components/GlobalStyle';
//NavBar
import Nav from './components/Nav';

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
import Footer from './components/Footer';
import FloatingIcons from './components/FloatingIcons';
import ProjectDetails from './components/project/ProjectDetails';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const location = useLocation();
  let state = location.state;
  const background = location.state && location.state.background;

  return (
    <div className='App'>
      <GlobalStyle />
      <Nav navToggle={navToggle} setNavToggle={setNavToggle} />

      <AnimatePresence exitBeforeEnter>
        <Routes location={background || location} key={location.key}>
          <Route path='/*' element={<About />} />
          <Route path='/work*' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        {state?.background && (
          <Routes>
            <Route path={`/:path`} element={<ProjectDetails />} />
          </Routes>
        )}
      </AnimatePresence>
      <FloatingIcons />
      <Footer />
    </div>
  );
}

export default App;
