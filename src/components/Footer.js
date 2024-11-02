import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">© 2024 Specialist Optimizer. All rights reserved.</p>
        <p className="mt-2">Brought to you by Dr. Mona Shawki</p>
        <div className="flex justify-center space-x-4 mt-4 text-lg">
          <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-blue-400"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
