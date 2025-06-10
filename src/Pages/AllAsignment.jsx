import React from "react";
import { IoIosBook } from "react-icons/io";
import { useLoaderData } from "react-router";
import AllAssignmentCard from "./AllAssignmentCard";

const AllAsignment = () => {
  const allData = useLoaderData();

  return (
    <div className="p-5 bg-blue-100 ">
      <h1 className=" text-2xl md:text-5xl font-serif font-bold text-blue-800 justify-center  flex gap-3 items-center">
        {" "}
        All assignments{" "}
        <span className="text-red-100 border rounded-4xl p-1.5 bg-blue-800 text-2xl md:text-4xl">
          <IoIosBook />
        </span>
      </h1>

      <div className=" p-4 grid  gap-4 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        {allData.map((data) => (
          <AllAssignmentCard key={data._id} data={data}></AllAssignmentCard>
        ))}
      </div>
    </div>
  );
};

export default AllAsignment;
