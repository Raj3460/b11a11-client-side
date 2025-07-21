import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import "./Navbar.css"
import { AuthContext } from '../../Context/AuthContext';
import Profiles from '../../Components/Profiles';
import Swal from 'sweetalert2';
// import ThemeToggle from '../../Components/ThemeToggle ';

const Navbar = () => {
  const {user,logoutUser} = useContext(AuthContext);
  const links = <>
   <li><NavLink to="/">Home</NavLink></li>
   {/* <li><NavLink to="/about">About Us</NavLink></li> */}
   <li><NavLink to="/CreateAssignment">Create Assignment </NavLink></li>
   <li><NavLink to="/allAssignment">All Assignment </NavLink></li>
   <li><NavLink to="/mySubmission">My Submission </NavLink></li>
   <li><NavLink to="/pendingAssignments">Pending Assignments </NavLink></li>
   

  </>

 const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logoutUser()
          .then(() => {
            Swal.fire({
              title: "Logged Out!",
              text: "You have been successfully logged out.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.error("Logout Error:", error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while logging out.",
              icon: "error",
            });
          });
      }
    });
  };









  return (
<div className=' bg-base-300  sticky top-0 z-50'>
    <div className="navbar shadow-sm max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
    <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" pr-3 btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
       
      </ul>
    </div>
    <a className=" font-bold mb-1 text-xl sm:text-2xl">Study<span className='text-red-400'>Mate</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   
     {links}
    </ul>
  </div>
  <div className="navbar-end">

{/* <ThemeToggle></ThemeToggle> */}
<label className="toggle text-base-content mx-2 sm:mx-2.5">
  <input type="checkbox" value="cupcake" className="theme-controller" />

  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

</label>

{/*  */}

    {
      user ? <Profiles handleLogOut={handleLogOut}></Profiles> : 
    <Link to="/login"><button className='btn bg-secondary btn-sm sm:btn-md sm:btn-info '>Login</button></Link>
    }
  </div>
</div>
</div>
  );
};

export default Navbar;