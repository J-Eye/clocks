import React from "react";

const DigitalClock = ({ time }) => {
  const style = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    text: {
      textAlign: "center",
      fontSize: "500%",
      color: "transparent",
      WebkitTextStroke: "1px blue",
      textStroke: "1px blue", 
    },
  };

  return (
    <div style={style.container}>
      <div style={style.text}>{time.toLocaleTimeString()}</div>
    </div>
  );
};

export default DigitalClock;
