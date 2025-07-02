import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";
import { AuthContext } from "../Context/AuthContext";

const AssignmentsDetails = () => {
  const data = useLoaderData();
  const { _id, title, name, date, difficultyLevel, description, marks, url } = data;
  const { user } = useContext(AuthContext);

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Difficulty level styling
  const difficultyStyles = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  };

  return (
    <div className="min-h-screen bg-base-100 p-6 lg:p-12">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-base-300 rounded-xl shadow-md p-8 mb-8 border border-gray-100"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-bold  mb-2">{title}</h1>
          <p className="">Created by {name}</p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Info Cards */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="bg-base-300 p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-3 h-3 rounded-full ${difficultyLevel === 'easy' ? 'bg-green-500' : difficultyLevel === 'medium' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                <span className="text-sm font-medium ">Difficulty</span>
              </div>
              <p className="text-lg font-semibold capitalize">{difficultyLevel}</p>
            </div>

            <div className="  bg-base-300   p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round"  strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span className="text-sm font-medium ">Deadline</span>
              </div>
              <p className="text-lg font-semibold">{formattedDate}</p>
            </div>

            <div className="  bg-base-300   p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round"  strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-sm font-medium ">Marks</span>
              </div>
              <p className="text-lg font-semibold">{marks}</p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="  bg-base-300   p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-semibold  mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round"
                  strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Assignment Description
            </h2>
            <div className="prose max-w-none ">
              <p>{description}</p>
            </div>
          </motion.div>

          {/* Thumbnail */}
          {url && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="  bg-base-300   p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Assignment Thumbnail
              </h2>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <img src={url} alt="Assignment" className="w-full h-auto" />
              </div>
            </motion.div>
          )}

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-4"
          >
            <Link to={`/takeAssignment/${_id}`}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-200"
              >
                Start Assignment
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="  bg-base-300   p-6 rounded-lg shadow-sm border border-gray-100 h-fit sticky top-6"
        >
          <div className="text-center mb-6">
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-blue-100 mb-3">
              <img src={user?.photoURL || "https://ui-avatars.com/api/?name="+name} alt="Creator" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold ">{name}</h3>
            <p className="text-sm ">Assignment Creator</p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium  mb-1">Contact Email</h4>
              <p className="">{user?.email}</p>
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full   bg-base-300   border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg shadow-sm transition-all duration-200"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Contact Creator
                </div>
              </motion.button>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <h4 className="text-sm font-medium  mb-2">Assignment Details</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="">Created:</span>
                  <span className="font-medium">{formattedDate}</span>
                </li>
                <li className="flex justify-between">
                  <span className="">Difficulty:</span>
                  <span className="font-medium capitalize">{difficultyLevel}</span>
                </li>
                <li className="flex justify-between">
                  <span className="">Total Marks:</span>
                  <span className="font-medium">{marks}</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AssignmentsDetails;