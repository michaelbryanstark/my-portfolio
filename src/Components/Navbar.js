import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to='/'>Michael Bryan Stark</Link>
        <button 
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                {/* <li className="nav-item active">
                    <NavLink className="nav-link" exact to='/'>Home <span className="sr-only">(current)</span></NavLink>
                </li> */}
                <li className="nav-item">
                    <NavLink className="nav-link" exact to='/me'>Experience</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to='/projects'>Projects</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to='/contact'>Contact</NavLink>
                </li>
            </ul>
            <SocialIcon className="nav-item ml-auto" url="https://www.linkedin.com/in/michaelbryanstark/" target="_blank" />
            <SocialIcon className="nav-item " url="https://github.com/michaelbryanstark" target="_blank"/>
        </div>
    </nav>
);

export default navbar;