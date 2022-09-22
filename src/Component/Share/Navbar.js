import React from "react";
import MovingComponent from "react-moving-text";
const Letters = [
  "D",
  "I",
  "P",
  "A",
  "N",
  "K",
  "A",
  "R",
  " ",
  " ",
  "H",
  "A",
  "L",
  "D",
  "E",
  "R",
];

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
        <h1 className="text-3xl md:pl-20 text-orange-500 font-bold">
          <span className=" text-white">Portfol</span>io
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <h2 className="flex text-3xl">
          {Letters.map((letter, index) => (
            <MovingComponent
              type="pulse"
              duration="2000ms"
              delay="index * 1100ms"
              direction="normal"
              timing="ease"
              iteration="infinite"
              fillMode="none"
            >
              {letter}
            </MovingComponent>
          ))}
        </h2>
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
