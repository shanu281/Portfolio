import React from 'react'
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-4'>
      <a><FiInstagram /></a>
      <a><FiGithub /></a>
      <a><FiMail /></a>
      <a></a>
    </div>
  )
}

export default Socials