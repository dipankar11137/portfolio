import React from "react";
import download from "../../../Image/Icon/downloads-icon.png";

const PersonalInfo = () => {
  return (
    <div className="md:mt-28 mb-5">
      <h1 className="text-4xl mb-5 uppercase font-bold">
        Personal Information
      </h1>
      <div className="grid lg:grid-cols-2">
        <div>
          <h3 className="text-xl">
            <span className="font-bold text-blue-200 text-2xl">Name :</span>{" "}
            Dipankar Halder
          </h3>
          <h3 className="text-xl mt-4">
            <span className="font-bold text-blue-200 text-2xl">Age :</span> 23
          </h3>
          <h3 className="text-xl mt-4">
            <span className="font-bold text-blue-200 text-2xl">Email :</span>{" "}
          </h3>
          <p className="text-xl">dipankar.halder117@gmail.com</p>
          <h3 className="text-xl mt-4">
            <span className="font-bold text-blue-200 text-2xl">Address :</span>{" "}
            Dhaka, Bangladesh
          </h3>
        </div>
        <div>
          <h3 className="text-xl">
            <span className="font-bold text-blue-200 text-2xl">
              Freelance :
            </span>{" "}
            Available
          </h3>
          <h3 className="text-xl mt-4">
            <span className="font-bold text-blue-200 text-2xl">Skill :</span>{" "}
            Front-End
          </h3>
          <h3 className="text-xl mt-4">
            <span className="font-bold text-blue-200 text-2xl">
              Experience :
            </span>{" "}
            0 Years
          </h3>
          <h3 className="text-xl mt-4">
            <span className="font-bold text-blue-200 text-2xl">
              Language :{" "}
            </span>{" "}
            Bengali, English
          </h3>
        </div>
      </div>
      <div className="mt-7">
        <a
          className="btn bg-red-700 text-xl font-bold"
          href="https://drive.google.com/file/d/19CsfTjIvkD_bW02Nxq-LbSzM3O67Gv05/view?usp=sharing"
          target="_blank"
        >
          Download CV
          <img className="w-8 ml-3" src={download} alt="" />
        </a>
      </div>
    </div>
  );
};

export default PersonalInfo;
