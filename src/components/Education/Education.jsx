import { FaGraduationCap, FaRegCalendarAlt } from "react-icons/fa";

const Education = () => {
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-bold text-center">Education</h2>

      {/* cards */}
      <div className="lg:relative mt-10">
        {/* vertical line */}
        <div className="hidden lg:block lg:absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-violet-300 z-0"></div>

        {/* left card */}
        <div className="lg:relative mb-6 flex justify-start">
          {/* connector */}
          <div className="hidden lg:block lg:absolute left-[41.67%] top-1/2 h-1 w-[8.33%] -translate-y-1/2 bg-violet-300"></div>

          {/* circle */}
          <div className="hidden lg:block lg:absolute left-1/2 top-1/2 z-20 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-violet-600 shadow-md"></div>

          {/* BSC */}
          <div className="w-full lg:w-5/12 rounded-2xl border p-8 shadow-lg shadow-violet-500 bg-white/40">
            <div className="flex gap-2 font-semibold justify-start items-start text-violet-600">
              <FaGraduationCap className="inline-block text-2xl" />
              <p className="text-lg md:text-2xl">
                Bachelor of Science in Computer Science
              </p>
            </div>

            <p className="mt-2 text-base md:text-lg font-medium">
              European University of Bangladesh
            </p>

            <p className="mt-1 text-base text-gray-500 flex items-center gap-2">
              <FaRegCalendarAlt /> 2018 - 2022
            </p>

            <p className="mt-4 text-base font-medium">CGPA: 3.99/4.00</p>

            <h4 className="mt-6 text-base md:text-lg font-semibold">
              Relevant Coursework:
            </h4>
            <p className="mt-1 text-base text-wrap">
              OOP, Data Structures, Algorithms, Database Systems, Operating
              Systems, Software Engineering, Computer Networks,
            </p>
          </div>
        </div>

        {/* right card */}
        <div className="lg:relative mb-6 flex justify-end">
          {/* connector */}
          <div className="hidden lg:block lg:absolute left-1/2 top-1/2 h-1 w-[8.33%] -translate-y-1/2 bg-violet-300"></div>

          {/* Circle */}
          <div className="hidden lg:block lg:absolute left-1/2 top-1/2 z-20 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-violet-600 shadow-md"></div>

          {/* HSC */}
          <div className="w-full lg:w-5/12 rounded-2xl border p-8 shadow-lg shadow-violet-500 bg-white/40">
            <div className="flex items-center gap-2  font-semibold text-violet-600">
              <FaGraduationCap className="inline-block text-2xl" />
              <h3 className="text-lg md:text-2xl">
                Higher Secondary Certificate
              </h3>
            </div>

            <p className="mt-2 text-base md:text-lg font-medium">
              Nawab Fayzunnesa Govt. College
            </p>

            <p className="mt-1 text-base text-gray-500 flex items-center gap-2">
              <FaRegCalendarAlt /> 2015 - 2017
            </p>

            <p className="mt-4 text-base font-medium">CGPA: 4.08/5.00</p>

            <h4 className="mt-6 text-base md:text-lg font-semibold">
              Subject:
            </h4>
            <p className="mt-1 text-base text-wrap">Science</p>
          </div>
        </div>

        {/* 2nd left card */}
        <div className="lg:relative mb-6 flex justify-start">
          {/* connector */}
          <div className="hidden lg:block lg:absolute left-[41.67%] top-1/2 h-1 w-[8.33%] -translate-y-1/2 bg-violet-300"></div>

          {/* Circle */}
          <div className="hidden lg:block lg:absolute left-1/2 top-1/2 z-20 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-violet-600 shadow-md"></div>
          {/* SSC */}
          <div className="w-full lg:w-5/12 rounded-2xl border p-8 shadow-lg shadow-violet-500 bg-white/40">
            <div className="flex items-center gap-2 font-semibold text-violet-600">
              <FaGraduationCap className="inline-block text-2xl" />
              <h3 className="text-lg md:text-2xl">
                Secondary School Certificate
              </h3>
            </div>

            <p className="mt-2 text-base md:text-lg font-medium">
              Shakera R.A. High School
            </p>

            <p className="mt-1 text-base text-gray-500 flex items-center gap-2">
              <FaRegCalendarAlt /> 2013 - 2015
            </p>

            <p className="mt-4 text-base font-medium">CGPA: 5.00/5.00</p>

            <h4 className="mt-6 text-lg font-semibold">Subject:</h4>
            <p className="mt-1 text-base text-wrap">Science</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
