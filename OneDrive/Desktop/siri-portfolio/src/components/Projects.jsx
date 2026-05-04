import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: "AI Resume Job Matcher",
      description: "An intelligent full-stack system that matches resumes to relevant job roles using semantic embeddings, skill extraction, and hybrid ranking. Supports PDF upload, explainable recommendations, and real-time matching via FastAPI.",
      tech: ["FastAPI", "React", "Sentence Transformers", "Scikit-learn", "Pandas"],
      link: "https://github.com/Sirichandana660/Resume-Screener-and-Job-Matcher"
    },
    {
      title: "Sign Language Translator",
      description: "A real-time Computer Vision system that translates hand gestures into text using MediaPipe and LSTM neural networks.",
      tech: ["Python", "OpenCV", "TensorFlow", "MediaPipe"],
      link: "https://github.com/Sirichandana660/Sign-language-translator"
    },
    {
      title: "Disease Prediction Using Symptoms - ML Model",
      description: "Machine Learning powered web application built with FastAPI that predicts diseases based on user symptoms using trained classification models.",
      tech: ["FastAPI", "Scikit-learn", "Pandas", "NumPy", "Uvicorn"],
      link: "https://github.com/Sirichandana660/Disease-Prediction--FAST-API"
    },
    {
      title: "Speech-to-Text Transcription",
      description: "End-to-end audio processing pipeline utilizing Whisper AI and fine-tuned speech models for high-accuracy transcription.",
      tech: ["Whisper API", "Python", "Librosa", "PyTorch"],
      link: "https://github.com/Sirichandana660/Speech-to-text-transcription"
    },
    {
      title: "Customer Churn Prediction",
      description: "An analytical ML model predicting user attrition using XGBoost and SHAP for model interpretability.",
      tech: ["Scikit-learn", "XGBoost", "Pandas", "SHAP"],
      link: "https://github.com/Sirichandana660/Customer-Churn-Prediction"
    },
    {
      title: "Player Statistics ML",
      description: "A data-driven performance analyzer that predicts player outcomes based on historical match statistics.",
      tech: ["ML", "Regression", "NumPy", "Matplotlib"],
      link: "https://github.com/Sirichandana660/Player-Statistics-"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">
        Featured <span className="green-text">Projects</span>
      </h2>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech-stack">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View Source Code ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;