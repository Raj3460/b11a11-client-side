import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Routs/Routs.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="bg-base-100">

      <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>
);
