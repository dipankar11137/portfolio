import React from "react";
import { Bounce } from "react-reveal";
import MovingComponent from "react-moving-text";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero py-10 min-h-screen text-white " id="banner">
      <div className="hero-content flex-col lg:flex-row-reverse w-full xl:w-10/12 ">
        <div className="text-center lg:text-left pl-0 md:pl-8 w-full xl:w-2/3 ">
          <Bounce right cascade>
            <div>
              <p className="text-2xl font-bold">Hi, This is</p>
              <h1 className="text-5xl font-bold uppercase">Dipankar Halder</h1>
              <p className="flex mt-4 text-xl">
                I am ,
                <MovingComponent
                  type="typewriter"
                  dataText={[
                    "MERN Stack Developer ",
                    "Frontend Developer",
                    "React JS Developer",
                  ]}
                />
              </p>
              <p className="py-6">
                A Junior Web Developer who care about writing clean code and
                genuinely love to learn more about web development.
              </p>
              <a
                href="https://drive.google.com/file/d/1v8Lu4VeLDHdkNtD3OgXY0A13PrEXPibB/view?usp=sharing"
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
          <div className="w-96 profile-pic">
            <img
              src="https://i.ibb.co/2j3TRmt/dipankar.png"
              alt="Profile Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
