import React from "react";
import { Outlet } from "react-router";
// import Navbar from "../sheared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../sheared/Footer";
import Navbar from "../sheared/NAVBAR/Navbar";

const LayOuts = () => {
  return (
    <div className="">
      {/* <Navbar></Navbar> */}
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default LayOuts;
