import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Root = () => {
  return (
    <Box px="16px" width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Root;
