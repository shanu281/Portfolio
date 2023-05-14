import React from 'react'
import { Link } from 'react-router-dom'
import {navigation} from '../../data'

const Nav = () => {
  return (
    <nav>
        <ul className='flex space-x-8 capitalize text-[15px]'>
           <li className='text-white hover:text-accent cursor-pointer '>Home</li>
           <li className='text-white hover:text-accent cursor-pointer '>About</li>
           <li className='text-white hover:text-accent cursor-pointer '>Portfolio</li>
           <li className='text-white hover:text-accent cursor-pointer '>Services</li>
           <li className='text-white hover:text-accent cursor-pointer '>Contact</li>
            
        </ul>
    </nav>
  )
}

export default Nav