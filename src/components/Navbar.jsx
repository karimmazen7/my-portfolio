import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        K
      </Link>

      <div className="nav-center">
        <Link
          to="/work"
          className={location.pathname === "/work" ? "active" : ""}
        >
          WORK
        </Link>

        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          ABOUT
        </Link>

        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          CONTACT
        </Link>
      </div>

      <div className="right-logo">G</div>
    </nav>
  );
}
