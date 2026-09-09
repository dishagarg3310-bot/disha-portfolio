import { Link } from "react-router-dom";
import { experience } from "../data/experience";

function ExperiencePage() {
  return (
    <div className="page">
      <h1 className="page-title">Experience & Offers</h1>

      <div className="dashboard-grid">
        {experience.map((exp) => (
          <Link key={exp.id} to={`/experience/${exp.id}`} className="dash-card exp-card">
            <div className="offer-badge">Offer Letter</div>
            <h3>{exp.company}</h3>
            <p>{exp.role}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ExperiencePage;