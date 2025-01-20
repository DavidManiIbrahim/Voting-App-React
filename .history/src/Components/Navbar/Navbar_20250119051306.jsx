// import React from 'react'

const Navbar = () => {
  return (
    // <div classNameNameNameName='navbar navbar-expand-lg fixed-top bg-dark text-white'>
    //     <button classNameNameNameName='navbar-toggler border-1 bg-warning' data-bs-toggle="collapse" data-bs-target="#navmenu">
    //         <span classNameNameNameName='navbar-toggler-icon'></span> 
    //     </button>
    //     <div classNameNameNameName="collapse navbar-collapse">
    //     <ul classNameNameNameName='list-unstyled p-3 ' id="navmenu">
    //         <li classNameNameNameName='list-group'>About</li>
    //         <li classNameNameNameName="list-group">Contact</li>
    //         <li><a classNameNameNameName='btn btn-primary'>Login</a></li>
    //     </ul>
    //     </div>
    // </div>
    
// <!-- NavBar -->

<nav classNameNameNameName="navbar navbar-expand-lg bg-dark text-white ">
<div classNameNameName="container">
    <a href="#" classNameNameName="navbar-brand text-white ">Voting App</a>

    
    <button classNameNameName="navbar-toggler" data-bs-target="#navmenu" data-bs-toggle="collapse">
        <span classNameNameName="navbar-toggler-icon bg-primary"></span>
    </button>
    <div classNameNameName="collapse navbar-collapse " id="navmenu">
        <ul classNameNameName="navbar-nav ms-auto text-center">
            <li classNameNameName="nav-link text-white">About</li>
            <li classNameNameName="nav-link text-white">Contact</li>
            <a href="./Login.html"  classNameNameName="nav-link btn btn-primary text-white">Login</a>
        </ul>
    </div>
</div>
</nav>
  )
}

export default Navbar