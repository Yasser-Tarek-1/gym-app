import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exercises: [],
};

export const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {
    fetchExercises: (state, action) => {
      state.exercises = action.payload;
    },
  },
});

export const { fetchExercises } = exercisesSlice.actions;

export default exercisesSlice.reducer;
