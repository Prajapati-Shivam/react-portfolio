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
      <div className='min-h-screen px-10 pb-10 lg:px-28 dark:bg-gray-900'>
        <Navbar mode={() => setDarkMode(!darkMode)} />
        <Main />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
