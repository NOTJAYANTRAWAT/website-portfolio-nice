import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'
import Skill10 from './Skill10'
import Skill11 from './Skill11'
import Skill12 from './Skill12'
import Skill2 from './Skill2'
import Skill3 from './Skill3'
import Skill4 from './Skill4'
import Skill5 from './Skill5'
import Skill6 from './Skill6'
import Skill8 from './Skill8'
import Skill7 from './Skills7'
import Skill9 from './Skills9'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    transition={{duration:1.5}}
    whileInView={{opacity:1}}
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center
    xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute bottom-16 uppercase tracking-[3px] text-gray-500 text-xl'>
            Hover over a skill for current proficiency
        </h3>
        <div className='grid xl:grid-cols-4 xl:gap-5 grid-cols-3 gap-3'>
            <Skill/>
            <Skill2/>
            <Skill3/>
            <Skill4/>
            <Skill5/>
            <Skill6/>
            <Skill7/>
            <Skill8/>
            <Skill9/>
            <Skill10/>
            <Skill11/>
            <Skill12/>
        </div>
        </motion.div>
  )
}

export default Skills