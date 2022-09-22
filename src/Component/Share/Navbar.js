import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-slate-900 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <h1>Hmm khala hobe</h1>
          </ul>
        </div>
        <h1>Dipu</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <h1>AMe aice</h1>
      </div>
      <div className="navbar-end">
        <img
          className="w-14 h-14 mr-10 rounded-3xl"
          src="https://i.ibb.co/2j3TRmt/dipankar.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
