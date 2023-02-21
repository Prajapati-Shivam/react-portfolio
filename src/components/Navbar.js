import React from 'react'
import { Moon } from 'react-feather';
import resume from '../assets/resume.pdf'

export default function Navbar(props) {
  return (
    <nav className='py-10 mb-12 flex justify-between items-center'>
      <h1 className='text-xl md:text-2xl dark:text-white'>Portfolio website</h1>
      <ul className='flex items-center'>
        <li>
          <Moon className='cursor-pointer text-2xl dark:text-white' onClick={props.mode} />
        </li>
        <li>
          <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-4 md:ml-8' href={resume} download={true}>Resume</a>
        </li>
      </ul>
    </nav>
  )
}
