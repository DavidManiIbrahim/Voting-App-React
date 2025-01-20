// import React from 'react'

const Navbar = () => {
  return (
    // <div classNameNameName='navbar navbar-expand-lg fixed-top bg-dark text-white'>
    //     <button classNameNameName='navbar-toggler border-1 bg-warning' data-bs-toggle="collapse" data-bs-target="#navmenu">
    //         <span classNameNameName='navbar-toggler-icon'></span> 
    //     </button>
    //     <div classNameNameName="collapse navbar-collapse">
    //     <ul classNameNameName='list-unstyled p-3 ' id="navmenu">
    //         <li classNameNameName='list-group'>About</li>
    //         <li classNameNameName="list-group">Contact</li>
    //         <li><a classNameNameName='btn btn-primary'>Login</a></li>
    //     </ul>
    //     </div>
    // </div>
    
// <!-- NavBar -->

<nav classNameNameName="navbar navbar-expand-lg bg-dark text-white ">
<div classNameName="container">
    <a href="#" classNameName="navbar-brand text-white ">Voting App</a>

    
    <button classNameName="navbar-toggler" data-bs-target="#navmenu" data-bs-toggle="collapse">
        <span classNameName="navbar-toggler-icon bg-primary"></span>
    </button>
    <div classNameName="collapse navbar-collapse " id="navmenu">
        <ul classNameName="navbar-nav ms-auto text-center">
            <li classNameName="nav-link text-white">About</li>
            <li classNameName="nav-link text-white">Contact</li>
            <a href="./Login.html"  classNameName="nav-link btn btn-primary text-white">Login</a>
        </ul>
    </div>
</div>
</nav>
  )
}

export default Navbar