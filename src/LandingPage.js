import React from 'react';
import './Pages.css';
import './media.css';

class LandingPage extends React.Component {
    render() {
        return (
            <main>
                <section className="intro-section">
                        <h2>
                            Genesys Provides Opportunities For Young Nigerian Techies
                            And Opportunities To Grow And Innovate.
                        </h2>
                        <p>
                            We understand that opportunities are scarce in theses parts. 
                            We are either creating or exposing our people to these opportunities.
                        </p>
                    <div className="intro-section-img">
                       <aside className="scroll-down">
                           <img src={require("./stand-project/scrolldown.png")} alt="arrow"/>
                       </aside>
                       <aside className="intro-bg-img">
                            <img src={require("./stand-project/landing1.png")} alt="we" id="intro-img1"/>
                            <img src={require("./stand-project/landing.png")} alt="we" id="intro-img2"/>
                            <div className="play-btn">
                                <span><i className="fa fa-play fa-2x" style={{color:"#fff"}}></i></span>
                                 <p>#Wearegenesys</p>
                            </div>
                       </aside>
                       
                       
                    </div>
                </section>
                <section className="learnable-section">
                    <img src={require("./stand-project/learnable.png")} alt="learnable"/>
                    <article>
                        <h2>Learnable</h2>
                        <p>
                            Every year, young Nigerians are launching new careers
                            in the technology industry. Find out how Genesys is helping
                            them do it.
                        </p>
                        <span>LEARN MORE</span>
                    </article>
                </section>
                <section className="agora-section">
                    <article id="agora-text">
                        <h2>Agora</h2>
                        <p>
                            We are reimagining the workplace and how people work.
                            Find out how our co-working spaces can helpvyou enjoy the
                            work thar you do.
                        </p>
                        <span>LEARN MORE</span>
                    </article>
                    <img src={require("./stand-project/agora.png")} alt="learnable" id="agora-img"/>
                </section>
                <section className="startzone-section">
                    <img src={require("./stand-project/startzone.png")} alt="learnable"/>
                    <article>
                        <h2>StartZone</h2>
                        <p>
                            The business environment is harsh for early-stage businesses.
                            We can help you rise above it all. 
                        </p>
                        <span>HERE'S NOW</span>
                    </article>
                </section>
                <section className="other-things-we-do-section">
                        <ul>
                            <li className="card1">
                            <img src={require("./stand-project/genesysignite.png")} alt="genesysignite"/>
                            <span><p>Genesys Ignite</p></span>
                            </li>
                            <li className="card2">
                            <img src={require("./stand-project/codeville.png")} alt="codeville"/>
                            <span><p>CodeVille</p></span>
                            </li>
                            <li className="card3">
                            <img src={require("./stand-project/pinkcode.png")} alt="pinkcode"/>
                            <span><p>Pink summer of code</p></span>
                            </li>
                            
                        </ul>
                    <h2>Other things we do</h2>
                </section>
                <section className="teams-section">
                    <img src={require("./stand-project/teams.png")} alt="teams"/>
                    <div>
                        <h2>The Best Team In The World</h2>
                        <p>
                            We work with the most amazing people our industry
                            has to offer.They are really passionate about making
                            a difference.
                        </p>
                        <span>SEE TEAM</span>
                    </div>
                </section>
                <section className="subscribe-section">
                    <img src={require("./stand-project/scrollup.png")} alt="scrollup"/>
                    <div>
                        <h2>Stay Up To Date On What We Are Doing And New Learning Opportunities</h2>
                        <form>
                            <input type="email" placeholder="YOUR EMAIL"/>
                            <button className="subscribe-btn">SUBSCRIBE</button>
                            <p>View Privacy Policy</p>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}


export default LandingPage;