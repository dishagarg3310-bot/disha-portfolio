import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import ImageCarousel from "../components/ImageCarousel";

function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="page">
        <p>Project not found.</p>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/projects" className="back-link">← Back to Projects</Link>
      <ImageCarousel images={project.images} />

      <h1 className="page-title" style={{ textAlign: "left" }}>{project.title}</h1>
      <p style={{ color: "#93a0ba", marginBottom: "0.5rem" }}>{project.fullName}</p>
      <p className="sem-card-exam">{project.semester}</p>

      <div className="detail-block">
        <h3>Overview</h3>
        <p>{project.description}</p>
      </div>

      {project.problemStatement && (
        <div className="detail-block">
          <h3>Problem Statement</h3>
          <ul className="sem-subjects">
            {project.problemStatement.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      )}

      {project.keyFeatures && (
        <div className="detail-block">
          <h3>Key Features</h3>
          {project.keyFeatures.map((f) => (
            <div key={f.title} style={{ marginBottom: "1.2rem" }}>
              <h4 style={{ color: "#e8a84c", marginBottom: "0.5rem" }}>{f.title}</h4>
              <ul className="sem-subjects">
                {f.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {project.features && (
        <div className="detail-block">
          <h3>Features</h3>
          <ul className="sem-subjects">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      {project.howItWorks && (
        <div className="detail-block">
          <h3>How It Works</h3>
          <ol className="sem-subjects" style={{ listStyleType: "decimal" }}>
            {project.howItWorks.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {project.results && (
        <div className="detail-block">
          <h3>Results</h3>
          <ul className="sem-subjects">
            {project.results.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      )}

      {project.metrics && (
        <div className="detail-block">
          <h3>Results</h3>
          <p>{project.metrics}</p>
        </div>
      )}

      <div className="detail-block">
        <h3>Tech Stack</h3>
        <div className="sem-card-projects">
          {project.techStack.map((t) => (
            <span key={t} className="project-chip">{t}</span>
          ))}
        </div>
      </div>

      {project.endpoints && (
        <div className="detail-block">
          <h3>API Endpoints</h3>
          <ul className="sem-subjects">
            {project.endpoints.map((e) => (
              <li key={e.path}>
                <span style={{ color: "#e8a84c", fontFamily: "'Courier New', monospace" }}>
                  {e.method} {e.path}
                </span>{" "}
                — {e.desc}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.challenges && (
        <div className="detail-block">
          <h3>Challenges & Solutions</h3>
          <ul className="sem-subjects">
            {project.challenges.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      )}

      {project.futureScope && (
        <div className="detail-block">
          <h3>Future Scope</h3>
          <ul className="sem-subjects">
            {project.futureScope.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      {project.deployment && (
        <div className="detail-block">
          <h3>Deployment</h3>
          <p>{project.deployment}</p>
        </div>
      )}

      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer" className="github-link">
          View on GitHub →
        </a>
      )}
    </div>
  );
}

export default ProjectDetailPage;