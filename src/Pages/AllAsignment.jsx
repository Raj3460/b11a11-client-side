import React, { useContext, useEffect, useState } from "react";
import { IoIosBook } from "react-icons/io";
import { Link } from "react-router"; // react-router-dom use করো
import AllAssignmentCard from "./AllAssignmentCard";
import { AuthContext } from "../Context/AuthContext";
import { motion } from "framer-motion";
import { PlusIcon } from "lucide-react";

const AllAsignment = () => {
  const { user } = useContext(AuthContext);
  const [accessToken, setAccessToken] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  
  const [searchTerm, setSearchTerm] = useState(""); // ইনপুটের জন্য
  const [search, setSearch] = useState(""); // API কলের জন্য আসল সার্চ টার্ম

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://studymate-server.vercel.app/assignments?`;
        if (difficulty) url += `difficulty=${difficulty}&`;
        if (search) url += `search=${encodeURIComponent(search)}`;

        const response = await fetch(url);
        const data = await response.json();
        setAssignments(data);
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };

    fetchData();
  }, [difficulty, search]);

  // Get Access Token
  useEffect(() => {
    const getToken = async () => {
      if (user) {
        const token = await user.getIdToken();
        setAccessToken(token);
      }
    };
    getToken();
  }, [user]);

  // Delete Handler
  const handleAssignmentDelete = (deletedId) => {
    setAssignments((prev) =>
      prev.filter((assignment) => assignment._id !== deletedId)
    );
  };

  // Search বাটন ক্লিক হ্যান্ডলার
  const handleSearchClick = () => {
    setSearch(searchTerm.trim());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-300 to-base-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center justify-center bg-base-300 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
          <IoIosBook className="text-indigo-600 text-3xl mr-3" />
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            All Assignments
          </h1>
        </div>
        <p className="mt-4 max-w-2xl mx-auto">
          Browse through all available assignments. Filter or search to find what you need.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="p-2 border rounded-md w-full sm:w-52"
        >
          <option value="">All Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <div className="flex w-full sm:w-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title..."
            className="p-2 border rounded-l-md w-full sm:w-64"
          />
          <button
            onClick={handleSearchClick}
            className="bg-indigo-600 text-white px-4 rounded-r-md hover:bg-indigo-700 transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      {/* Assignments Grid */}
      {assignments.length > 0 ? (
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
          {assignments.map((data) => (
            <AllAssignmentCard
              key={data._id}
              data={data}
              accessToken={accessToken}
              onDelete={handleAssignmentDelete}
            />
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 bg-accent rounded-xl shadow-sm"
        >
          <IoIosBook className="mx-auto text-5xl text-gray-300 mb-4" />
          <h3 className="text-xl font-medium text-gray-700">
            No assignments found
          </h3>
          <p className="mt-2 text-gray-500">
            Create your first assignment to get started
          </p>
        </motion.div>
      )}

      {/* Add Button */}
      {user && (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-10"
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
