import React from "react";
import UseAxiosSecure from "../AxioxSeCuer/UseAxiosSecure";

const UseApplicationApi = () => {
  const axioxSecure = UseAxiosSecure();

  const mySubmissionsPromise = async (email) => {
    try {
      const res = await axioxSecure.get(`/submissions?email=${email}`);
      return res.data;
    } catch (error) {
      console.error("Submission API Error:", error.response?.status);
      throw new Error("Submission data load failed.");
    }
  };

  return {
    mySubmissionsPromise,
  };
};

export default UseApplicationApi;
