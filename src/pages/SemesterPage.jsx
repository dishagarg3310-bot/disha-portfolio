import { useParams, Link } from "react-router-dom";
import { semesters } from "../data/education";

function SemesterPage() {
  const { semId } = useParams();
  const index = parseInt(semId.split("-")[1], 10) - 1;
  const sem = semesters[index];

  if (!sem) {
    return (
      <div className="page">
        <p>Semester not found.</p>
        <Link to="/education">← Back to Education</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/education" className="back-link">← Back to Education</Link>

      <div className="sem-detail-header">
        <div>
          <div className="sem-card-exam">{sem.exam}</div>
          <h1 className="page-title" style={{ textAlign: "left", marginBottom: 0 }}>
            {sem.sem}
          </h1>
          <p style={{ color: "#93a0ba" }}>{sem.year}</p>
        </div>
        {sem.sgpa !== null ? (
          <div className="seal seal-large">
            <span className="seal-value">{sem.sgpa.toFixed(2)}</span>
            <span className="seal-label">SGPA</span>
          </div>
        ) : (
          <div className="seal seal-pending seal-large">Result<br />Awaited</div>
        )}
      </div>

      {sem.projects.length > 0 && (
        <div className="detail-block">
          <h3>Projects Built This Semester</h3>
          <div className="sem-card-projects">
            {sem.projects.map((p) => (
              <span key={p} className="project-chip">{p}</span>
            ))}
          </div>
        </div>
      )}

      {sem.subjects.length > 0 && (
        <div className="detail-block">
          <h3>Subjects</h3>
          <ul className="sem-subjects">
            {sem.subjects.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SemesterPage;