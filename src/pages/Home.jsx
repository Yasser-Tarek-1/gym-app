import React from "react";
import { Box } from "@mui/material";
import FitnessBanner from "../components/FitnessBanner";
import FitnessSearch from "../components/FitnessSearch";
import Exercises from "../components/Exercises";

const Home = () => {
  return (
    <Box>
      <FitnessBanner />
      <FitnessSearch />
      <Exercises />
    </Box>
  );
};

export default Home;
