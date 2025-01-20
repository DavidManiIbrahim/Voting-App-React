// import React from 'react'

const Navbar = () => {
  return (
    // <div className='navbar navbar-expand-lg fixed-top bg-dark text-white'>
    //     <button className='navbar-toggler border-1 bg-warning' data-bs-toggle="collapse" data-bs-target="#navmenu">
    //         <span className='navbar-toggler-icon'></span> 
    //     </button>
    //     <div className="collapse navbar-collapse">
    //     <ul className='list-unstyled p-3 ' id="navmenu">
    //         <li className='list-group'>About</li>
    //         <li className="list-group">Contact</li>
    //         <li><a className='btn btn-primary'>Login</a></li>
    //     </ul>
    //     </div>
    // </div>
    
// <!-- NavBar -->

<nav class="navbar navbar-expand-lg bg-dark text-white ">
<div class="container">
    <a href="#" class="navbar-brand text-white ">Voting App</a>

    
    <button class="navbar-toggler" data-bs-target="#navmenu" data-bs-toggle="collapse">
        <span class="navbar-toggler-icon bg-primary"></span>
    </button>
    <div class="collapse navbar-collapse " id="navmenu">
        <ul class="navbar-nav ms-auto text-center">
            <li class="nav-link text-white">About</li>
            <li class="nav-link text-white">Contact</li>
            <a href="./Login.html"  class="nav-link btn btn-primary text-white">Login</a>
        </ul>
    </div>
</div>
</nav>
  )
}

export default Navbar