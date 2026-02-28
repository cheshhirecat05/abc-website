import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="section-header">
          <div className="subtitle">About Us</div>
          <h2>Building the Future with Innovation and Expertise</h2>
        </div>

        <div className="about-content">
          <p>
            ABC is a leading business consultancy firm committed to delivering
            high-quality services across various business disciplines.
          </p>
          <p>
            With a team of experienced professionals and state-of-the-art
            technology, we provide innovative solutions tailored to meet our
            clients' unique needs.
          </p>
          <p>
            Our commitment to excellence, integrity, and client satisfaction
            has made us a trusted partner for businesses of all scales.
          </p>
        </div>

        <div className="about-title">
          <h3>About ABC</h3>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">150+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">8+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">8+</div>
            <div className="stat-label">Expert Consultants</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">2+</div>
            <div className="stat-label">Office Locations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
