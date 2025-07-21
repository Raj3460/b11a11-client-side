import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="relative  items-center overflow-hidden px-3.5 md:px-8">
      <div className="absolute  inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          alt="Study group background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-red-900/80"></div>
      </div>

      {/* Content */}
      <div className="container  mx-auto px-4 relative  z-10 py-8 flex items-center">
        <div className="flex  flex-col lg:flex-row items-center gap-6">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-3   text-white">
<motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="space-y-4 md:space-y-6"
>
  {/* Main headline with staggered typing effect */}
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-4xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
    >
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-green-600">
        <Typewriter
          words={['Transform Your']}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          delaySpeed={1000}
        />
      </span>
      <span className="block  text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">
        <Typewriter
          words={['Learning Experience']}
          cursor={false}
          typeSpeed={60}
          delaySpeed={1500}
        />
      </span>
    </motion.div>
  </div>

  {/* Dynamic tagline with bouncing animation */}
  <motion.div
    initial={{ scale: 0.9 }}
    animate={{ scale: 1 }}
    transition={{ 
      delay: 1.8,
      type: "spring",
      stiffness: 100
    }}
    className="text-xl md:text-2xl text-gray-200 font-medium"
  >
    <Typewriter
      words={[
        'Collaborate. Create. Succeed.',
        'Share knowledge effortlessly.',
        'Learn together, grow faster.',
        'Your study hub reimagined.'
      ]}
      loop={Infinity}
      cursor
      cursorStyle="▍"
      typeSpeed={50}
      deleteSpeed={30}
      delaySpeed={2000}
    />
  </motion.div>

  {/* Decorative elements */}
  <div className="flex items-center gap-4 ">
    <motion.div
      animate={{ 
        rotate: 360,
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }
      }}
      className="w-3 h-3 rounded-full bg-amber-400"
    />
    <motion.div
      animate={{ 
        x: [-10, 10, -10],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className="w-12 h-1 rounded-full bg-teal-300 opacity-80"
    />
  </div>
</motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-sm md:te text-gray-100"
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
                  className="btn btn-sm btn-warning hover:bg-p border-0 text-black"
                >
                  Get Started
                </Link>
              )}
              <Link
                to="/allAssignment"
                className="btn btn-sm bg-secondary text-amber-950  hover:bg-primary hover:text-black "
              >
                Browse Assignments
              </Link>
            </motion.div>

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
              className="w-full flex-1 max-w-lg rounded-4xl mx-auto border-4 border-s-8 border-b-cyan-300 border-t-pink-300 border-s-yellow-300 border-r-green-300"
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
