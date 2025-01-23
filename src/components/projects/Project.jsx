import React, { useState } from 'react'
import ProjectData from './ProjectData';
import ProjectCard from './ProjectCard';

const Project = () => {

    const [selectedCategory,setSelectedCategory] = useState("All");

    const filteredItems = ProjectData.filter((item)=>{
        return selectedCategory === "All" || item.category === selectedCategory;
    })

  return (
    <div className='h-auto bg-gray-900 flex-col w-full text-white scroll-behavior:smooth pt-[80px] pb-[80px]'>
        <div className="flex justify-center">
        <h1 className="text-4xl font-bold mb-4 text-center ">Project Section</h1>
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
        <button className={`tracking-tight bg-transparent hover:bg-gray-900 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
            ${selectedCategory === "FullStack" ? "bg-gray-800 border-transparent" : "border-blue-500"}`}
            onClick={()=>setSelectedCategory("FullStack")}    
        >
          FullStack 
        </button>
      </div>

      <div className='grid gap-8 grid-cols-3 mt-20 mx-auto w-[80%]'>
        {filteredItems.map((item)=>(<ProjectCard key={item.id} item={item}/>))}
      </div>
    </div>
  )
}

export default Project