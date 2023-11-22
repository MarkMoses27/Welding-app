// Home.jsx

import React from 'react';
import { FaPhone } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <img src='background.svg' alt="background.svg" className="background-image" />

      <div className="content">
        <h1 className="animated-text">Welcome to <span></span></h1>
        <p>Best for welding expertise and services.</p>
        <div className="phone-section">
          <FaPhone className="phone-icon" />
          <p className="phone-number">086 161 616 316</p>
        </div>

        <div className="buttons">
          <button className="primary-button">Get Started</button>
          <button className="secondary-button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
