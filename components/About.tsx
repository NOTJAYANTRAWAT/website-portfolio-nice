import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1,x:0}}
    transition={{duration:1.5}}
    
    className='flex flex-col relative h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[25px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.img 
        initial={{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{opacity:1,x:0}}
        //viewport={{once:true}}

        src='/me2.jpg'        
        className=' flex -mb-20 md:mb-0 flex-shrink-0 justify-evenly w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[450px] sm:w-[200px] sm:h-[200px]'
        />
        <div className=' justify-evenly space-y-10 px-0 md:px-10'>
            <h4 className='text-2xl xl:text-4xl lg:text-4xl font-semibold '>Here is a little  background 
            </h4>
            <p className='text-sm xl:text-xl md:text-xl'>
            Hi , my name is Jayant Rawat  and I am a final year student at VIT Bhopal currently studying Bachelors of 
            Technology in Computer Science. Since an early age I was intrigued by technology and the way it worked 
            hence the interest in this field. I worked in developing android as well as web applications . I am a 
            fullstack developer and I am also interested in Cybersecurity and its application. I am an Certified 
            Ethical Hacker certified from EC-Council and also in top 5% in TryHackMe . I also like to do Bug Bounty whenever I get some time where 
            I test the security of certain websites. I look forward to work as a red teamer working on securing organizations 
            from cyber attacks.So that is all about me .

            </p>
        </div>

    </motion.div>
  )
}