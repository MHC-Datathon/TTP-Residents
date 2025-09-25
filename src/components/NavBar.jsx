import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/"> Home </Link>
      </div>

      <div className="nav-links">
        <div className="">
          <Link to="/TrainDesert">TrainDesert</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
