import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaStar, FaBookOpen, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const AllAssignmentCard = ({ data, accessToken, onDelete }) => {
  // Daizy UI Color Palette
  const colors = {
    primary: '#007C7C',       // Teal
    primaryLight: '#E0F2F1',  // Light teal
    secondary: '#5A6D6E',     // Gray
    accent: '#FF6B6B',        // Soft red
    background: '#FFFFFF',    // White
    info: '#3B82F6',         // Blue
  };

  const { _id, date, description, difficultyLevel, marks, title, url, name } = data;
  const { user } = useContext(AuthContext);

  const handleDelete = async (assignmentId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This assignment will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: colors.accent,
      cancelButtonColor: colors.secondary,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      background: colors.background,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(
            `https://studymate-server.vercel.app/assignments/${assignmentId}?email=${user?.email}`, 
            {
              headers: {
                Authorization: `Bearer ${accessToken}`
              }
            }
          );

          if (res.data?.result?.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Assignment has been deleted.",
              icon: "success",
              confirmButtonColor: colors.primary,
              background: colors.background,
            });
            onDelete(assignmentId); // Call the onDelete prop
          }
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: error.response?.data?.message || "Deletion failed!",
            icon: "error",
            confirmButtonColor: colors.accent,
            background: colors.background,
          });
        }
      }
    });
  };

  // Difficulty level styling
  const difficultyStyle = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col border border-gray-200 hover:shadow-lg transition-all duration-300"
      
    >
      {/* Image section */}
      <div className="h-40 w-full overflow-hidden relative">
        <img
          src={url || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=280&h=160'}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content section */}
      <div className="px-2 p-1 flex-1 flex flex-col">
        <div className="flex-1">
          <h2 className="text-lg font-bold line-clamp-1" style={{ color: colors.primary }}>
            {title}
          </h2>
         
          <p className="text-xs text-gray-600 mt-1 line-clamp-2">
            {description}
          </p>

           <div className="flex items-center mt-1 gap-1">
            <FaUserAlt className="text-xs" style={{ color: colors.secondary }} />
            <span className="text-xs text-gray-600">By: {name}</span>
          </div>
        </div>

        {/* Metadata row */}
        <div className="flex items-center justify-between text-sm mt-4">
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${difficultyStyle[difficultyLevel] || 'bg-gray-100'}`}>
            <FaStar />
            <span className="capitalize">{difficultyLevel}</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
            <FaBookOpen />
            <span>{marks} Marks</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
            <FaCalendarAlt />
            <span>
              {date ? new Date(date.split("|")[0].trim()).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : "N/A"}
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <Link to={`/details/${_id}`}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 text-sm cursor-pointer rounded transition-colors"
              style={{ 
                backgroundColor: colors.primary,
                color: colors.background
              }}
            >
              View
            </motion.button>
          </Link>
          <Link to={`/update/${_id}`}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 text-sm cursor-pointer rounded transition-colors"
              style={{ 
                backgroundColor: colors.info,
                color: colors.background
              }}
            >
              Edit
            </motion.button>
          </Link>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1 cursor-pointer text-sm rounded transition-colors"
            style={{ 
              backgroundColor: colors.accent,
              color: colors.background
            }}
            onClick={() => handleDelete(_id)} // Using the handleDelete function
          >
            Delete
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default AllAssignmentCard;