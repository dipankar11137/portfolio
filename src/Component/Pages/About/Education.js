import React from "react";
import "../../CSS/Education.css";
import { FaBeer } from "react-icons/fa";

const Education = () => {
  return (
    <div>
      <div class="col-12">
        <h3 class="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
          Experience <span>&</span> Education
        </h3>
      </div>
      <div class="row grid lg:grid-cols-2">
        <div class="col-lg-6 m-15px-tb">
          <div class="resume-box">
            <ul>
              <li>
                <div class="icon">
                  {/* <i class="fa fa-briefcase"></i> */}

                  <FaBeer />
                </div>
                <span class="time open-sans-font text-uppercase">
                  2018 - Present
                </span>
                <h5 class="poppins-font text-uppercase">
                  Web Developer <span class="place open-sans-font">Envato</span>
                </h5>
                <p class="open-sans-font">
                  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore adipisicing elit,{" "}
                </p>
              </li>
              <li>
                <div class="icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <span class="time open-sans-font text-uppercase">
                  2013 - 2018
                </span>
                <h5 class="poppins-font text-uppercase">
                  UI/UX Designer{" "}
                  <span class="place open-sans-font">Themeforest</span>
                </h5>
                <p class="open-sans-font">
                  Lorem incididunt dolor sit amet, consectetur eiusmod dunt
                  doldunt dol elit, tempor incididunt
                </p>
              </li>
              <li>
                <div class="icon">
                  <i class="fa fa-briefcase"></i>
                </div>
                <span class="time open-sans-font text-uppercase">
                  2005 - 2013
                </span>
                <h5 class="poppins-font text-uppercase">
                  Consultant <span class="place open-sans-font">Videohive</span>
                </h5>
                <p class="open-sans-font">
                  Lorem ipsum dolor sit amet, tempor incididunt ut
                  laboreconsectetur elit, sed do eiusmod tempor duntt
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 m-15px-tb">
          <div class="resume-box">
            <ul>
              <li>
                <div class="icon">
                  <i class="fa fa-graduation-cap"></i>
                </div>
                <span class="time open-sans-font text-uppercase">2015</span>
                <h5 class="poppins-font text-uppercase">
                  Engineering Degree{" "}
                  <span class="place open-sans-font">Oxford University</span>
                </h5>
                <p class="open-sans-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do tempor incididunt ut labore
                </p>
              </li>
              <li>
                <div class="icon">
                  <i class="fa fa-graduation-cap"></i>
                </div>
                <span class="time open-sans-font text-uppercase">2012</span>
                <h5 class="poppins-font text-uppercase">
                  Master Degree{" "}
                  <span class="place open-sans-font">Kiev University</span>
                </h5>
                <p class="open-sans-font">
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt ut adipisicing
                </p>
              </li>
              <li>
                <div class="icon">
                  <i class="fa fa-graduation-cap"></i>
                </div>
                <span class="time open-sans-font text-uppercase">2009</span>
                <h5 class="poppins-font text-uppercase">
                  Bachelor Degree{" "}
                  <span class="place open-sans-font">Tunis High School</span>
                </h5>
                <p class="open-sans-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor ut labore
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
