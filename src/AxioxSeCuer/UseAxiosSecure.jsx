import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

const UseAxiosSecure = () => {
  const { user } = useContext(AuthContext);


  axiosInstance.interceptors.request.use(config => {
       config.headers.authorization = `Bearer ${user.accessToken}`
       return config
  })
  return axiosInstance;
};

export default UseAxiosSecure;
