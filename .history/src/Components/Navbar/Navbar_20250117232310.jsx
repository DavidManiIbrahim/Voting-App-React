// import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar navbar-expand-lg fixed-top bg-dark'>
        <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className='navbar-toggler-icon'></span>
        </button>
        <div className="collapse navbar-collapse">

        <ul className='list-unstyled p-3 ' id="navmenu">
            <li className='list-group'>About</li>
            <li>Contact</li>
            <li><a className='btn btn-primary'>Login</a></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar