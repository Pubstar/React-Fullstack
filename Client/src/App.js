import React, { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/navbar/Navbar.jsx';
import Homepage from './components/homepage/Homepage.jsx';
import Register from './components/register/Register.jsx';
import Login from './components/login/Login.jsx';

const App = () => {
  const [currentUser, setCurrentUser] = useState();
  // Main page
  // TODO make something relevant instead of fake users
  return (
    <>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register setCurrentUser={setCurrentUser} />} />
        <Route path="/login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      </Routes>
    </>
  )
}

export default App