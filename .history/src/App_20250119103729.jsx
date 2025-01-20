// import React from 'react'

import About from "./Components/About/About"
import Features from "./Components/Features/Features"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"


import Login from "./Components/Pages/Login/Login"
import Register from "./Components/Pages/Register/Register"
import { Route,Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Home
      <Routes> 
    <Route path='/Login' element={<Login />} />
    <Route path='/Register' element={<Register />} />
    </Routes>

    </>
  )
}

export default App