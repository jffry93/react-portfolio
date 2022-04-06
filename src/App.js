import { useState } from 'react';
import '../src/index.css';
//Styled
import GlobalStyle from './components/GlobalStyle';
//NavBar
import Nav from './components/Nav';
//Different Pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
//React Router Dom
import { Switch, Route, useLocation } from 'react-router-dom';
//Animation
//page transition
import { AnimatePresence } from 'framer-motion';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const location = useLocation();

  return (
    <div className='App'>
      <GlobalStyle />
      <Nav navToggle={navToggle} setNavToggle={setNavToggle} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path='/react-portfolio/' exact>
            <AboutUs />
          </Route>
          <Route path='/react-portfolio/work' exact>
            <OurWork />
          </Route>
          <Route path='/react-portfolio/work/:id'>
            <MovieDetail />
          </Route>
          <Route path='/react-portfolio/contact'>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
