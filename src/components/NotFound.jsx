import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </div>

      <div className="">
        <Link to="/TrainDesert" className="nav-link">
          TrainDesert
        </Link>
        <Link to="/riderShip" className="nav-link">
          RiderShip
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
