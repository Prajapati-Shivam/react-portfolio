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
        `fixed bottom-4 left-0 right-0 max-w-fit mx-auto text-center px-6 py-4 rounded-2xl shadow-2xl border-4 border-yellow-600 dark:border-yellow-700 relative overflow-hidden` +
        (scrolled
          ? ' animate__animated animate__fadeInUp'
          : ' animate__animated animate__fadeOutDown')
      }
      style={{
        background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)',
      }}
    >
      <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400'></div>
      <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400'></div>

      <div className='absolute top-1 left-4 text-2xl'>⚓</div>
      <div className='absolute top-1 right-4 text-2xl'>⚓</div>

      <div className='flex items-center cursor-pointer gap-x-2 relative z-10'>
        {dockItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className='p-3 rounded-lg bg-amber-700/40 hover:bg-amber-600/60 backdrop-blur-sm border-2 border-yellow-500/50 hover:border-yellow-400 sm:hover:scale-110 transition-all duration-300 ease-in-out text-white hover:shadow-lg'
            title={item.name}
          >
            <item.icon size={18} />
          </a>
        ))}
        <button
          className='p-3 rounded-lg bg-blue-600/60 hover:bg-blue-500/80 backdrop-blur-sm border-2 border-blue-400/50 hover:border-blue-300 hover:scale-110 transition-all duration-300 ease-in-out text-white hover:shadow-lg'
          onClick={mode}
          title='Toggle Dark Mode'
        >
          <Moon size={18} />
        </button>
      </div>

      <div className='absolute -bottom-1 left-0 right-0 flex justify-center gap-1'>
        <div className='w-2 h-2 bg-yellow-600 rounded-full'></div>
        <div className='w-2 h-2 bg-yellow-600 rounded-full'></div>
        <div className='w-2 h-2 bg-yellow-600 rounded-full'></div>
      </div>
    </div>
  );
};

export default Dock;
