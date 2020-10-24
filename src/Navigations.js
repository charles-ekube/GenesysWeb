import React, {useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Navigation() {

  const [showMenu, setShowMenu] = useState(false);
  let menu 
  if(showMenu) {
    menu = 
        <div className="mobile-nav-links">
           <ul>
              <li>
                <button onClick={() => setShowMenu(false)}><i className="fa fa-times fa-2x"></i></button>
              </li>
              <li>
                <Link
                    to="/LearnableHomePage"
                    className="navlink"
                    onClick={() => setShowMenu(false)}>
                    LEARNABLE
                </Link>
              </li>
              <li>AGORA</li>
              <li>STARTZONE</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
              <li>DEVSTUDIO</li>
          </ul>
        </div> 
  }
    return (
        <nav className="main-nav">
          
          <Link to="/">
               <img src={require("./stand-project/genesyslogo.png")} alt="logo" className="logo"/> 
           </Link>
              
            <div className="nav-links">
              <ul>
                <li><Link to="/LearnableHomePage" className="navlink">LEARNABLE</Link></li>
                <li>AGORA</li>
                <li>STARTZONE</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
              </ul>
            </div>
            <div className="devstudio-nav-link">
              <p>build a product with</p>
              <button>DEVSTUDIO</button>
            </div>
            <div className="mobile-nav-btn">
            <button onClick={() => setShowMenu(true)} ><i className="fa fa-bars fa-2x"></i></button>
            </div>
            {menu}
           
          
         
        </nav>
    )
} 

export default Navigation;