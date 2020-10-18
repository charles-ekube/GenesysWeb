import React from 'react';
import './Pages.css';
import './media.css';
import LearnableNav from './LearnableNav';


class Faq extends React.Component {
    render() {
        return (
            <>
                <LearnableNav/>
                <main>
                <section className="questions-intro">
                    <h1 id="questions-intro-head">FAQ</h1>
                    <img src={require("./stand-project/faq.png")}  id="questions-intro-img" alt="faq"/>
                </section>
                <section className="questions-link">
                    <ul>
                        <li>
                            How many people can attend a course?
                        <span> <i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span> <i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                        <li>
                            How many people can attend a course?
                        <span><i className="fa fa-angle-down"></i></span>
                        </li>
                    </ul>
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
           
            </>
        )
    }
}
export default Faq;
