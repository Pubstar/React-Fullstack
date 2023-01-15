import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactLogo from '../../images/react-logo.png';

const Navbar = ({ currentUser, setCurrentUser }) => {

    const navigate = useNavigate();

    function handleLogout() {
        setCurrentUser('');
        navigate('/login');
    }

    return (
        <div className='flex mb-8 bg-sky-800 justify-between items-center h-20 px-5 text-amber-300 text-xl'>
            <div className='flex items-center gap-3'>
                <img className='w-14' src={ReactLogo} alt="" />
                <Link to="/">Home</Link>
            </div>
            {!currentUser &&
                <div className="flex gap-3">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            }
            {currentUser &&
                <div>
                    <button onClick={handleLogout} className="navButton">Logout</button>
                </div>
            }
        </div>
    )
}

export default Navbar