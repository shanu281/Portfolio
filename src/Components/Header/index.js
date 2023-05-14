import React, { useEffect, useState } from 'react'
import Nav from '../Nav'
import NavMobile from '../NavMobile.js'
import Logo from '../../assets/img/logo.svg'
import Socials from '../Socials'

const Header = () => {
    const [bg, setBg] = useState(false)

useEffect( () => {
window.addEventListener('scroll', () => {
    return window.scrollY > 50 ? setBg(true) : setBg(false) 
})
})

  return (
   <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300 `}>
    <div className='container mx-auto h-full flex items-center justify-between'>
        {/* Logo  */}
        <div className='h-20 w-1/4'>
        <a  href='#'><img className='  h-full w-full overflow-hidden' src='sign3.png' alt='logo' /></a>
        </div>


        {/* Nav  */}
        <div className='hidden lg:block'><Nav /></div>

        {/* Socials  */}
        <div className='hidden lg:block'><Socials /></div>
       
        {/* NavMobile  */}
        <div className='hidden lg:block'><NavMobile /></div>


    </div>
   </header>
  )
}

export default Header
