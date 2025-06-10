import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaStar, FaBookOpen } from "react-icons/fa";

const AllAssignmentCard = ({ data }) => {
  const { _id, date, description, difficultyLevel, marks, title, url } = data;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden max-w-md mx-auto border hover:shadow-lg transition-all duration-300"
    >
      <img
        src={url}
        alt={title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{description.slice(0, 100)}...</p>

        <div className="flex items-center justify-between text-sm text-gray-700 mt-2">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span className="capitalize">{difficultyLevel}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaBookOpen className="text-blue-500" />
            <span>{marks} Marks</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCalendarAlt className="text-green-500" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AllAssignmentCard;
