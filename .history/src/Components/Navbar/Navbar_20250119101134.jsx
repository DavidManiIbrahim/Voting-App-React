// import React from 'react'

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    // <div classNameName='navbar navbar-expand-lg fixed-top bg-dark text-white'>
    //     <button classNameName='navbar-toggler border-1 bg-warning' data-bs-toggle="collapse" data-bs-target="#navmenu">
    //         <span classNameName='navbar-toggler-icon'></span> 
    //     </button>
    //     <div classNameName="collapse navbar-collapse">
    //     <ul classNameName='list-unstyled p-3 ' id="navmenu">
    //         <li classNameName='list-group'>About</li>
    //         <li classNameName="list-group">Contact</li>
    //         <li><a classNameName='btn btn-primary'>Login</a></li>
    //     </ul>
    //     </div>
    // </div>
    
// <!-- NavBar -->

<nav className="navbar navbar-expand-lg bg-dark text-white ">
<div className="container">
    <a href="#" className="navbar-brand text-white ">Voting App</a>

    
    <button className="navbar-toggler bg-primary" data-bs-target="#navmenu" data-bs-toggle="collapse">
        <span className="navbar-toggler-icon color"></span>
    </button>
    <div className="collapse navbar-collapse " id="navmenu">
        <ul className="navbar-nav ms-auto text-center">
            <li className="nav-link text-white">About</li>
            <li className="nav-link text-white">Contact</li>
            <li><Link to="/Login"   className="nav-link btn btn-primary text-white">Login</Link></li>
        </ul>
    </div>
</div>
</nav>
  )
}

export default Navbar