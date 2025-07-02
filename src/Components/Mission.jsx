import { motion } from "framer-motion";
import React from "react";
import { FaBook, FaChartLine, FaHandshake, FaUsers } from "react-icons/fa";
import { Link } from "react-router";

const Mission = () => {
  return (
    <div className=" py-14 px-8 md:px-12 bg-base-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-1 bg-amber-500"></div>
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              What Drives Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Our Core Values
          </h2>
          <p className=" max-w-2xl mx-auto">
            The principles that guide everything we do at StudyMate
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4 md:gap-8 ">
          {[
            {
              icon: <FaBook className="text-4xl mb-4 text-indigo-600" />,
              title: "Knowledge Sharing",
              description:
                "We believe in the power of shared knowledge to transform education",
              bg: "bg-indigo-50",
            },
            {
              icon: <FaUsers className="text-4xl mb-4 text-purple-600" />,
              title: "Collaboration",
              description: "Great things happen when minds work together",
              bg: "bg-purple-50",
            },
            {
              icon: <FaChartLine className="text-4xl mb-4 text-amber-600" />,
              title: "Growth",
              description:
                "Continuous improvement for our users and our platform",
              bg: "bg-amber-50",
            },
            {
              icon: <FaHandshake className="text-4xl mb-4 text-blue-600" />,
              title: "Community",
              description: "Building supportive networks of learners",
              bg: "bg-blue-50",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${item.bg} p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center py-5">
        {" "}
        <Link to='/about'>
          <button className="btn btn-wide btn-warning font-bold">More About Us</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Mission;
