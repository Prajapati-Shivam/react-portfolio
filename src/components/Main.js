import React from 'react';
import { Linkedin, GitHub, Mail } from 'react-feather';
import image from '../assets/dp.png'
export default function Main() {
  return (
    <>
      <div className='text-center p-10'>
        <h2 className='text-4xl py-2 text-teal-600 md:text-5xl'>Shivam Prajapati</h2>
        <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-200'>Frontend Developer</h3>
        <p className='text-md py-4 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400'>
          Motivated student seeking internship in front end development to gain hands-on experience and looking forward to learn more.
        </p>
      </div>
      <div className='flex justify-center gap-16 text-gray-600 py-3 dark:text-white'>
        <a href='https://www.linkedin.com/in/shivam-prajapati-78590b225/' target="_blank" rel="noreferrer"><Linkedin className='cursor-pointer' /></a>
        <a href='https://github.com/Prajapati-Shivam' target="_blank" rel="noreferrer"><GitHub className='cursor-pointer' /></a>
        <a href='mailto:prajapatishivam11203@gmail.com' target="_blank" rel="noreferrer"><Mail className='cursor-pointer' /></a>
      </div>
      <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full overflow-hidden w-72 h-72 md:w-80 md:h-80 mt-20'>
        <img src={image} alt="" />
      </div>
    </>
  )
}
