import React from 'react';
import { Code, Globe } from 'react-feather';

export default function Project(props) {
  const { image, title, desc, code, demo } = props;
  return (
    <div className='main relative rounded-md shadow-lg bg-teal-100 dark:bg-slate-800 p-6'>
      <img
        className='rounded-md border border-gray-200 dark:border-gray-700'
        src={`/assets/projects/${image}.png`}
        alt={title}
      />
      <h3 className='text-center title font-semibold text-lg my-3 text-gray-900 dark:text-gray-200'>
        {title}
      </h3>
      <p className='desc text-md text-gray-800 dark:text-gray-400'>{desc}</p>
      <div className='flex items-center gap-4 mt-4'>
        <a
          href={demo}
          target='_blank'
          rel='noreferrer'
          className='flex-1 flex items-center gap-x-1 hover:gap-x-2 justify-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md'
        >
          <Globe size={20} />
          <span>Website</span>
        </a>
        <a
          href={code}
          target='_blank'
          rel='noreferrer'
          className='flex-1 flex items-center gap-x-1 hover:gap-x-2 justify-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md'
        >
          <Code size={20} />
          <span>Source</span>
        </a>
      </div>
    </div>
  );
}
