import { Stack, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4" py="20px">
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap="40px"
      >
        <Link to="/">
          <img alt="Logo" src={Logo} width={"90px"} />
        </Link>
      </Stack>
    </Box>
  );
};

export default Footer;
