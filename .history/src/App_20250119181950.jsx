// import React from 'react'
import { Routes,Route,Link } from "react-router-dom"


const App = () => {
  return (
    <>

{/* // <!-- NavBar --> */}

<nav className="navbar navbar-expand-lg bg-dark text-white fixed-top">
<div className="container">
    <a href="#" className="navbar-brand text-white ">Voting App</a>

    
    <button className="navbar-toggler bg-primary" data-bs-target="#navmenu" data-bs-toggle="collapse">
        <span className="navbar-toggler-icon color"></span>
    </button>
    <div className="collapse navbar-collapse " id="navmenu">
        <ul className="navbar-nav ms-auto text-center">
            <li className="nav-link text-white">About</li>
            <li className="nav-link text-white">Contact</li>
            <li><Link to="/Login"   className=" btn btn-primary text-white">Login</Link></li>
        </ul>
    </div>
</div>

</nav>



<Routes>
  <Route path/>
</Routes>





    </>
  )
}

export default App