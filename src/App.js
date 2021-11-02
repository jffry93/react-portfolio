import React from 'react';
//Styled
import GlobalStyle from './components/GlobalStyle';
//NavBar
import Nav from './components/Nav';
//Different Pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
//React Router Dom
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path='/' exact>
          <AboutUs />
        </Route>
        <Route path='/work'>
          <OurWork />
        </Route>
        <Route path='/contact'>
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
