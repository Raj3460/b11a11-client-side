import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { FaFacebookF, FaSquareInstagram, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Services Section */}
        <div>
          <h6 className="footer-title text-lg font-semibold mb-2">Contact Us</h6>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-600" />
              <span>+880 1234 567890</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" />
              <span>info@studymate.com</span>
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-blue-600 mt-1" />
              <span>123 Academic Road, Dhaka 1207, Bangladesh</span>
            </li>
          </ul>
        </div>

        {/* Company Section */}
       {/* Quick Links Section */}
        <div>
          <h6 className="footer-title text-lg font-semibold mb-2">Quick Links</h6>
          <ul className="space-y-2">
            <li><Link to="/about" className="link link-hover hover:text-blue-600 transition-colors">About us</Link></li>
            <li><Link to="/assignments" className="link link-hover hover:text-blue-600 transition-colors">Assignments</Link></li>
            {/* <li><Link to="/faq" className="link link-hover hover:text-blue-600 transition-colors">FAQ</Link></li> */}
            {/* <li><Link to="/privacy" className="link link-hover hover:text-blue-600 transition-colors">Privacy Policy</Link></li> */}
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h6 className="text-2xl font-bold text-blue-700 mb-3">Social</h6>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/18vEWwDCHi/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={30} className="border rounded-full p-2 text-white bg-blue-500 hover:scale-105 transition-transform" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={30} className="border rounded-full p-2 text-white bg-red-500 hover:scale-105 transition-transform" />
            </a>
            <a href="https://www.instagram.com/sarkarshovo868?utm_source=qr&igsh=MXNkMmEzZ2wxZW9lOQ==" target="_blank" rel="noopener noreferrer">
              <FaSquareInstagram size={30} className="border rounded-full p-2 text-white bg-gradient-to-b from-red-500 to-yellow-500 hover:scale-105 transition-transform" />
            </a>
          </div>
        </div>


        
      </div>

      {/* Optional Footer Note */}
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} StudyMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
