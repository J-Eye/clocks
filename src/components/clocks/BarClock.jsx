import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";

const BarClock = ({ time }) => {
  const style = {
    container: {
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
    },
    progressContainer: {
      width: "100%",
      height: "100%",
      transform: "rotate(-90deg)",
      position:'relative'
    },
    progress: {
      transform: "translate(-50%, -50%)",
      width: "66px",
      height: "10px",
      borderRadius: "2px",
      backgroundColor: "#f50057",
    },
    number: {
      position: "absolute",
      right:'50px'
    },
  };
  return (
    <Box sx={style.container}>
      <Box sx={style.progressContainer}>
        <LinearProgress
          variant="determinate"
          value={time.getHours() * 4.1}
          sx={style.progress}
        />
        <Typography sx={style.number}>{time.getHours()}</Typography>
      </Box>
      <Box sx={style.progressContainer}>
        <LinearProgress
          variant="determinate"
          value={time.getMinutes() * 1.6}
          sx={style.progress }
        />
        <Typography sx={style.number}>{time.getMinutes()}</Typography>
      </Box>
      <Box sx={style.progressContainer}>
        <LinearProgress
          variant="determinate"
          value={time.getSeconds() * 1.6}
          sx={style.progress }
        />
        <Typography sx={style.number}>{time.getSeconds()}</Typography>
      </Box>
    </Box>
  );
};

export default BarClock;
