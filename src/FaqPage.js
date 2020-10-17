import React from 'react';
import './faq.css';
import './Pages.css';
import LearnableNav from './LearnableNav';


class Faq extends React.Component {
    render() {
        return (
            <>
                <LearnableNav/>
                <main>
                <section className="questions-intro">
                    <h1 id="questions-intro-head">FAQ</h1>
                    <img src={require("./stand-project/faq.png")}  id="questions-intro-img"/>
                </section>
                <section className="questions-link">
                    <ul>
                        <li>
                            How many people can attend a course?
                        <span></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span></span>
                        </li>
                    </ul>
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
export default Faq;
