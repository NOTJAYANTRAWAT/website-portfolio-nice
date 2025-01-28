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
                    src='/terminal_1.png'
                    alt=''
                    />
                    <div className='space-y-10 px-0 md:px-0 max-w-6xl'> 
                        <h4 className='text-sm font-semibold text-center xl:text-xl'>
                        <span className='underline decoration-[#F7AB0A]/10}'>
                           Project 3 of 3 : 
                        </span>
                        Network Den
                        </h4>
                        <p className='text-sm text-center md:text-left xl:text-lg'>
                        Who does not like a portfolio website tha looks cool without spending too much time on it.
                        Terminal-portfolio is made using next.js and is command freindly website. You cna invoke different commmands
                        to fetch different info which might look cool to the person seeing it. In this API commands are used to fetch these
                        information which is typed by the user. What makes it interesting is that you can also get it for yourself hop on to
                        my github connect with me and get this for free.
                        </p>
                        </div>
                        
                        
                </div>
  )
}

export default Project2;