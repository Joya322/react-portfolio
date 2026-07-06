import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${import.meta.env.BASE_URL}data/projects.json`);

      const data = await res.json();

      setProjects(data);
    };

    fetchData();
  }, []);

  const selectedProject = projects.find((project) => project.id == id);

  if (!selectedProject) {
    return <p>Loading...</p>;
  }

  const {
    projectName,
    projectImage,
    technologyStack,
    category,
    description,
    liveLink,
    githubClient,
    challenges,
    futurePlans,
  } = selectedProject;

  return (
    <div className="mt-6 flex flex-col items-center">
      <h1 className="text-center text-3xl font-bold">{projectName}</h1>

      <p className="text-center mt-2 text-gray-500">
        {category === "web"
          ? "A Web"
          : category === "android"
            ? "An Android"
            : ""}{" "}
        Application
      </p>
      <div className="grid grid-cols-12 gap-8 mt-6">
        <div id="contents" className="col-span-12 md:col-span-7">
          <h4 className="text-xl font-medium">Brief description</h4>
          <p className="text-justify mt-1">{description}</p>

          <h4 className="text-xl font-medium mt-5">Challenges faced</h4>
          <ul className="list-disc list-inside ml-1 mt-1">
            {challenges.map((challenge) => (
              <li>{challenge}</li>
            ))}
          </ul>

          <h4 className="text-xl font-medium mt-5">
            Potential improvements and future plans for the project
          </h4>
          <ul className="list-disc list-inside ml-1 mt-1">
            {futurePlans.map((plan) => (
              <li>{plan}</li>
            ))}
          </ul>
        </div>
        <div id="views" className="col-span-12 md:col-span-5 lg:col-span-4">
          <img
            className="w-full h-[200px] rounded-lg"
            src={projectImage}
            alt=""
          />
          <ul className="list-disc list-inside ml-1 mt-5">
            {category === "web" && (
              <li>
                <a
                  href={liveLink}
                  className="underline text-blue-800

          "
                >
                  Live Link
                </a>
              </li>
            )}
            <li>
              <a href={githubClient} className="underline text-blue-800">
                Github Repository Link
              </a>
            </li>
          </ul>

          <h4 className="text-lg font-medium mt-5">Technology Stack</h4>
          <div className="mt-4 flex flex-wrap gap-3 justify-center items-center">
            {technologyStack.map((technology) => (
              <p className="px-2 py-1 bg-violet-500 text-white rounded-xl">
                {technology}
              </p>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="text-white bg-violet-800 btn mt-6"
      >
        {" "}
        <FaArrowLeft className="inline-block" /> Go Back
      </button>
    </div>
  );
};

export default ProjectDetails;
