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
                    src='/ECCOUNCILCEH.png'
                    alt=''
                    className=' w-74 h-64 mt-3'
                    />
                    <div className='space-y-10 px-0 md:px-0 max-w-6xl'> 
                        <h4 className='text-sm font-semibold text-center xl:text-2xl'>
                        
                           Certficiate 1 of 2 :<span className='underline decoration-[#F7AB0A]/50'> EC Council Certified Ethical Hacker</span> 
                        </h4>
                        <p className='text-sm text-center md:text-left xl:text-lg'>
                        EC-Council’s Certified Ethical Hacker (CEH) credential is a respected
                         and trusted ethical hacking program that has become one of the best options to validate a 
                         professional’s skills in penetration testing, vulnerabilities discovery and evaluation in target systems. 
                         Certified professionals provide an essential service in protecting organizations’ digital assets and 
                         infrastructures by identifying weaknesses and potential avenues of attack to prevent data from being 
                         stolen and misused by malicious attackers.
                        </p>
                        </div>
                        
                        
                </div>
  )
}

export default Certificate1