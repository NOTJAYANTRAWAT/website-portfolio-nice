import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] 
    p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
       <motion.img
       initial={{
        y:-100,
        opacity:0,
      }}
       whileInView={{opacity:1,y:0}}
       transition={{duration:1.2}}
       viewport={{once:true}}
       className="w-32 h-32 rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center "
       src="/llt.png"
       alt=""/>
      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light ">Python Animator</h4>  
        <p className="font-bold text-xl mt-1">  LLTEDS</p>
        <div className="flex space-x-2 my-2">
          <img className="h-5 w-5 rounded-full"
          src='https://code.visualstudio.com/assets/images/code-stable.png'
          />
          <img className="h-5 w-5 rounded-full"
          src='/pyth.png'
          />
          <img className="h-5 w-5 rounded-full"
          src='/last.svg'
          />
          

        </div>
        <p className="uppercase py-5 text-gray-300
        "> 16/1/2022- 16/5/2022</p>
        <ul className="list-disc space-y-2 ml-3 text-lg">
          <li>Created animations using Python.</li>
          <li>Using Python library Manim</li>
          <li>Learning was visualized.</li>
          <li>Responsible for content creation.</li>
          <p>
            
          </p>
        </ul>
      </div>      
    </article>
  )
}