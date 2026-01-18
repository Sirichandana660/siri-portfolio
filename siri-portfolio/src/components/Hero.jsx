import React, { useState } from 'react';
import artisticFace from '../assets/left-face.png'; 

const Hero = () => {
  const [mousePos, setMousePos] = useState(50); 
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const xPercent = (e.clientX / window.innerWidth) * 100;
    setMousePos(xPercent);
  };

  const leftOpacity = mousePos > 55 ? 0.2 : 1;
  const rightOpacity = mousePos < 45 ? 0.2 : 1;

  return (
    <section id="home" className="hero" onMouseMove={handleMouseMove}>
      {/* Visual background elements for depth */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      
      <div className="hero-content-wrapper">
        <div className="hero-column left-column" style={{ opacity: leftOpacity }}>
          <p className="status-tag">● AI_ENGINE_RUNNING</p>
          <h1 className="hero-title">AI/ML</h1>
          <h2 className="purple-gradient">Developer</h2>
          <ul className="hero-bullets">
            <li>Neural Network Architectures</li>
            <li>Computer Vision Specialist</li>
            <li>Predictive Data Modeling</li>
          </ul>
        </div>

        <div className="hero-column center-column">
          <div 
            className={`image-container ${isHovered ? 'image-active' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={artisticFace} alt="Siri Artistic" className="main-art" />
          </div>
        </div>

        <div className="hero-column right-column" style={{ opacity: rightOpacity }}>
          <div className="right-content-aligner">
            <p className="status-tag">● SYSTEM_STABLE</p>
            <h1 className="hero-title no-wrap">FULL STACK</h1>
            <h2 className="blue-gradient">Engineer</h2>
            <ul className="hero-bullets">
              <li>Scalable Cloud Architecture</li>
              <li>React & Modern Frontend</li>
              <li>High-Performance Backends</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;