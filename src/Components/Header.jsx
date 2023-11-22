import React from 'react';
import { Link } from 'react-router-dom';
 import SearchIcon from './SearchIcon';
import './Header.css';
const Header = () => {
  return (
    <div className='header'>
      {/* Logo section */}
      <div className="logo">
        <Link to="/">
          MarWeld.co
        </Link>
      </div>

      {/* Navigation section */}
      <nav className='nav-links'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Search icon section */}
      <div className="search-icon">
        { <SearchIcon /> }
      </div>
    </div>
  );
}

export default Header;
