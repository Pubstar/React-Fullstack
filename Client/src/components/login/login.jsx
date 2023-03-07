import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setCurrentUser, currentUser }) => {
    const [isLoading, setIsLoading] = useState(false);
    let username, password;
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch(process.env.REACT_APP_API_LINK + "/api/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        }).then(response => response.json().then(res => {
            if (res.username) {
                setIsLoading(false);
                setCurrentUser(res);
                navigate('/');
            } else {
                document.getElementById('error-text').style.visibility = 'visible';
            }
            setIsLoading(false);
        })).catch(err => {
            console.log("No user found");
            setIsLoading(false);
            document.getElementById('error-text').style.visibility = 'visible';
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
                {isLoading ? <span>Loading...</span> : <form onSubmit={handleLogin} action="" method="post" className='flex flex-col gap-2'>
                    <label htmlFor="username">Username</label>
                    <input required className='p-1 rounded-xl' onChange={handleUsername} type="text" name="username" id="username" />
                    <label htmlFor="password">Password</label>
                    <input required className='p-1 rounded-xl' onChange={handlePassword} type="password" name="password" id="password" />
                    <button type="submit" className=' bg-amber-300 py-2 px-5 rounded-xl hover:bg-amber-200'>Login</button>
                </form>}
                <span id='error-text' className=' text-red-800 mt-4 invisible'>Wrong login information.</span>
            </div>
        </>
    )
}

export default Login