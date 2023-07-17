import { Box, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import ClockCarousel from "../components/Carousel/ClockCarousel ";
const Home = () => {
  const style = {
    container: {
      width: "80vw",
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      alignContent:'center'
    },
  };
  return (
    <Box sx={style.container}>
      <ClockCarousel />
    </Box>
  );
};

export default Home;
