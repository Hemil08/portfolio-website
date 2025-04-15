import React from "react";

const ProjectCard = ({ item }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm mx-auto text-white hover:bg-transparent border-2 border-gray-500 transition-all duration-300 flex flex-col justify-between">
      {/* image part */}
      <div className="overflow-hidden mb-4">
        
        <a href={item.demo_link} target="_blank" rel="noopener noreferrer"><img src={item.image} alt={item.title} className="w-full h-48 object-cover hover:pointer" /></a>
      </div>

      {/* Details part */}
      <div>
        <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
        <p className="text-gray-300 mb-4">{item.desc}</p>
        <p className="text-sm text-gray-400">
          <span className="font-bold text-gray-200">Tech Stack :</span>{item.tech}
        </p>
      </div>

      {/* Button Section */}

      <div className="flex justify-between mt-6">
        <a href={item.github_link} target="_blank" rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-600 transparent hover:bg-blue-700 text-white rounded-lg shadow transition duration-200">
        Github
        </a>

        {
          item.demo_link === "" ?
          "" : 
          <a href={item.demo_link} target="_blank" rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition duration-200">
          Live Demo
          </a>
        }

        
      </div>
    </div>
  );
};

export default ProjectCard;
