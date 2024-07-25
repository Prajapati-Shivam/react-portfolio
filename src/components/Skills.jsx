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
    <div className='max-h-fit flex flex-col'>
      <h3 className='text-3xl md:text-4xl mt-20 font-bold pb-2 border-b-2 border-gray-500 dark:text-gray-200'>
        Skills
      </h3>
      <p className='text-lg md:text-xl mt-5 dark:text-gray-200'>
        Technologies I have worked with.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='p-4 shadow-lg bg-teal-100 dark:bg-gray-800 flex flex-col rounded-md border transition duration-300 ease-in-out dark:border-gray-700 hover:scale-105'
          >
            <div className='flex justify-between items-center'>
              <img
                src={`/assets/skills/${skill.image}.svg`}
                className='w-12'
                alt='Skill'
              />
              <h4 className='text-lg md:text-xl font-semibold mx-auto dark:text-gray-200'>
                {skill.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
