import { configureStore } from "@reduxjs/toolkit";
import exercises from "./ExercisesSlice";

export const store = configureStore({
  reducer: { exercises },
});
