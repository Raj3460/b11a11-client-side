import { createBrowserRouter } from "react-router";
import LayOuts from "../LayOuts/LayOuts";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";

 export const router = createBrowserRouter([
  {
    path: "/",
    Component:LayOuts,
    children: [
       {
              path: "/",
              Component: Home,
       }
       ,
       {
              path: "/login",
              Component: Login,
       }
       ,
       {
              path:"/register",
              Component: Register,
       }
    ]
  },
]);