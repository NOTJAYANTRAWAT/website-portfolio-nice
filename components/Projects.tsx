import { motion } from 'framer-motion'
import React from 'react'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
type Props = {}

function Projects({}: Props) {
    const projects=[1,2,3]
    {/*increase array size for more projects*/}
  return (
    <div className=' h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full
     justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
        </h3>
        <div className='relative w-full flex over-x-scroll m overflow-y-hidden snap-x snap-madatory z-20 
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]'>
          <Project1/>
          <Project2/>
          <Project3/>
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>

        
    </div>
  )
}

export default Projects