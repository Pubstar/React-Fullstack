import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import ReactLogo from '../../images/react-logo.png';

const navbar = ({ currentUser }) => {
    return (
        <div className='navbar-container'>
            <div className='links-container'>
                <img src={ReactLogo} alt="" />
                <Link to="/">Home</Link>
            </div>
            {!currentUser &&
                <div className="login-container">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            }
        </div>
    )
}

export default navbar