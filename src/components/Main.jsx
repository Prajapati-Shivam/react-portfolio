import React from 'react';
import 'animate.css';
import '../main.css';
export default function Main() {
  return (
    <div className='h-screen flex flex-col justify-center relative' id='main'>
      <div className='absolute top-1/4 left-0 text-9xl opacity-10 straw-hat-icon float-animation'>
        👒
      </div>
      <div className='absolute bottom-1/4 right-0 text-7xl opacity-10 wave-animation'>
        ⚓
      </div>

      <div className='flex flex-col gap-4 text-center sm:text-start sm:flex-row items-center justify-between relative z-10'>
        <div>
          <div className='flex items-center justify-center sm:justify-start gap-2 mb-2'>
            <span className='text-4xl wave-animation'>⚓</span>
            <span className='text-3xl'>🏴‍☠️</span>
          </div>
          <h2 className='animate__animated animate__fadeInUp text-5xl font-extrabold pb-4 ocean-gradient bg-clip-text text-white md:text-6xl pirate-heading'>
            Hi, I'm Shivam
            <span className='wave'>👋</span>
          </h2>
          <h3 className='animate__animated animate__fadeInUp text-3xl font-bold py-2 md:text-4xl dark:text-gray-200' style={{color: '#D62828'}}>
            Web Developer & Code Adventurer
          </h3>
        </div>
        <div className='order-first animate__animated animate__rollIn sm:order-2 ocean-gradient rounded-full overflow-hidden w-36 h-36 border-4 border-yellow-400 shadow-2xl relative'>
          <img src={'/assets/dp.png'} alt='Shivam' className='w-full h-full object-cover' />
          <div className='absolute -top-3 -right-2 text-4xl rotate-12'>
            👒
          </div>
        </div>
      </div>
      <p className='text-md text-center sm:text-start max-w-xl my-8 leading-7 text-gray-800 dark:text-gray-300 relative z-10'>
        Sailing through the <span className='font-bold' style={{color: '#0077B6'}}>Grand Line of Code</span>, seeking the treasure of perfect applications.
        A self-taught developer charting new territories in web development, one commit at a time.
      </p>
      <div className='flex gap-4 mx-auto sm:mx-0 relative z-10'>
        <a
          className='ocean-gradient text-white px-6 py-3 rounded-lg font-bold max-w-fit hover:scale-105 transition duration-200 ease-in-out shadow-lg hover:shadow-xl flex items-center gap-2'
          href={'/assets/Shivam_Prajapati_Web_Development.pdf'}
          download={true}
        >
          <span>📜</span>
          Set Sail with My Resume
        </a>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-200/30 to-transparent dark:from-blue-900/20 pointer-events-none'></div>
    </div>
  );
}
