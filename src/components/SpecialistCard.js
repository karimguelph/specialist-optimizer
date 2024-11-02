import React from "react";
import { FaMapMarkerAlt, FaClock, FaStethoscope } from "react-icons/fa";
import { motion } from "framer-motion";

const SpecialistCard = ({ name, specialty, location, waitTime, rating, experience, procedures }) => {
  return (
    <motion.div
      className="relative w-96 bg-gradient-to-br from-blue-700 to-purple-800 shadow-xl rounded-3xl overflow-hidden text-white p-8 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl hover:shadow-purple-500/50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-700 to-blue-500 opacity-20 animate-gradient-x"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        
        {/* Top Section: Name and Specialty */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-1">{name}</h3>
          <div className="flex items-center text-sm font-medium mb-3">
            <FaStethoscope className="mr-2" />
            <span>{specialty}</span>
          </div>
        </div>

        {/* Badges */}
        <div className="flex space-x-2 mb-4">
          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold shadow">
            ⭐️ Highly Recommended
          </span>
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
            Top Rated
          </span>
        </div>

        {/* Location and Wait Time */}
        <div className="mb-4">
          <div className="flex items-center text-sm mb-2">
            <FaMapMarkerAlt className="mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm">
            <FaClock className="mr-2" />
            <span>Wait Time: {waitTime}</span>
          </div>
        </div>

        {/* Patient Satisfaction, Experience, and Procedures */}
        <div className="text-sm space-y-2 mb-6">
          <p>⭐️ Patient Satisfaction: <strong>{rating}</strong></p>
          <p>👨‍⚕️ Years of Experience: <strong>{experience}</strong></p>
          <p>💼 Special Procedures: <strong>{procedures}</strong></p>
        </div>

        {/* Bottom Centered Book Now Button */}
        <motion.button
          className="self-center bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SpecialistCard;
