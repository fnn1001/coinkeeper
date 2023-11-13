// navbar.jsx

import React from 'react';
import logo from '../images/logo-naked.png';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <a href="/" className="logo-section"> {/* Use a simple anchor tag */}
                <img src={logo} className="main-logo" alt="CoinKeeper Logo" />
                <h1 className="logo-text">CoinKeeper</h1>
            </a>
            <div className='menu-section'>
                <a href="/dashboard" className='nav-item'>Dashboard</a>
                <a href="/investments" className='nav-item'>Investments</a>
                <a href="/login" className='nav-item button'>Log in</a>
                <a href="/get-started" className='nav-item button'>Get started</a>
            </div>
        </div>
    );
}

export default Navbar;
