import React, { useContext, useEffect, useState } from "react";
import { IoIosBook } from "react-icons/io";
import { Link } from "react-router";
import AllAssignmentCard from "./AllAssignmentCard";
import { AuthContext } from "../Context/AuthContext";
import { motion } from "framer-motion";
import { PlusIcon } from "lucide-react";

const AllAssignment = () => {
  const { user } = useContext(AuthContext);
  const [accessToken, setAccessToken] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  // Fetch data from server
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

  // Get access token
  useEffect(() => {
    const getToken = async () => {
      if (user) {
        const token = await user.getIdToken();
        setAccessToken(token);
      }
    };
    getToken();
  }, [user]);

  // Handle assignment deletion
  const handleAssignmentDelete = (deletedId) => {
    setAssignments(prev => prev.filter(assignment => assignment._id !== deletedId));
  };

  // Handle search
  const handleSearchClick = () => {
    setSearch(searchTerm.trim());
  };

  // Frontend sorting function
  const sortAssignments = (data) => {
    switch (sort) {
      case "newest":
        return [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
      case "oldest":
        return [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
      case "title_asc":
        return [...data].sort((a, b) => a.title.localeCompare(b.title));
      case "title_desc":
        return [...data].sort((a, b) => b.title.localeCompare(a.title));
      case "easy":
        return [...data].filter(item => item.difficultyLevel === "easy");
      case "medium":
        return [...data].filter(item => item.difficultyLevel === "medium");
      case "hard":
        return [...data].filter(item => item.difficultyLevel === "hard");
      default:
        return data;
    }
  };

  // Get sorted assignments
  const sortedAssignments = sortAssignments(assignments);

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-300 to-base-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center justify-center bg-accent  backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
          <IoIosBook className=" text-3xl mr-3 bg-primary text-white rounded-4xl p-1" />
          <h1 className="text-3xl md:text-4xl font-bold">
            All Assignments
          </h1>
        </div>
        <p className="mt-4 max-w-2xl mx-auto">
          Browse through all available assignments. Filter or search to find what you need.
        </p>
      </motion.div>

      {/* Filters and Sorting */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 flex-wrap">
        {/* Difficulty Filter */}
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="p-2 border rounded-md w-full bg-base-300 sm:w-52"
        >
          <option value="">All Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        {/* Sort Options */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="p-2 border rounded-md w-full bg-base-300 sm:w-52"
        >
          <option value="">Sort By</option>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="title_asc">Title A-Z</option>
          <option value="title_desc">Title Z-A</option>
        </select>

        {/* Search */}
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
            className="bg-primary text-white px-4 rounded-r-md hover:bg-indigo-700 transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      {/* Assignments Grid - 4 cards per row */}
      {sortedAssignments.length > 0 ? (
        <motion.div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
          {sortedAssignments.map((data) => (
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

export default AllAssignment;