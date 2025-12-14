import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'ReviewLens',
    image: 'reviewlens',
    code: 'https://github.com/Prajapati-Shivam/git-review',
    demo: 'https://git-review.vercel.app/',
    desc: 'ReviewLens is an AI-powered code review tool that integrates seamlessly with public GitHub repositories',
  },
  {
    title: 'FinWise',
    image: 'finwise',
    code: 'https://github.com/Prajapati-Shivam/Fin-Wise',
    demo: 'https://fin-wise-web.vercel.app/',
    desc: 'FinWise is modern web application to track daily expenses, analyze spending patterns through interactive charts, and receive AI-powered financial advice based on their spending habits.',
  },
  // {
  //   title: 'Formable',
  //   image: 'formable',
  //   code: 'https://github.com/Prajapati-Shivam/form-builder',
  //   demo: 'https://formable-ai.vercel.app',
  //   desc: "Formable is a web application designed to simplify online forms' creation, management, and response collection",
  // },
  {
    title: 'Thoughts',
    image: 'thoughts',
    code: 'https://github.com/Prajapati-Shivam/blog-app',
    demo: 'https://nextjs-thoughts.vercel.app/',
    desc: 'Thoughts is a dynamic platform for aspiring writers, curious readers, and enthusiastic learners to create, explore, and grow by sharing ideas and insights.',
  },
  {
    title: 'Stockwise',
    image: 'stockwise',
    code: 'https://github.com/Prajapati-Shivam/Stockwise',
    demo: 'https://stockwise.vercel.app',
    desc: 'Stockwise is a simple web application built using Nextjs and MongoDB. Users can easily create and delete products and update their quantity and price.',
  },
  {
    title: 'CloudBook',
    image: 'cloudbook',
    code: 'https://github.com/Prajapati-Shivam/Cloud-Book',
    demo: 'https://cloudbook-note-app.vercel.app/',
    desc: 'CloudBook is a simple note-taking application built using MongoDB and Express. With CloudBook, users can easily create, update, and delete notes.',
  },
  // {
  //   title: 'Imagery',
  //   image: 'imagery',
  //   code: 'https://github.com/Prajapati-Shivam/dall-e-clone',
  //   demo: 'https://imagery-dall-e.vercel.app/',
  //   desc: 'Imagery is a dall-e clone to generate AI images built with mern stack',
  // },
  {
    title: 'DailyNews',
    image: 'dailynews',
    code: 'https://github.com/Prajapati-Shivam/DailyNews',
    demo: 'https://react-daily-news.netlify.app/',
    desc: 'React app for daily news build with newsdata.io API.',
  },
];
export default function Projects() {
  return (
    <div id='projects' className='flex flex-col max-h-fit mt-12 relative'>
      <div className='flex items-center gap-3 mb-2'>
        <span className='text-4xl'>🗺️</span>
        <h3 className='text-3xl mt-5 md:text-4xl font-bold dark:text-gray-200 pirate-heading' style={{color: '#023E8A'}}>
          TREASURE VAULT
        </h3>
      </div>
      <div className='h-1 w-32 treasure-gradient rounded-full mb-6'></div>

      <p className='text-lg md:text-xl mb-8 dark:text-gray-300'>
        <span className='font-bold' style={{color: '#D62828'}}>Discovered Treasures</span> - Each project is a hard-won bounty from my adventures
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10'>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              image={project.image}
              title={project.title}
              code={project.code}
              demo={project.demo}
              desc={project.desc}
            />
          );
        })}
      </div>

      <div className='flex justify-center mt-12 gap-4 text-4xl opacity-30'>
        <span className='float-animation'>⚓</span>
        <span className='wave-animation'>🌊</span>
        <span className='float-animation' style={{animationDelay: '1s'}}>⛵</span>
      </div>
    </div>
  );
}
