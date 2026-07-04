import React from "react";
import { FaBriefcase, FaGraduationCap, FaMapPin } from "react-icons/fa";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { MdEmail, MdLanguage } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const About = () => {
  return (
    <section
      id="about"
      className="mt-8 flex justify-center items-center gap-10 flex-col lg:flex-row"
    >
      <div id="content-part" className="lg:w-7/12">
        <h3 className="text-xl font-bold text-violet-700">About Me</h3>
        <h2 className="font-bold text-3xl mt-2 mb-8">
          Who I <span className="text-violet-700">Am</span>
        </h2>

        {/* details */}
        {/* Who I am */}
        <p className="text-justify">
          Hello! I'm{" "}
          <span className="font-bold text-violet-700">Jannatul Ferdoush</span>,
          a Computer Science graduate, software developer, and lecturer with a
          passion for building modern, user-friendly web applications. My
          programming journey began during my university years, where I
          discovered my interest in solving real-world problems through code.
          Since then, I have been continuously learning and improving my skills
          in full-stack web development.
        </p>

        {/* Programming Journey */}
        <p className="mt-6 text-justify">
          My programming journey began during my undergraduate studies, where I
          developed a strong foundation in
          <span className="font-semibold text-violet-700">
            {" "}
            programming, algorithms, and object-oriented design
          </span>
          . Over time, my curiosity about web technologies inspired me to
          explore full-stack development. I am currently expanding my expertise
          by working with the
          <span className="font-semibold text-violet-700">
            {" "}
            MERN Stack (MongoDB, Express.js, React, and Node.js)
          </span>{" "}
          while also learning modern backend technologies such as{" "}
          <span className="font-semibold text-violet-700">
            TypeScript
          </span>,{" "}
          <span className="font-semibold text-violet-700">PostgreSQL</span>, and{" "}
          <span className="font-semibold text-violet-700">Prisma ORM</span>.
          Building real-world projects allows me to strengthen my
          problem-solving skills and gain hands-on experience with scalable
          application development.
        </p>

        {/* What I Enjoy Building */}
        <p className="mt-6 text-justify">
          I enjoy creating responsive, interactive, and scalable web
          applications that solve real-world problems. Writing clean,
          maintainable code and learning new technologies motivate me to grow as
          a developer. Every project I build is an opportunity to improve my
          technical skills and deliver better user experiences.
        </p>

        {/* Beyond Programming */}
        <p className="mt-6 text-justify">
          Beyond programming, I enjoy teaching and mentoring students, as it
          allows me to share knowledge while continuing to learn myself. I also
          like exploring new technologies, reading technical articles, solving
          programming challenges, and spending quality time with family and
          friends.
        </p>

        {/* Future Goals */}
        <p className="mt-6 text-justify">
          My goal is to become a skilled full-stack software developer while
          continuing to contribute to education. I believe that continuous
          learning, curiosity, and dedication are the keys to building impactful
          software and achieving long-term professional growth.
        </p>
        {/* </div> */}
      </div>

      <div className="highlights lg:w-5/12">
        {/* Quick Facts */}
        <div className="text-base font-semibold p-5 border rounded-lg shadow-lg shadow-violet-400">
          <h4 className="text-base font-semibold text-violet-700">
            Quick Facts
          </h4>
          <div className="flex flex-col gap-3 text-base mt-4">
            <div className="flex justify-start items-start gap-2">
              <FaBriefcase className="text-amber-700" size={25} />
              <p> Lecturer & Full-Stack Web Developer</p>
            </div>
            <div className="flex justify-start items-start gap-2">
              <FaGraduationCap className="text-black-700" size={25} />
              <p> B.Sc. in Computer Science & Engineering</p>
            </div>
            <div className="flex justify-start items-start gap-2">
              <FaMapPin className="text-red-700" size={25} />
              <p> Bengali, English</p>
            </div>
            <div className="flex justify-start items-start gap-2">
              <MdLanguage className="text-blue-700" size={25} />
              <p> Dhaka, Bangladesh</p>
            </div>
            <div className="flex justify-start items-start gap-2">
              <MdEmail className="text-green-700" size={25} />
              <p>jannatferdoush1212@gmail.com</p>
            </div>

            {/* <div className=" flex flex-col gap-2"></div>
            <div className="flex flex-col"></div> */}
          </div>
        </div>

        {/* What I Enjoy */}
        <div className="p-5 border rounded-lg shadow-lg shadow-violet-400 mt-8">
          <h4 className="text-base font-semibold text-violet-700">
            What I Enjoy
          </h4>
          <div className="mt-4">
            <p>
              <TiTick className="inline-block text-green-700" />
              Building Full-Stack Applications
            </p>
            <p>
              <TiTick className="inline-block text-green-700" />
              Solving Programming Problems
            </p>
            <p>
              <TiTick className="inline-block text-green-700" />
              Teaching & Mentoring
            </p>
            <p>
              <TiTick className="inline-block text-green-700" />
              Learning New Technologies
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="p-5 border rounded-lg shadow-lg shadow-violet-400 mt-8">
          <h4 className="text-base font-semibold text-violet-700">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-4 mt-4">
            <p className="p-2 bg-violet-300 text-violet-950 rounded-2xl">
              React
            </p>
            <p className="p-2 bg-violet-300 text-violet-950 rounded-2xl">
              JavaScript
            </p>
            <p className="p-2 bg-violet-300 text-violet-950 rounded-2xl">
              TypeScript
            </p>
            <p className="p-2 bg-violet-300 text-violet-950 rounded-2xl">
              Node.js
            </p>
            <p className="p-2 bg-violet-300 text-violet-950 rounded-2xl">
              PostgreSQL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
