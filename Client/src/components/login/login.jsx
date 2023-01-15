import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setCurrentUser, currentUser }) => {

    let username, password;
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        fetch(process.env.REACT_APP_API_KEY + "/api/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        }).then(response => response.json().then(res => {
            if (res.username) {
                setCurrentUser(res);
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
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl mb-8'>Login</h1>
                <form onSubmit={handleLogin} action="" method="post" className='flex flex-col gap-2'>
                    <label htmlFor="username">Username</label>
                    <input required className='p-1 bg-slate-200 rounded-xl' onChange={handleUsername} type="text" name="username" id="username" />
                    <label htmlFor="password">Password</label>
                    <input required className='p-1 bg-slate-200 rounded-xl' onChange={handlePassword} type="password" name="password" id="password" />
                    <button type="submit" className=' bg-amber-300 py-2 px-5 rounded-xl hover:bg-amber-200'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login