import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import "./Navbar.css"
import { AuthContext } from '../../Context/AuthContext';
import Profiles from '../../Components/Profiles';
import Swal from 'sweetalert2';

const Navbar = () => {
  const {user,logoutUser} = useContext(AuthContext);
  const links = <>
   <li><NavLink to="/">Home</NavLink></li>
   <li><NavLink to="/about">About Us</NavLink></li>
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
    <div className="navbar bg-base-100 shadow-sm py-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
       
      </ul>
    </div>
    <a className=" font-bold text-2xl">Study<span className='text-red-400'>Mate</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <Profiles handleLogOut={handleLogOut}></Profiles> : 
    <Link to="/login"><button className='btn btn-primary'>Login</button></Link>
    }
  </div>
</div>
  );
};

export default Navbar;