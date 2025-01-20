// import React from 'react'

import About from "./Components/About/About"
import Features from "./Components/Features/Features"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Login from "./Components/Pages/Login/Login"



const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Login />
    </>
  )
}

export default App