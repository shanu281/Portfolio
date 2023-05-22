import React, { useState } from 'react'
import { projectsData } from '../data'
import { projectsNav } from '../data'
import Project from './Project'
const Projects = () => {
    const [items, setItems] = useState({name: 'all'})
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)
  return (
    <div>
        {/* Nav  */}
        <nav className='mb-12 max-w-xl mx-auto'>
            <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
                {
                    projectsNav.map((item, i) => {
                        return(
                          <li key={i}>{item.name}</li>  
                        )
                    })
                }
            </ul>
        </nav>
    </div>
  )
}

export default Projects