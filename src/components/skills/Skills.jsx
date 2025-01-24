import React, { useState } from "react";
import SkillsData from "./SkillsData";
import SkillsCard from "./SkillsCard";

const Skills = () => {

    const  [selectedCategory,setSelectedCategory] = useState("All");

    const filteredItems = SkillsData.filter((item)=>{
        return selectedCategory === "All" ||  item.category === selectedCategory;
    })

  return (
    <div className="h-auto bg-gray-800 flex-col w-full text-white scroll-behavior: smooth pt-[80px] pb-[80px]" id="Skills">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold mb-4 text-center ">
          My Technical skills
        </h1>
      </div>

      <div className="flex justify-center mt-[25px] gap-4">
        <button className={`tracking-tight bg-transparent hover:bg-gray-900 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded active
            ${selectedCategory === "All"? "bg-gray-800 border-transparent" : "border-blue-500"}`}
            onClick={()=>setSelectedCategory("All")}
        >
          All
        </button>
        <button className={`tracking-tight bg-transparent hover:bg-gray-900 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
            ${selectedCategory === "Frontend" ? "bg-gray-800 border-transparent" : "border-blue-500"}`}
            onClick={()=>setSelectedCategory("Frontend")}    
        >
          Frontend
        </button>
        <button className={`tracking-tight bg-transparent hover:bg-gray-900 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
            ${selectedCategory === "Backend" ? "bg-gray-800 border-transparent" : "border-blue-500"}`}
            onClick={()=>setSelectedCategory("Backend")}    
        >
          Backend
        </button>
      </div>

      <div className='grid gap-8 grid-cols-6 mt-20 mx-auto w-[65%]'>
        {filteredItems.map((item)=>(<SkillsCard key={item.id} item={item}/>))}
      </div>
    </div>
  );
};

export default Skills;
