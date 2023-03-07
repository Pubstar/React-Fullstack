import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ setCurrentUser }) => {

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    let username, password;

    function handleRegister(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch(process.env.REACT_APP_API_LINK + "/api/createUser", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        }).then(res => res.json().then(response => {
            setIsLoading(false);
            if (response.result === true) {
                setCurrentUser(response.user)
                navigate('/');
            } else if (response.result === false) {
                document.getElementById('error-text').style.visibility = 'visible';
            }
        })).catch(err => {
            setIsLoading(false);
            console.log(err);
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
                <h1 className='text-3xl mb-8'>Register</h1>
                {isLoading ? <span>Loading...</span> : <form onSubmit={handleRegister} className='flex flex-col gap-2'>
                    <label htmlFor="username">Username</label>
                    <input required className='p-1 rounded-xl' onChange={handleUsername} type="text" name="username" id="username" />
                    <label htmlFor="password">Password</label>
                    <input required className='p-1 rounded-xl' onChange={handlePassword} type="password" name="password" id="password" />
                    <button type="submit" className='bg-amber-300 py-2 px-5 rounded-xl hover:bg-amber-200'>Register</button>
                </form>}
                <span id='error-text' className=' text-red-800 mt-4 invisible'>Username already exists.</span>
            </div>
        </>
    )
}

export default Register