import React, { useEffect, useState } from 'react';
import { Code, GitHub, Home, Linkedin, Moon } from 'react-feather';

const Dock = ({ mode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const dockItems = [
    {
      name: 'Home',
      icon: Home,
      link: '#main',
    },
    {
      name: 'Projects',
      icon: Code,
      link: '#projects',
    },
    {
      name: 'Github',
      icon: GitHub,
      link: 'https://github.com/Prajapati-Shivam',
    },
    {
      name: 'Linkedin',
      icon: Linkedin,
      link: 'https://www.linkedin.com/in/shivam-prajapati-78590b225/',
    },
  ];

  return (
    <div
      className={
        `fixed bottom-4 left-0 right-0 max-w-fit mx-auto bg-slate-200 dark:bg-gray-900 text-gray-900 dark:text-gray-200 text-center px-4 py-3 rounded-full shadow-xl` +
        (scrolled
          ? ' animate__animated animate__fadeInUp'
          : ' animate__animated animate__fadeOutDown')
      }
    >
      <div className='flex items-center cursor-pointer gap-x-2'>
        {dockItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className='p-3 rounded-full hover:bg-slate-300 dark:hover:bg-slate-800 hover:mx-2 transition-all duration-300 ease-in-out'
            title={item.name}
          >
            <item.icon size={16} />
          </a>
        ))}
        <Moon
          className='w-10 h-10 p-3 rounded-full hover:bg-slate-300 dark:hover:bg-slate-800'
          onClick={mode}
          size={16}
          title='Toggle Dark Mode'
        />
      </div>
    </div>
  );
};

export default Dock;
