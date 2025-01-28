import React from 'react'
import {PhoneIcon,MapPinIcon,EnvelopeOpenIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import {useForm,SubmitHandler}from "react-hook-form"

type Inputs={
    name:string,
    email:string,
    subject:string,
    message:string,

};
type Props = {}

function ContactMe({}: Props) {
const { 
    register, 
    handleSubmit,
 } = useForm<Inputs>();

    const onSubmit:SubmitHandler<Inputs>=(formData) => {
        window.location.href='mailto:rootjay24@gmail.com?subject={formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}.(${formData.email})';
        
    };
  
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
          Contact
      </h3>
      <div className='flex flex-col space-y-13'>
        <h4 className='text-xl xl:text-4xl'>
            I have what you need.{" "}
            <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
        </h4>
        <div className='space-y-10'>
            <div className='flex items-center space-x-4 mt-2 justify-center'>
                <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-xl xl:text-xl'>+91 9582228587</p>
            </div>
            <div className='flex items-center space-x-3 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-xl xl:text-xl'>rootjay24@gmail.com</p>
            </div>
            {/* <div className='flex items-center space-x-3  justify-center'>
                <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-xl xl:text-xl'>C-250 Kendriya Vihar Noida</p>
            </div> */}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} 
        className='flex flex-col mt-3 space-y-3 w-fit mx-auto'>
            <div className='flex space-x-2'>
                <input {...register('name')} placeholder="Name" className="contactinput" type="text" />
                <input {...register('email')} placeholder="Email"className="contactinput" type="email" />
                
            </div>
            <input {...register('subject')} placeholder="Subject" className="contactinput"  type="text" />
            <textarea {...register('message')} placeholder="Message" className="contactinput" />
            <button 
            type='submit'
            className='bg-[#f7ab0a] py-1 px-5 xl:py-2 xl:px-6 rounded-md text-black font-bold text-lg '>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe