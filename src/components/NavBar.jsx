import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Capstone I</Link>
      </div>
    </nav>
  );
};

export default NavBar;
