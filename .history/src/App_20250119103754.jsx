// import React from 'react'

import Home from "./Components/Home/Home"


import Login from "./Components/Pages/Login/Login"
import Register from "./Components/Pages/Register/Register"
import { Route,Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Home/>
      <Routes> 
    <Route path='/Login' element={<Login />} />
    <Route path='/Register' element={<Register />} />
    </Routes>

    </>
  )
}

export default App