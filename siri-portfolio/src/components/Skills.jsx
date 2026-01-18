import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const skillData = [
    {
      id: 'languages',
      title: 'Core Languages',
      desc: 'Foundational programming languages for systems and scripting.',
      tools: ['Python', 'Java', 'C', 'SQL']
    },
    {
      id: 'aiml',
      title: 'AI & Machine Learning',
      desc: 'Building intelligent systems and computer vision models.',
      tools: ['ML', 'OpenCV', 'CNNs', 'SHAP','NumPy','Pandas', 'Scikit-learn', 'MediaPipe']
    },
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      desc: 'Creating responsive and scalable web architectures.',
      tools: ['JavaScript','React', 'Node.js', 'HTML5', 'CSS3 / Tailwind']
    },
    {
      id: 'foundation', // Simplified ID
      title: 'Foundation & Storage',
      desc: 'Essential Storage Systems, Databases and version control workflows.',
      tools: [ 'MySQL', 'Git', 'GitHub', 'Vite']
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My Technical <span className="green-text">Skills</span></h2>
      <div className="skills-grid">
        {skillData.map((item) => (
          <div 
            key={item.id} 
            className={`skills-card ${activeCategory === item.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(activeCategory === item.id ? null : item.id)}
          >
            <h3>{item.title}</h3>
            <p className="skills-desc">{item.desc}</p>
            
            <div className="skills-drawer">
              <div className="skill-pills">
                {item.tools.map((tool) => (
                  <span key={tool} className="skill-pill">{tool}</span>
                ))}
              </div>
            </div>

            <div className="click-indicator">
              {activeCategory === item.id ? '− Hide Tools' : '+ View Tools'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;