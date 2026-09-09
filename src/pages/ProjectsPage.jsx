import { Link } from "react-router-dom";
import { projects, otherProjects } from "../data/projects";

function ProjectsPage() {
  return (
    <div className="page">
      <h1 className="page-title">Projects</h1>

      <div className="dashboard-grid">
        {projects.map((p) => (
          <Link key={p.id} to={`/projects/${p.id}`} className="dash-card project-card">
            <h3>{p.title}</h3>
            <p>{p.semester}</p>
            <div className="sem-card-projects">
              {p.techStack.slice(0, 3).map((t) => (
                <span key={t} className="project-chip">{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {otherProjects.length > 0 && (
        <div className="detail-block" style={{ marginTop: "3rem" }}>
          <h3>Other Projects</h3>
          <div className="sem-card-projects">
            {otherProjects.map((p) => (
              <span key={p.title} className="project-chip">
                {p.title} · {p.semester}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsPage;