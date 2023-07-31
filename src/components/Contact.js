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
  };
  return (
    <div id="contact" className="max-h-fit mt-12">
      <div className="flex flex-col justify-center mx-auto h-full">
        <p className="text-3xl md:text-4xl mt-20 font-bold pb-2 border-b-2 border-gray-500 dark:text-gray-200">
          Contact
        </p>
        <div className="flex justify-between items-start flex-col gap-2 sm:flex-row sm:items-center my-4">
          <p className="text-lg md:text-xl dark:text-gray-200">
            Submit the form below to get in touch with me
          </p>
          <div className="flex gap-x-4 text-gray-600 dark:text-white">
            <a
              href="https://www.linkedin.com/in/shivam-prajapati-78590b225/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="cursor-pointer text-3xl" />
            </a>
            <a
              href="https://github.com/Prajapati-Shivam"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className="cursor-pointer text-3xl" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center border p-4 rounded-md border-gray-500 text-gray-800">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="text-base md:text-lg dark:text-gray-200"
              >
                Your name
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full p-2 bg-transparent border-2 border-gray-500 rounded-md text-gray-800 dark:text-white focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="text-base md:text-lg dark:text-gray-200"
              >
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="johndoe@mail.com"
                className="w-full p-2 bg-transparent border-2 border-gray-500 rounded-md text-gray-800 dark:text-white focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="text-base md:text-lg dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                required
                name="message"
                placeholder="Enter your message here..."
                rows="4"
                className="w-full p-2 bg-transparent border-2 border-gray-500 rounded-md text-gray-800 dark:text-white focus:outline-none"
              ></textarea>
            </div>
            <button className="text-white font-bold w-fit bg-gradient-to-r from-cyan-500 to-teal-500 hover:bg-gradient-l hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 px-4 py-2 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
