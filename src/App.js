import './main.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Projects from './components/Projects';
import { useState } from 'react';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : "" }>
      <div className='min-h-screen relative px-10 sm:px-20 lg:px-40 pb-10 dark:bg-gray-900'>
        <Navbar mode={() => setDarkMode(!darkMode)} />
        <Main />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
