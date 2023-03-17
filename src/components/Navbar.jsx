import React from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      py="16px"
      justifyContent="flex-start"
    >
      <Link to="/">
        <img alt="Logo" src={Logo} />
      </Link>
      <Stack direction="row" gap="30px" ml="50px" mt="15px">
        <Link
          to="/"
          color="#FF2625"
          style={{ color: "#FF2625", fontWeight: "700" }}
        >
          Home
        </Link>
        <a href="#exercises">Exercises</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
