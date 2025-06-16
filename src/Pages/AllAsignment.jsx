import React, { useContext, useEffect, useState } from "react";
import { IoIosBook } from "react-icons/io";
import { Link } from "react-router-dom"; // Changed from 'react-router' to 'react-router-dom'
import AllAssignmentCard from "./AllAssignmentCard";
import { AuthContext } from "../Context/AuthContext";
import { motion } from "framer-motion";
import { PlusIcon } from "lucide-react";

const AllAsignment = () => {
  const { user } = useContext(AuthContext);
  const [accessToken, setAccessToken] = useState(null);
  const [assignments, setAssignments] = useState([]); // Local state for assignments

  // Load data initially
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/assignments");
        const data = await response.json();
        setAssignments(data);
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getToken = async () => {
      if (user) {
        const token = await user.getIdToken();
        setAccessToken(token);
        console.log("AccessToken:", token);
      }
    };
    getToken();
  }, [user]);

  // Handle assignment deletion
  const handleAssignmentDelete = (deletedId) => {
    setAssignments(prev => prev.filter(assignment => assignment._id !== deletedId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header Section with Animation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
          <IoIosBook className="text-indigo-600 text-3xl mr-3" />
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            All Assignments
          </h1>
        </div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Browse through all available assignments. Click on any assignment to view details.
        </p>
      </motion.div>

      {/* Assignments Grid */}
      {assignments.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {assignments.map((data) => (
            <AllAssignmentCard
              key={data._id}
              data={data}
              accessToken={accessToken}
              onDelete={handleAssignmentDelete} // Pass the delete handler
            />
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 bg-white rounded-xl shadow-sm"
        >
          <IoIosBook className="mx-auto text-5xl text-gray-300 mb-4" />
          <h3 className="text-xl font-medium text-gray-700">No assignments found</h3>
          <p className="mt-2 text-gray-500">Create your first assignment to get started</p>
        </motion.div>
      )}

      {/* Action Button */}
      {user && (
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8"
        >
          <Link
            to="/createAssignment"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-colors"
          >
            <PlusIcon className="w-6 h-6" />
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default AllAsignment;