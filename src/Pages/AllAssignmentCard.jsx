import React, { useContext, } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaStar, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router";  
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const AllAssignmentCard = ({ data, accessToken, onDelete }) => {  
  const { _id, date, description, difficultyLevel, marks, title, url, name } = data;
  const { user } = useContext(AuthContext);

  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you won't be able to recover this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(
            `https://studymate-server.vercel.app/assignments/${_id}?email=${user?.email}`, 
            {
              headers: {
                Authorization: `Bearer ${accessToken}`
              }
            }
          );

          if (res.data?.result?.deletedCount > 0) {
            Swal.fire(
              "Deleted!",
              "Your assignment has been deleted.",
              "success"
            );
            
            onDelete(_id);
          } else {
            Swal.fire("Error", "Could not be deleted!", "error");
          }
        } catch (error) {
          console.error("Delete error:", error);
          Swal.fire(
            "Error",
            error.response?.data?.message ||
              "You don't have permission to delete this assignment!",
            "error"
          );
        }
      }
    });
  };

  return (
   <motion.div
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="bg-white rounded-2xl shadow-md overflow-hidden h-full flex flex-col border hover:shadow-lg transition-all duration-300"
>
  {/* Image section */}
  <div className="h-48 w-full overflow-hidden">
    <img
      src={url}
      alt={title}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>

  {/* Content section */}
  <div className="p-4 flex-1 flex flex-col">
    <div className="flex-1">
      <h2 className="text-xl font-bold text-gray-800 line-clamp-1">{title}</h2>
      <p className="font-medium text-gray-600 mt-1">By: {name}</p>
      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
        {description}
      </p>
    </div>

    {/* Metadata row */}
    <div className="flex items-center justify-between text-sm text-gray-700 mt-4">
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
        <span>
          {date
            ? new Date(date.split("|")[0].trim()).toLocaleDateString()
            : "N/A"}
        </span>
      </div>
    </div>

    {/* Action buttons */}
    <div className="flex justify-end gap-2 mt-4">
      <Link to={`/details/${_id}`}>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition-colors"
        >
          View
        </motion.button>
      </Link>
      <Link to={`/update/${_id}`}>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600 transition-colors"
        >
          Update
        </motion.button>
      </Link>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
        onClick={() => handleDelete(_id)}
      >
        Delete
      </motion.button>
    </div>
  </div>
</motion.div>
  );
};

export default AllAssignmentCard;