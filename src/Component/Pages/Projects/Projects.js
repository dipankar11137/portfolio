import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projectsImage.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="text-white p-5">
      <h1 className="text-center text-7xl mb-5 uppercase font-bold">
        My Work{" "}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {projects.map((project) => (
          <Project key={project._id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
