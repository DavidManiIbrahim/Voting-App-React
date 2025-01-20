// import React from 'react'

import About from "./Components/About/About"
import Features from "./Components/Features/Features"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"


import Login from "./Components/Pages/Login/Login"
import Login from "./Components/Pages/Re/Register"
import { Route,Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Routes> 
    <Route path='/Login' element={<Login />} />
    <Route path='/Register' element={<Login />} />
    </Routes>

    </>
  )
}

export default App