import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h6">
        The page you’re looking for doesn’t exist.
      </Typography>
      <Link to="/">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f06d22",
            "&:hover": { backgroundColor: "#f06d22" },
            mt: "20px",
          }}
          href="#exercises"
        >
          Back Home
        </Button>
      </Link>
    </Stack>
  );
};
export default ErrorPage;
