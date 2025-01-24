import React from "react";
import about_image from "../assets/about_image.webp";

const About = () => {
  return (
    <div className="h-[120vh] bg-gray-900 flex-col w-full text-white scroll-behavior:smooth pt-[80px] " id="About">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold mb-4 text-center ">About Me</h1>
      </div>

      <div className="flex justify-around items-center mt-[30px]">
        <div className="flex justify-center items-center w-1/2 ">
          <img src={about_image} alt="" className="object-cover w-[370px] h-[400px]"/>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2">
          <p className="mt-5 mr-14 text-lg">I am a passionate and dedicated <strong>Frontend-Focued</strong> Full Stack Developer with hands-on experience in building dynamic and responsive applications. I have <strong>Internship</strong> experience working with <strong>React JS</strong> and <strong>Django</strong>, allowing me to develop a strong foundation in both Frontend and Backend technologies.</p>

          <p className="mt-5 mr-14 text-lg">With around a year of experience in <strong>Frontend Development</strong>, I excel in crafting intuitive user interfaces and ensuring seamless user experiences. I am enthusiastic about learning new tools and technologies, solving challenging problems, and contributing to impactful projects.</p>

          <p className="mt-5 mr-14 text-lg">When I'm not coding, I enjoy exploring new frameworks, collaborating with teams, and staying updated on the latest trends in web development.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
