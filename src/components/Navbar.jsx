import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-700 text-white sticky top-0 ">
      <nav className="flex justify-center space-x-8 py-6 ">
        <a
          href="#Home"
          className="text-lg hover:text-blue-400 transition duration-300 tracking-wide"
        >
          Home
        </a>
        <a
          href="#About"
          className="text-lg hover:text-blue-400 transition duration-300 tracking-wide"
        >
          About
        </a>
        <a
          href="#Skills"
          className="text-lg hover:text-blue-400 transition duration-300 tracking-wide"
        >
          Skills
        </a>
        <a
          href="#Experience"
          className="text-lg hover:text-blue-400 transition duration-300 tracking-wide"
        >
          Experience
        </a>
        <a
          href="#Project"
          className="text-lg hover:text-blue-400 transition duration-300 tracking-wide"
        >
          Project
        </a>
        <a
          href="#Contact"
          className="text-lg hover:text-blue-400 transition duration-300 tracking-wide"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
