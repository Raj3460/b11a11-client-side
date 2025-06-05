import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../sheared/Navbar/Navbar';


const LayOuts = () => {
       return (
              <div className='max-w-6xl mx-auto'>
                     <Navbar></Navbar>
                     <Outlet></Outlet>
                     
              </div>
       );
};

export default LayOuts;