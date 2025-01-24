import React from "react";

const Experience = () => {
  return (
    <div className='className="h-auto bg-gray-900 flex-col w-full text-white scroll-behavior:smooth pt-[80px] pb-[80px]' id="Experience">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold mb-1 text-center ">
          Work Experience
        </h1>
      </div>

      <div className="flex mt-[70px] items-center justify-center bg-gray-900 px-6 md:px-60">
        <div className="space-y-6 border-l-2 border-dashed">
          
          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-6">
              <h4 className="font-bold text-blue-500 tracking-wider">Full Stack Web Developer (Intern) </h4>
              <span className="mt-1 block text-sm font-semibold text-white-200 tracking-wider">
                Sofstack Technology Solutions
              </span>
              <span className="mt-1 block text-sm font-semibold text-blue-500 tracking-wider">
                Oct 2024 - March 2025
              </span>
              <p className="mt-2 max-w-screen-sm text-sm text-gray-200 tracking-wider">
                - TechStacks :- HTML, CSS, Javascript, Tailwind, React Js, Python, Django
              </p>
              <p className="mt-2 max-w-screen-sm text-sm text-gray-200 tracking-wider">
                - Gained comprehensive experience in full-stack web development, utilizing React.js for &nbsp;&nbsp;front-end design and Django for back-end integration. 
              </p>
              <p className="mt-2 max-w-screen-sm text-sm text-gray-200 tracking-wider">
              - Led the end-to-end development of a new product website, including designing, coding &nbsp;&nbsp;and deployment.
              </p>
            </div>
          </div>

          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-6">
              <h4 className="font-bold text-blue-500 tracking-wider">Frontend Software Developer </h4>
              <span className="mt-1 block text-sm font-semibold text-white-200 tracking-wider">
                The Magic Dev
              </span>
              <span className="mt-1 block text-sm font-semibold text-blue-500 tracking-wider">
                Oct 2024 - March 2025
              </span>
              <p className="mt-2 max-w-screen-sm text-sm text-gray-200 tracking-wider">
                - TechStacks :- HTML, CSS, Javascript, Bootstrap, C++, Data Structures and Algorithms
              </p>
              <p className="mt-2 max-w-screen-sm text-sm text-gray-200 tracking-wider">
                - Successfully developed the client-facing front-end for a new business website, ensuring &nbsp;&nbsp;responsiveness and cross-browser compatibility.
              </p>
              <p className="mt-2 max-w-screen-sm text-sm text-gray-200 tracking-wider">
              - Improved efficiency in front-end development and utilizing Bootstrap for rapid UI &nbsp;&nbsp;prototyping.
              </p>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Experience;
