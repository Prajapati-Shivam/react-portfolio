import React from 'react'
import Project from './Project'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
export default function Projects() {
  return (
    <div>
      <h3 className='text-2xl md:text-3xl mt-10 font-bold pb-2 border-b-2 border-gray-500 dark:text-gray-200'>
        My Projects
      </h3>
      <Project 
        image={project1}
        title="Horizon"
        code="https://github.com/Prajapati-Shivam/Horizon"
        demo="https://prajapati-shivam.github.io/Horizon/"
        desc="Simple E-commerce website built with html, css and javascript."
      />
      <Project 
        image={project2}
        title="DailyNews"
        code="https://github.com/Prajapati-Shivam/DailyNews"
        demo="https://daily-news-shivam.netlify.app/"
        desc="React app for daily news build with newsdata.io API."
      />
      <Project 
        image={project3}
        title="Weather App"
        code="https://github.com/Prajapati-Shivam/Weather-App"
        demo="https://prajapati-shivam.github.io/Weather-App/"
        desc="Weather app made with help of openweathermap API to get the weather details of different places."
      />
      <Project 
        image={project4}
        title="TextFormater"
        code="https://github.com/Prajapati-Shivam/text-formater"
        demo="https://prajapati-shivam.github.io/text-formater/"
        desc="TextFormater is a tool that provides instant character count & word count for a given text."
      />
    </div>
  )
}
