import React from "react";

const SecondsCounter = ({ seconds }) => {
  const digits = String(seconds).padStart(6, "0").split("");

  return (
    <div style={styles.container}>
      <div style={styles.digitBox}>
        <i className="fa-solid fa-clock" style={styles.icon}></i>
      </div>
      {digits.map((digit, index) => (
        <div key={index} style={styles.digitBox}>
          {digit}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "100vh",
    width: "100vw",
  },
  digitBox: {
    backgroundColor: "black",
    color: "white",
    fontSize: "60px",
    width: "80px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
    borderRadius: "10px",
  },
  icon: {
    fontSize: "50px",
  },
};

export default SecondsCounter;
