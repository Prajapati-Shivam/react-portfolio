import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aqylfjv', 'template_3s8y4qd', form.current, 'VSoAfGS5JQn59lonn')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset();
  };
  return (
    <div>
      <div className='flex flex-col justify-center mx-auto h-full'>
        <div>
          <p className='text-2xl md:text-3xl mt-20 font-bold pb-2 border-b-2 border-gray-500 dark:text-gray-200'>
            Contact
          </p>
          <p className='text-lg md:text-xl my-5 dark:text-gray-200'>
          Submit the form below to get in touch with me
          </p>
        </div>
        <div className='flex items-center justify-center text-gray-800'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2'>
            <input required type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 border-gray-500 rounded-md text-gray-800 dark:text-white focus:outline-none' />
            <input required type="email" name='email' placeholder='Enter your email' className='p-2 my-4 bg-transparent border-2 border-gray-500 rounded-md text-gray-800 dark:text-white focus:outline-none' />
            <textarea required name='message' placeholder='Enter your message' rows='6' className='p-2 bg-transparent border-2 border-gray-500 rounded-md text-gray-800 dark:text-white focus:outline-none'></textarea>
            <button className='text-white mt-5 bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
