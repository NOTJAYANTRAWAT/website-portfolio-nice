import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react'; // Import useEffect hook
import About from '../components/About';
import Certification from '../components/Certifications';
import ContactMe from '../components/ContactMe';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import axios from 'axios';

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
    z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-blue'>
      <Head>
        <title>Jayant Portfolio</title>
      </Head>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='Experience' className='snap-center'>
        <Experience />
      </section>
      <section id='Skills' className='snap-start'>
        <Skills />
      </section>
      <section id='Projects' className='snap-start'>
        <Projects />
      </section>
      <section id='Certifications' className='snap-start'>
        <Certification />
      </section>
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
