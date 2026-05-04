import React from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container-centered">
        <h1 className="contact-title">contact<span>.</span></h1>
        <p className="contact-subtitle">
          Get in touch with me via social media <br /> or send me an email.
        </p>
        
        <div className="social-grid-centered">
          <a href="https://www.linkedin.com/in/parupudi-siri-chandana/" target="_blank" rel="noreferrer" className="social-item">
            <span className="social-icon linkedin"><FaLinkedin /></span>
            <span className="social-name">LinkedIn</span>
          </a>
          
          <a href="https://github.com/Sirichandana660" target="_blank" rel="noreferrer" className="social-item">
            <span className="social-icon github"><FaGithub /></span>
            <span className="social-name">GitHub</span>
          </a>

          <a href="mailto:sirichandana852@gmail.com" className="social-item">
            <span className="social-icon email"><FaEnvelope /></span>
            <span className="social-name">Email</span>
          </a>

          <a href="https://www.instagram.com/_s.i.r.i_016/" target="_blank" rel="noreferrer" className="social-item">
            <span className="social-icon instagram"><FaInstagram /></span>
            <span className="social-name">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;