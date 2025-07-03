import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          {/* <img src='src/assets/Logo.png' className='logo-image'></img> */}
          <p>MissElectronics</p>
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
          <li><Link
            to="contactus"
            smooth={true}
            duration={500}
            offset={-40}
          >
            Contact Us
          </Link></li>
          <li><Link
            to="opp-container"
            smooth={true}
            duration={500}
            offset={-40}
          >Opportunities
          </Link></li>
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
