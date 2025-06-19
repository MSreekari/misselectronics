import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src='src/assets/Logo.png' className='logo-image'></img>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link
            to="about-section"
            smooth={true}
            duration={500}
            offset={-40}
          >
            About Us
          </Link></li>
          <li><Link
            to="services"
            smooth={true}
            duration={500}
            offset={-40}
          >
            Services
          </Link></li>
          <li><a href='#'>Products</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Opportunities</a></li>
        </ul>
        
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
}
