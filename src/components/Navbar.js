import React from 'react';
import { Link } from 'react-router-dom';
import BurgerLogo from "../images/burgerkinglogo.png"; 
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={BurgerLogo} alt='Burger Resmi' />
            <div className='main_link'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;

