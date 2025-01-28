import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Certificate1({}: Props) {
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
                  // viewport={{once:true}}
                  whileHover={{
                    scaleX:2,
                    scaleY:2
                  }}
                    src='/appsec.png'
                    className='w-74 h-64'
                    alt=''
                    />
                    <div className='space-y-10 px-0 md:px-0 max-w-6xl'> 
                        <h4 className='text-sm font-semibold text-center xl:text-2xl'>
                           Certficiate 2 of 2 : <span className='underline decoration-[#F7AB0A]/50'> Certified App SecPractitioner</span>   
                        </h4>
                        <p className='text-sm text-center md:text-left xl:text-lg'>
                        Certified Appsec Practitioner (CAP) is an intermediate-level exam to test attendees’ knowledge on the core concepts of application security. ... CAP is intended to be taken by application security engineers, application developers, SOC analysts, penetration testers, 
                        red and blue team members and any appsec enthusiast, who wants to evaluate and advance their knowledge.
                        </p>
                        </div>
                        
                        
                </div>
  )
}

export default Certificate1