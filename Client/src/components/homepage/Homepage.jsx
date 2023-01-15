import React, { useState } from 'react'

// TODO: ? Learn and implement tailwindcss

const Homepage = () => {
    const [serverData, setServerData] = useState();

    function fetchUsers() {
        fetch(process.env.REACT_APP_API_KEY + "/api/getUsers")
            .then(response => response.json()
                .then(data => setServerData(data)));
    }

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl mb-8'>Display registered users</h1>
            <button className=' bg-amber-300 py-2 px-5 rounded-xl' onClick={fetchUsers}>Fetch users from DB!</button>
            {serverData && serverData.map((item, idx) => {
                return <div key={idx} style={{ padding: 10 + "px" }}>
                    <h3>{item.username}</h3>
                </div>
            })}
        </div>
    )
}

export default Homepage