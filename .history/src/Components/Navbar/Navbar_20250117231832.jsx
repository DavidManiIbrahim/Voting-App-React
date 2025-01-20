import React from 'react'

const Navbar = () => {
  return (
    <div className='nav Navbar-expand-lg'>
        <button className='navbar-toggler'>
            <span className='navbar-toggler-icon'></span>
        </button>
        <ul className='list-unstyled p-3'>
            <li class>About</li>
            <li>Contact</li>
            <li><a className='btn btn-primary'>Login</a></li>
        </ul>
    </div>
  )
}

export default Navbar