import React from "react";
import { FaBriefcase, FaMapPin, FaRegCalendarAlt } from "react-icons/fa";

const Experiences = () => {
  return (
    <section className="mt-8">
      <h3 className="text-3xl font-bold text-center">Experience</h3>
      <p className="mx-auto w-3/5 text-center mt-3 opacity-80">
        My professional journey in teaching and software development, where I
        have combined technical expertise with mentoring and project
        development.
      </p>

      <div className="mt-10">
        {/* Lecturer */}
        <div className="mt-10 w-full lg:w-3/6 rounded-2xl border p-6 md:p-8 shadow-lg shadow-violet-500 bg-white/40 mx-auto">
          <p className="text-xl md:text-2xl flex gap-2 font-semibold justify-start items-center text-violet-600">
            <FaBriefcase className="inline-block" />
            Lecturer
          </p>

          <p className="mt-2 text-base md:text-lg font-medium">
            European University of Bangladesh
          </p>

          <p className="mt-1 text-sm md:text-base text-gray-500 flex items-center gap-2">
            <FaRegCalendarAlt className="inline-block text-orange-400" />{" "}
            September 2022 - Present
          </p>

          <p className="mt-4 md:text-base font-medium text-sm flex items-center gap-2">
            <FaMapPin className="inline-block text-red-500" />
            Dhaka, Bangladesh
          </p>

          <h4 className="mt-6 text-base md:text-lg font-semibold">
            Responsibilities
          </h4>
          <ul className="mt-1 text-base text-wrap list-disc list-inside ml-1">
            <li>Teach undergraduate CSE courses</li>
            <li>Prepare lecture materials, lab exercises, and assessments.</li>
            <li>
              Mentor students in academic projects and software development.
            </li>
            <li>
              Coordinate academic activities and support departmental
              administration.
            </li>
            <li>Evaluate assignments, quizzes, and examinations.</li>
          </ul>

          <h4 className="mt-6 text-base md:text-lg font-semibold">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-4 mt-4 text-sm md:text-base">
            <p className="px-3 py-2 bg-violet-300 text-violet-950 rounded-2xl">
              C
            </p>
            <p className="px-3 py-2 bg-violet-300 text-violet-950 rounded-2xl">
              C++
            </p>
            <p className="px-3 py-2 bg-violet-300 text-violet-950 rounded-2xl">
              Java
            </p>
            <p className="px-3 py-2 bg-violet-300 text-violet-950 rounded-2xl">
              HTML
            </p>
            <p className="px-3 py-2 bg-violet-300 text-violet-950 rounded-2xl">
              CSS
            </p>
            <p className="px-3 py-2 bg-violet-300 text-violet-950 rounded-2xl">
              JavaScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
