import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav id="navbar">
      <div id="logo">
        <img src="/1.Project_1/logo.png" alt="EcoTech Innovators" />
      </div>
      <div className="Navbar-Pages justify-end">
        <ul>
          <li className="item"><Link to="/">Home</Link></li>
          <li className="item"><Link to="/about">About Us</Link></li>       
             <li className="item"><Link to="/sign-in/up">Sign In/Up</Link></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
