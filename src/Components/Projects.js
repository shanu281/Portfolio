import React, { useEffect, useState } from 'react'
import { projectsData } from '../data'
import Project from './Project'
const Projects = () => {
  return (
    <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
      {projectsData.map((item, i) => {
        return <Project item={item} key={item.id} />
      })
      }
    </section>
  )
}

export default Projects