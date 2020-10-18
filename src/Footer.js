import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <section className="quick-links">
                    <ul>
                        <li>
                            <Link to="/SoftwareDevelopersPage">
                                LEARN MORE 
                            </Link>    
                        </li>
                        <li>
                            <Link to="/ProductDesignPage">
                                DESIGN DIFFERENT 
                            </Link>    
                        </li>
                        <li>
                            <Link to="/ApplyPage">
                                APPLY YOUR KNOWLEDGE 
                            </Link>    
                        </li>
                        <li>
                            <Link to="/FaqPage">
                                FAQ 
                            </Link>    
                        </li>
                    </ul>
                </section>
                <section className="address">
                    <address>
                        Our Local Campus center: Kilometer 7, Enugu/Port Harcourt,
                        Expressway, Centenary City, Enugu. Nigeria
                    </address>
                    <span>
                        <a href="#">GET IN TOUCH</a>
                    </span>
                </section>
                <section className="devstudio-footer-link">
                    <img src={require("./stand-project/footer-img.png")} alt="Footer-Image"/>
                    <div>
                        <p>
                            Learnable is proud to be a collaborative
                            ffort of all the arms of our product team
                        </p>
                        <a href="#">HEAD TO DEVSTUDIO</a>
                    </div>
                </section>
            
                <section className="social-section">
                    <div className="social-media-links">
                        <ul>
                            <li><a href="#">
                                    <i className="fa fa-twitter fa-2x"></i>
                                </a></li>
                            <li><a href="#">
                                    <i className="fa fa-facebook fa-2x"></i>
                                </a></li>
                            <li><a href="#">
                                    <i className="fa fa-linkedin fa-2x"></i>
                                </a></li>
                            <li><a href="#">
                                    <i className="fa fa-instagram fa-2x"></i>
                                </a></li>
                            <li><a href="#">
                                    <i className="fa fa-youtube fa-2x"></i>
                                </a></li>
                            <li><a href="#">
                                    <i className="fa fa-vimeo fa-2x"></i>
                                </a></li>
                        </ul>
                    </div>
                    <div className="copyright-link">
                        <span><i className="fa fa-copyright "></i>GENESYS 2020</span>
                        <span><a href="#">PRIVACY STATEMENT</a></span>
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer;
