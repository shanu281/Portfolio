import { Button } from 'antd';
import React from 'react'
import { FiGithub } from "react-icons/fi";
import { TbWorldWww } from "react-icons/tb";

const Project = ({item}) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center group hover:scale-110 transition duration-300'>
  <div className='mb-5 '>
    <img className='rounded-2xl' src={item.image} alt='project image'/>
      <h3 className='text-2xl font-semibold capitalize mb-2'>{item.name}</h3>
    <div className=' flex justify-center items-center gap-4'>
      <a href={item.liveLink}>
        <Button className='bg-accent text-white opacity-0 group-hover:opacity-100 transition-opacity flex'>
          <p className='flex justify-center items-center gap-2'>Visit WebApp<TbWorldWww /></p>
        </Button>
      </a>
      <a href={item.gitLink}>
        <Button className='bg-accent text-white opacity-0 group-hover:opacity-100 transition-opacity flex'>
          <p className='flex justify-center items-center gap-2'>Git Repository<FiGithub /></p>
        </Button>
      </a>
    </div>
  </div>
</div>

  
  
  )
}

export default Project