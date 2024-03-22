import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  const path = window.location.pathname;
  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-title">
          TotC
        </Link>
        <ul>
          <CustomLink to="/home">Home</CustomLink>
          <CustomLink to="/market">Market</CustomLink>
          <CustomLink to="/menu">Menu</CustomLink>
          <CustomLink to="/catering">Catering</CustomLink>
          <CustomLink to="/home">Coffee Club</CustomLink>
        </ul>
      </nav>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
