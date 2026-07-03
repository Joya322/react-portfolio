import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between gap-10 items-center mt-8">
      <div id="home-content" className="md:w-2/4 order-2 md:order-1">
        {/* Introduction */}
        <h1 className="text-3xl lg:text-5xl font-black">
          Hello, I'm <br />
          <span className="text-violet-700">Jannatul Ferdoush</span>
        </h1>

        {/* Designation */}
        <h4 className="text-lg lg:text-2xl font-semibold text-gray-700 my-6">
          Computer Science Lecturer | Full-Stack Web Developer (
          <span className="text-violet-700">MERN Stack</span>)
        </h4>

        {/* Summary */}
        <p className="text-justify text-base lg:text-lg text-gray-600">
          Building modern, responsive, and scalable web applications with the
          MERN Stack while inspiring future software engineers through teaching.
          Passionate about clean code, continuous learning, and creating
          impactful digital experiences.
        </p>

        {/* Download Resume Button */}
        <a
          href="./Jannatul-Ferdoush-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn px-5 py-3 bg-violet-600 text-white rounded-lg my-6 hover:bg-violet-800 shadow-lg shadow-violet-400 border-none"
        >
          Download Resume
        </a>

        {/* Social Links */}
        <div className="flex gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/Joya322"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jannat-98y/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-blue-700" size={24} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/jannat.ferdoush.96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-blue-700" size={24} />
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 order-1 md:order-2 mx-auto">
        <img
          className="rounded-full w-full h-full shadow-2xl shadow-black/30"
          src="./Jannatul-Ferdoush.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
