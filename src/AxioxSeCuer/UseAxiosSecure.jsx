import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const axiosInstance = axios.create({
  baseURL: "https://studymate-server.vercel.app",
});

const UseAxiosSecure = () => {
  const { user, logoutUser } = useContext(AuthContext);

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log("error in interceptor", error);
      if (error.status === 401 || error.status === 403) {
        logoutUser()
          .then(() => {
            console.log("SignOut User For 401 status");
          })
          .catch((error) => {
            console.log(error);
          });
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default UseAxiosSecure;
