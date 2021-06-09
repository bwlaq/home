import React from 'react';
import './header.css'

class Header extends React.Component {
    render() {
        return <div className="top-navbar">
            <a className="top-navbar__name">Jeng-han <span className="inline-color">Lu</span> (Norman)</a>
            <a className="top-navbar__button">Home</a>
            <a className="top-navbar__button">Resume</a>
            <a className="top-navbar__button">Projects</a>
            <a className="top-navbar__button">Contact</a>
        </div>
    }
}
export default Header;