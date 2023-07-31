import React from "react";
import "animate.css";
import resume from "../assets/resume.pdf";

export default function Main() {
  return (
    <div className="h-screen flex flex-col justify-center" id="main">
      <div className="max-w-xl">
        <h2 className="animate__animated animate__zoomIn text-5xl font-extrabold pb-4 text-teal-600 md:text-6xl">
          Shivam Prajapati
        </h2>
        <h3 className="animate__animated animate__slideInRight text-3xl font-bold py-2 md:text-4xl dark:text-gray-200">
          Web Developer
        </h3>
        <p className="text-md py-4 leading-6 text-gray-800 md:text-xl dark:text-gray-400">
          I am a web developer with a passion for learning new things. I am a
          self-taught developer and I love to build things that live on the
          internet.
        </p>
        <a
          className="animate__animated animate__pulse bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-2 rounded-md font-bold"
          href={resume}
          download={true}
        >
          Resume
        </a>
      </div>
    </div>
  );
}
