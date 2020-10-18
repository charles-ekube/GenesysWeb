import React from 'react';
import './Pages.css';
import './media.css';
import LearnableNav from './LearnableNav';

class Journal extends React.Component {
    render() {
        return (
            <main>
                <LearnableNav/>
                <section className="journal-intro">
                    <div className='journal-head'>
                        <h1>Journal</h1>
                        <button>CATEGORIES</button>
                    </div>
                    <article className="journal-inspiration">
                        <img src={require("./stand-project/applyimg.png")} alt="journal"/>
                        <div>
                            <h6>INSPIRATION</h6>
                            <h2>
                                Learn Design Thinking
                                like a Pro and Build
                                Projects that People
                                will care about
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                                sapien arcu vitae orci at molestie. Pharetra quisque donec
                                accumsan rhoncus risus. Urna magna turpis duis imperdiet
                                elit, et, hendrerit viverra risus. Vulputate euismod commodo
                                donec tincidunt et, aliquam. Eget scelerisque netus habitant
                                dui porttitor cursus. Ipsum sem ut tortor ac ullamcorper.
                                Lacus.
                            </p>
                            <div id="journal-author">
                                <img src={require("./stand-project/ezra.png")} alt="journal"/>
                                <span>David Mong, Apr 9, 2020</span>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="journal-cards">
                    <div className="journal-cards-container">
                        <article>
                            <img src={require("./stand-project/journal1.png")} alt="journal" />
                            <h6>INSPIRATION</h6>
                            <h2>
                                Learn Design Thinking
                                like a Pro and Build
                                Projects that People
                                will care about
                            </h2>
                            
                            <span>David Mong, Apr 9, 2020</span>
                        </article>
                        <article>
                            <img src={require("./stand-project/journal2.png")} alt="journal" />
                            <h6>INSPIRATION</h6>
                            <h2>
                                Learn Design Thinking
                                like a Pro and Build
                                Projects that People
                                will care about
                            </h2>
                            
                            <span>David Mong, Apr 9, 2020</span>
                        </article>
                        <article>
                            <img src={require("./stand-project/journal3.png")} alt="journal" />
                            <h6>INSPIRATION</h6>
                            <h2>
                                Learn Design Thinking
                                like a Pro and Build
                                Projects that People
                                will care about
                            </h2>
                            
                            <span>David Mong, Apr 9, 2020</span>
                        </article>
                        <article>
                            <img src={require("./stand-project/journal4.png")} alt="journal" />
                            <h6>INSPIRATION</h6>
                            <h2>
                                Learn Design Thinking
                                like a Pro and Build
                                Projects that People
                                will care about
                            </h2>
                            
                            <span>Theresa Brazen, Apr 9, 2020</span>
                        </article>
                        <article>
                            <img src={require("./stand-project/journal1.png")} alt="journal" />
                            <h6>INSPIRATION</h6>
                            <h2>
                                Learn Design Thinking
                                like a Pro and Build
                                Projects that People
                                will care about
                            </h2>
                            
                            <span>David Mong, Apr 9, 2020</span>
                        </article>
                        <article>
                            <img src={require("./stand-project/journal2.png")} alt="journal" />
                            <h6>INSPIRATION</h6>
                            <h2>
                                Learn Design Thinking
                                like a Pro and Build
                                Projects that People
                                will care about
                            </h2>
                            
                            <span>David Mong, Apr 9, 2020</span>
                        </article>
                        <article>
                            <img src={require("./stand-project/journal3.png")} alt="journal" />
                            <h6>INSPIRATION</h6>
                            <h2>
                                Learn Design Thinking
                                like a Pro and Build
                                Projects that People
                                will care about
                            </h2>
                            
                            <span>David Mong, Apr 9, 2020</span>
                        </article>
                        <article>
                            <img src={require("./stand-project/journal4.png")} alt="journal" />
                            <h6>INSPIRATION</h6>
                            <h2>
                                Learn Design Thinking
                                like a Pro and Build
                                Projects that People
                                will care about
                            </h2>
                            
                            <span>Theresa Brazen, Apr 9, 2020</span>
                        </article>
                    </div>
                    <div className="load-more">
                        <button>LOAD MORE</button>
                    </div>
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
export default Journal;