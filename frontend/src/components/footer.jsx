import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
    <div className="footer-section-brand">
      <h3>Miss Electronics</h3>
      <p>Automation at its best.</p>
    </div>
    <div className="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Follow Us</h3>
      <div className="social-icons">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">X</a>
        <a href="#">LinkedIn</a>
        <a href="#">YouTube</a>
        <a href="#">Medium</a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2025 MissElectronics. All rights reserved.</p>
  </div>
</footer>

  )
}

export default Footer