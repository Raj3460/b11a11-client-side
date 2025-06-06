import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../sheared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LayOuts = () => {
       return (
              <div className='max-w-6xl mx-auto'>
                     <Navbar></Navbar>
                     <Outlet></Outlet>
                      <ToastContainer position="top-center" autoClose={3000} />
                     
              </div>
       );
};

export default LayOuts;