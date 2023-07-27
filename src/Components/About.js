import React from 'react'
import Image from '../assets/img/about.webp'
const About = () => {
  return (
    <section className='section bg-secondary'>
<div className='container mx-auto '>
    <div className='flex flex-col xl:flex-row gap-24'>
        <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt='image'/>
<div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
    <div className='flex flex-col '>
        <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>Shanu Kumar</h2>
    <p className='mb-4 text-accent'>Freelance Web Developer </p>
    <hr className='mb-8 opacity-5' />
    <p className='mb-8'>I am a passionate and skilled web developer seeking a challenging and rewarding profession in the field of web development. With a solid foundation in React.js, JavaScript, HTML, and CSS, I am eager to contribute my expertise to create innovative and user-centric web solutions. My goal is to continuously improve and stay at the forefront of cutting-edge technologies, while collaborating with a dynamic team to deliver exceptional digital experiences for clients and end-users.</p>
    </div>
<button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>Contact me </button>
</div>
    </div>

</div>
    </section>
  )
}

export default About