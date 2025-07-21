import React, { useContext } from 'react';
import { motion } from "framer-motion";
import { RiTeamFill } from 'react-icons/ri';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const CTa = () => {
  const {user} = useContext(AuthContext);
       return (
               <div className="py-24 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')] bg-cover bg-center bg-fixed">
      
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <RiTeamFill className="text-5xl text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform <br />
              Your Learning Experience?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already collaborating and growing together on StudyHub.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to={user ? "/allAssignment" : "/register"}
                className="btn btn-lg bg-secondary text-black hover:bg-primary border-0  px-8 rounded-full shadow-lg"
              >
                Get Started Free
              </Link>
              
            </div>
          </motion.div>
        </div>
      </div>
       );
};

export default CTa;