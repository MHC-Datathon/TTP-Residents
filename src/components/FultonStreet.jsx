import React from "react";
import "./FultonStreet.css";

const FultonStreet = () => {
  return (
    <div className="fulton-container">
      <h1 className="fulton-title">
        Fulton Street: A Bus Lane Enforcement Hotspot
      </h1>

      <div className="fulton-map">
        <img src="Fulton.webp" alt="FultonMap" className="fulton-image" />
      </div>

      <div className="fulton-content">
        <section>
          <h2>Enforcement Hotspot Around Major Stops</h2>
          <p>
            On Fulton Street in Fort Greene and Clinton Hill, bus lane
            enforcement cameras capture a high concentration of violations
            clustered near busy bus stops. These stops are key boarding points
            for riders, yet frequent blockages show that cars and trucks
            continue to disrupt bus lanes despite the presence of enforcement.
          </p>
        </section>

        <section>
          <h2>Why This Matters</h2>
          <ul>
            <li>
              <strong>Riders are directly affected:</strong> Lane blockages
              delay buses at the very locations where demand is highest.
            </li>
            <li>
              <strong>Enforcement hasn't solved congestion:</strong> Even with
              cameras present, violations remain persistent, raising questions
              about the effectiveness of current penalties or design.
            </li>
            <li>
              <strong>Mismatch with community needs:</strong> Residents in this
              corridor rely heavily on transit, but enforcement coverage has not
              translated into better service quality.
            </li>
          </ul>
        </section>

        <section>
          <h2>The Bigger Picture</h2>
          <p>
            This case reflects a larger pattern across New York City:
            enforcement resources (ACE + ABLE) do not always align with where
            service quality is most at risk. While Manhattan corridors receive
            dense enforcement, outer-borough communities like Fulton Street
            still experience unreliable bus service, revealing gaps in how
            enforcement supports equity in public transit.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FultonStreet;
