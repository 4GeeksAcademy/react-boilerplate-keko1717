import React, { useEffect, useState } from "react";
import SecondsCounter from "./SecondsCounter.jsx";

const Home = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev < 10 ? prev + 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", /
        minHeight: "100vh",   
        backgroundColor: "#000",
        padding: "20px",
      }}
    >
      <SecondsCounter seconds={seconds} />
    </div>
  );
};

export default Home;
