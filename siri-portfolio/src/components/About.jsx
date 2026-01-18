import React from 'react';
// Changed this to your existing face image to fix the "Failed to resolve" error
import myAboutImg from '../assets/my-face.jpg'; 

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About <span className="green-text">me</span></h2>
      
      <div className="about-card">
        <div className="about-content">
          <p className="about-text">
            I am a final-year BTech student passionate about building modern 
            web applications and intelligent systems. I enjoy working across 
            the stack, from front-end design to complex back-end logic.My goal is to create technology that is not only functional but also 
            provides a seamless and intuitive experience for users.
          </p>
          <p className="about-text">
            I am a forward-thinking developer deeply invested in <strong>emerging technologies</strong>. 
  My journey is driven by a fascination with how Generative AI, Web3, and edge computing 
  are reshaping our digital landscape. I thrive on exploring the "what's next," 
  constantly experimenting with new frameworks and tools to build future-ready solutions.
          </p>

          <div className="info-grid">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <strong>Location:</strong>
                <p>Hyderabad, India</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🎓</span>
              <div>
                <strong>Study:</strong>
                <p>JNTU-Hyderabad</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🎂</span>
              <div>
                <strong>Age:</strong>
                <p>21</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🎯</span>
              <div>
                <strong>Interests:</strong>
                <p>AI/ML, FullStack, Java</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-image-wrapper">
          <img src={myAboutImg} alt="Siri Chandana" className="about-floating-img" />
        </div>
      </div>
    </section>
  );
};

export default About;