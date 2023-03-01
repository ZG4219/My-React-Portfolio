import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold text-white hover:text-gray-300"
          >
            My Portfolio
          </Link>
          <div className="flex items-center">
            <Link
              to="/projects"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
            >
              Resume
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
