import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function ExperienceCardNangia({}: Props) {
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
       src="/nac.jpg"
       alt=""/>
      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light ">Intern-Cybersecurity</h4>  
        <p className="font-bold text-xl mt-1">Nangia and Co LLP</p>
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
        "> 17/11/2023- 16/1/2024</p>
        <ul className="list-disc space-y-2 ml-3 text-lg">
          <li>Performing web based penetration testing.</li>
          <li>Performing mobile based penetration testing.</li>
          <li>Running phishing simulations.</li>
          <li>Running malware simulations.</li>
          <li>Responsible for content creation.</li>
          <p>
            
          </p>
        </ul>
      </div>      
    </article>
  )
}