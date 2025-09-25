import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Main Question */}
      <h1 className="main-question">
        How does the distribution of bus lane enforcement (ACE + ABLE) align
        with bus service quality and community needs across NYC?
      </h1>

      {/* Main Image */}
      <div className="main-image">
        <img src="NYC.webp" alt="NYC Map" />
      </div>

      {/* Data Sources */}
      <div className="data-sources">
        <h2>Data Used:</h2>
        <ul>
          <li>
            MTA Bus Automated Camera Enforcement Violations: Beginning October
            2019 (3.78M rows)
          </li>
          <li>MTA Bus Hourly Ridership: 2020-2024</li>
          <li>MTA Subway Origin-Destination Ridership Estimate: 2024</li>
          <li>MTA Bus Customer Journey-Focused Metrics: Beginning 2025</li>
          <li>
            MTA Bus Automated Camera Enforcement Violations: Beginning October
            2019
          </li>
        </ul>
        <p>
          Overall data sourced from{" "}
          <a
            href="https://data.ny.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NY.gov Open Data
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
