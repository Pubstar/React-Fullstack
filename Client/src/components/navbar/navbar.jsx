import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import ReactLogo from '../../images/react-logo.png';

const Navbar = ({ currentUser, setCurrentUser }) => {

    const navigate = useNavigate();

    function handleLogout() {
        setCurrentUser('');
        navigate('/login');
    }

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
            {currentUser &&
                <div className="login-container">
                    <button onClick={handleLogout} className="navButton">Logout</button>
                </div>
            }
        </div>
    )
}

export default Navbar