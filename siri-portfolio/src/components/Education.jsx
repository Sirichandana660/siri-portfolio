import React from 'react';

const Education = () => {
  const eduData = [
    {
      year: "2022 — Present",
      title: "Bachelor of Technology (B-Tech)",
      subject: "CSE - AI & ML",
      school: "Sphoorthy Engineering College (JNTU)",
      status: "Currently pursuing 4th year",
      score: "8.8 CGPA"
    },
    {
      year: "2020 — 2022",
      title: "Intermediate",
      subject: "MPC",
      school: "Narayana Junior College",
      status: "Completed",
      score: "98%"
    },
    {
      year: "2020",
      title: "High School",
      subject: "CBSE Board",
      school: "Sri Vamshidhar High School",
      status: "Completed",
      score: "94%"
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Academic <span className="green-text">Path</span></h2>
      <div className="edu-timeline">
        {eduData.map((item, index) => (
          <div className="edu-item" key={index}>
            <div className="edu-dot"></div>
            <div className="edu-year">{item.year}</div>
            <div className="edu-card">
              <h3>{item.title} <span>{item.subject}</span></h3>
              <p className="school-name">{item.school}</p>
              <div className="edu-footer">
                <span className="edu-status">{item.status}</span>
                <span className="edu-score">{item.score}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;