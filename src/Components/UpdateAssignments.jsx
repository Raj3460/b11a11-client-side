import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
// import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";
import { IoReturnUpBackSharp } from "react-icons/io5";

const UpdateAssignments = () => {
  const data = useLoaderData();
  console.log("data.date:", data.date);
  console.log("Parsed Date:", new Date(data.date));

  const { user } = useContext(AuthContext);
  const [date, setDate] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("medium");
 

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (data?.date) {
      const formatted = data.date.replace("|", "").trim(); // | সরিয়ে ফেলা
      const parsedDate = new Date(formatted);
      if (!isNaN(parsedDate)) {
        setDate(parsedDate);
      } else {
        console.error("Invalid date format:", data.date);
      }
    }
  }, [data?.date]);

  const handleDateChange = (changedDate) => {
    setDate(changedDate);
    console.log("Changed Date (onChange):", changedDate);
  };

  const handleUpdatedForm = (e) => {
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

    fetch(`https://studymate-server.vercel.app/assignments/${data._id}?email=${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(assignmentData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setSuccessMsg("Updated successFully");
          navigate("/allAssignment");
        } else {
          setErrorMsg(result.message || "You are not authorized to update");
        }
      })
      .catch((error) => {
        console.error("Update error:", error);
        alert("Failed to update. Please try again.");
      });
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-100 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20 backdrop-blur-sm">
          {/* Form Header with animated gradient */}
          <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 animate-pulse"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white font-sans tracking-tight">
                Update Assignment
              </h2>
              <p className="text-cyan-100/90 mt-2 font-medium">
                Refine your assignment details below
              </p>
            </div>
          </div>

          {/* Form Body with smooth transitions */}
          <form onSubmit={handleUpdatedForm}>
            <div className="p-8 space-y-6">
              {/* Title Field */}
              <div className="space-y-2 animate-fadeIn">
                <label className="block text-sm font-medium text-gray-700/90 font-sans">
                  Assignment Title <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue={data?.title}
                  name="title"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300/80 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 bg-white/90 shadow-sm hover:shadow-md"
                  placeholder="Enter assignment title"
                />
              </div>
             

              {/* Description Field */}
              <div className="space-y-2 animate-fadeIn delay-100">
                <label className="block text-sm font-medium text-gray-700/90 font-sans">
                  Description <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="description"
                  defaultValue={data?.description}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300/80 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 h-32 transition-all duration-300 bg-white/90 shadow-sm hover:shadow-md"
                  placeholder="Enter detailed description..."
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn delay-200">
                {/* Marks Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700/90 font-sans">
                    Marks <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={data?.marks}
                    name="marks"
                    min="1"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300/80 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 bg-white/90 shadow-sm hover:shadow-md"
                    required
                  />
                </div>

                {/* Difficulty Level Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700/90 font-sans">
                    Difficulty <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="difficultyLevel"
                    defaultValue={data?.difficultyLevel}
                    value={difficultyLevel}
                    onChange={(e) => setDifficultyLevel(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300/80 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 bg-white/90 shadow-sm hover:shadow-md appearance-none"
                    required
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>

              {/* Thumbnail URL Field */}
              <div className="space-y-2 animate-fadeIn delay-300">
                <label className="block text-sm font-medium text-gray-700/90 font-sans">
                  Thumbnail Image URL
                </label>
                <input
                  type="url"
                  name="url"
                  defaultValue={data?.url}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300/80 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 bg-white/90 shadow-sm hover:shadow-md"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              {/* Date Picker Field */}
              <div className="space-y-2 animate-fadeIn delay-400">
                <label className="block text-sm font-medium text-gray-700/90 font-sans">
                  Due Date <span className="text-rose-500">*</span>
                </label>
                <DatePicker
                  name="date"
                  selected={date}
                  onChange={handleDateChange}
                  placeholderText="Select due date and time"
                  className=" w-fit px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  dateFormat="MMMM d, yyyy . h:mm aa"
                  showTimeSelect
                  timeFormat="h:mm aa"
                  timeIntervals={15}
                  minDate={new Date()}
                  isClearable
                  required
                />
              </div>

              
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-fadeIn delay-500">
              <div>
                <label className="text-sm font-medium text-gray-700/90 font-sans">
                  Created By
                </label>
                <input
                  type="text"
                  name="userName"
                  defaultValue={data?.name}
                  className="w-full px-4 py-3 rounded-xl bg-gray-100/80 border border-gray-200 text-cyan-600 font-bold shadow-inner"
                  readOnly
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700/90 font-sans">
                  Contact Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  defaultValue={data?.email}
                  readOnly
                  className="w-full px-4 py-3 rounded-xl bg-gray-100/80 border border-gray-200 text-cyan-600 font-bold shadow-inner"
                />
              </div>
            </div>

              {/* Submit Button with hover animation */}
              <div className="pt-6 animate-fadeIn delay-600">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Update Assignment
                </button>
              </div>

              {/* Success Message */}
              {successMsg && (
                <div className="text-center bg-green-300 p-3 text-green-500 font-medium mt-4 animate-bounce">
                  {successMsg}
                </div>
              )}
              {errorMsg && (
                <div className="text-center bg-red-300 p-3 text-red-500 font-medium mt-4 animate-bounce">
                  {errorMsg}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center my-6">
        <button
          className="btn btn-error flex items-center gap-2"
          onClick={goBack}
        >
          <IoReturnUpBackSharp /> Go Back
        </button>
      </div>
    </div>
  );
};

export default UpdateAssignments;
