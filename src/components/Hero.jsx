function Hero() {
  return (
    <section className="hero">
      <div className="hero-tag">B.TECH CSE · BANASTHALI VIDYAPITH</div>
      <h1 className="hero-title">
        Disha Agrawal
      </h1>
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
  );
}

export default Hero;