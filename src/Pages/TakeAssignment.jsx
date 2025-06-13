import React from "react";
import { useContext } from "react";
// import { AuthContext } from '../../providers/AuthProvider'; // তোমার প্রোজেক্ট অনুযায়ী path adjust করো
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { useParams } from "react-router";

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
    fetch("http://localhost:8000/submissions", {
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
    <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Submit Assignment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Google Docs Link</label>
          <input
            type="url"
            required
            className="w-full p-2 border rounded"
            placeholder="https://docs.google.com/..."
            name="docLink"
            //      onChange={(e) => setDocLink(e.target.value)}
          />
        </div>
        <h1>{id} nnnnnnnnn</h1>

        <div>
          <label className="block font-medium">Quick Note</label>
          <textarea
            className="w-full p-2 border rounded"
            rows="4"
            placeholder="Write a short note..."
            name="note"
            //      onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded w-full transition"
        >
          Submit Assignment
        </button>
      </form>
    </div>
  );
};

export default TakeAssignment;
