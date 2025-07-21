import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FaFacebookF, FaSquareInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  // Daizy UI Color Palette
  const colors = {
  
    primaryLight: '#E0F2F1',
    secondary: '#5A6D6E',
    accent: '#FF6B6B',
    background: '#FFFFFF'
  };

  return (
    <footer className="bg-base-300 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-info"  >
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-info"  >
                  <FaPhone />
                </div>
                <div>
                  <p className="font-medium ">Phone</p>
                  <p className="">+880 1234 567890</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-info"  >
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-medium ">Email</p>
                  <p className="">info@studymate.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-info"  >
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="font-medium ">Address</p>
                  <p className="">123 Academic Road, Dhaka 1207</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-info"  >
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className=" hover:text-info  transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-info  opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/allAssignment"
                  className=" hover:text-info  transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-info  opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Assignments
                </Link>
              </li>
              <li>
                <Link
                  to="/CreateAssignment"
                  className=" hover:text-info  transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-info  opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Create Assignment
                </Link>
              </li>
              <li>
                <Link
                  to="/mySubmission"
                  className=" hover:text-info  transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-info  opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  My Submissions
                </Link>
              </li>
            </ul>
          </div>

          

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-info"  >
              Follow Us
            </h3>
            <p className="">
              Stay connected for updates and announcements
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-[#E0F2F1] transition-colors duration-200"
                 
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-[#E0F2F1] transition-colors duration-200"
                 
              >
                <FaSquareInstagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-[#E0F2F1] transition-colors duration-200"
                 
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-[#E0F2F1] transition-colors duration-200"
                 
              >
                <FaLinkedin size={20} />
              </a>
            </div>
            
            {/* Newsletter */}
            {/* <div className="pt-4">
              <h4 className="font-medium  mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-info  w-full"
                />
                <button
                  className="px-4 py-2 rounded-r-lg text-white font-medium"
                  style={{ backgroundColor: colors.primary }}
                >
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} StudyMate. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-info  text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-info  text-sm">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-info  text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;