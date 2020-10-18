import React from 'react';
import LearnableNav from './LearnableNav';
import './Pages.css';
import './media.css';
import {Link} from 'react-router-dom';

class LearnableHomePage extends React.Component {
    render() {
        return (
            <>
            <LearnableNav />
            <main>
                <section className="learnable-ad">
                    <article className="coming-soon">
                        <h2>Coming Soon: Learnable '20</h2>
                        <p>
                            We've started taking in applications for the next batch of learnable
                            interns. Applications are on till the 21st of Febuary
                        </p>
                    </article>
                    <article className="brochue-download">
                        <p>
                            Click lonk to download...
                        </p>
                        <a href="#">Learnable '20 Brochue</a>
                    </article>
                </section>
                <section className="learnable-page-intro">
                    <h1>Everything is Learnable</h1>
                    <p>
                        Learnable is the perfect product
                        development internship program brought to
                        you by Genesys.
                    </p>
                    <article className="stickers">
                        <div className="item1" id="item1">
                            <Link to="/SoftwareDevelopersPage">
                                Development
                                <span><i className="fa fa-angle-down"></i></span> 
                            </Link>
                            <p>what to expect</p>
                        </div>
                        <div className="item2" id="item2">
                            <Link to="/ProductDesignPage">
                                Product Design
                                <span><i className="fa fa-angle-down"></i></span> 
                            </Link>
                            <p>what to expect</p>
                        </div>
                    </article>
                    <article className="intro-section-img" id="learnabl-page-clip">
                       <aside className="scroll-down">
                           <img src={require("./stand-project/scrolldown.png")} alt="arrow"/>
                       </aside>
                       <aside className="intro-bg-img">
                            <img src={require("./stand-project/home1.png")} alt="we" id="intro-img1"/>
                            <img src={require("./stand-project/home.png")} alt="we" id="intro-img2"/>
                            <div className="play-btn">
                                <span><i className="fa fa-play fa-2x" style={{color:"#fff"}}></i></span>
                                 <p>Discover the Learnable Experience</p>
                            </div>
                       </aside>
                    </article>
                    <article className="statistics">
                        <ul>
                            <li>305 <span>Young Software Developers Trained</span></li>
                            <li>2100 <span>Tech Enthusiasts</span></li>
                            <li>8 <span>StartUps Incubate</span></li>
                            <li>250 <span>Small Businesses Supported</span></li>
                        </ul>
                    </article>
                </section>
                <section>
                    <article className="grid-box1 great-people">
                        <div>
                            <h2>We Make People Great</h2>
                            <p>
                                As part of our calculated efforts to contribute to the emerging
                                knowledge and skills driven economy of Nigeria, Learnable is a
                                6-month product development training program with an emphasis
                                on software programming and product design. It is for outstanding
                                young individuals who are passionate about building a career in
                                the software industry
                            </p>
                            <p>
                                We primarily educate and groom software developers and
                                designers, preparing them for the industry. 
                            </p>
                        </div>
                        <img src={require('./stand-project/softdev.png')}/>
                    </article>
                </section>
                <section>
                    <article className="grid-box1 unusual-learning">
                        <img src={require('./stand-project/unusual.png')}/>
                        <div>
                            <h2>An Unusual Learning Experience</h2>
                            <p>
                                At Genesys, we believe in the learning processes as much as we believe in the
                                results. By applying a combination of active and social learning methodologies,
                                we create an environment that involves the learner in the learning process
                                while providing avenues for collaboration and peer-to-peer mentorship.
                            </p>
                            <p>
                                Our methods over the years have helped us discover ways to take education
                                out of the classroom. We introduce our interns to learning by experimentation
                                and problem-solving. To us, every task is an opportunity to learn.
                            </p>
                        </div>
                    </article>
                    </section>
                    <section>
                    <article className="grid-box1 developers">
                            <div className="developers-text">
                                <span>
                                    FOR DEVELOPERS
                                </span>
                                <h2>
                                    Learn To Build Software The Right Way
                                </h2>
                                <p>
                                    We love to build stuff. Really awesome stuff. That's why we
                                    have developed a learning program that will empower you to
                                    create amazing software the right way.
                                </p>
                                <p>
                                    We believe in learning through experimentation. Our aim is to
                                    nurture and grow bright young minds from the get go because
                                    that's how our industry will thrive.
                                </p>
                                <Link to="/SoftwareDevelopersPage">
                                    LEARN MORE 
                                </Link>
                            </div>
                            <div >
                                <ul className="grid-box1">
                                    <li style={{backgroundColor:"#17255A"}}>
                                        Program With JavaScript
                                    </li>
                                    <li style={{backgroundColor:"#03CEA4"}}>
                                        Version Control With Git
                                    </li>
                                    <li style={{backgroundColor:"#EAC435"}}>
                                        Web Development With React
                                    </li>
                                    <li style={{backgroundColor:"#2D1E2F"}}>
                                        Building APIs With NodeJS
                                    </li>
                                    <li style={{backgroundColor:"#273043"}}>
                                        Managing Data Wit MongoDB
                                    </li>
                                    <li style={{backgroundColor:"#F5772F"}}>
                                        Deploy With Heroku
                                    </li>
                                </ul>
                            </div>
                    </article>
                    </section>
                    <section>
                    <article className="grid-box1 designers">
                    <div className="designers-text">
                                <span>
                                    FOR DESIGNERS
                                </span>
                                <h2>
                                    Design Different
                                </h2>
                                <p>
                                    We love to make things work perfectly. That's why our design
                                    learning path exposes you to the science of user oriented
                                    design.
                                </p>
                                <p>
                                    Design is at the heart of everything we do at Genesys. Right
                                    from the start of the program, you'll get your hands dirty as you
                                    get practically involved in the world s most modern design
                                    concepts. At Genesys, we re building designers who put the
                                    users first.
                                </p>
                                <Link to="/ProductDesignPage">
                                    LEARN MORE 
                                </Link>
                            </div>
                            <div>
                                <ul className="grid-box1">
                                    <li style={{backgroundColor:"#17255A"}}>
                                        Design User
                                        Interfaces
                                    </li>
                                    <li style={{backgroundColor:"#F5772F"}}>
                                        Craft User
                                        Experiences
                                    </li>
                                    <li style={{backgroundColor:"#EAC435"}}>
                                        Apply Design
                                        Thinking
                                    </li>
                                    <li style={{backgroundColor:"#273043"}}>
                                        Build
                                        Information
                                        Architecture
                                    </li>
                                    <li style={{backgroundColor:"#E13F29"}}>
                                        Copy write for
                                        Projects
                                    </li>
                                    <li style={{backgroundColor:"#03CEA4"}}>
                                        Brand Products
                                    </li>
                                </ul>
                            </div>
                    </article>
                    </section>
                    <section>
                    <article className="grid-box1 eligibility">
                        <div>
                            <h2>Who is Eligible?</h2>
                            <p>
                                To be a participant of lernable, you need to be a young and
                                passionate person interested in launching a super tech career. You
                                will need to have foundational knowledge in whatever learning path
                                you are applying for and be available for the six month duration of
                                the program.
                            </p>
                            <p> 
                                To become a part of the Genesys family, you must express some of
                                the qualities we consider important. You are someone that takes
                                responsibilities and initiatives. You will also express the ability to
                                produce quality stuff in good time with high consistency. 
                            </p>
                        </div>
                        <img src={require('./stand-project/eligible.png')}/>
                    </article>
                    </section>
                    <section>
                    <article className="grid-box1 culture">
                        <div className="culture-overlay">
                            <img src={require('./stand-project/culture.png')}/>
                            <div className="play-btn2">
                                <span><i className="fa fa-play fa-2x" style={{color:"#fff"}}></i></span>
                            </div>
                        </div>
                        
                        <div id="culture-text">
                            <h2>Our Culture</h2>
                            
                            <p>
                                Our culture are the unspoken things that make us who we are at
                                Genesys. To become one of us, you need to be like the rest of us.
                                We believe that excellence is a culture, and we are committed to a
                                philosophy of consistent improvement in everything we do. We are
                                passionate, candid and we trust in the power of collaboration.
                            </p>
                        </div>
                    </article>
                    </section>
                    <section>
                    <article className="grid-box1 fun">
                    <div className="fun-text">
                                <h2>
                                    Learning can be fun…
                                </h2>
                                <p>
                                    We believe learning should be a fun experience. For this reason, we
                                    don't do all the learning in the classroom
                                </p>
                                <p>
                                    The Learnable experience can not be complete without the bag of
                                    fun times which you'll have. To us, every task is an opportunity to
                                    have some fun. But we do well to throw in a good number of
                                    activities to add to this. You will find yourself partaking in a lot of
                                    healthy activities such as cooking, sports, music, hangouts, and
                                    even random dates.
                                </p>
                                <p>
                                    Trust us when we say we know how to have fun.
                                </p>
                            </div>
                            <div className="culture-overlay">
                                <div id="fun-play">
                                    <span><i className="fa fa-play fa-2x" style={{color:"#fff"}}></i></span>
                                </div>
                                <ul className="grid-box2">
                                    <li>
                                    <img src={require('./stand-project/fun1.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/fun2.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/fun3.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/fun4.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/fun5.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/fun6.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/fun7.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/fun8.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/fun9.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/fun10.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/fun11.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/fun12.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/fun13.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/fun14.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/fun15.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/fun16.png')}/>
                                    </li>
                                </ul>
                            </div>
                    </article>
                    </section>
                    <section>
                    <article className="grid-box1 experts">
                        <div id="experts-grid">
                            <ul className="grid-box3">
                                <li>
                                    <img src={require('./stand-project/nnamdi.png')}/>
                                    <h3>Nnamdi</h3>
                                    <p>Managing Director</p>
                                </li>
                                <li>
                                    <img src={require('./stand-project/osita.png')}/>
                                    <h3>Ositadinma</h3>
                                    <p>Learnable Coordinator</p>
                                </li>
                                <li>
                                    <img src={require('./stand-project/idowu.png')}/>
                                    <h3>Idowu</h3>
                                    <p>Scrum Proffessional</p>
                                </li>
                                <li>
                                    <img src={require('./stand-project/ezra.png')}/>
                                    <h3>Ezra</h3>
                                    <p>Ass. Learnable
                                         Coordinator
                                    </p>
                                </li>
                                <li>
                                    <img src={require('./stand-project/david.png')}/>
                                    <h3>David</h3>
                                    <p>
                                        Design Lead
                                    </p>
                                </li>
                                <li>
                                    <img src={require('./stand-project/emma.png')}/>
                                    <h3>Emmanuel</h3>
                                    <p>Software Lead</p>
                                </li>
                            </ul>
                        </div>
                        <div className="experts-text">
                            <h2>Learn From The Experts</h2>
                            <p>
                                As a learnable intern, you will be learning from the best
                                software developers and product designers our industry has to
                                offer. You will spend the first 3 months in the classroom with
                                industry experts who have a wealth of experience from
                                developing amazing products for various customers in our
                                industry.
                            </p>
                        </div>
                    </article>
                    </section>
                    <section>
                    <article className="grid-box1 classroom">
                    <div className="classroom-text">
                                <h2>
                                    Learning doesn t always have
                                    to be in the classroom
                                </h2>
                                <p>
                                    We have designed other learning activities that aren't
                                    classroom based. You will learn how to be a better person, how to
                                    have good conversations, how to work better with people and most
                                    importantly, how to lead other people. Hey! We'll even teach you
                                    how to run a business during the Learnable Business Sessions.
                                </p>
                            </div>
                            <div>
                                <ul className="grid-box2">
                                    <li>
                                    <img src={require('./stand-project/class1.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/class2.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/class3.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/class4.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/class5.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/class6.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/class7.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/class8.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/class9.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/class10.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/class11.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/class12.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/class13.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/class14.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/class15.png')}/>
                                    </li>
                                    <li>
                                    <img src={require('./stand-project/class16.png')}/>
                                    </li>
                                </ul>
                            </div>
                    </article>
                    </section>
                    <section>
                    <article className="grid-box1 knowledge">
                    <img src={require('./stand-project/culture.png')}/>
                    <div>
                        <h2>Apply Your knowledge</h2>
                        <p>
                            Before you're done with Learnable, you will apply everything you've
                            learned. You'll be part of a team made up of 2 designers and 4
                            developers. You'll get to work alongside the Genesys team on
                            projects and we'll teach you how "the sauce" is made. By combining
                            technology, design, and great ideas, your team will have the unique
                            opportunity to collaborate with the Genesys team to bring your own
                            concept to life, from the first pen sketches to the final functioning
                            product. You'll then get to show off your special project to everyone.
                        </p>
                        <Link to="/ApplyPage">
                             GET STARTED 
                        </Link>
                    </div>
                    </article>
                    </section>
                    <section>
                    <article className="faq">
                        <h2>FAQ</h2>
                        <div className="questions-link">
                        <ul >
                        <li>
                            How many people can attend a course?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                        What s the learning experience like?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                        Who are the coaches?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                        How far in advance should we book?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                        Can you customize your courses?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                        </ul>
                        </div>
                        <div>
                        <Link to="/SoftwareDevelopersPage">
                                    SEE ALL
                        </Link>
                        </div>
                        
                    </article>
                    </section>
                    <section>
                    <article className="journall">
                        <h2>Jouurnal</h2>
                        <a href="#">VIEW ALL</a>
                        <div className="journal-cards-container">
                        <article>
                            <img src={require("./stand-project/journal-intro.png")} alt="journal" />
                            <a href="#">INSPIRATION</a>
                            <h2>
                                Learn Design Thinking
                                like a Pro and Build
                                Projects that People
                                will care about
                            </h2>
                            
                            <span>David Mong, Apr 9, 2020</span>
                        </article>
                        <article>
                            <img src={require("./stand-project/journal-intro.png")} alt="journal" />
                            <a href="#">INSPIRATION</a>
                            <h2>
                                Learn Design Thinking
                                like a Pro and Build
                                Projects that People
                                will care about
                            </h2>
                            
                            <span>David Mong, Apr 9, 2020</span>
                        </article>
                        <article>
                            <img src={require("./stand-project/journal-intro.png")} alt="journal" />
                            <a href="#">INSPIRATION</a>
                            <h2>
                                Learn Design Thinking
                                like a Pro and Build
                                Projects that People
                                will care about
                            </h2>
                            
                            <span>David Mong, Apr 9, 2020</span>
                        </article>
                        <article>
                            <img src={require("./stand-project/journal-intro.png")} alt="journal" />
                            <a href="#">INSPIRATION</a>
                            <h2>
                                Learn Design Thinking
                                like a Pro and Build
                                Projects that People
                                will care about
                            </h2>
                            
                            <span>David Mong, Apr 9, 2020</span>
                        </article>
                    </div>
                    </article>
                    <article className="mentions">
                        <h2>Mentioned in</h2>
                        <ul>
                            <li>
                            <img src={require("./stand-project/fast.png")} alt="journal" />
                            </li>
                            <li>
                            <img src={require("./stand-project/ux.png")} alt="journal" />
                            </li>
                            <li>
                            <img src={require("./stand-project/wired.png")} alt="journal" />
                            </li>
                            <li>
                            <img src={require("./stand-project/web.png")} alt="journal" />
                            </li>
                            <li>
                            <img src={require("./stand-project/south.png")} alt="journal" />
                            </li>
                        </ul>
                    </article>
                </section>
                <section className="subscribe-section" id="subscribe-section">
                    <img src={require("./stand-project/scrollup.png")}/>
                    <div style={{backgroundColor:"#EAC435"}}>
                        <h2>Stay Up To Date On What We Are Doing And New Learning Opportunities</h2>
                        <form>
                            <input type="email" placeholder="YOUR EMAIL"/>
                            <button className="subscribe-btn">SUBSCRIBE</button>
                            <a>View Privacy Policy</a>
                        </form>
                    </div>
                </section>
            </main>
            </>
            
        )
    }
}

export default LearnableHomePage;
