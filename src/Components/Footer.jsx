// Footer.jsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>

      <div className="quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +1 123-456-7890</p>
        <p>Address: 00618-0100, Nairobi, Kenya</p>
      </div>

      <div className="newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <form>
          <input type="email" placeholder="Your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="copyright">
        <p>&copy; 2023 MarWeld.Co. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
