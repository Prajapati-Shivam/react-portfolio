import React from "react";
import Project from "./Project";
import cloudbook from "../assets/cloudbook.png";
import imagery from "../assets/imagery.png";
import stockwise from "../assets/stockwise.png";
import horizon from "../assets/horizon.png";
import dailynews from "../assets/dailynews.png";
import weather from "../assets/weather.png";

const projects = [
  {
    title: "CloudBook",
    image: cloudbook,
    code: "https://github.com/Prajapati-Shivam/Cloud-Book",
    demo: "https://cloudbook-note-app.vercel.app/",
    desc: "CloudBook is a simple note-taking application built using MongoDB and Express. With CloudBook, users can easily create, update, and delete notes.",
  },
  {
    title: "Imagery",
    image: imagery,
    code: "https://github.com/Prajapati-Shivam/dall-e-clone",
    demo: "https://imagery-dall-e.vercel.app/",
    desc: "Imagery is a dall-e clone to generate AI images built with mern stack",
  },
  {
    title: "Horizon",
    image: horizon,
    code: "https://github.com/Prajapati-Shivam/Horizon",
    demo: "https://prajapati-shivam.github.io/Horizon/",
    desc: "Simple E-commerce website built with html, css and javascript.",
  },
  {
    title: "DailyNews",
    image: dailynews,
    code: "https://github.com/Prajapati-Shivam/DailyNews",
    demo: "https://daily-news-shivam.netlify.app/",
    desc: "React app for daily news build with newsdata.io API.",
  },
  {
    title: "Inventory Management System",
    image: stockwise,
    code: "https://github.com/Prajapati-Shivam/Stockwise",
    demo: "https://stockwise.vercel.app",
    desc: "Inventory Management System is a simple web application built using Nextjs and MongoDB. Users can easily create and delete products and update their quantity and price.",
  },
  {
    title: "Weather App",
    image: weather,
    code: "https://github.com/Prajapati-Shivam/Weather-App",
    demo: "https://prajapati-shivam.github.io/Weather-App/",
    desc: "Weather app made with help of openweathermap API to get the weather details of different places.",
  },
];
export default function Projects() {
  return (
    <div id="projects" className="flex flex-col max-h-fit mt-12">
      <h3 className="text-3xl md:text-4xl mt-24 font-bold pb-2 border-b-2 border-gray-500 dark:text-gray-200">
        My Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
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
