import React from 'react';
import './App.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <section className="quick-links">
                    <ul>
                        <li><a href="#">BUILD SOFTWARE</a></li>
                        <li><a href="#">DESIGN DIFFERENT</a></li>
                        <li><a href="#">APPLY YOUR KONWLEDGE</a></li>
                        <li><a href="#">FAQ</a></li>
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
                            <li><a href="#">T</a></li>
                            <li><a href="#">T</a></li>
                            <li><a href="#">T</a></li>
                            <li><a href="#">T</a></li>
                            <li><a href="#">T</a></li>
                            <li><a href="#">T</a></li>
                        </ul>
                    </div>
                    <div className="copyright-link">
                        <span>copy</span>
                        <span><a href="#">i</a></span>
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer;