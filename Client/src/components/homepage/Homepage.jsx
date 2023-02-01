import React, { useState } from 'react'

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
            <button className=' bg-amber-300 py-2 px-5 rounded-xl font-semibold hover:bg-amber-200' onClick={fetchUsers}>Fetch users from DB!</button>
            {serverData &&
                <div className=' my-8'>
                    <table className=' bg-white border-2 border-gray-500'>
                        <thead className=' bg-gray-200'>
                            <tr>
                                <th scope='col' className=' py-2 px-4'>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {serverData.map((item) => {
                                return (<tr key={item._id}>
                                    <td className=' border-2 border-gray-500 py-2 px-4'>{item.username}</td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default Homepage