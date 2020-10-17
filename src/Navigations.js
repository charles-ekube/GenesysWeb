import React, {useState} from 'react';
import './App.css';
// import Footer from './Footer';
// import Faq from './FAQ';
// import LearnableNav from './LearnableNav';
// import SoftwareDevelopers from './SoftwareDevelopers';
// import ProductDesign from './ProductDesign';
// import Apply from './Apply';
// import Journal from './Journal';

function Navigation() {

  const [showMenu, setShowMenu] = useState(false);
  let menu 
  if(showMenu) {
    menu =  <ul className="mobile-nav-links">
    <li>
      <button onClick={() => setShowMenu(false)}>*</button>
    </li>
    <li><a href="#">LEARNABLE</a></li>
    <li><a href="#">AGORA</a></li>
    <li><a href="#">STARTZONE</a></li>
    <li><a href="#">ABOUT</a></li>
    <li><a href="#">CONTACT</a></li>
    <li><a href="#">DEVSTUDIO</a></li>
  </ul>
  }
    return (
        <nav className="main-nav">
             <a href="#" className="logo">
               <img src={require("./stand-project/genesyslogo.png")} alt="logo"/> 
            </a> 
            <div className="nav-links">
              <ul>
                <li><a>LEARNABLE</a></li>
                <li><a>AGORA</a></li>
                <li><a>STARTZONE</a></li>
                <li><a>ABOUT</a></li>
                <li><a>CONTACT</a></li>
              </ul>
            </div>
            <div className="devstudio-nav-link">
              <p>build a product with</p>
              <button>DEVSTUDIO</button>
            </div>
            <div className="mobile-nav-btn">
            <button onClick={() => setShowMenu(true)} >=</button>
            </div>
              
            {menu}
        </nav>
    )
} 

export default Navigation;