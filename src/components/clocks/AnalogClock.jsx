import { Box, Typography } from "@mui/material";
import React from "react";

const AnalogClock = ({ time }) => {
  const style = {
    clockContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    clock: {
      position: "relative",
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      border: "2px solid black",
    },
    hourHand: {
      position: "absolute",
      top: "50px",
      left: "99px",
      transform: `rotate(${time.getHours() * 30}deg)`,
      width: "2px",
      height: "50px",
      backgroundColor: "blue",
      transformOrigin: "bottom center",
    },
    minuteHand: {
      position: "absolute",
      top: "10px",
      left: "99px",
      transform: `rotate(${time.getMinutes() * 6}deg)`,
      width: "2px",
      height: "90px",
      backgroundColor: "blue",
      transformOrigin: "bottom center",
    },
    secondsHand: {
      position: "absolute",
      top: "-0px",
      left: "99px",
      transform: `rotate(${time.getSeconds() * 6}deg)`,
      width: "2px",
      height: "100px",
      backgroundColor: "red",
      transformOrigin: "bottom center",
    },
    hourText: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "black",
      position: "absolute",
      transformOrigin: "bottom center",
      zIndex:'-1'
    },
    numbers: {
      position: "absolute",
      top: "80px",
      right: "105px",
    },
  };
  const hourNumbers = [];

  for (let i = 0; i < 12; i++) {
    const rotation = i * 30;
    hourNumbers.push(
      <Typography
        key={i + 1}
        component="p"
        style={{
          ...style.hourText,
          transform: `rotate(${rotation}deg) translate(0px, -80px)`,
        }}
      >
        {i + 1}
      </Typography>
    );
  }
  return (
    <Box sx={style.clockContainer}>
      <Box sx={style.clock}>
        <Box sx={style.hourHand}></Box>
        <Box sx={style.minuteHand}></Box>
        <Box sx={style.secondsHand}></Box>
        <Box sx={style.numbers}>{hourNumbers}</Box>
      </Box>
    </Box>
  );
};

export default AnalogClock;
