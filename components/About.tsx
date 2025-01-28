import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  // Reference to the About section
  const ref = useRef<HTMLDivElement>(null);

  // Track the scrolling within the parent container (`overflow-y-scroll`)
  const { scrollYProgress } = useScroll({
    target: ref,  // Track scrolling relative to this section
    offset: ["start 80%", "end start"], // Adjust parallax effect timing
  });

  // Parallax Transformations
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]); // Text moves slower
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -30]); // Image moves faster

  return (
    <motion.div
      ref={ref} // Track scrolling inside this section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className='relative flex flex-col h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      {/* About Section Title with Parallax */}
      <motion.h3
        style={{ y: textY }} // Apply parallax to title
        className='absolute top-24 uppercase tracking-[25px] text-gray-500 text-2xl text-center text-justify'
      >
        About
      </motion.h3>

      {/* Profile Image with Parallax */}
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ y: imgY }} // Parallax effect
        src='/me2.jpg'
        className='flex -mb-20 md:mb-0 flex-shrink-0 justify-evenly w-36 h-36 rounded-full object-cover 
                   md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[450px] sm:w-[200px] sm:h-[200px]'
      />

      {/* Text Content with Parallax Effect */}
      <motion.div style={{ y: textY }} className='justify-evenly space-y-10 px-0 md:px-10'>
        <h4 className='text-2xl xl:text-4xl lg:text-4xl font-semibold mt-3'>
          Here is a little background
        </h4>
        <p className='text-sm xl:text-xl md:text-xl text-justify'>
        Hi, my name is <strong>Jayant Rawat</strong>. I have completed my B.Tech in Computer Science and currently work at [Redacted].

I specialize in Web and Mobile Penetration Testing, Incident Response, and Compliance Audits. I hold certifications like Certified Ethical Hacker (CEH) and eWPTX (Expert Web Penetration Tester).

Beyond offensive security, I have hands-on experience in ITGC (IT General Controls), ISO 27001 audits, and other compliance-based assessments. I am passionate about helping organizations strengthen their security posture, ensuring they meet industry standards while proactively defending against cyber threats.

My goal is to grow as a Red Teamer, continuously enhancing my skills in ethical hacking, risk assessment, and cybersecurity governance to protect critical infrastructures from sophisticated cyber attacks.


        </p>
      </motion.div>
    </motion.div>
  );
}
