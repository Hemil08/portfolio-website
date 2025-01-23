import React from 'react'

const SkillsCard = ({item}) => {
  return (
    
        <div className='text-center grid justify-center border-blue-500 box-border border border-transparent hover:border-blue-500 transition duration-300 ease-in-out'>
            <div className='flex flex-col justify-between items-center h-full'>
            <img src={item.image} alt="" className='w-[60%] m-auto pointer-events-none object-cover' />
            <p className='mt-2 text-sm'>{item.title}</p>
            </div>
        </div>
  )
}

export default SkillsCard 