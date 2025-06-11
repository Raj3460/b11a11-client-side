import axios from "axios";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Context/AuthContext";

const CreateAssignment = () => {
  const { user } = useContext(AuthContext);
  const [date, setDate] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("medium");

  const handleDateSelect = (selectedDate) => {
    console.log("Selected Date (onSelect):", selectedDate);
  };

  const handleDateChange = (changedDate) => {
    setDate(changedDate);
    console.log("Changed Date (onChange):", changedDate);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const difficultyLevel = form.difficultyLevel.value;
    const url = form.url.value;
    const date = form.date.value;
    const name = user.displayName;
    const email = user.email;

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
    console.log(assignmentData);

    //request
    axios
      .post("http://localhost:8000/assignments", assignmentData)
      .then((result) => {
        const user = result.data;
        console.log(user);
        if (user.insertedId) {
          setSuccessMsg("your Assignment has Create Successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Form Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
          <h2 className="text-2xl font-bold text-white">
            Create New Assignment
          </h2>
          <p className="text-cyan-100 mt-1">
            Fill in the details below to create an assignment
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleFormSubmit}>
          <div className="p-6 space-y-6">
            {/* Title Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Assignment Title *
              </label>
              <input
                type="text"
                name="title"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                placeholder="Enter assignment title"
                required
              />
            </div>

            {/* Description Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Description *
              </label>
              <textarea
                name="description"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-32 transition"
                placeholder="Enter assignment description"
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Marks Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Marks *
                </label>
                <input
                  type="number"
                  name="marks"
                  min="1"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                  required
                />
              </div>

              {/* Difficulty Level Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Difficulty Level *
                </label>
                <select
                  name="difficultyLevel"
                  value={difficultyLevel}
                  onChange={(e) => setDifficultyLevel(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                  required
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </div>

            {/* Thumbnail URL Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Thumbnail Image URL
              </label>
              <input
                type="url"
                name="url"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Date Picker Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Due Date *
              </label>
              <DatePicker
                name="date"
                selected={date}
                onSelect={handleDateSelect}
                onChange={handleDateChange}
                placeholderText="Select due date and time"
                className=" w-fit px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                dateFormat="MMMM d, yyyy | h:mm aa"
                showTimeSelect
                timeFormat="h:mm aa"
                timeIntervals={15}
                minDate={new Date()}
                isClearable
                required
              />
            </div>

            {/* user */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Created By
                </label>
                <input
                  type="text"
                  name="userName"
                  defaultValue={user?.displayName}
                  
                  className="input input-bordered text-blue-500 font-bold w-full bg-gray-100"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
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

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200"
              >
                Create Assignment
              </button>
            </div>

            {/* Success Message */}
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
