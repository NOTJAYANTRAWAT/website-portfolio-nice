import Link from 'next/link';
import React from 'react';
import { Cursor,useTypewriter } from 'react-simple-typewriter';
import Backgroundcircles from './Backgroundcircles';
import Images from 'next/image';

type Props = {}

export default function Hero({}: Props) {
    const[text,count]=useTypewriter({
        words:["Hi,call me Jayant Rawat",
        "<Guy-who-loves-to-code.tsx>",
        "<But exploiting bugs more/>"],
        loop:true,
        delaySpeed:2000,

    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <Backgroundcircles/>
        <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='/me.jpg'
        alt=""
        />
        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Cybersecurity Enthusiast</h2>
          <h1 className='text-5xl lg:text-6l font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7ab0a'/>
          </h1>
          <div className='pt-5'>
            <Link href='#about'>
              <button className='heroButton'>About</button>
            </Link>
            <Link href='#Experience'>
              <button className='heroButton'>Experience</button>
            </Link>
            <Link href='#Skills'>
              <button className='heroButton'>Skills</button>
            </Link>
            <Link href='#Certifications'>
              <button className='heroButton'>Certifications</button>
            </Link>
            <Link href='#Projects'>
              <button className='heroButton'>Projects</button>
            </Link>
            
          </div>
        </div>

    </div>
  )
}