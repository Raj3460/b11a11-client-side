import { createBrowserRouter } from "react-router";
import LayOuts from "../LayOuts/LayOuts";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";
import AboutUs from "../Pages/AboutUs";
import CreateAssignment from "../Pages/CreateAssignment";
import AllAsignment from "../Pages/AllAsignment";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LayOuts,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/CreateAssignment",
        Component: CreateAssignment,
      },
      {
        path: "/allAssignment",
        Component: AllAsignment,
        loader: () => fetch("http://localhost:8000/assignments"),
        hydrateFallbackElement: (
          <div className="fixed inset-0 flex items-center justify-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
    ],
  },
]);
