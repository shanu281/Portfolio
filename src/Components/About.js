import React from 'react'
import Image from '../assets/img/about.webp'
const About = () => {
  return (
    <section className='section bg-secondary'>
<div className='conatiner mx-auto '>
    <div className='flex flex-col xl:flex-row gap-24'>
        <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt='image'/>
<div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
    <div className='flex flex-col '>
        <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>Jane Doe</h2>
    <p className='mb-4 text-accent'>Freelance Web Developer </p>
    <hr className='mb-8 opacity-5' />
    <p className='mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco<br/> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
    </div>
<button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>Contact me </button>
</div>
    </div>

</div>
    </section>
  )
}

export default About