import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const PendingAssignments = () => {
  const { user } = useContext(AuthContext);

  const accessToken = user?.accessToken;
  console.log(accessToken);

  const [assignments, setAssignments] = useState([]);
  const [selected, setSelected] = useState(null);
  const [mark, setMark] = useState("");
  const [feedback, setFeedback] = useState("");

  // console.log(selected);

  useEffect(() => {
    if (user?.email) {
       const accessToken = user.accessToken;
       console.log(";;;;;;;", accessToken);
      axios
        .get("https://studymate-server.vercel.app/api/pending-assignments" )
        .then((res) => {
          console.log("server respone ", res.data);
          const filtered = res.data.filter((a) => a.submittedBy !== user.email);
          setAssignments(filtered);
        })
        .catch(error => {
          console.error("Failed to fetch pending assignments", error);
        })
    }
  }, [user]);

  const handleSubmitMark = async () => {
    await axios.put(
      `https://studymate-server.vercel.app/api/assignments/${selected._id}?email=${user.email}`,
      {
        givenMark: mark,
        feedback,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    toast.success("Marked successfully!");
    setSelected(null);
    setAssignments(assignments.filter((a) => a._id !== selected._id));
  };

  return (
    <div className="max-w-7xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold ">Pending Assignments</h2>
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {assignments.length} pending
        </div>
      </div>

      {/* Assignments Table */}
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Marks
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Examinee
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {assignments.map((a , index) => (
                <tr key={a._id} className="hover:bg-gray-50 transition-colors">
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                   
                     <div className="text-sm font-medium text-gray-900">
                       {index +1 }
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {a.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {a.marks}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {a.examineeName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => setSelected(a)}
                      className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-md transition-colors"
                    >
                      Evaluate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Evaluation Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selected.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Submitted by: {selected.examineeName}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className=""
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Document Link */}
              <div className="mb-6">
                <a
                  href={selected.docLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                >
                  <svg
                    className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View Submission Document
                </a>
              </div>

              {/* Student Notes */}
              <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-2">
                  STUDENT NOTES
                </h4>
                <p className="text-gray-700 whitespace-pre-line">
                  {selected.notes || "No additional notes provided"}
                </p>
              </div>

              {/* Evaluation Form */}
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="mark"
                    className="block text-b text-sm font-medium text-gray-700 mb-1"
                  >
                    Awarded Mark{" "}
                    <span className="text-gray-500">
                      (out of {selected.marks})
                    </span>
                  </label>
                  <input
                    id="mark"
                    type="number"
                    min="0"
                    max={selected.marks}
                    step="0.1"
                    placeholder="Enter mark"
                    onChange={(e) => setMark(e.target.value)}
                    className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="feedback"
                    className="block text-sm font-medium  text-gray-700 mb-1"
                  >
                    Feedback
                  </label>
                  <textarea
                    id="feedback"
                    rows={4}
                    placeholder="Provide constructive feedback..."
                    onChange={(e) => setFeedback(e.target.value)}
                    className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex justify-end space-x-3">
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitMark}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Submit Evaluation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingAssignments;
