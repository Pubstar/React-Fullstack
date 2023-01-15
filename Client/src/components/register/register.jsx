import React from 'react'
import { useNavigate } from 'react-router-dom';

const Register = ({ setCurrentUser }) => {

    const navigate = useNavigate();
    let username, password;

    function handleRegister(e) {
        e.preventDefault();

        fetch(process.env.REACT_APP_API_KEY + "/api/createUser", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        }).then(res => res.json().then(response => {
            if (response.result === true) {
                setCurrentUser(response.user)
                navigate('/');
            }
        }))
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
                <h1 className='text-3xl mb-8'>Register</h1>
                <form onSubmit={handleRegister} className='flex flex-col gap-2'>
                    <label htmlFor="username">Username</label>
                    <input className='p-1 bg-slate-200 rounded-xl' onChange={handleUsername} type="text" name="username" id="username" />
                    <label htmlFor="password">Password</label>
                    <input className='p-1 bg-slate-200 rounded-xl' onChange={handlePassword} type="password" name="password" id="password" />
                    <button type="submit" className=' bg-amber-300 py-2 px-5 rounded-xl'>Register</button>
                </form>
            </div>
        </>
    )
}

export default Register