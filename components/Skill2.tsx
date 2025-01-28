import { motion, MotionConfig } from 'framer-motion'
import React from 'react'

type Props = {
  directionLeft?:boolean;
};

function Skill2({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
      initial={{
        x:directionLeft ?-200:200,
        opacity:0,
      }}
      transition={{duration:1}}
      whileInView={{opacity:1,x:0}}
      src='/python_new.png'
      className='rounded-full object-cover w-20 h-20 xl:w-32
      xl:h-32 filter group-hover:grayscale transiton duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 first-letter:ease-in-out
      group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <motion.div className='flex items-center justify-center h-full'
        whileHover={{scale:1.5}}
        transition={{duration:1.2}}>
          <p className='text-3xl font0bold text-black opacity-100'>100%</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Skill2;