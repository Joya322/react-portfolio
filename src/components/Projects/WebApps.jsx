import React from "react";
import { useNavigate } from "react-router-dom";

const WebApps = ({ projects }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-8 grid grid-cols-3 gap-5">
      <div className="border border-gray-300 rounded-lg p-4 flex flex-col justify-center items-start gap-3 bg-white/40 shadow-lg shadow-violet-500">
        <img
          className="rounded-lg w-full h-52 border"
          src="./project1.png"
          alt=""
        />
        <h4 className="text-xl font-bold">Swift Cart</h4>
        <button
          onClick={() => navigate(`projects/${project.id}`)}
          className="btn bg-violet-600 text-white"
        >
          View Details
        </button>
      </div>
      <div className="border border-gray-300 rounded-lg p-4 flex flex-col justify-center items-start gap-3 bg-white/40 shadow-lg shadow-violet-500">
        <img
          className="rounded-lg w-full h-52 border"
          src="./project1.png"
          alt=""
        />
        <h4 className="text-xl font-bold">Swift Cart</h4>
        <button
          onClick={() => navigate(`projects/${project.id}`)}
          className="btn bg-violet-600 text-white"
        >
          Details
        </button>
      </div>
      <div className="border border-gray-300 rounded-lg p-4 flex flex-col justify-center items-start gap-3 bg-white/40 shadow-lg shadow-violet-500">
        <img
          className="rounded-lg w-full h-52 border"
          src="./project1.png"
          alt=""
        />
        <h4 className="text-xl font-bold">Swift Cart</h4>
        <button
          onClick={() => navigate(`projects/${project.id}`)}
          className="btn bg-violet-600 text-white"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default WebApps;
