import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-white overflow-hidden bg-fixed bg-cover bg-hero-pattern">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-800 opacity-80"></div>

      {/* Background Particles Layer */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="absolute bg-yellow-400 opacity-20 w-96 h-96 rounded-full animate-pulse-slow"></div>
        <div className="absolute bg-blue-500 opacity-30 w-72 h-72 rounded-full animate-pulse-slower"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 space-y-6 max-w-2xl animate-fadeIn">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide leading-tight mb-4 animate-slideIn">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-yellow-500 animate-gradient-text">
            Connecting You
          </span>{" "}
          with World-Class Specialists
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 opacity-90 animate-slideIn delay-1s">
          Seamlessly find and book appointments with experts in every field.
        </p>
        <button className="px-8 py-3 md:px-10 md:py-4 bg-yellow-400 text-black font-semibold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-2xl animate-bounce-slow">
          Discover Specialists
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
