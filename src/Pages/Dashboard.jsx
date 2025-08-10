import React from "react";
import { NavLink } from "react-router";
import {
  FaHome,
  FaBoxOpen,
  FaSearch,
  FaUserEdit,
  FaUserCheck,
  FaUserClock,
  FaUserShield,
  FaBook,
  FaPlus,
  FaUsers,
  FaClipboardList,
  FaSuitcase,
  FaUserTie,
  FaUserCog
} from "react-icons/fa";


const DashBoard = () => {


  

  

  return (
    <div className="drawer lg:drawer-open  bg-red-100 left-0 z-50">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <div className="navbar  lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="dashboard-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 font-bold">Dashboard</div>
        </div>

        {/* <div className="flex-1 p-4 bg-base-100">
          <Outlet />
        </div> */}
      </div>

      <div className="drawer-side">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />

        <div className="menu bg-secondary text-base-content w-80 min-h-full flex flex-col">
          <div className="p-4 mb-4 border-b border-base-300">
            {/* <Logo 
            /> */}
          
            <a className=" font-bold mb-1 text-xl sm:text-2xl">Study<span className='text-red-400'>Mate</span></a>
          </div>

          <ul className="flex-1 px-2 space-y-1">
            <li>
              <NavLink to="" end className="flex items-center gap-3">
                <FaHome className="text-lg" />
                Dashboard Home
              </NavLink>
            </li>

            <li><NavLink to="/mySubmission">My Submission </NavLink></li>
               <li><NavLink to="/pendingAssignments">Pending Assignments </NavLink></li>
               <li><NavLink to="/about">About us</NavLink></li>
               <li><NavLink to="/dashboard">Dashboard</NavLink></li>


           
           
                
           

            
            
                
       
            
          </ul>

          <div className="p-4 border-t border-base-300">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  {/* <img src={user?.photoURL || '/default-user.png'} alt="User" /> */}
                </div>
              </div>
              <div>
                {/* <p className="font-medium">{user?.displayName || 'User'}</p> */}
                {/* <p className="text-sm opacity-70 capitalize">{role || 'user'}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
