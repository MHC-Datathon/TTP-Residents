import React from "react";

const RiderShip = () => {
  return (
    <>
      <div>
        <header>
          <h1>Do bus lane tickets match where people actually ride?</h1>
        </header>

        <div>
          <h2>Heavy Ridership: Lenox Hill to Fox Hills</h2>
          <p>
            This corridor carries a steady flow of riders every day, yet buses
            here constantly run into problems that slow them down. Cars stopped
            in bus zones, double-parked vehicles, and drivers cutting into bus
            lanes all create barriers that interrupt service and frustrate
            passengers who depend on reliable trips to work, school, and
            appointments.
          </p>
          <p>
            The high number of enforcement cases in this area makes it clear
            that these issues are common. It also shows why stronger and more
            consistent enforcement is needed to keep buses moving smoothly for
            the many people who count on them each day.
          </p>
        </div>

        <div>
          <img
            src="graph.webp"
            alt="Bus lane violations in Lenox Hill to Fox Hills corridor"
            style={{
              maxWidth: "100%",
              height: "auto",
              border: "1px solid #ccc",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default RiderShip;
