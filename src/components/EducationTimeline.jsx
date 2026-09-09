import { useState } from "react";
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

function SemesterCard({ data }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="sem-card">
      <div className="sem-card-header">
        <div>
          <div className="sem-card-exam">{data.exam}</div>
          <h3>{data.sem}</h3>
        </div>
        <SgpaSeal sgpa={data.sgpa} />
      </div>

      {data.projects.length > 0 && (
        <div className="sem-card-projects">
          {data.projects.map((p) => (
            <span key={p} className="project-chip">{p}</span>
          ))}
        </div>
      )}

      {data.subjects.length > 0 && (
        <>
          <button className="sem-toggle" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Hide subjects −" : "Show subjects +"}
          </button>
          {expanded && (
            <ul className="sem-subjects">
              {data.subjects.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

function EducationTimeline() {
  return (
    <section id="education" className="education">
      <h2 className="section-title">Education Timeline</h2>

      <div className="school-row">
        {schoolEducation.map((s) => (
          <div key={s.level} className="school-card">
            <span className="school-level">{s.level}</span>
            <span className="school-board">{s.board} · {s.year}</span>
          </div>
        ))}
      </div>

      <div className="timeline">
        {semesters.map((sem) => (
          <div key={sem.sem} className="timeline-item">
            <div className="timeline-dot" />
            <SemesterCard data={sem} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationTimeline;