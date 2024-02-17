import React from 'react';
import logo from "./logo_new.png";
import './Navbar.css';
const Navbar = () => {
    return(
        <header className="header">
        <div className="header-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header-nav">
          
            <div className='header-nav-ul'><a href="/">Home</a></div>
            <div className='header-nav-ul'><a href="/About">About Us</a></div>
            <div className='header-nav-ul'><a href="/">Contact Us</a></div>
            
          
        </div>
        <div className="header-nav-auth">

            <div className='header-nav-auth-in'><a href="" >Login</a></div>
            <div className='header-nav-auth-in'><a href="" >Sign Up</a></div>
          
        </div>
        
      </header>
    )
}

export default Navbar