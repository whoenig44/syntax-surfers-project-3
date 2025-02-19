import React from "react";
import { NavLink } from "react-router-dom";


const Navbar: React.FC = () => {
    return (
      <nav className="flex justify-end bg-gray-800 p-4 shadow-md">
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white px-4 py-2 rounded ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `text-white px-4 py-2 rounded ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
              }
            >
              Book Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/library"
              className={({ isActive }) =>
                `text-white px-4 py-2 rounded ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
              }
            >
              My Library
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white px-4 py-2 rounded ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };
 
  export default Navbar;