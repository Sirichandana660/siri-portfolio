import React from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LEFT: Logo */}
        <div className="nav-section nav-left">
          <a href="#home" className="logo">SIRI</a>
        </div>

        {/* CENTER: Navigation Links */}
        <div className="nav-section nav-center">
          <ul className="nav-links">
            <li><a href="#about">about</a></li>
            <li><a href="#education">education</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#projects">portfolio</a></li>
            <li><a href="#experience">experience</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </div>

        {/* RIGHT: Social Icons */}
        <div className="nav-section nav-right">
          <div className="nav-socials">
            <a href="https://www.linkedin.com/in/parupudi-siri-chandana/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/_s.i.r.i_016/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="mailto:sirichandana852@gmail.com"><FaEnvelope /></a>
            <a href="https://github.com/Sirichandana660" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;