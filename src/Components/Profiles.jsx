import React, { useContext, useState } from "react";
// import { AuthContext } from "../Authentication/AuthContext";
import { updateProfile } from "firebase/auth";

import Swal from "sweetalert2";
// import { auth } from "../../Firebase.init";
import { AuthContext } from "../Context/AuthContext";

const Profiles = ({ handleLogOut }) => {
  const { user } = useContext(AuthContext);
  
  // console.log(user);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

//   const handleUpdate = () => {


//     updateProfile(auth.currentUser, {
//       displayName: name,

//       photoURL: photo,
//     })
//       .then(() => {

//         Swal.fire("Updated!", "Your profile has been updated.", "success");
//       })
//       .catch((error) => {

//         console.error("Update error:", error);
//         Swal.fire("Error!", "Failed to update profile.", "error");
//       });
//   };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="m-1">
        <img
          className="sm:w-14 sm:h-14 w-10 h-10 rounded-full border-2 border-red-500 p-1"
          src={user?.photoURL}
          alt="profile"
        />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-gray-800 rounded-box z-1 text-white p-6 shadow-sm"
      >
        <li>
          <h1 className="text-center font-bold border-b-4 text-xl text-white mb-2">
            Your Profile
          </h1>
        </li>

        <div className="flex flex-col space-y-1 mb-2">
          <label className="text-sm text-gray-300">Name</label>
          <input
            type="text"
            name="displayName"
            className="input input-bordered w-full bg-gray-700 border-gray-600 focus:border-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col space-y-1 mb-2">
          <label className="text-sm text-gray-300">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            className="input input-bordered w-full bg-gray-700 border-gray-600 focus:border-indigo-500"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Paste image URL"
          />
        </div>

        <li className="my-2 border px-3.5 p-1.5 sm:px-5 rounded-lg bg-gray-700 text-center">
          {user?.email}
        </li>

        <button
          onClick={handleUpdate}
          className="btn bg-blue-500 hover:bg-blue-600 text-white mb-2"
        >
          Update Profile
        </button>

        
        <button onClick={handleLogOut} className="btn bg-purple-500">
          LogOut
        </button>
      </ul>
    </div>
  );
};

export default Profiles;
