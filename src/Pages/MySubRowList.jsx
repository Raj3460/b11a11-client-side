import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiUser,
  FiCalendar,
  FiExternalLink,
  FiAlertCircle,
  FiCheckCircle,
  FiX,
} from "react-icons/fi";

const MySubRowList = ({ submission, index }) => {
  const {
    _id,
    docLink,
    email,
    name,
    note,
    status,
    submittedAt,
    feedback,
    givenMark,
    title,
    url,
    marks,
  } = submission;
  return (
    <motion.tr
      className="hover:bg-gray-50 transition-colors"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center text-gray-500 font-medium">
          {index + 1}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <motion.img
              className="h-10 w-10 rounded-lg object-cover border border-gray-200"
              src={url}
              alt="Submission"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{title}</div>
            <div className="text-sm text-gray-500 flex items-center mt-1">
              <FiUser className="mr-1" size={14} />
              {name}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{email}</div>
        <div className="text-sm text-gray-500 flex items-center mt-1">
          <FiCalendar className="mr-1" size={14} />
          {new Date(submittedAt).toLocaleDateString()}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <motion.span
          className={`px-3 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full 
          ${
            status === "pending"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          {status === "pending" ? (
            <FiAlertCircle className="mr-1" size={14} />
          ) : (
            <FiCheckCircle className="mr-1" size={14} />
          )}
          {status}
        </motion.span>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div
          className={`text-sm font-medium ${
            givenMark ? "text-blue-600" : "text-gray-500"
          }`}
        >
          {givenMark || "--"} / {marks}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="flex items-center justify-end space-x-3">
          <motion.a
            href={docLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-900 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiExternalLink className="mr-1" size={16} />
            View
          </motion.a>

          <label htmlFor={`modal_${_id}`} className="cursor-pointer">
            <motion.div
              className="text-gray-600 hover:text-gray-900 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiFileText className="mr-1" size={16} />
              Details
            </motion.div>
          </label>
        </div>

       
        {/* Modal */}
        <input type="checkbox" id={`modal_${_id}`} className="modal-toggle" />
        <div className="modal">
          <motion.div
            className="modal-box relative max-w-2xl p-0 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <div className="flex items-center mt-2 text-blue-100">
                    <FiUser className="mr-2" />
                    <span className="mr-4">{name}</span>
                    <FiCalendar className="mr-2" />
                    <span>{new Date(submittedAt).toLocaleString()}</span>
                  </div>
                </div>
                <label
                  htmlFor={`modal_${_id}`}
                  className="btn btn-ghost btn-circle text-white hover:bg-white/10"
                >
                  <FiX size={20} />
                </label>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Image and Quick Info */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-full md:w-1/3">
                  <motion.div
                    className="rounded-xl overflow-hidden border border-gray-200 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      className="w-full h-48 object-cover"
                      src={url}
                      alt="Submission"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                  {/* Status Card */}
                  <motion.div
                    className={`p-4 rounded-xl shadow-sm border ${
                      status === "pending"
                        ? "bg-yellow-50 border-yellow-200"
                        : "bg-green-50 border-green-200"
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center">
                      {status === "pending" ? (
                        <FiAlertCircle
                          className={`mr-2 ${
                            status === "pending"
                              ? "text-yellow-600"
                              : "text-green-600"
                          }`}
                        />
                      ) : (
                        <FiCheckCircle
                          className={`mr-2 ${
                            status === "pending"
                              ? "text-yellow-600"
                              : "text-green-600"
                          }`}
                        />
                      )}
                      <span className="font-medium">Status</span>
                    </div>
                    <p className="mt-2 font-semibold text-start capitalize">{status}</p>
                  </motion.div>

                  {/* Marks Card */}
                  <motion.div
                    className="p-4 rounded-xl bg-blue-50 border border-blue-200 shadow-sm"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center text-blue-600">
                      <FiFileText className="mr-2" />
                      <span className="font-medium">Marks</span>
                    </div>
                    <p className="mt-2">
                      <span className="text-2xl font-bold text-blue-600">
                        {givenMark || "--"}
                      </span>
                      <span className="text-gray-500"> / {marks}</span>
                    </p>
                  </motion.div>

                  {/* Document Link Card */}
                  <motion.div
                    className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 shadow-sm col-span-2"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center text-indigo-600">
                      <FiExternalLink className="mr-2" />
                      <span className="font-medium">Document Link</span>
                    </div>
                    <a
                      href={docLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-indigo-600 hover:underline block truncate"
                    >
                      {docLink}
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Notes Section */}

{note && (
  <div
    className="bg-gray-50 p-4 rounded-xl border border-gray-200"
   
  >
    <h4 className="font-medium text-start text-gray-700 mb-2">Submission Notes</h4>
    <div className="max-h-40 overflow-y-auto"> 
      <p className="text-gray-600 text-start wrap break-words"> 
        {note}
      </p>
    </div>
  </div>
)}

              {/* Feedback Section */}
              {feedback && (
                <motion.div
                  className="bg-purple-50 p-4 rounded-xl border border-purple-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center text-purple-600 mb-2">
                    <FiFileText className="mr-2" />
                    <h4 className="font-medium">Feedback</h4>
                  </div>
                  <p className="text-gray-700 text-start">{feedback}</p>
                </motion.div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3 border-t border-gray-200">
              <a
                href={docLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-primary"
              >
                <FiExternalLink className="mr-2" />
                Open Document
              </a>
            </div>
          </motion.div>
        </div>
      </td>
    </motion.tr>
  );
};

export default MySubRowList;
