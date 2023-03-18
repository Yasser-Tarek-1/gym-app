import React from "react";
import { Typography, Box, Button } from "@mui/material";

import Banner from "../assets/banner.png";

const FitnessBanner = () => {
  return (
    <Box mt="200px">
      <Typography color="#f06d22" fontWeight="600" fontSize="24px">
        Fitness Club
      </Typography>
      <Typography
        sx={{
          fontSize: {
            lg: "50px",
            xs: "40px",
          },
        }}
        fontWeight="700"
        my="10px"
      >
        Eat, Sleep And Rest
      </Typography>
      <Typography fontSize="16px" lineHeight="35px" mb="20px">
        Here you will find the most effective exercises
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#f06d22",
          "&:hover": { backgroundColor: "#f06d22" },
        }}
        href="#exercises"
      >
        Explore More
      </Button>
      <Typography
        fontWeight="600"
        color="#f06d22"
        sx={{
          opacity: "0.1",
          fontSize: {
            xs: "70px",
            lg: "195px",
          },
          // marginLeft: "-120px",
        }}
        mt="50px"
      >
        Exercises
      </Typography>

      <img src={Banner} alt="Banner" className="fitness-banner-img" />
    </Box>
  );
};

export default FitnessBanner;
