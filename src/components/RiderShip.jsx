import React from "react";

const RiderShip = () => {
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "20px",
      maxWidth: "900px",
      margin: "0 auto",
      lineHeight: 1.6,
      color: "#222",
    },
    header: {
      marginBottom: "18px",
      paddingBottom: "8px",
      // borderBottom removed
    },
    title: {
      fontSize: "26px",
      margin: 0,
      fontWeight: 700,
      color: "#0b3d91",
    },
    section: {
      marginTop: "18px",
      marginBottom: "18px",
    },
    h2: {
      fontSize: "20px",
      margin: "8px 0",
      fontWeight: 600,
    },
    paragraph: {
      margin: "8px 0",
      fontSize: "16px",
    },
    imgWrapper: {
      marginTop: "12px",
      textAlign: "center",
    },
    img: {
      maxWidth: "100%",
      height: "auto",
      border: "1px solid #ccc",
      borderRadius: "6px",
      display: "inline-block",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>
          Do bus lane tickets match where people actually ride?
        </h1>
      </header>

      <div style={styles.section}>
        <h2 style={styles.h2}>Heavy Ridership: Lenox Hill to Fox Hills</h2>
        <p style={styles.paragraph}>
          This corridor carries a steady flow of riders every day, yet buses
          here constantly run into problems that slow them down. Cars stopped in
          bus zones, double-parked vehicles, and drivers cutting into bus lanes
          all create barriers that interrupt service and frustrate passengers
          who depend on reliable trips to work, school, and appointments.
        </p>
        <p style={styles.paragraph}>
          The high number of enforcement cases in this area makes it clear that
          these issues are common. It also shows why stronger and more
          consistent enforcement is needed to keep buses moving smoothly for the
          many people who count on them each day.
        </p>
      </div>

      <div style={styles.imgWrapper}>
        <img
          src="graph.webp"
          alt="Bus lane violations in Lenox Hill to Fox Hills corridor"
          style={styles.img}
        />
      </div>
    </div>
  );
};

export default RiderShip;
