import React, { useState } from 'react'
 import Socials from '../Socials'
 import {motion} from 'framer-motion'
 import { Link } from 'react-scroll'
import {MenuAlt3Icon} from 'react-icons/me'


const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  //Framer motion variants
  const circleVariants = {
    hidden : {
      scale:0
    },
    visible : {
      scale:180,
      transition: {
        type: 'spting',
        stiffness: 160,
        damping: 60,
      }
    }
  }
  const ulVariants = {
    hidden : {
      opacity:0
    },
    visible : {
      opacity:1,
      transition: {
        delay: 0.1,
      }
    }
  }
  return (
    <nav className='relative'>
      {/* Menu Items  */}
      <div className='cursor-pointer text-white '>
<MenuAlt3Icon className= 'w-8 h-8' />
      </div>

    </nav>
  )
}

export default NavMobile