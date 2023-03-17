import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { fetchHandler } from "../services";
import ScroolBar from "./ScroolBar";
import { useDispatch } from "react-redux";

const FitnessSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [bodyParts, setBodyParts] = useState([
    "all",
    " back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ]);
  const dispatch = useDispatch();

  // Limited requests for API
  // useEffect(() => {
  //   const getExercisesData = async () => {
  //     const bodyPartsData = await fetchData(
  //       "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  //       exerciseOptions
  //     );
  //     setBodyParts(["all", ...bodyPartsData]);
  //   };
  //   getExercisesData();
  // }, []);

  const searchHandler = () => {
    fetchHandler(searchInput, dispatch, setSearchInput);
  };

  return (
    <Box mt="100px">
      <Stack alignItems="center" justifyContent="center">
        <Typography
          fontWeight="700"
          textAlign="center"
          sx={{
            fontSize: {
              md: "40px",
              sm: "30px",
              xs: "18px",
            },
          }}
        >
          The best exercises you should start <br /> with are these.
        </Typography>
        <Box position="relative" my="30px">
          <TextField
            variant="standard"
            error
            sx={{
              width: {
                md: "700px",
                sm: "450px",
                xs: "300px",
              },
            }}
            type="search"
            placeholder="Search Exercises..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF2625",
            "&:hover": { backgroundColor: "#ED2120" },
          }}
          onClick={searchHandler}
        >
          Search
        </Button>
      </Stack>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <ScroolBar data={bodyParts} />
      </Box>
    </Box>
  );
};

export default FitnessSearch;
