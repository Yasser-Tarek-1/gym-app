import { Box, Alert } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <Box sx={{ position: "fixed", top: "10px", right: "10px" }} zIndex="999">
      <Alert severity="error" variant="filled">
        Too many requests. try again later
      </Alert>
    </Box>
  );
};

export default Error;
