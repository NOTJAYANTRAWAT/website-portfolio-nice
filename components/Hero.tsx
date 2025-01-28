import Link from 'next/link';
import React, { useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Backgroundcircles from './Backgroundcircles';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {}

export default function Hero({}: Props) {
    const [isFlipped, setIsFlipped] = useState(false);

    const [text, count] = useTypewriter({
        words: [
            "Hi, call me Jayant Rawat",
            "<Guy-who-loves-to-code.tsx>",
            "<But exploiting bugs more/>"
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <Backgroundcircles />

            {/* Flip Animation with Framer Motion */}
            <motion.div
                className='relative rounded-full h-32 w-32 mx-auto perspective-1000'
                onClick={() => setIsFlipped(!isFlipped)} // Toggle image on click
            >
                <motion.div
                    className="relative w-full h-full"
                    animate={{ rotateY: isFlipped ? 180 : 0 }} // Flip effect
                    transition={{ duration: 0.9, ease: "easeInOut" }} // Smooth transition
                    style={{ transformStyle: "preserve-3d" }} // 3D Effect
                >
                    {/* Front Side */}
                    <div className="absolute w-full h-full" style={{ backfaceVisibility: "hidden" }}>
                        <Image
                            src="/me.jpg"
                            alt="Me"
                            width={128}
                            height={128}
                            className="rounded-full object-cover"
                        />
                    </div>

                    {/* Back Side (Flipped Image) */}
                    <div className="absolute w-full h-full" style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
                        <Image
                            src="/me2.jpg"
                            alt="Alternate Image"
                            width={128}
                            height={128}
                            className="rounded-full object-cover"
                        />
                    </div>
                </motion.div>
            </motion.div>

            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Cybersecurity Enthusiast</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#f7ab0a' />
                </h1>
                <div className='pt-5'>
                    <Link href='#about'><button className='heroButton'>About</button></Link>
                    <Link href='#Experience'><button className='heroButton'>Experience</button></Link>
                    <Link href='#Skills'><button className='heroButton'>Skills</button></Link>
                    <Link href='#Certifications'><button className='heroButton'>Certifications</button></Link>
                    <Link href='#Projects'><button className='heroButton'>Projects</button></Link>
                </div>
            </div>
        </div>
    );
}
