import React from 'react';
import LearnableNav from './LearnableNav';
import './Pages.css';
import './softdev.css';


class Apply extends React.Component {
    render() {
        return (
            <main>
                <LearnableNav/>
                <section className="apply-intro">
                    <h1 id="apply-intro-head">Apply Your Knowledge</h1>
                    <div id="apply-intro-img">
                        <img src={require('./stand-project/apply1.png')}/>
                    </div>
                    <article id="apply-intro-text">
                        <p>
                            Before you're done with Learnable, you will apply everything
                            you ve learned. You'll be part of a team made up of 2 designers
                            and 4 developers. You'll get to work alongside the Genesys team
                            on projects and we'll teach you how "the sauce" is made. By
                            combining technology, design, and great ideas, your team will
                            have the unique opportunity to collaborate with the Genesys
                            team to bring your own concept to life, from the first pen
                            sketches to the final functioning product. You'll then get to show
                            off your special project to everyone. 
                        </p> 
                    </article>
                </section>
                <section className="application-steps">
                    <img src={require('./stand-project/applyimg.png')}/>
                    <article>
                        <h2>
                            How To Get In
                        </h2>
                        <p>
                             We are very deliberate with our selection process. We are on a
                            quest to find amazing people who are passionate about learning
                            and growing their careers in the software industry. To this end,
                            we have designed our selection process to help us get such
                            people.
                        </p>
                    </article>
                    <article>
                        <h2>
                            Online Application
                        </h2>
                        <p>
                            Introduce yourself to us by filling out our application form. When
                            you re done filling out the form, proceed to download our prep
                            curriculum that contains everything you need to prepare for the
                            physical and technical assessment.
                        </p>
                        <a href="#">APPLY HERE</a>
                    </article>
                    <article>
                        <h2>
                            Phone Call Interviews
                        </h2>
                        <p>
                            We will reach out to you to discuss possible opportunities,
                            ascertain where you fit in with us, and answer any questions you
                            might have about the program. It s supposed to be a chat,
                            getting nervous defeats the aim.
                        </p>
                    </article>
                    <article>
                        <h2>
                            Final Assessment
                        </h2>
                        <p>
                            At this stage, we ll get to meet you in person for the first time.
                            You ll be invited to the hub for a physical assessment that
                            includes a technical assessment, a psychometric test and a
                            face to face chat with our team.
                        </p>
                    </article>
                    <article>
                        <h2>
                            Get In
                        </h2>
                        <p>
                            If you make it to this stage, you can pack your bags and head
                            down to the beautiful city of Enugu. We will join you on your
                            journey to build that career of your dreams and provide all the
                            help, support and love that we can muster along the way!
                        </p>
                    </article>
                </section>
                <section className="subscribe-section apply-sub" id="subscribe-section">
                    <img src={require("./stand-project/scrollup.png")}/>
                    <div style={{backgroundColor:"#EAC435"}}>
                    <span id="apply-sub"></span>
                        <h2>Stay Up To Date On What We Are Doing And New Learning Opportunities</h2>
                        <form>
                            <input type="email" placeholder="YOUR EMAIL"/>
                            <button className="subscribe-btn">SUBSCRIBE</button>
                            <a>View Privacy Policy</a>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}

export default Apply;
