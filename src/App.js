import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navigation from './Navigations';
import LandingPage from './LandingPage';
// import Footer from './Footer';
import FaqPage from './FaqPage';

import SoftwareDevelopersPage from './SoftwareDevelopersPage';
import ProductDesignPage from './ProductDesignPage';
import ApplyPage from './ApplyPage';
import JournalPage from './JournalPage';
import LearnableHomePage from './LearnableHomePage';

class App extends React.Component {
  render() {
    return (
      <>
        
        {/*  */}
        {/* */}
        {/*  */}
        {/* */}
        {/* / */}
        {/* */}
        
        {/* <Footer/> */} 
        <Router>
            <Navigation/>
            {/* <LandingPage/> */}
            <LearnableHomePage />
            {/* <SoftwareDevelopersPage />  */}
            {/* <ProductDesignPage /> */}
            {/* <ApplyPage /> */}
            {/* <JournalPage /> */}
            {/* <FaqPage /> */}
        </Router>
      </>
        
      
        
    )
  }
}

export default App;
