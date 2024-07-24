import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'Formable',
    image: 'formable',
    code: 'https://github.com/Prajapati-Shivam/form-builder',
    demo: 'https://formable-ai.vercel.app',
    desc: "Formable is a web application designed to simplify online forms' creation, management, and response collection",
  },
  {
    title: 'Thoughts',
    image: 'thoughts',
    code: 'https://github.com/Prajapati-Shivam/blog-app',
    demo: 'https://github.com/Prajapati-Shivam/blog-app',
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
  {
    title: 'Imagery',
    image: 'imagery',
    code: 'https://github.com/Prajapati-Shivam/dall-e-clone',
    demo: 'https://imagery-dall-e.vercel.app/',
    desc: 'Imagery is a dall-e clone to generate AI images built with mern stack',
  },
  {
    title: 'Horizon',
    image: 'horizon',
    code: 'https://github.com/Prajapati-Shivam/Horizon',
    demo: 'https://prajapati-shivam.github.io/Horizon/',
    desc: 'Simple E-commerce website built with html, css and javascript.',
  },
  {
    title: 'DailyNews',
    image: 'dailynews',
    code: 'https://github.com/Prajapati-Shivam/DailyNews',
    demo: 'https://react-daily-news.netlify.app/',
    desc: 'React app for daily news build with newsdata.io API.',
  },

  {
    title: 'Weather App',
    image: 'weather',
    code: 'https://github.com/Prajapati-Shivam/Weather-App',
    demo: 'https://prajapati-shivam.github.io/Weather-App/',
    desc: 'Weather app made with help of openweathermap API to get the weather details of different places.',
  },
];
export default function Projects() {
  return (
    <div id='projects' className='flex flex-col max-h-fit mt-12'>
      <h3 className='text-3xl mt-5 md:text-4xl font-bold pb-2 border-b-2 border-gray-500 dark:text-gray-200'>
        My Projects
      </h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10'>
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
    </div>
  );
}
