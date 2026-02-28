import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">AEC</a>

        <ul className={`nav-menu ${active ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact</a></li>
           <li>
            <Link to="/admin" className="admin-btn">
              Admin Login
            </Link>
          </li>
   

        </ul>

        <div className="hamburger" onClick={() => setActive(!active)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
