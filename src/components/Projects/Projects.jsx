import React, { useEffect, useState } from "react";
import WebApps from "./WebApps";
import AndroidApps from "./AndroidApps";
import OtherApps from "./OtherApps";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [projects, setProjects] = useState([]);

  const [selectedCategoryProjects, setSelectedCategoryProjects] = useState([]);

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/projects.json");

      const data = await res.json();

      setProjects(data);
      setSelectedCategoryProjects(data);
    };

    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    const clickedCategory = document.getElementById(category);

    clickedCategory.classList.add("bg-violet-800", "text-white");

    const categoryButtons = document.querySelectorAll(".category-btn");

    categoryButtons.forEach((btn) => {
      if (btn.id !== category) {
        btn.classList.remove("bg-violet-800", "text-white");
        btn.classList.add("bg-violet-300", "text-violet-900");
      }
    });

    setActiveCategory(category);

    if (category !== "all") {
      if (projects) {
        const selectedProjects = projects.filter(
          (project) => project.category === category,
        );

        setSelectedCategoryProjects(selectedProjects);
      }
    } else {
      setSelectedCategoryProjects(projects);
    }
  };

  const displayedProjects = showAll
    ? selectedCategoryProjects
    : selectedCategoryProjects.slice(0, 3);

  return (
    <div className="mt-8">
      <h2 className="text-center font-bold text-3xl">Featured Projects</h2>
      <p className="text-center mt-3 opacity-80 max-w-4xl mx-auto">
        These projects represent my learning journey and passion for full-stack
        web development. Each one demonstrates my ability to build responsive,
        user-friendly applications while continuously exploring new technologies
        and solving real-world problems.
      </p>

      <div
        id="projects-categories"
        className="mt-6 flex flex-wrap gap-3 justify-center items-center"
      >
        <button
          id="all"
          onClick={() => handleCategoryClick("all")}
          className="category-btn btn bg-violet-800 text-white border-none text-lg hover:bg-violet-400"
        >
          All
        </button>
        <button
          id="web"
          onClick={() => handleCategoryClick("web")}
          className="category-btn btn bg-violet-300 text-violet-900 border-none text-lg hover:bg-violet-400"
        >
          Web Apps
        </button>
        <button
          id="android"
          onClick={() => handleCategoryClick("android")}
          className="category-btn btn bg-violet-300 text-violet-900 border-none text-lg hover:bg-violet-400"
        >
          Android Apps
        </button>
      </div>

      <div id="project-cards" className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {selectedCategoryProjects.length > 3 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn bg-violet-600 text-white"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
