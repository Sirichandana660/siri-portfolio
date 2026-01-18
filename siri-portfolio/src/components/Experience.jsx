function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>

      <div className="timeline">
        <div className="timeline-item">
          <span className="time">Sept 2025 – Present</span>
          <h3>Machine Learning Developer · T-Home Fintech</h3>
          <p>
            Developed supervised machine learning models for loan approval prediction and financial risk assessment. Responsible for data 
            preprocessing, feature engineering, model training, and evaluation using metrics such as accuracy, F1-score, precision, and recall.
             Worked with models including Logistic Regression, Random Forest, and XGBoost. Performed hyperparameter tuning and cross-validation
              to improve model generalization and reduce overfitting. Conducted exploratory data analysis (EDA) to identify key risk patterns 
              and feature importance. Implemented end-to-end pipelines using Python, Pandas, NumPy, and Scikit-learn for reproducible 
              experiments.
          </p>
        </div>

        <div className="timeline-item">
          <span className="time">Apr 2025 – Sept 2025</span>
          <h3>Junior Developer Intern · Credencer Technologies</h3>
          <p>
            Contributed to software development and machine learning workflows by assisting in data collection, cleaning, and preprocessing, 
            as well as implementing and validating ML models. Collaborated within a team environment to manage source code, track changes, and 
            resolve conflicts using Git and GitHub. Supported end-to-end development tasks, including testing and documentation, to ensure 
            project consistency and reliability. Gained hands-on experience in building responsive web pages and basic web applications. 
            Utilized modern tools such as Canva for design assets and WordPress for content management and deployment.
          </p>
        </div>

        <div className="timeline-item">
          <span className="time">Jan 2025 – March 2025</span>
          <h3>Android Developer Virtual Intern · EduSkills</h3>
          <p>
            Developed native Android applications using Kotlin, following MVVM architecture and clean coding principles. Designed responsive 
            user interfaces with XML layouts and Material Design components, ensuring consistency across devices. Integrated RESTful APIs for 
            dynamic data handling and implemented asynchronous operations efficiently. Utilized Firebase services for authentication and real-
            time database management. Performed debugging, testing, and performance optimization using Android Studio to enhance application 
            stability and user experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
