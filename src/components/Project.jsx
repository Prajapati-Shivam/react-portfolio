import React from 'react';
import { Code, Globe } from 'react-feather';

export default function Project(props) {
  const { image, title, desc, code, demo } = props;
  return (
    <div className='treasure-card relative rounded-lg shadow-2xl bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 p-6 border-4 border-yellow-600 dark:border-yellow-700'>
      <div className='absolute -top-3 -right-3 text-5xl transform rotate-12 z-10'>
        💎
      </div>
      <div className='absolute -bottom-2 -left-2 text-4xl opacity-50'>
        💰
      </div>

      <div className='relative'>
        <img
          className='rounded-md border-4 border-yellow-600 dark:border-yellow-700 shadow-lg'
          src={`/assets/projects/${image}.png`}
          alt={title}
        />
        <div className='absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1'>
          <span>🏴‍☠️</span> BOUNTY
        </div>
      </div>

      <h3 className='text-center title font-bold text-xl my-4 dark:text-gray-200 pirate-heading' style={{color: '#023E8A'}}>
        {title}
      </h3>

      <p className='desc text-md text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>{desc}</p>

      <div className='flex items-center gap-3 mt-6'>
        <a
          href={demo}
          target='_blank'
          rel='noreferrer'
          className='flex-1 flex items-center gap-x-2 justify-center ocean-gradient text-white px-4 py-3 rounded-lg font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl'
        >
          <Globe size={18} />
          <span>Explore</span>
        </a>
        <a
          href={code}
          target='_blank'
          rel='noreferrer'
          className='flex-1 flex items-center gap-x-2 justify-center adventure-gradient text-white px-4 py-3 rounded-lg font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl'
        >
          <Code size={18} />
          <span>Code</span>
        </a>
      </div>

      <div className='mt-4 flex justify-center gap-2 text-2xl opacity-60'>
        <span>⚔️</span>
        <span>🗡️</span>
        <span>⚓</span>
      </div>
    </div>
  );
}
