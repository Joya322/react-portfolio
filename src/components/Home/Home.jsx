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
          I build modern, responsive, and user-friendly web applications using
          the MERN Stack while sharing knowledge as a Computer Science lecturer.
        </p>

        {/* Download Resume Button */}
        <a
          href="./Jannatul-Ferdoush-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn px-5 py-3 bg-violet-600 text-white rounded-lg my-6 hover:bg-violet-800"
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
            <FaGithub size={25} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jannat-98y/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-blue-700" size={25} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/jannat.ferdoush.96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-blue-700" size={25} />
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/3 lg:w-1/4 lg:mx-auto order-1 md:order-2">
        <img
          className="rounded-full w-full"
          src="./Jannat-WithoutBg.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
