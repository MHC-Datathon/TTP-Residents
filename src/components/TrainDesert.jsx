import React from "react";
import { Link } from "react-router-dom";

const TrainDesert = () => {
  return (
    <>
      <div>
        <header>
          <h1> How Low Ridership Justifies Slow Buses in Transit Desertst? </h1>
        </header>
      </div>

      <div>
        <h2>Manhattan Gets the Spotlight</h2>
        <p>
          The allocation of city resources for bus lane enforcement is not
          uniform. By focusing so much enforcement on Manhattan, funds and
          attention may be taken away from outer-borough corridors with poor
          service quality and high transit demand.
        </p>
        <p>
          The Vicious Cycle: A bus route in Queens is slow → people stop using
          it → ridership numbers drop → the MTA says "This route isn't as busy
          as the M15, so it's a lower priority for investment" → the route gets
          no cameras or lane improvements → the bus remains slow.
        </p>
        <img src="Map.webp"></img>
      </div>

      <div>
        <p>
          <strong>Key Points from "Who's Afraid of a Transit Desert?"</strong>
        </p>
        <ul>
          <li>
            Transit deserts are neighborhoods with limited or no access to
            reliable public transportation.
          </li>
          <li>
            Lack of transit leads to social and economic isolation, particularly
            affecting low-income and marginalized communities.
          </li>
          <li>
            Residents in transit deserts often face longer commutes, higher
            transportation costs, and reduced access to jobs, education, and
            healthcare.
          </li>
          <li>
            The article highlights the importance of equitable transit planning
            to address these disparities.
          </li>
          <li>
            Focusing transit investment only on high-ridership areas can
            perpetuate cycles of poor service and low accessibility in
            underserved neighborhoods.
          </li>
        </ul>
        <p>
          Data from:{" "}
          <a
            href="https://www.nytimes.com/2019/10/11/realestate/whos-afraid-of-a-transit-desert.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            The New York Times, October 11, 2019, "Who's Afraid of a Transit
            Desert?"
          </a>
        </p>
      </div>
    </>
  );
};

export default TrainDesert;
