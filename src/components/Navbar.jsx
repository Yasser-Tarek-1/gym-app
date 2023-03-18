import React from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      sx={{
        py: {
          xs: "16px",
          md: "22px",
        },
      }}
    >
      <Link to="/">
        <img alt="Logo" src={Logo} width={"90px"} />
      </Link>
      <Stack direction="row" gap="30px" ml="50px">
        <Link
          to="/"
          color="#f06d22"
          style={{ color: "#f06d22", fontWeight: "700" }}
        >
          Home
        </Link>
        <a href="#exercises">Exercises</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
