import React from 'react'
import './register.css';

const register = () => {

    let username, password;

    function handleRegister(e) {
        e.preventDefault();

        fetch("/api/createUser", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
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
                <h1>Register</h1>
                <form onSubmit={handleRegister}>
                    <label htmlFor="username">Username</label>
                    <input onChange={handleUsername} type="text" name="username" id="username" />
                    <label htmlFor="password">Password</label>
                    <input onChange={handlePassword} type="password" name="password" id="password" />
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    )
}

export default register