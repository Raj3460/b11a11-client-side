import React from "react";
import { Link } from "react-router";

const MySubRowList = ({ submission, index }) => {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">{index + 1}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={submission.url}
              alt="Submission"
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {submission.title}
            </div>
            <div className="text-sm text-gray-500">
              {" "}
              Submitted By : {submission.name}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{submission.email}</div>
        <div className="text-sm text-gray-500">
          Submitted: {new Date(submission.submittedAt).toLocaleDateString()}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
          ${
            submission.status === "pending"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {submission.status}
        </span>
      </td>
      <td>
       {submission.marks}
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link
          href={submission.docLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-900 mr-4"
        >
          View
        </Link>
         <Link><button className="text-gray-600 hover:text-gray-900">Details</button></Link>
      </td>
    </tr>
  );
};

export default MySubRowList;
