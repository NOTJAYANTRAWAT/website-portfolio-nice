import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Project2({}: Props) {
  return (
    <div className=' w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
                justify-center p-20 md:p-44 xl:p-44 h-screen  '> 
                    <motion.img 
                    initial={{
                      y:-300,
                      opacity:0,
                  }}
                  transition={{
                      duration:1.2,
                  }}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                    src='/space_buddy1.png'
                    alt=''
                    />
                    <div className='space-y-10 px-0 md:px-0 max-w-6xl'> 
                        <h4 className='text-sm font-semibold text-center xl:text-xl'>
                        <span className='underline decoration-[#F7AB0A]/10}'>
                           Project 2 of 3 : 
                        </span>
                        Face Recognition Security
                        </h4>
                        <p className='text-sm text-center md:text-left xl:text-lg'>
                        The National Aeronautics and Space Administration is Americas civil space program and the global leader in 
                        space exploration. Nasa API gives us access to many of the earth and space related data like information about 
                        near earth objects, space weather or weather on mars, images shot by mars rover, objects orbiting the our earth 
                        like different satellites. So in this project we will be using some of these APIs to satisfy the curiosity 
                        hunger of the user of our application.
                        </p>
                        </div>
                        
                        
                </div>
  )
}

export default Project2;