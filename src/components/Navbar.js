import React, { useEffect, useState } from "react";
import { Moon } from "react-feather";
import dp from "../assets/dp.png";

export default function Navbar({ mode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed w-full left-0 px-6 sm:px-20 lg:px-40 py-4 mb-12 flex justify-between items-center z-20 ${
        scrolled && "bg-opacity-80 backdrop-filter backdrop-blur-md"
      } `}
    >
      <div className="bg-gradient-to-b from-teal-500 rounded-full overflow-hidden w-12 h-12">
        <a href="#main">
          <img src={dp} alt="Shivam" />
        </a>
      </div>
      <ul className="flex items-center gap-x-4 text-gray-800 dark:text-gray-200">
        <li className="font-semibold">
          <a href="#projects">Projects</a>
        </li>
        <li className="font-semibold">
          <a href="#contact">Contact</a>
        </li>
        <li>
          <Moon
            className="cursor-pointer text-2xl dark:text-white"
            onClick={mode}
          />
        </li>
      </ul>
    </nav>
  );
}
