import React from "react";
import UseAxiosSecure from "../AxioxSeCuer/UseAxiosSecure";

const UseApplicationApi = () => {
  const axioxSecure = UseAxiosSecure();
  const mySubmissionsPromise = (email) => {
    return axioxSecure
      .get(`/submissions?email=${email}`)
      .then((res) => res.data);
  };
  return {
    mySubmissionsPromise,
  };
};

export default UseApplicationApi;
