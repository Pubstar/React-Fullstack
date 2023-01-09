import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Register from './components/register/Register';
import Login from './components/login/Login';

const App = () => {
  // Main page
  // TODO make something relevant instead of fake users
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App