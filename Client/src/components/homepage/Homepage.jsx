import React, { useState } from 'react'
import './homepage.css';

// TODO: ? Learn and implement tailwindcss

const Homepage = () => {
    const [serverData, setServerData] = useState();

    function fetchUsers() {
        fetch(process.env.REACT_APP_API_KEY + "/api/getUsers")
            .then(response => response.json()
                .then(data => setServerData(data)));
    }

    return (
        <div className='container'>
            <h1>Display registered users</h1>
            <button onClick={fetchUsers}>Fetch users from DB!</button>
            {serverData && serverData.map((item, idx) => {
                return <div key={idx} style={{ padding: 10 + "px" }}>
                    <h3>{item.username}</h3>
                </div>
            })}
        </div>
    )
}

export default Homepage