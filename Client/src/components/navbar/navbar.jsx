import React from 'react';
import './navbar.css';
import ReactLogo from '../../images/react-logo.png';

const navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='links-container'>
                <img src={ReactLogo} alt="" />
                <a href="/">Home</a>
            </div>
            <div className="login-container">
                <a href="/">Login</a>
                <a href="/">Register</a>
            </div>
        </div>
    )
}

export default navbar