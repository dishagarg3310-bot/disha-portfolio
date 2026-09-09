import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Disha Agrawal</Link>
      <div className="navbar-links">
        <Link to="/education">Education</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/skills">Skills</Link>
      </div>
    </nav>
  );
}

export default Navbar;