import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ setCurrentUser, currentUser }) => {

    let username, password;
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        fetch("/api/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        }).then(response => response.json().then(res => {
            if (res.username) {
                setCurrentUser(res);
                console.log(currentUser);
                navigate('/');
            }
        })).catch(err => {
            console.log("No user found");
        })
        e.target.username.value = "";
        e.target.password.value = "";
    }

    function handleUsername(e) {
        username = e.target.value;
    }

    function handlePassword(e) {
        password = e.target.value;
    }

    return (
        <>
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={handleLogin} action="" method="post">
                    <label htmlFor="username">Username</label>
                    <input onChange={handleUsername} type="text" name="username" id="username" />
                    <label htmlFor="password">Password</label>
                    <input onChange={handlePassword} type="password" name="password" id="password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login