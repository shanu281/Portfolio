import React from 'react'
import {
  
  FiInstagram,
  FiGithub,
 
  FiMail,
  
} from 'react-icons/fi';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-4'>
      <a className='hover:text-red-500'><FiInstagram /></a>
      <a className='hover:text-red-500'><FiGithub /></a>
      <a className='hover:text-red-500'><FiMail /></a>
      <a></a>
    </div>
  )
}

export default Socials