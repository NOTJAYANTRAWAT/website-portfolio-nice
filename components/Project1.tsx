import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Project1({}: Props) {
  return (
    <div className='  w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
                justify-center p-20 md:p-44 xl:p-44 h-screen   '> 
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
                    src='/honeypot.png'
                    alt=''
                    style={{
                      width: 'auto', // Adjust this value based on your needs
                      height: '200px', // Adjust this value based on your needs
                    }}
                    />
                    <div className='space-y-10 px-0 md:px-0 max-w-6xl'> 
                        <h4 className='text-sm font-semibold text-center xl:text-xl'>
                        <span className='underline decoration-[#F7AB0A]/10}'>
                           Project 1 of 3 : 
                        </span>
                        Honeypot in NEXTJs and Flask
                        </h4>
                        <p className='text-sm text-center md:text-left xl:text-lg'>
                        This project is a basic website with a login page that includes a honeypot feature to log information
                        about potential attackers or malicious bots attempting to accessthe login page. The front-end of the
                        website is built using React,whiletheback end honeypotserverisimplemented using Flask.This is just an example 
                        and the honeypot could be even implemented in large scales or websites.
                        </p>
                        </div>
                        
                        
                </div>
  )
}

export default Project1