import React from "react";
import MySkills from "../MySkills/MySkills";
import ExpPrj from "./ExpPrj";
import PersonalInfo from "./PersonalInfo";

const About = () => {
  return (
    <div className="mt-14 mx-10 text-white">
      <h1 className="font-bold text-7xl uppercase text-center mb-5">
        About <span className="text-red-600 ">Me</span>
      </h1>
      <div className="grid lg:grid-cols-2  pt-7">
        <div className="w-full ">
          <PersonalInfo />
        </div>
        <div className="w-full">
          <ExpPrj />
        </div>
      </div>
      <MySkills />
    </div>
  );
};

export default About;
