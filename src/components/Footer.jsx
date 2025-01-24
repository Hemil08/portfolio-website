import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-around bg-gray-900 p-4 md:p-6 xl:p-6 ">
      <ul className="flex items-center flex-wrap mb-6 md:mb-0">
        <li>
          <a
            href="#Home"
            className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#About"
            className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Skills"
            className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#Experience"
            className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#Project"
            className="text-sm font-normal text-gray-500 hover:underline"
          >
            Project
          </a>
        </li>
      </ul>
      <div className="flex sm:justify-center space-x-6">
        {/* github link */}
        <div className="relative group inline-block">
          <a
            href="https://github.com/Hemil08"
            className="text-gray-500 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>

          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden rounded bg-gray-900 text-white text-xs font-medium py-1 px-2 opacity-0 shadow-md transition-opacity duration-300 group-hover:block group-hover:opacity-100">
            Visit Github Profile
          </div>
        </div>

        {/* leetcode link */}
        <div className="relative group inline-block">
          <a
            href="https://leetcode.com/u/hemil_sorathiya/"
            className="text-gray-500 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            ></path>
          </svg> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2c4 0 7 3 7 7 0 2-1 4-3 5l-4 5c-1 1-3 1-4 0l-3-5c-2-1-3-3-3-5 0-4 3-7 7-7z" />
              <path d="M9 12h6M12 9v6" />
            </svg>
          </a>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden rounded bg-gray-900 text-white text-xs font-medium py-1 px-2 opacity-0 shadow-md transition-opacity duration-300 group-hover:block group-hover:opacity-100">
            Visit Leetcode Profile
          </div>
        </div>

        {/* Linkedin link */}

        <div className="relative group inline-block">
          <a
            href="https://www.linkedin.com/in/hemilsorathiya08/"
            className="text-gray-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6.94 8.748H4.293v10.498H6.94V8.748zM5.617 7.262c.92 0 1.48-.605 1.48-1.362-.017-.774-.561-1.36-1.463-1.36s-1.48.586-1.48 1.36c0 .757.543 1.362 1.447 1.362h.016zm3.602 2.665h2.646v1.44h.038c.368-.66 1.266-1.355 2.603-1.355 2.778 0 3.292 1.83 3.292 4.211v4.86h-2.646v-4.304c0-1.045-.018-2.388-1.454-2.388-1.454 0-1.677 1.137-1.677 2.308v4.384h-2.646V8.748z"></path>
            </svg>
          </a>

          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden rounded bg-gray-900 text-white text-xs font-medium py-1 px-2 opacity-0 shadow-md transition-opacity duration-300 group-hover:block group-hover:opacity-100">
            Visit LinkedIn Profile
          </div>
        </div>

        {/* website link */}
        <div className="relative group inline-block">
          <a href="#" className="text-gray-500 hover:text-white">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden rounded bg-gray-900 text-white text-xs font-medium py-1 px-2 opacity-0 shadow-md transition-opacity duration-300 group-hover:block group-hover:opacity-100">
            Visit Portfolio Site
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
