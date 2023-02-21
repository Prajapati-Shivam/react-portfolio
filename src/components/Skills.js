import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import github from '../assets/github.png'

const skills = [
  {
    id: 1,
    name: 'HTML',
    image: html
  },
  {
    id: 2,
    name: 'CSS',
    image: css
  },
  {
    id: 3,
    name: 'Javascript',
    image: js
  },
  {
    id: 4,
    name: 'Bootstrap',
    image: bootstrap
  },
  {
    id: 5,
    name: 'Tailwind',
    image: tailwind
  },
  {
    id: 6,
    name: 'React',
    image: react
  },
  {
    id: 7,
    name: 'GitHub',
    image: github
  }
]
export default function Skills() {
  return (
    <div className=''>
      <h3 className='text-2xl md:text-3xl mt-20 font-bold pb-2 border-b-2 border-gray-500 dark:text-gray-200'>
        Skills
      </h3>
      <p className='text-lg md:text-xl mt-5 dark:text-gray-200'>
        Technologies I have worked with.
      </p>
      <div className='grid grid-cols-2 gap-8 md:grid-cols-3 py-8'>
        {skills.map(skill => (
          <div key={skill.id} className='skill-container py-2 shadow-lg bg-teal-100 dark:bg-gray-800 flex flex-col items-center justify-center rounded-md'>
            <img src={skill.image} className="mx-auto w-20 mb-5" alt='Skill' />
            <h4 className='text-xl md:text-2xl dark:text-gray-200'>{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  ) 
}
