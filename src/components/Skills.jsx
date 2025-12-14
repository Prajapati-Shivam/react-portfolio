import React from 'react';
import 'animate.css';

const skills = [
  {
    name: 'HTML',
    image: 'html',
    desc: 'HTML is the standard markup language for Web pages.',
  },
  {
    name: 'CSS',
    image: 'css',
    desc: 'CSS is the language we use to style an HTML document.',
  },
  {
    name: 'Javascript',
    image: 'javascript',
    desc: 'JavaScript is the Programming Language for the Web.',
  },
  {
    name: 'Tailwind CSS',
    image: 'tailwindcss',
    desc: 'Tailwind CSS is a utility-first CSS framework.',
  },
  {
    name: 'React',
    image: 'react',
    desc: 'React is a JavaScript library for building user interfaces.',
  },
  {
    name: 'Next.js',
    image: 'next',
    desc: 'Next.js is an open-source React front-end development web framework.',
  },
  {
    name: 'MongoDB',
    image: 'mongodb',
    desc: 'MongoDB is a document-oriented NoSQL database used for high volume data storage.',
  },
  {
    name: 'Express',
    image: 'express',
    desc: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
  },
  {
    name: 'Node.js',
    image: 'nodejs',
    desc: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
  },
  {
    name: 'Github',
    image: 'github',
    desc: 'GitHub is a code hosting platform for version control and collaboration.',
  },
];
export default function Skills() {
  return (
    <div className='max-h-fit flex flex-col relative'>
      <div className='flex items-center gap-3 mb-2'>
        <span className='text-4xl'>🧭</span>
        <h3 className='text-3xl md:text-4xl mt-2 font-bold dark:text-gray-200 pirate-heading' style={{color: '#023E8A'}}>
          NAVIGATION TOOLS
        </h3>
      </div>
      <div className='h-1 w-32 ocean-gradient rounded-full mb-6'></div>

      <p className='text-lg md:text-xl mb-2 dark:text-gray-300'>
        <span className='font-bold' style={{color: '#D62828'}}>The Crew's Arsenal</span> - Weapons I wield on my voyage
      </p>
      <div className='flex gap-2 text-2xl mb-8'>
        <span>⚔️</span>
        <span>🗺️</span>
        <span>⛵</span>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='p-5 shadow-xl bg-gradient-to-br from-blue-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 flex flex-col rounded-lg border-2 transition-all duration-300 ease-in-out border-blue-200 dark:border-blue-900 hover:scale-105 hover:border-yellow-400 hover:shadow-2xl relative overflow-hidden group'
          >
            <div className='absolute top-0 right-0 text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-300'>
              ⚓
            </div>
            <div className='flex justify-between items-center relative z-10'>
              <img
                src={`/assets/skills/${skill.image}.svg`}
                className='w-14 h-14 transition-transform duration-300 group-hover:rotate-12'
                alt='Skill'
              />
              <h4 className='text-lg md:text-xl font-bold mx-auto dark:text-gray-200' style={{color: '#023E8A'}}>
                {skill.name}
              </h4>
            </div>
            <div className='mt-3 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-8 text-5xl opacity-30'>
        <span className='wave-animation'>🌊</span>
      </div>
    </div>
  );
}
