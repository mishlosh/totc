import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";
import { ShoppingCart } from "phosphor-react";

export default function Navbar() {
  const path = window.location.pathname;
  return (
    <>
      <nav className="nav">
        <Link to="/home" className="site-title">
          <img
            src="../images/Logo-TotC-Transparent.png"
            className="site-logo"
          />
        </Link>
        <ul>
          <CustomLink to="/home">Home</CustomLink>
          <CustomLink to="/market">Market</CustomLink>
          <CustomLink to="/menu">Menu</CustomLink>
          <CustomLink to="/catering">Catering</CustomLink>
          <CustomLink to="https://tocfoodmarket.com/coffee-club-sign-up">
            Coffee Club
          </CustomLink>
          <CustomLink to="/cart">
            {" "}
            <ShoppingCart size={32} />
          </CustomLink>
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
