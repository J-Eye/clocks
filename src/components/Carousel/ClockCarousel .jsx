import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import DigitalClock from "../clocks/digitalClock";
import AnalogClock from "../clocks/AnalogClock";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import BarClock from "../clocks/BarClock";
const ClockCarousel = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setTime(date);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const style = {
    mainContainer: {
      width: "50%",
      height: "500px",
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={style.mainContainer}>
      <Slider {...settings}>
        <div>
          <DigitalClock time={time} />
        </div>
        <div>
          <AnalogClock time={time} />
        </div>
        <div>
          <BarClock time={time}/>
        </div>
      </Slider>
    </Box>
  );
};

export default ClockCarousel;
