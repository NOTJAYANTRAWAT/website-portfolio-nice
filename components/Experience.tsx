import { motion } from 'framer-motion';
import React from 'react';
import ExperienceCardCyberops from './ExperienceCardCyberops';
import ExperienceCardNangia from './ExperienceCardNangia';
import ExperienceCardNangiaAndersen from './ExperienceCardNangiaAndersen';

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative overflow-hidden text-center md:text-left max-w-full px-10 justify-center mx-auto items-center"
    >
      {/* Experience Title: Fixed on Top */}
      <h3 className='absolute top-10 md:top-16 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-lg md:text-2xl'>
        Experience
      </h3>

      {/* Experience Cards Container */}
      <div className="w-full mt-24 md:mt-30 flex space-x-5 overflow-x-scroll p-4 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]">
        <ExperienceCardCyberops />
        <ExperienceCardNangia/>
        <ExperienceCardNangiaAndersen/>
        
      </div>
    </motion.div>
  );
}
