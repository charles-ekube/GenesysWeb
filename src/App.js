import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Navigations';
import LandingPage from './LandingPage';
import FaqPage from './FaqPage';
import SoftwareDevelopersPage from './SoftwareDevelopersPage';
import ProductDesignPage from './ProductDesignPage';
import ApplyPage from './ApplyPage';
import JournalPage from './JournalPage';
import LearnableHomePage from './LearnableHomePage';
import Footer from './Footer';
import './Pages.css';
import './media.css';


class App extends React.Component {
  render() {
    return (
      <>
        <Router>
            <Navigation/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                    <LandingPage/>
              </React.Fragment>
            )}/>
            <Route path="/LearnableHomePage" component={LearnableHomePage}/>
            <Route path="/SoftwareDevelopersPage" component={SoftwareDevelopersPage}/>
            <Route path="/ProductDesignPage" component={ProductDesignPage}/>
            <Route path="/ApplyPage" component={ApplyPage}/>
            <Route path="/JournalPage" component={JournalPage}/>
            <Route path="/FaqPage" component={FaqPage}/>
            <Footer/>
        </Router>
      </>
        
      
        
    )
  }
}

export default App;
