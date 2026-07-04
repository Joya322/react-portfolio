import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Database from "./Database";
import Tools from "./Tools";

const Skills = () => {
  const [activeCategory, setActiveCategory] = React.useState("frontend");

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
  };

  return (
    <div className="mt-6">
      <h2 className="text-center font-bold text-3xl">Skills</h2>
      <p className="text-center mt-3 opacity-80">
        Technologies I use to build web applications
      </p>

      <div
        id="skills-categories"
        className="mt-6 flex flex-wrap gap-3 justify-center items-center"
      >
        <button
          id="frontend"
          onClick={() => handleCategoryClick("frontend")}
          className="category-btn btn bg-violet-800 text-white border-none text-lg hover:bg-violet-400"
        >
          Frontend
        </button>
        <button
          id="backend"
          onClick={() => handleCategoryClick("backend")}
          className="category-btn btn bg-violet-300 text-violet-900 border-none text-lg hover:bg-violet-400"
        >
          Backend
        </button>
        <button
          id="database"
          onClick={() => handleCategoryClick("database")}
          className="category-btn btn bg-violet-300 text-violet-900 border-none text-lg hover:bg-violet-400"
        >
          Database & ORM
        </button>
        <button
          id="tools"
          onClick={() => handleCategoryClick("tools")}
          className="category-btn btn bg-violet-300 text-violet-900 border-none text-lg hover:bg-violet-400"
        >
          Tools & Others
        </button>
      </div>
      <div id="cards">
        {activeCategory === "frontend" && <Frontend />}
        {activeCategory === "backend" && <Backend />}
        {activeCategory === "database" && <Database />}
        {activeCategory === "tools" && <Tools />}
      </div>
    </div>
  );
};

export default Skills;
