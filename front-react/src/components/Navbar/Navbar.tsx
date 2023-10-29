import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <img src='./logo.png'  alt="logo" />
            {/* - add a link to root if multiples pages */}
            Do we want a NavBar
        </div>
        <div className='navbar-left'>
            <ul>
                <li>recherche</li>
                <li>panier</li>
                <li>compte</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar