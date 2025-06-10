import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../FirebaseSetUp/Firebase.init";
import { FiLogOut, FiSave } from "react-icons/fi";

const Profiles = ({ handleLogOut }) => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        Swal.fire("Updated!", "Your profile has been updated.", "success");
      })
      .catch((error) => {
        console.error("Update error:", error);
        Swal.fire("Error!", "Failed to update profile.", "error");
      });
  };

  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <div tabIndex={0} className="m-1">
        <img
          className="sm:w-14 sm:h-14 w-10 h-10 rounded-full border-2 border-indigo-500 shadow-lg transition duration-300 hover:scale-105"
          src={user?.photoURL}
          alt="profile"
        />
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl w-80 z-50"
      >
        <li>
          <h1 className="text-xl font-semibold text-center text-white border-b border-gray-600 pb-2 mb-4">
            ✨ Your Profile
          </h1>
        </li>

        <div className="flex flex-col gap-2 mb-4">
          <label className="text-sm text-gray-300 font-medium">Name</label>
          <input
            type="text"
            name="displayName"
            className="input input-sm bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label className="text-sm text-gray-300 font-medium">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            className="input input-sm bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Paste image URL"
          />
        </div>

        <div className="text-sm text-center text-gray-400 mb-3 border border-gray-600 rounded-lg py-2 bg-gray-800">
          {user?.email}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleUpdate}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-indigo-500/20 transition-all"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <FiSave />
          Update Profile
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLogOut}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 mt-1 hover:bg-gray-600 text-white rounded-lg border border-gray-600 transition-all"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <FiLogOut />
          Sign Out
        </motion.button>
      </ul>
    </div>
  );
};

export default Profiles;
