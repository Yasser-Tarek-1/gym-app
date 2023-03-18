import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import Videos from "../components/Videos";
import { fetchData, exerciseOptions, videosOptions } from "../services";

const ExercisesDetails = () => {
  const [exercise, setExercise] = useState({});
  const [videos, setVideos] = useState([]);
  const { exerciseId } = useParams();

  useEffect(() => {
    const getExercise = async () => {
      // Exercise
      const exerciseData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseId}`,
        exerciseOptions
      );
      setExercise(exerciseData);
      // Exercise Videos
      const exerciseVideos = await fetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseData?.name}`,
        videosOptions
      );
      setVideos(exerciseVideos.contents);
    };
    getExercise();
  }, [exerciseId]);

  return (
    <Box>
      <Detail {...exercise} />
      <Videos videos={videos} name={exercise?.name} />
    </Box>
  );
};

export default ExercisesDetails;
