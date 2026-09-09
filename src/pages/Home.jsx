import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-tag">B.TECH CSE · BANASTHALI VIDYAPITH</div>
        <h1 className="hero-title">Disha Agrawal</h1>
        <p className="hero-subtitle">
          Building intelligent systems with <span className="highlight">AI</span> &{" "}
          <span className="highlight">Machine Learning</span>
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">8.0</span>
            <span className="stat-label">CGPA</span>
          </div>
          <div className="stat">
            <span className="stat-value">10+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat">
            <span className="stat-value">3</span>
            <span className="stat-label">Internship Offers</span>
          </div>
        </div>
      </section>

      <section className="dashboard-grid">
        <Link to="/education" className="dash-card">
          <span className="dash-icon">🎓</span>
          <h3>Education</h3>
          <p>10th, 12th & semester-wise college journey</p>
        </Link>
        <Link to="/projects" className="dash-card">
          <span className="dash-icon">🧠</span>
          <h3>Projects</h3>
          <p>AI/ML builds — flagship & side projects</p>
        </Link>
        <Link to="/experience" className="dash-card">
          <span className="dash-icon">💼</span>
          <h3>Experience</h3>
          <p>Internship offers & work</p>
        </Link>
        <Link to="/skills" className="dash-card">
          <span className="dash-icon">⚙️</span>
          <h3>Skills</h3>
          <p>Tech stack & tools</p>
        </Link>
      </section>
    </div>
  );
}

export default Home;