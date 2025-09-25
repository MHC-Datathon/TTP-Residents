import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* MTA Logo Top-Left */}
      <img src="MTA.webp" alt="MTA logo" className="logo" />

      {/* Main Question */}
      <h1>
        How does the distribution of bus lane enforcement (ACE + ABLE) align
        with bus service quality and community needs across NYC?
      </h1>

      {/* Main Image */}
      <div className="main-image">
        <img src="NYC.webp" alt="NYC Map" />
      </div>
    </div>
  );
};

export default Home;
