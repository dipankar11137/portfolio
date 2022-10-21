import React from "react";
import ".././../CSS/Project.css";

const Project = ({ project }) => {
  return (
    <div>
      <div class="container bg-red-600">
        {/* <img src="img_avatar.png" alt="Avatar" class="image"> */}
        <img src={project?.img} alt="Avatar" className="image" />
        <div class="overlay">
          <div>
            <a href={project?.liveLink} className="btn text" target="_blank">
              Live Link
            </a>

            <a href={project?.git} className="btn text mt-16" target="_blank">
              GitHub Link
            </a>
            <a
              href={project?.server}
              className="btn text mt-32"
              target="_blank"
            >
              Server Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
