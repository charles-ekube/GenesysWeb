import React from 'react';
import './Pages.css';
import './media.css';
import LearnableNav from './LearnableNav';
class SoftwareDevelopers extends React.Component {
    render() {
        return (
            
            <main>
                <LearnableNav/>
                <section className="software-intro">
                    <h1 id="software-intro-head">The Learnable Software Developer</h1>
                    <div id="software-intro-img">
                        <img src={require('./stand-project/softdev.png')}/>
                    </div>
                    <article id="software-intro-text">
                        <p>
                            Creativity means a lot to us. So we look for people who can think
                            both logistically and artistically, and who know that limits are
                            made to be pushed. We value skill and aptitude, but we honor
                            those who care about working with their team to add the
                            Genesys flavour to every project. 
                        </p>
                        <p>
                            As a developer, being part of the team exposes you to a range of
                            diverse, like-minded talented people who are sure to make the
                            experience fun for you. You’ll get a shot at building amazing
                            things, developing yourself, learning on the job, while
                            exchanging healthy jokes and having random hangouts once in a
                            while.
                        </p> 
                    </article>
                </section>
                <article className="software-qoute">
                    <q>
                        You are someone people can count on. Every day, you come in ready to make great things happen.
                   </q>
                </article>
                <section className="software-expectations">
                    <img src={require('./stand-project/softdev2.png')}/>
                    <article>
                        <h2>
                            We Expect You To...
                        </h2>
                        <p>
                            Play nice with other people.
                        </p>
                        <p>
                            Be an actively engaging person. That means you are present,
                            motivated, and social. You know how to communicate effectively
                            with your teammates.
                        </p>
                        <p>
                            Love to code. You understand the basics of programming and
                            object-oriented design and development.
                        </p>
                        <p>
                            Have an eye for detail. Your keen observation helps you catch
                            discrepancies and fix them quickly.
                        </p>
                        <p>
                            Be innately curious. Your love for technology is insatiable, so
                            you’re always researching and experimenting. Learning new
                            technical skills while on the job is something you look forward to.
                        </p>
                        <p>
                            Appreciate good design. You want to make something that
                            doesn t just work flawlessly but looks amazing.
                        </p>
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
        )
    }
}

export default SoftwareDevelopers;