import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';

const App = () => {
  // Main page
  // TODO make something relevant instead of fake users
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App