import { Link } from "react-router-dom";
import { schoolEducation, semesters } from "../data/education";

function SgpaSeal({ sgpa }) {
  if (sgpa === null) {
    return <div className="seal seal-pending">Result<br />Awaited</div>;
  }
  return (
    <div className="seal">
      <span className="seal-value">{sgpa.toFixed(2)}</span>
      <span className="seal-label">SGPA</span>
    </div>
  );
}

function EducationPage() {
  return (
    <div className="page">
      <h1 className="page-title">Education</h1>

      <div className="school-row">
        {schoolEducation.map((s) => (
          <div key={s.level} className="school-card">
            <span className="school-level">{s.level}</span>
            <span className="school-board">{s.board} · {s.year}</span>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        {semesters.map((sem, i) => (
          <Link key={sem.sem} to={`/education/sem-${i + 1}`} className="dash-card">
            <SgpaSeal sgpa={sem.sgpa} />
            <h3>{sem.sem}</h3>
            <p>{sem.year} · {sem.exam}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EducationPage;