import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import ExperienceCard2 from './ExperienceCard2';

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1.5}}
    
    className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row  max-w-full px-10 
    justify-evenly mx-auto items-center"
    >
      <h3 className='absolute top-24 uppercase tracking-[25px] text-gray-500 text-2xl mb-2'>
            Experience
        </h3>
          
      <div className="w-full mt-20 flex space-x-5 overflow-x-scroll p-1 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]">
        <ExperienceCard/>
        <ExperienceCard2/>
       {/*<ExperienceCard/>*/} 
       {/*<ExperienceCard/>*/}
      </div>
    </motion.div>
  );
}