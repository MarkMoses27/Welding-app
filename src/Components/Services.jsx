// Services.jsx

import React from 'react';
import { FaWrench, FaCogs, FaLightbulb, FaHammer, FaBuilding, FaPaintBrush } from 'react-icons/fa';
import './Services.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';
import $ from 'jquery'; // Import jQuery

const Services = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact');
    // Use jQuery for smooth scroll
    $('html, body').animate(
      {
        scrollTop: $('#contact-section').offset().top,
      },
      1000
    );

    // If you want to use the React Router navigation as well, uncomment the line below
    // navigate('/contact');
  };

  return (
    <div className="services">
      <h2>Our Services</h2>

      <div className="services-content">
        {/* Your service items go here */}
        <div className="service-item">
          <FaWrench size={48} />
          <h3>Welding Expertise</h3>
          <p>Top-notch welding services delivered by skilled professionals.</p>
        </div>

        <div className="service-item">
          <FaCogs size={48} />
          <h3>Custom Fabrication</h3>
          <p>Custom solutions tailored to your unique needs and specifications.</p>
        </div>

        <div className="service-item">
          <FaLightbulb size={48} />
          <h3>Design Innovation</h3>
          <p>Innovative design services to bring your projects to life.</p>
        </div>

        <div className="service-item">
          <FaHammer size={48} />
          <h3>Construction Welding</h3>
          <p>Expert welding services for construction projects.</p>
        </div>

        <div className="service-item">
          <FaBuilding size={48} />
          <h3>Structural Fabrication</h3>
          <p>Structural fabrication for durable and reliable structures.</p>
        </div>

        <div className="service-item">
          <FaPaintBrush size={48} />
          <h3>Surface Finishing</h3>
          <p>High-quality surface finishing for a polished look.</p>
        </div>

        <div className="get-in-touch" id="contact-section">
          <h2> Want to see us in action? </h2>
          <p>Have questions, feedback, or a project in mind? We'd love to hear from you!</p>
          <button className="btn" onClick={handleButtonClick}>
            Get in touch now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
