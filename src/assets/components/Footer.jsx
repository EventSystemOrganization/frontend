import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 Peterdraw</p>
        <nav className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
