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
                            <Link to="/SoftwareDevelopersPage" className="navlink">
                                BUILD SOFTWARE
                            </Link>    
                        </li>
                        <li>
                            <Link to="/ProductDesignPage" className="navlink">
                                DESIGN DIFFERENT 
                            </Link>    
                        </li>
                        <li>
                            <Link to="/ApplyPage" className="navlink">
                                APPLY YOUR KNOWLEDGE 
                            </Link>    
                        </li>
                        <li>
                            <Link to="/FaqPage" className="navlink">
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
                        <p>GET IN TOUCH</p>
                    </span>
                </section>
                <section className="devstudio-footer-link">
                    <img src={require("./stand-project/footer-img.png")} alt="FooterImage"/>
                    <div>
                        <p>
                            Learnable is proud to be a collaborative
                            ffort of all the arms of our product team
                        </p>
                        <p>HEAD TO DEVSTUDIO</p>
                    </div>
                </section>
            
                <section className="social-section">
                    <div className="social-media-links">
                        <ul>
                            <li>
                                <i className="fa fa-twitter fa-2x"></i>
                            </li>
                            <li>
                                <i className="fa fa-facebook fa-2x"></i>
                            </li>
                            <li>
                                <i className="fa fa-linkedin fa-2x"></i>
                            </li>
                            <li>
                                <i className="fa fa-instagram fa-2x"></i>
                            </li>
                            <li>
                                <i className="fa fa-youtube fa-2x"></i>
                            </li>
                            <li>
                                <i className="fa fa-vimeo fa-2x"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="copyright-link">
                        <span><i className="fa fa-copyright "></i>GENESYS 2020</span>
                        <span><p>PRIVACY STATEMENT</p></span>
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer;