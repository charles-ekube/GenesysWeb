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
              <li><Link to="/LearnableHomePage" className="navlink">LEARNABLE</Link></li>
              <li><a href="#">AGORA</a></li>
              <li><a href="#">STARTZONE</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">CONTACT</a></li>
              <li><a href="#">DEVSTUDIO</a></li>
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
            <button onClick={() => setShowMenu(true)} ><i className="fa fa-bars fa-2x"></i></button>
            </div>
            {menu}
           
          
         
        </nav>
    )
} 

export default Navigation;
