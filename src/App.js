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
import Repos from './pages/Repos';
//React Router Dom
import { Switch, Route, useLocation } from 'react-router-dom';
//Animation
//page transition
import { AnimatePresence } from 'framer-motion';
import Footer from './components/Footer';
import FloatingIcons from './components/FloatingIcons';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const location = useLocation();

  return (
    <div className='App'>
      <GlobalStyle />
      <Nav navToggle={navToggle} setNavToggle={setNavToggle} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path='/' exact>
            <About />
          </Route>
          <Route path='/work' exact>
            <Work />
          </Route>
          <Route path='/work/:id'>
            <Repos />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
      <FloatingIcons />
      <Footer />
    </div>
  );
}

export default App;
