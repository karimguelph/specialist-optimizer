import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaEnvelope, FaUserAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white shadow-2xl sticky top-0 z-50 py-4 transition-all duration-300 ease-in-out backdrop-blur-md bg-opacity-80 border-b border-opacity-30 border-white">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-12">
        
        {/* Logo */}
        <h1 className="text-4xl font-extrabold tracking-wide transform hover:scale-105 transition-all duration-500">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 animate-gradient-flow">
            Specialist
          </span>{" "}
          <span className="text-white">Optimizer</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium text-lg">
          <Link to="/" className="flex items-center space-x-2 hover:text-yellow-300 transition duration-300">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to="/FamilyMedicineView" className="flex items-center space-x-2 hover:text-yellow-300 transition duration-300">
            <FaUserAlt />
            <span>Family Medicine View</span>
          </Link>
          <button className="flex items-center space-x-2 hover:text-yellow-300 transition duration-300">
            <FaInfoCircle />
            <span>About</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-yellow-300 transition duration-300">
            <FaEnvelope />
            <span>Contact</span>
          </button>
        </nav>

        {/* Call-to-Action Button */}
        <button className="hidden md:flex bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-500 shadow-lg transform hover:scale-105 transition-all duration-300 items-center">
          <FaUserAlt className="inline mr-2" /> Get Started
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-yellow-300 text-2xl focus:outline-none transition-transform transform hover:scale-110"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700 py-4 shadow-lg flex flex-col items-center space-y-4 md:hidden">
          <Link to="/" className="flex items-center space-x-2 text-lg text-yellow-300 hover:text-yellow-400 transition duration-300">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to="/FamilyMedicineView" className="flex items-center space-x-2 text-lg text-yellow-300 hover:text-yellow-400 transition duration-300">
            <FaUserAlt />
            <span>Family Medicine View</span>
          </Link>
          <button className="flex items-center bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 shadow-md transform hover:scale-105 transition-all duration-300">
            <FaUserAlt className="inline mr-2" /> Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
