import { createBrowserRouter } from "react-router";
import LayOuts from "../LayOuts/LayOuts";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";
import AboutUs from "../Pages/AboutUs";
import CreateAssignment from "../Pages/CreateAssignment";
import AllAsignment from "../Pages/AllAsignment";
import UpdateAssignments from "../Components/UpdateAssignments";
import PrivateRouts from "../Context/PrivateRouts";
import AssignmentsDetails from "../Pages/AssignmentsDetails";
import TakeAssignment from "../Pages/TakeAssignment";
import Loading from "../Components/Loading";
import MySubmission from "../Pages/MySubmission";
import PendingAssignments from "../Pages/PendingAssignments";
import ErrorPage from "../Pages/ErrorPage";
import DashBoard from "../Pages/Dashboard";
import DashobardHome from "./DashobardHome";

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

        element: (
          <PrivateRouts>
            <CreateAssignment></CreateAssignment>
          </PrivateRouts>
        ),
      },
      {
        path: "/allAssignment",
        Component: AllAsignment,
        loader: () => fetch("https://studymate-server.vercel.app/assignments"),
        hydrateFallbackElement: (
          <div className="fixed inset-0 flex items-center justify-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/update/:id",
        Component: UpdateAssignments,
        loader: ({ params }) =>
          fetch(`https://studymate-server.vercel.app/assignments/${params.id}`),
        hydrateFallbackElement: (
          <div className="fixed inset-0 flex items-center justify-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/details/:id",

        element: (
          <PrivateRouts>
            <AssignmentsDetails></AssignmentsDetails>
          </PrivateRouts>
        ),
        loader: ({ params }) =>
          fetch(`https://studymate-server.vercel.app/assignments/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/takeAssignment/:id",
        Component: TakeAssignment,
      },
      
      
      
      

       {
        path:"/*",
        element: <ErrorPage></ErrorPage>
      },
      
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouts>
        <DashBoard></DashBoard>
      </PrivateRouts>
    ),
    children :  [
      {
        index : true,
        Component : DashobardHome,
      }
      ,
      {
        path: "pendingAssignments",
        element: (
          <PrivateRouts>
            <PendingAssignments></PendingAssignments>
          </PrivateRouts>
        ),
      },
      {
        path: "mySubmission",
        element: (
          <PrivateRouts>
            <MySubmission></MySubmission>
          </PrivateRouts>
        ),
      },
    ]
  }
]);
