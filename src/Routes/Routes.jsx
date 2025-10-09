import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Layout from "../Layouts/Layout";
import Apps from "../Pages/Apps";
import Installation from "../Components/Installation";
import PageNotFound from "../Pages/PageNotFound";
import AppDetailsPage from "../Pages/AppDetailsPage";

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
      {
        path: "/apps",
        loader: () => fetch("/allAppData.json"),
        element: <Apps></Apps>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
      {
        path: "/appDetails/:id",
        loader: () => fetch("/allAppData.json"),
        element: <AppDetailsPage></AppDetailsPage>,
      },
      {
        path: "*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
]);
