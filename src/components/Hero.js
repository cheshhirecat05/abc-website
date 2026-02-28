import React from "react";
import "../styles/main.css";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${process.env.PUBLIC_URL}/hero.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white"
      }}
    >
      <div className="hero-container">
        <div className="hero-content">
          <h1>Architect Engineering Consultancy</h1>
          <div className="subtitle">
             Your Trusted Partner in Engineering Excellence
          </div>
          <p>Providing comprehensive engineering consultancy services for residential, commercial, and industrial projects across Nepal.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
