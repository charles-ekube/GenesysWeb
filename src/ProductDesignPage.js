import React from 'react';
import './Pages.css';
import './media.css';
import LearnableNav from './LearnableNav';


class ProductDesign extends React.Component {
    render() {
        return (
            <main>
                <LearnableNav/>
                <section className="product-intro">
                    <h1 id="product-intro-head">The Learnable Software Developer</h1>
                    <div id="product-intro-img">
                        <img src={require('./stand-project/softdev.png')} id="product-img" alt="software"/>
                    </div>
                    <article id="product-intro-text">
                        <p>
                            At Genesys, you'll be exposed to every discipline in our creative
                            process – UX, UI, interaction design, and copywriting. You’ll be
                            part of a dynamic team that's made up of like-minded, talented
                            people. You'll work hard with them to create things that will
                            amaze everyone everywhere.
                        </p>
                        <p>
                            In addition to your team projects, you’ll be lending a hand to the
                            creative team. Participating in brainstorm sessions, building
                            winning pitches, preparing assets, and design scriptures for
                            productions, you'll be in the thick of it all.
                        </p> 
                        <p>
                            Oh, and you’ll make amazing friends while you're at it!
                        </p>
                    </article>
                </section>
                <article className="product-qoute" id="product-qoute">
                    <q>
                        The greats weren't great
                        because at birth they could
                        paint. The greats were
                        great because they painted
                        a lot.
                   </q>
                   <br/>
                   <span>- Macklemore</span>
                </article>
                <section className="product-expectations">
                    <img src={require('./stand-project/productdev.png')} alt="product"/>
                    <article>
                        <h2>
                            We Expect You To...
                        </h2>
                        <p>
                            Play nice with other people.
                        </p>
                        <p>
                            Be an actively engaging person. That means you are present,
                            motivated, and social.
                        </p>
                        <p>
                            Understand how to use the Figma design software
                        </p>
                        <p>
                            Be able to create initial design layouts with confidence and
                            know-how to effectively communicate concepts to everyone on
                            your team.
                        </p>
                        <p>
                            Have a basic understanding of design principles and theories
                            To have creative courage. This is a tough industry, only the brave
                            and sturdy remain.
                        </p>
                        <p>
                            Be prepared to defend your decisions and take constructive
                            criticism.
                        </p>
                        <p id="small-text">
                            To us, beauty without substance has no value. At Genesys, design thinking and
                            execution are equally important, so we’re constantly on the lookout for not only the
                            how but also the why.
                        </p>
                    </article>
                </section>
                <section className="subscribe-section" id="subscribe-section">
                    <img src={require("./stand-project/scrollup.png")} alt="new"/>
                    <div style={{backgroundColor:"#EAC435"}}>
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

export default ProductDesign; 
