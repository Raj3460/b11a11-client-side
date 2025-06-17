import React from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { FiUploadCloud, FiEdit2, FiLink, FiCheckCircle } from "react-icons/fi";

const TakeAssignment = () => {
  const { user } = useContext(AuthContext);

  const { id } = useParams();
  console.log(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const docLink = form.docLink.value;
    const note = form.note.value;
    console.log(docLink, note);

    const submission = {
      id,
      email: user?.email,
      docLink,
      note,
      status: "pending",
      submittedAt: new Date().toISOString(),
    };

    // submission
    fetch("https://studymate-server.vercel.app/submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Submitted!",
            text: "Your assignment has been submitted successfully.",
          });
          form.reset();
        } else {
          Swal.fire({
            icon: "warning",
            title: "Failed!",
            text: "Assignment submission failed. Try again.",
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong during submission!",
        });
        form.reset();
      });
  };

  return (
    <div className="md:min-h-screen bg-gradient-to-br from-base-100 to-base-300 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl"
      >
        <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-6 ">
          <div className="flex items-center justify-center mb-2">
            <FiUploadCloud className="h-8 w-8 mr-2" />
            <h2 className="text-2xl font-bold">Submit Assignment</h2>
          </div>
          <p className="text-indigo-100 text-center">
            Complete your submission for assignment #{id}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6 bg-base-300">
          <motion.div whileHover={{ scale: 1.01 }} className="space-y-2">
            <label className=" text-sm font-medium text-gray-700 flex items-center">
              <FiLink className="mr-2" />
              Google Docs Link
            </label>
            <input
              type="url"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2   focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="https://docs.google.com/..."
              name="docLink"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }} className="space-y-2">
            <label className=" text-sm font-medium text-gray-700 flex items-center">
              <FiEdit2 className="mr-2" />
              Quick Note
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-indigo-500 focus:border-indigo-500 transition"
              rows="4"
              placeholder="Write a short note..."
              name="note"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <FiCheckCircle className="mr-2" />
            Submit Assignment
          </motion.button>
        </form>

        <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Make sure your document has proper sharing permissions
          </p>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-200 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-purple-200 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default TakeAssignment;
