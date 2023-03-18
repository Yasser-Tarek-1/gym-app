import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ExercisesDetails from "./pages/ExercisesDetails";
import Home from "./pages/Home";
import Root from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "exercise/:exerciseId",
        element: <ExercisesDetails />,
      },
    ],
  },
]);
