import { useParams, Link } from "react-router-dom";
import { experience } from "../data/experience";

function ExperienceDetailPage() {
  const { companyId } = useParams();
  const exp = experience.find((e) => e.id === companyId);

  if (!exp) {
    return (
      <div className="page">
        <p>Not found.</p>
        <Link to="/experience" className="back-link">← Back to Experience</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/experience" className="back-link">← Back to Experience</Link>

      <div className="offer-badge" style={{ display: "inline-block", marginBottom: "1rem" }}>
        Offer Letter
      </div>
      <h1 className="page-title" style={{ textAlign: "left" }}>{exp.company}</h1>
      <p style={{ color: "#93a0ba", marginBottom: "0.5rem" }}>{exp.role}</p>
      {exp.startedFrom && <p className="sem-card-exam">Since {exp.startedFrom}</p>}

      {exp.image ? (
        <a href={exp.image} target="_blank" rel="noreferrer" className="offer-view-box">
          📄 View Offer Letter
        </a>
      ) : (
        <div className="project-image-placeholder">
          <span>Add offer letter image</span>
        </div>
      )}

      {exp.intro && (
        <div className="detail-block">
          <h3>About This Internship</h3>
          <p>{exp.intro}</p>
        </div>
      )}

      {exp.learning && (
        <div className="detail-block">
          <h3>What I'm Learning</h3>
          <p>{exp.learning}</p>
        </div>
      )}

      {exp.techStack.length > 0 && (
        <div className="detail-block">
          <h3>Tools & Technologies</h3>
          <div className="sem-card-projects">
            {exp.techStack.map((t) => (
              <span key={t} className="project-chip">{t}</span>
            ))}
          </div>
        </div>
      )}

      {exp.assignments.length > 0 && (
        <div className="detail-block">
          <h3>Work Done So Far</h3>
          {exp.assignments.map((a) => (
            <div key={a.title} style={{ marginBottom: "1.5rem" }}>
              <h4 style={{ color: "#e8a84c", marginBottom: "0.6rem" }}>{a.title}</h4>
              <ul className="sem-subjects">
                {a.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExperienceDetailPage;