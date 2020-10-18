import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class LearnableNav extends React.Component {
    render() {
        return (
            <nav className="learnable-nav">
                <ul>
                    <li>
                        <Link to="/LearnableHomePage" className="link">HOME</Link>
                    </li>
                    <li>
                        <Link to="/SoftwareDevelopersPage" className="link">SOFTWARE DEVELOPERS</Link>
                    </li>
                    <li>
                        <Link to="/ProductDesignPage" className="link">PRODUCT DESINGERS</Link>
                    </li>
                    <li>
                        <Link to="/ApplyPage" className="link">APPLY</Link>
                    </li>
                    <li>
                        <Link to="/JournalPage" className="link">JOURNAL</Link>
                    </li>
                    <li>
                        <Link to="/FaqPage" className="link">FAQ</Link>
                    </li>
                </ul>
              
            </nav>
        )
    }
}

export default LearnableNav;
