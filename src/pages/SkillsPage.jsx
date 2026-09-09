import { skillCategories } from "../data/skills";

function SkillsPage() {
  return (
    <div className="page">
      <h1 className="page-title">Skills</h1>

      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="skill-card">
            <h3>{cat.category}</h3>
            <ul className="sem-subjects">
              {cat.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPage;