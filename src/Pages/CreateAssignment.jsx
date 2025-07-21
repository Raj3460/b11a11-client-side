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
    {/* Header with gradient background */}
    <div className="bg-gradient-to-r from-secondary to-pink-600 p-6 flex items-center">
      <div className="mr-4 p-3 bg-white bg-opacity-20 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-blue-950">
          Create New Assignment
        </h2>
        <p className="text-cyan-900 mt-1 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Fill in the details below to create an assignment
        </p>
      </div>
    </div>

    <form onSubmit={handleFormSubmit}>
      <div className="p-6 space-y-6">
        {/* Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Assignment Title *
            </span>
          </label>
          <input
            type="text"
            name="title"
            className="input input-bordered w-full"
            placeholder="Enter assignment title"
          />
          {errors.title && (
            <p className="text-sm text-red-600 mt-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.title}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Description *
            </span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full h-28"
            placeholder="Enter at least 20 characters"
          ></textarea>
          {errors.description && (
            <p className="text-sm text-red-600 mt-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Marks */}
          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Marks *
              </span>
            </label>
            <input
              type="number"
              name="marks"
              className="input input-bordered w-full"
              min="1"
              placeholder="Total marks"
            />
            {errors.marks && (
              <p className="text-sm text-red-600 mt-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {errors.marks}
              </p>
            )}
          </div>

          {/* Difficulty */}
          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Difficulty Level *
              </span>
            </label>
            <select
              name="difficultyLevel"
              value={difficultyLevel}
              onChange={(e) => setDifficultyLevel(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>

        {/* Thumbnail */}
        <div className="form-control">
          <label className="label">
            <span className="label-text flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Thumbnail Image URL
            </span>
          </label>
          <input
            type="url"
            name="url"
            className="input input-bordered w-full"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Due Date *
            </span>
          </label>
          <DatePicker
            selected={date}
            onChange={(changedDate) => setDate(changedDate)}
            placeholderText="Select due date and time"
            className="input input-bordered w-full"
            dateFormat="MMMM d, yyyy h:mm aa"
            showTimeSelect
            timeFormat="h:mm aa"
            timeIntervals={15}
            minDate={new Date()}
            isClearable
          />
          {errors.date && (
            <p className="text-sm text-red-600 mt-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.date}
            </p>
          )}
        </div>

        {/* Creator Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-warning flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Created By
              </span>
            </label>
            <input
              type="text"
              name="userName"
              defaultValue={user?.displayName}
              readOnly
              className="input input-bordered text-blue-500 font-bold w-full bg-gray-100"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-warning flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Email
              </span>
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
            className="btn btn-secondary w-full hover:btn-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Create Assignment
          </button>
        </div>

        {successMsg && (
          <div className="alert alert-success mt-4">
            <div className="flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <label>{successMsg}</label>
            </div>
          </div>
        )}
      </div>
    </form>
  </div>
</div>
  );
};

export default CreateAssignment;
