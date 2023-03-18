import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button, Typography } from "@mui/material";

const ExerciseCard = ({ bodyPart, equipment, gifUrl, name, target, id }) => {
  return (
    <Link to={`/exercise/${id}`} className="exercise-card">
      <img src={gifUrl} alt={name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "10px",
            color: "#fff",
            backgroundColor: "#f06d22",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            px: "12px",
            transition: "0.3s all ease-in-out",
            "&:hover": {
              backgroundColor: "#f06d22",
            },
          }}
        >
          {bodyPart}
        </Button>
        <Button
          sx={{
            ml: "10px",
            color: "#fff",
            backgroundColor: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            px: "12px",
            transition: "0.3s all ease-in-out",
            "&:hover": {
              backgroundColor: "#fcc757",
            },
          }}
        >
          {target}
        </Button>
      </Stack>
      <Typography
        ml="10px"
        textTransform="capitalize"
        color="black"
        fontWeight="bold"
        py="10px"
        fontSize="20px"
      >
        {name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
