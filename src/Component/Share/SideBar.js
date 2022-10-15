import React from "react";
import { NavLink } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const SideBar = () => {
  return (
    <div className="text-white w-full mx-auto">
      <div className="w-full mx-auto">
        <ul className="menu menu-vertical mt-24 w-full text-center">
          <NavLink
            to="/"
            className="mt-5 text-center sm:mx-4 px-2 sm:px-0 pt-3 h-12  w-auto sm:w-100 tooltip tooltip-right-20px tooltip-error too"
            data-tip="Home"
          >
            {/* <HomeIcon style={{ fontSize: 40 }} /> */}
            <Zoom>
              <img
                className="h-16  rounded-full w-auto mx-auto hover:h-20 item-center sm:mx-4 px-2 sm:px-0 sm:w-100 cursor-pointer transition-all duration-200 ease-in-out"
                src="https://e7.pngegg.com/pngimages/22/547/png-clipart-white-and-orange-icon-oregon-service-home-icon-miscellaneous-angle.png"
                alt=""
              />
            </Zoom>
          </NavLink>

          <NavLink
            to="/about"
            className="mt-5 mx-1 sm:mx-4 text-center  sm:px-0 pt-3 h-12 w-auto sm:w-100 tooltip tooltip-right-56 tooltip-error"
            data-tip="About"
          >
            <Zoom>
              <img
                className="h-16 mt-6 rounded-full w-auto mx-auto hover:h-20 item-center sm:mx-4 px-2 sm:px-0 sm:w-100 cursor-pointer transition-all duration-200 ease-in-out"
                src="https://www.logolynx.com/images/logolynx/18/188a80cc5cd1f0dadd54f543e40885a3.jpeg"
                alt=""
              />
            </Zoom>
          </NavLink>

          <NavLink
            to="/projects"
            className="mt-10 mx-1 sm:mx-4 text-center  sm:px-0 pt-3 h-12 w-auto sm:w-100 tooltip tooltip-right-56 tooltip-error"
            data-tip="Projects"
          >
            <Zoom>
              <img
                className="h-16 mt-6 rounded-full w-auto mx-auto hover:h-20 item-center sm:mx-4 px-2 sm:px-0 sm:w-100 cursor-pointer transition-all duration-200 ease-in-out"
                src="https://pngimage.net/wp-content/uploads/2018/06/planning-png.png"
                alt=""
              />
            </Zoom>
          </NavLink>
          <NavLink
            to="/blogs"
            className="mt-10 mx-1 sm:mx-4 text-center  sm:px-0 pt-3 h-12 w-auto sm:w-100 tooltip tooltip-right-56 tooltip-error"
            data-tip="Blogs"
          >
            <Zoom>
              <img
                className="h-16 mt-6 rounded-full w-auto mx-auto hover:h-20 item-center sm:mx-4 px-2 sm:px-0 sm:w-100 cursor-pointer transition-all duration-200 ease-in-out"
                src="https://www.freeiconspng.com/thumbs/blogger-logo-icon-png/blogger-logo-icon-png-5.png"
                alt=""
              />
            </Zoom>
          </NavLink>

          <NavLink
            to="/contact"
            className="mt-10 mx-1 sm:mx-4 text-center  sm:px-0 pt-3 h-12 w-auto sm:w-100 tooltip tooltip-right-56 tooltip-error"
            data-tip="Contact"
          >
            <Zoom>
              <img
                className="h-16 mt-6 rounded-full w-auto mx-auto hover:h-20 item-center sm:mx-4 px-2 sm:px-0 sm:w-100 cursor-pointer transition-all duration-200 ease-in-out"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png"
                alt=""
              />
            </Zoom>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
