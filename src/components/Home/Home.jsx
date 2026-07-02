const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-10 items-center">
        <div id="home-content" className="md:w-2/4 order-2 md:order-1">
          <h1 className="text-5xl font-black">
            Hello, I'm <br />{" "}
            <span className="text-violet-700">Jannatul Ferdoush</span>
          </h1>
          <h4 className="text-xl font-semibold text-gray-700 mt-3">
            Computer Science Lecturer | Full-Stack Web Developer (MERN)
          </h4>
          <p className="mt-5 text-justify">
            I build modern, responsive, and user-friendly web applications using
            the MERN Stack while sharing knowledge as a Computer Science
            lecturer.
          </p>

          <a
            href="./Jannatul-Ferdoush-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn px-5 py-3 bg-violet-600 text-white rounded-lg mt-6 hover:bg-violet-800"
          >
            Download CV
          </a>
        </div>
        <div className="md:w-1/4 order-1 md:order-2">
          <img
            className="rounded-full w-full"
            src="./Jannat-WithoutBg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
