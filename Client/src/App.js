import React, { useState } from 'react'
import './App.css';

//components
import Navbar from './components/navbar/navbar';

const App = () => {

  let username;
  let note;

  const [serverData, setServerData] = useState();

  function fetchUsers() {
    fetch("/api/getUsers")
      .then(response => response.json()
        .then(data => setServerData(data)));
  }

  function createUser(event) {
    event.preventDefault();
    fetch("/api/createUser", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: username, note: note })
    })
    event.target.username.value = "";
    event.target.note.value = "";
    fetchUsers();
  }

  function setUsername(event) {
    username = event.target.value;
  }

  function setNote(event) {
    note = event.target.value;
  }

  // Main page
  // TODO make something relevant instead of fake users
  return (
    <>
      <Navbar />
      <div className='container'>
        <h1>Sending / receiving from server</h1>
        <form onSubmit={createUser}>
          <input onChange={setUsername} type="text" name="username" id="username" placeholder='username' />
          <input onChange={setNote} type="text" name="note" id="note" placeholder='note' />
          <button>Create User!</button>
        </form>
        <button onClick={fetchUsers}>Fetch users from DB!</button>
        {serverData && serverData.map((item, idx) => {
          return <div key={idx} style={{ padding: 10 + "px" }}>
            <h3>{item.user}</h3>
            <p>{item.note}</p>
          </div>
        })}
      </div>
    </>
  )
}

export default App