import React from "react";
import ".././../CSS/Project.css";

const Project = ({ project }) => {
  return (
    <div>
      <div class="container bg-red-600">
        {/* <img src="img_avatar.png" alt="Avatar" class="image"> */}
        <img src={project?.img} alt="Avatar" className="image" />
        <div class="overlay">
          {" "}
          <div class="text">Live Link</div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Project;
