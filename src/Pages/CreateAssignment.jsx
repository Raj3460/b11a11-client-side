import axios from "axios";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";

const CreateAssignment = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [date, setDate] = useState(null);
  const [difficultyLevel, setDifficultyLevel] = useState("medium");
  const [successMsg, setSuccessMsg] = useState("");
  const [errors, setErrors] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value.trim();
    const description = form.description.value.trim();
    const marks = form.marks.value;
    const url = form.url.value;
    const name = user.displayName;
    const email = user.email;

    // validation
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!description || description.length < 20)
      newErrors.description = "Description must be at least 20 characters long";
    if (!marks || isNaN(marks) || marks < 1)
      newErrors.marks = "Please provide a valid mark";
    if (!date) newErrors.date = "Due date is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const assignmentData = {
      title,
      description,
      marks,
      difficultyLevel,
      url,
      date,
      name,
      email,
    };

    setErrors({});

    axios
      .post("https://studymate-server.vercel.app/assignments", assignmentData)
      .then((result) => {
        if (result.data.insertedId) {
          setSuccessMsg("Assignment created successfully!");
          navigate("/allAssignment");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-base-300 rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-secondary to-pink-600 p-6">
          <h2 className="text-2xl font-bold text-blue-950">
            Create New Assignment
          </h2>
          <p className="text-cyan-900 mt-1">
            Fill in the details below to create an assignment
          </p>
        </div>

        <form onSubmit={handleFormSubmit}>
          <div className="p-6 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium ">
                Assignment Title *
              </label>
              <input
                type="text"
                name="title"
                className="w-full px-4 py-2 rounded-lg  border"
                placeholder="Enter assignment title"
              />
              {errors.title && (
                <p className="text-sm text-red-600 mt-1">{errors.title}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium ">
                Description *
              </label>
              <textarea
                name="description"
                className="w-full px-4 py-2 rounded-lg border h-28"
                placeholder="Enter at least 20 characters"
              ></textarea>
              {errors.description && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Marks */}
              <div>
                <label className="block text-sm font-medium  ">
                  Marks *
                </label>
                <input
                  type="number"
                  name="marks"
                  className="w-full px-4 py-2 rounded-lg border "
                  min="1"
                />
                {errors.marks && (
                  <p className="text-sm text-red-600 mt-1">{errors.marks}</p>
                )}
              </div>

              {/* Difficulty */}
              <div>
                <label className="block text-sm font-medium  ">
                  Difficulty Level *
                </label>
                <select
                  name="difficultyLevel"
                  value={difficultyLevel}
                  onChange={(e) => setDifficultyLevel(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border  "
                >
                  <option className="bg-base-100" value="easy">Easy</option>
                  <option className="bg-base-100" value="medium">Medium</option>
                  <option className="bg-base-100" value="hard">Hard</option>
                </select>
              </div>
            </div>

            {/* Thumbnail */}
            <div>
              <label className="block text-sm font-medium  ">
                Thumbnail Image URL
              </label>
              <input
                type="url"
                name="url"
                className="w-full px-4 py-2 rounded-lg border "
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium  ">
                Due Date *
              </label>
              <DatePicker
                selected={date}
                onChange={(changedDate) => setDate(changedDate)}
                placeholderText="Select due date and time"
                className="w-full px-4 py-2 rounded-lg border "
                dateFormat="MMMM d, yyyy . h:mm aa"
                showTimeSelect
                timeFormat="h:mm aa"
                timeIntervals={15}
                minDate={new Date()}
                isClearable
              />
              {errors.date && (
                <p className="text-sm text-red-600 mt-1">{errors.date}</p>
              )}
            </div>

            {/* Creator Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium  text-warning">
                  Created By
                </label>
                <input
                  type="text"
                  name="userName"
                  defaultValue={user?.displayName}
                  readOnly
                  className="input input-bordered text-blue-500 font-bold w-full bg-gray-100"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-warning">
                  Contact Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  defaultValue={user?.email}
                  readOnly
                  className="input input-bordered text-blue-500 font-bold w-full bg-gray-100"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-primary text-black font-medium py-2 px-4 rounded-lg"
              >
                Create Assignment
              </button>
            </div>

            {successMsg && (
              <div className="text-center text-green-600 font-medium mt-4">
                {successMsg}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignment;
