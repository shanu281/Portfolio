import React from 'react'
import Projects from './Projects'
const Portfolio = () => {
  return (
    <section className='bg-secondary section' id='portfolio' >
        <div className='container mx-auto'>
           
             <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:lg:block before:hidden">
            My latest work
          </h2>
          <p className='subtitle'>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco<br/> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>

            <Projects />
        </div>
    </section>
  )
}

export default Portfolio