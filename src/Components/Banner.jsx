import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="relative flex items-center overflow-hidden px-12">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          alt="Study group background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-red-900/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6 text-white">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
                 <Typewriter
                  words={['Collaborative Learning', ]}
                  loop={2}
                  cursor
                  cursorStyle=""
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />

               
              <br />
              <span className="text-amber-400">
                   <Typewriter
            words={['Made Easy']}
            loop={1}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
            
          /></span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-100"
            >
              Join our online study platform where you can create assignments,
              collaborate with peers, and track your learning progress together.
              Perfect for students and lifelong learners alike.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {user ? (
                ""
              ) : (
                <Link
                  to="/register"
                  className="btn btn-primary btn-lg bg-amber-500 hover:bg-amber-600 border-0 text-white"
                >
                  Get Started
                </Link>
              )}
              <Link
                to="/assignments"
                className="btn btn-outline btn-lg text-white hover:bg-white hover:text-indigo-700 border-white"
              >
                Browse Assignments
              </Link>
            </motion.div>

            {/* Stats Section */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap gap-8 pt-8"
            >
              <div className="text-center">
                <div className="stat-value text-3xl text-amber-400">500+</div>
                <div className="stat-desc text-gray-200">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="stat-value text-3xl text-amber-400">1K+</div>
                <div className="stat-desc text-gray-200">Assignments</div>
              </div>
              <div className="text-center">
                <div className="stat-value text-3xl text-amber-400">95%</div>
                <div className="stat-desc text-gray-200">Satisfaction Rate</div>
              </div>
            </motion.div> */}
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-9/12 w-3/4 "
          >
            <img
              src="banner.jpg"
              alt="Group Study Illustration"
              className="w-full max-w-lg rounded-4xl mx-auto border-4 border-s-8 border-b-cyan-300 border-t-pink-300 border-s-yellow-300 border-r-green-300"
            />
          </motion.div>
        </div>
      </div>

      {/* Floating Study Elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hidden lg:block"
      ></motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-20 right-20 w-12 h-12 bg-amber-400/20 rounded-full backdrop-blur-sm border border-amber-400/30 hidden lg:block"
      ></motion.div>
    </div>
  );
};

export default Banner;
