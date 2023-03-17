import { fetchExercises } from "./store/ExercisesSlice";

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_EXERCISE_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchHandler = async (item, dispatch, setSearchInput) => {
  if (item) {
    const data = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises",
      exerciseOptions
    );
    const serchData = data.filter((ex) => {
      return (
        ex.name.toLowerCase().includes(item) ||
        ex.target.toLowerCase().includes(item) ||
        ex.bodyPart.toLowerCase().includes(item) ||
        ex.equipment.toLowerCase().includes(item)
      );
    });
    if (setSearchInput) {
      setSearchInput("");
    }
    dispatch(fetchExercises(serchData));
    window.scrollTo({ top: 1600, left: 100, behavior: "smooth" });
  }
};
