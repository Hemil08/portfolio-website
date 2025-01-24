import React from "react";
import profile_photo from "../assets/HEMIL_PROFILE_PHOTO.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="h-screen bg-gray-900 flex justify-around w-fullscroll-behavior: smooth" id="Home">
      {/* Left Side - Details */}
      <div className="flex flex-col justify-center items-start p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Hemil Sorathiya.</h1>
        <h2 className="text-lg font-bold mb-6">Full-Stack Web Developer</h2>
        <div className="flex ">
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-md mr-5">
            Resume <FontAwesomeIcon icon={faDownload} size="1.5x" />
          </button>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-md">
            Lebenslauf <FontAwesomeIcon icon={faDownload} size="1.5x" />
          </button>
        </div>
      </div>

      {/* Right Side - Photo */}
      <div className="flex ">
        <img src={profile_photo} alt="Portfolio" className="object-cover w-full h-full " />
      </div>
    </div>
  );
};

export default Home;
