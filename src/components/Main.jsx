import React from 'react';
import 'animate.css';
import '../main.css';
export default function Main() {
  return (
    <div className='h-screen flex flex-col justify-center' id='main'>
      <div className='flex flex-col gap-4 text-center sm:text-start sm:flex-row items-center justify-between'>
        <div>
          <h2 className='animate__animated animate__fadeInUp text-5xl font-extrabold pb-4 text-teal-600 md:text-6xl'>
            Hi, I'm Shivam
            <span className='wave'>👋</span>
          </h2>
          <h3 className='animate__animated animate__fadeInUp text-3xl font-bold py-2 md:text-4xl dark:text-gray-200'>
            Web Developer
          </h3>
        </div>
        <div className='order-first animate__animated animate__rollIn sm:order-2 bg-gradient-to-b from-teal-500 rounded-full overflow-hidden w-32 h-32'>
          <img src={'/assets/dp.png'} alt='Shivam' />
        </div>
      </div>
      <p className='text-md text-center sm:text-start max-w-xl my-8 leading-6 text-gray-800 dark:text-gray-400'>
        I am a web developer with a passion for learning new things. I am a
        self-taught developer and I love to build things that live on the
        internet.
      </p>
      <a
        className='mx-auto sm:mx-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-2 rounded-md font-bold max-w-fit hover:scale-105 transition duration-200 ease-in-out'
        href={'/assets/Shivam_Prajapati_Web_Development.pdf'}
        download={true}
      >
        Resume
      </a>
    </div>
  );
}
