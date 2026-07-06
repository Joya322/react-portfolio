import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const { id, projectImage, projectName } = project;


  return (
    <div className="border border-gray-300 rounded-lg p-4 flex flex-col justify-center items-start gap-3 bg-white/40 shadow-lg shadow-violet-500">
      <img
        className="rounded-lg w-full h-52 border"
        src={projectImage}
        alt=""
      />
      <h4 className="text-xl font-bold">{projectName}</h4>
      <button
        onClick={() => navigate(`/projects/${id}`)}
        className="btn bg-violet-600 text-white"
      >
        View Details
      </button>
    </div>
  );
};

export default ProjectCard;
