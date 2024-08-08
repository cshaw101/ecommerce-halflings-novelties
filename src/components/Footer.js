import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; HalfLings Novelties. All rights reserved.</p>
        <div className="social-media">
          <a href="/" target="_blank" rel="noopener noreferrer">Home</a>
          <a href="/about" target="_blank" rel="noopener noreferrer">About</a>
          <a href="/store" target="_blank" rel="noopener noreferrer">Shop</a>
          <a href="/" target="_blank" rel="noopener noreferrer">Careers</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;