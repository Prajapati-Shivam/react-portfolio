import './main.css';
import Main from './components/Main';
import Projects from './components/Projects';
import { useState, useEffect } from 'react';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Dock from './components/Dock';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className='min-h-screen relative max-w-3xl mb-20 mx-auto py-4 sm:py-8 px-6 font-sans antialiased'>
      <div className='relative z-10'>
        <Main />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Dock mode={() => setDarkMode(!darkMode)} />
    </div>
  );
}

export default App;
