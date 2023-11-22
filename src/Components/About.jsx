import React from 'react';
import './About.css'; // Import your CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us">
        <div className="content-banner">
      <div className="about-content">
        <h2>Welcome to MarWeld.co</h2>
        <p>
          At MarWeld.co, we believe in the artistry of welding and the transformative power it brings to your projects.
          Our commitment is to deliver top-notch welding expertise and services, providing high-quality and custom solutions tailored to your unique needs.
        </p>
      </div>
      {/* end of about-content */}
      
      <div className="banner">
        <img src='about.svg' alt="About Us" />
      </div>
      </div>

      <h2>Meet Our Team</h2>
      <div className='team'>
        <div className="team-member">
          <img src="person1.svg" alt="Team Member 1" />
          <h3>Lynne Wanjiku</h3>
          <p>Welding Expert</p>
        </div>
        <div className="team-member">
          <img src="person2.svg" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Design Specialist</p>
        </div>
        <div className="team-member">
          <img src="person4.jpg" alt="Team Member 3" />
          <h3>Bob Johnson</h3>
          <p>Welding Expert</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
