import { createBrowserRouter } from "react-router-dom";
import ExercisesDetails from "./pages/ExercisesDetails";
import Home from "./pages/Home";
import Root from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "exercise/:Id",
        element: <ExercisesDetails />,
      },
    ],
  },
]);
