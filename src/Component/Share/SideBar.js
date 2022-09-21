import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="text-white w-full mx-auto">
      <div className="w-full mx-auto">
        <ul className="menu menu-vertical mt-40 w-full text-center">
          <NavLink
            to="/"
            className="mt-5 text-center sm:mx-4 px-2 sm:px-0 pt-3 h-12 w-auto sm:w-100 cursor-pointer font-semibold hover:text-2xl transition-all duration-200 ease-in-out"
          >
            HOME
          </NavLink>
          <NavLink
            to="/projects"
            className="mt-5 mx-1 sm:mx-4 text-center px-2 sm:px-0 pt-3 h-12 w-auto sm:w-100 cursor-pointer font-semibold hover:text-2xl transition-all duration-200 ease-in-out"
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/blogs"
            className="mt-5 mx-1 sm:mx-4 text-center px-2 sm:px-0 pt-3 h-12 w-auto sm:w-100 cursor-pointer font-semibold hover:text-2xl transition-all duration-200 ease-in-out"
          >
            BLOGS
          </NavLink>
          <NavLink
            to="/about"
            className="mt-5 mx-1 sm:mx-4 text-center px-2 sm:px-0 pt-3 h-12 w-auto sm:w-100 cursor-pointer font-semibold hover:text-2xl transition-all duration-200 ease-in-out"
          >
            ABOUT ME
          </NavLink>
          <NavLink
            to="/contact"
            className="mt-5 mx-1 sm:mx-4 text-center px-2 sm:px-0 pt-3 h-12 w-auto sm:w-100 cursor-pointer font-semibold hover:text-2xl transition-all duration-200 ease-in-out"
          >
            CONNECT ME
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
