import React, { use } from "react";
import MySubRowList from "./MySubRowList";
import { motion } from "framer-motion";
import { IoIosBook } from "react-icons/io";

const MySubmissionList = ({ MySubmissionApi }) => {
  const data = use(MySubmissionApi);
  console.log(data);
  
  // Check if data is not available or empty
  if (!data || data.length === 0) {
    return (
       <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 bg-accent rounded-xl shadow-sm"
        >
          <IoIosBook className="mx-auto text-5xl text-gray-300 mb-4" />
          <h3 className="text-xl font-medium text-gray-700">
            No submission found
          </h3>
          <p className="mt-2 text-gray-500">
            Create your first Submission
          </p>
        </motion.div>
    );
  }

  return (
    <div>
      {data.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Assignment</th>
              <th>submitted</th>
              <th>Status</th>
              <th>marks</th>
            </tr>
          </thead>
          <tbody>
            {data.map((submission, index) => (
              <MySubRowList
                key={submission._id}
                submission={submission}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySubmissionList;