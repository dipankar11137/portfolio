import React from "react";
import { Bounce } from "react-reveal";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero py-10 min-h-screen text-white" id="banner">
      <div className="hero-content flex-col lg:flex-row-reverse w-full xl:w-2/3">
        <div className="text-center lg:text-left pl-0 md:pl-8 w-full xl:w-2/3">
          <Bounce right cascade>
            <div>
              <p className="text-xl">Hello, I'm</p>
              <h1 className="text-5xl font-bold">Dipankar Halder</h1>
              <p className="py-6">
                A Junior Web Developer who care about writing clean code and
                genuinely love to learn more about web development.
              </p>
              <a
                href="https://drive.google.com/file/d/1dd5WJRalDhF3a3kVBnPXzs7fyaqggb02/view"
                target="_blank"
                className="btn px-6 py-2 rounded-lg text-xl"
                rel="noreferrer"
              >
                Show Resume
              </a>
            </div>
          </Bounce>
        </div>

        <div className="avatar mr-0 lg:mr-3 mt-10 lg:mt-0">
          <div className="w-72 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToV1kT_SH_eNNMeLSy-6Dl6zsAgQpfriGold7ePmxe&s"
              alt="Profile Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
