import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";
import { AuthContext } from "../Context/AuthContext";

const AssignmentsDetails = () => {
  const data = useLoaderData();
  const { _id, title, name, date, difficultyLevel, description, marks, url } =
    data;
  const { user } = useContext(AuthContext);
  //  console.log(user);

  const formattedDate = new Date(date).toLocaleDateString("en-GB");

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 lg:p-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-xl text-center mb-8 shadow-lg">
        <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
        <p className="text-gray-200 mt-2">{name}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-gradient-to-br from-red-300 to-purple-300 text-black rounded-md p-3 font-semibold">
              <p>📍 Difficulty</p>
              <p className="text-indigo-600 capitalize">{difficultyLevel}</p>
            </div>
            <div className=" bg-gradient-to-br from-red-300 to-purple-300 text-black rounded-md p-3 font-semibold">
              <p>📅 Deadline</p>
              <p className="text-indigo-600">{formattedDate}</p>
            </div>
            <div className="bg-gradient-to-br from-red-300 to-purple-300 text-black rounded-md p-3 font-semibold">
              <p>🏆 Marks</p>
              <p className="text-indigo-600">{marks}</p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white text-black rounded-md p-5 shadow">
            <h2 className="text-xl font-bold mb-2 text-indigo-700">
              📝 Description
            </h2>
            <p>{description}</p>
          </div>

          {/* Thumbnail if exists */}
          {url && (
            <div className="bg-white text-black rounded-md p-5 shadow">
              <h2 className="text-xl font-bold mb-2 text-indigo-700">
                📎 Thumbnail
              </h2>
              <img src={url} alt="Assignment" className="w-full rounded-md" />
            </div>
          )}

          {/* Take Assignment Button */}
          <Link to={`/takeAssignment/${_id}`}>
            {" "}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 transition py-3 text-white font-semibold rounded-lg"
            >
              Take Assignment
            </motion.button>
          </Link>
        </div>

        {/* Right Sidebar  */}
        <div className=" bg-blue-100 text-black p-6 rounded-xl shadow-lg space-y-4">
          <div className="text-center">
            <img src={user.photoURL} alt="Org" className="mx-auto w-20" />
            <h2 className="text-lg font-bold mt-2">{name}</h2>
            <p className="text-sm text-gray-600">Assignment Creator</p>
          </div>
          <div>
            <p className="font-semibold text-indigo-600">Contact</p>
            <p className="text-sm">{user.email}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full bg-purple-600 hover:bg-purple-700 py-2 text-white font-medium rounded-md"
          >
            Contact Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsDetails;
