import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Brand/Home section */}
      <div className="nav-brand">
        <Link to="/" className="nav-link brand-link">
          Home
        </Link>
      </div>

      {/* Links section */}
      <div className="nav-links">
        <Link to="/FultonStreet" className="nav-link">
          Fulton Street
        </Link>
        <Link to="/TrainDesert" className="nav-link">
          TrainDesert
        </Link>
        <Link to="/riderShip" className="nav-link">
          RiderShip
        </Link>
        <Link to='/jamaicaRidership' className='nav-link'>
          JamaicaRidership
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
