import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Layout from "../Layouts/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        loader: () => fetch("/appData.json"),
        element: <Home></Home>,
      },
    ],
  },
]);
