
import { motion } from "framer-motion";
import { FaBook, FaUsers, FaChartLine, FaHandshake, FaLightbulb, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router";
import { IoMdSchool } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

const AboutUs = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-secondary/20 to-secondary/60 text-info overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90"></div> */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10 text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <IoMdSchool className="text-6xl text-amber-400 mx-auto" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            About <span className="text-amber-400">StudyMate</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Revolutionizing collaborative learning through technology and community
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex justify-center gap-4"
          >
            <Link 
              to={user ? "/allAssignment" : "/register"} 
              className="btn btn-lg bg-primary border-0 text-white px-8 rounded-full shadow-lg"
            >
              Join Now
            </Link>
            <Link 
              to="/" 
              className="btn btn-lg btn-outline text-white hover:bg-white hover:text-indigo-700 border-white px-8 bg-secondary rounded-full"
            >
              Explore Features
            </Link>
          </motion.div>
        </motion.div>
      </div>

      

      {/* Floating Elements */}
      <motion.div 
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden lg:block fixed top-1/4 left-10 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border-2 border-white/20 z-0"
      ></motion.div>
      
      <motion.div 
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="hidden lg:block fixed bottom-1/3 right-16 w-20 h-20 bg-amber-400/20 rounded-full backdrop-blur-sm border-2 border-amber-400/30 z-0"
      ></motion.div>

      {/* Our Story Section */}
      <div className="py-20 container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Our Team" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-amber-500"></div>
              <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Our Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Empowering Students <br />
              <span className="text-indigo-600">Since 2023</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Founded by a group of passionate educators and technologists, StudyHub began with a simple mission: to make collaborative learning accessible to everyone, everywhere. We saw the limitations of traditional education systems and set out to create a platform that breaks down barriers.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we're proud to serve a growing community of learners who benefit from our innovative approach to group study, assignment sharing, and peer evaluation.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
                  <FaLightbulb className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Innovative</h4>
                  <p className="text-sm text-gray-600">Cutting-edge features</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-100 rounded-full text-amber-600">
                  <FaGraduationCap className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Educational</h4>
                  <p className="text-sm text-gray-600">Learning-first approach</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
     

      {/* Stats Section */}
      {/* <div className="py-20 bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {
                value: "10,000+",
                label: "Active Learners",
                icon: <FaUsers className="text-3xl mx-auto mb-2" />
              },
              {
                value: "50,000+",
                label: "Assignments",
                icon: <FaBook className="text-3xl mx-auto mb-2" />
              },
              {
                value: "95%",
                label: "Satisfaction Rate",
                icon: <FaHandshake className="text-3xl mx-auto mb-2" />
              },
              {
                value: "24/7",
                label: "Support Available",
                icon: <FaLightbulb className="text-3xl mx-auto mb-2" />
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                {stat.icon}
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}

    
      {/* CTA Section */}
     
    </div>
  );
};

export default AboutUs;

