import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Pagination, Box, Stack, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../services";
import ExerciseCard from "./ExerciseCard";

const Exercises = () => {
  const { exercises } = useSelector((state) => state.exercises);
  const [current, setCurrent] = useState(1);
  const currentLength = 6;

  const indexOfLastExercise = current * currentLength;
  const indexOfFirstExercise = indexOfLastExercise - currentLength;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginationHandler = (e, value) => {
    setCurrent(value);
    window.scrollTo({ top: "1600", behavior: "smooth" });
  };

  return (
    <Box id="exercises" p="20px" mt="50px">
      <Typography
        sx={{
          fontSize: {
            xs: "28px",
            md: "50px",
          },
        }}
        component="h3"
        mb="30px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
      >
        {currentExercises.map((exercise) => {
          return <ExerciseCard key={exercise.id} {...exercise} />;
        })}
      </Stack>
      <Stack alignItems="center" mt="50px">
        {exercises.length > currentLength && (
          <Pagination
            // size="large"
            count={Math.ceil(exercises.length / currentLength)}
            page={current}
            onChange={paginationHandler}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
