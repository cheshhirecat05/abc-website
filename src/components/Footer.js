import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-grid">

          {/* Company Info */}
          <div className="footer-section">
            <h3>ABC</h3>
            <p>
              Your gateway to endless stories and knowledge. We provide
              professional services and quality solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
           <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

          </div>

          {/* Categories / Services */}
          <div className="footer-section">
            <h3>Our Services</h3>
            <ul>
              <li><a href="#Services">Architecture</a></li>
              <li><a href="#Services">Construction</a></li>
              <li><a href="#Services">Urban Planningg</a></li>
              <li><a href="#Services">Landscape Design</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>📍 Kalanki, Kathmandu, Nepal</li>
              <li>📞 01-12345678</li>
              <li>✉️ aec@info.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ABC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
