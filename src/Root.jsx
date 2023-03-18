import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
// import Error from "./components/Error";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Root = () => {
  return (
    <>
      {/* <Error /> */}
      <Container maxWidth={"xl"} m="auto">
        <Navbar />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Root;
