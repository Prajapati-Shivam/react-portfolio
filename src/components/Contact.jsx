import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aqylfjv",
        "template_3s8y4qd",
        form.current,
        "VSoAfGS5JQn59lonn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    alert("Your message has been sent");
  };
  return (
    <div id="contact" className="max-h-fit mt-12 relative">
      <div className="absolute top-0 right-0 text-9xl opacity-10 float-animation">
        ⛵
      </div>
      <div className="absolute bottom-0 left-0 text-7xl opacity-10 wave-animation">
        🌊
      </div>

      <div className="flex flex-col justify-center mx-auto h-full relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">📬</span>
          <p className="text-3xl md:text-4xl mt-20 font-bold dark:text-gray-200 pirate-heading" style={{color: '#023E8A'}}>
            SEND A MESSAGE IN A BOTTLE
          </p>
        </div>
        <div className="h-1 w-32 adventure-gradient rounded-full mb-6"></div>

        <div className="flex justify-between items-start flex-col gap-2 sm:flex-row sm:items-center my-6">
          <p className="text-lg md:text-xl dark:text-gray-300">
            <span className="font-bold" style={{color: '#D62828'}}>Join My Crew!</span> Drop me a message and let's sail together
          </p>
          <div className="flex gap-x-4 text-gray-600 dark:text-white">
            <a
              href="https://www.linkedin.com/in/shivam-prajapati-78590b225/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <AiFillLinkedin className="cursor-pointer text-4xl" style={{color: '#0077B6'}} />
            </a>
            <a
              href="https://github.com/Prajapati-Shivam"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <AiOutlineGithub className="cursor-pointer text-4xl" style={{color: '#1C1C1C'}} />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center border-4 border-blue-400 dark:border-blue-700 p-8 rounded-xl bg-gradient-to-br from-blue-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl relative overflow-hidden">
          <div className="absolute top-2 right-2 text-6xl opacity-20">
            🏴‍☠️
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full relative z-10"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-base md:text-lg font-bold dark:text-gray-200 flex items-center gap-2"
                style={{color: '#023E8A'}}
              >
                <span>👤</span> Your Name
              </label>
              <input
                required
                type="text"
                name="user_name"
                placeholder="Monkey D. Luffy"
                className="w-full p-3 mt-2 bg-white dark:bg-gray-700 border-2 border-blue-400 dark:border-blue-600 rounded-lg text-gray-800 dark:text-white focus:outline-none focus:border-yellow-500 transition-colors duration-200"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-base md:text-lg font-bold dark:text-gray-200 flex items-center gap-2"
                style={{color: '#023E8A'}}
              >
                <span>✉️</span> Email
              </label>
              <input
                required
                type="email"
                name="user_email"
                placeholder="pirate.king@grandline.com"
                className="w-full p-3 mt-2 bg-white dark:bg-gray-700 border-2 border-blue-400 dark:border-blue-600 rounded-lg text-gray-800 dark:text-white focus:outline-none focus:border-yellow-500 transition-colors duration-200"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-base md:text-lg font-bold dark:text-gray-200 flex items-center gap-2"
                style={{color: '#023E8A'}}
              >
                <span>📜</span> Message
              </label>
              <textarea
                required
                name="message"
                placeholder="Share your adventure with me..."
                rows="5"
                className="w-full p-3 mt-2 bg-white dark:bg-gray-700 border-2 border-blue-400 dark:border-blue-600 rounded-lg text-gray-800 dark:text-white focus:outline-none focus:border-yellow-500 transition-colors duration-200"
              ></textarea>
            </div>
            <button className="text-white font-bold w-fit ocean-gradient hover:scale-105 transition-all duration-300 px-8 py-4 rounded-lg shadow-lg hover:shadow-2xl flex items-center gap-2">
              <span>🚀</span>
              Send Message
            </button>
          </form>
        </div>

        <div className="flex justify-center mt-8 gap-3 text-3xl">
          <span>⚓</span>
          <span>🌊</span>
          <span>☀️</span>
          <span>⛵</span>
        </div>
      </div>
    </div>
  );
}
