import React from 'react'
import { Link } from 'react-router-dom'
import {navigation} from '../../data'

const Nav = () => {
  return (
    <nav>
        <ul className='flex space-x-8 capitalize text-[15px]'>
            {
                navigation.map((item, i) => {
                    return (
                        <li key={i} className='text-white hover:text-accent cursor-pointer '>
                            {/* <Link 
                            to={item.href}
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className='transition-all'
                            duration-300
                             > */}
                                hello
                            {/* </Link> */}
                        </li>
                    )
                })
            }
        </ul>
    </nav>
  )
}

export default Nav