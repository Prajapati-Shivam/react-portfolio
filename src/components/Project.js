import React from 'react'
import './style.css';

export default function Project(props) {
  return (
    <div className='main relative rounded-md shadow-lg bg-teal-100 dark:bg-slate-800 mt-10 md:flex md:justify-center md:items-center'>
      <img className='image h-fit w-full rounded-md opacity-100 ease duration-500 md:w-[65%]' src={props.image} alt="" />
      <div className='small-button text-center flex gap-4'>
        <button className='opacity-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md p-btn ease-in duration-500 '>
          <a href={props.code} target="_blank" rel="noreferrer">Code</a>
        </button>
        <button className='opacity-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md p-btn ease-in duration-500'>
          <a href={props.demo} target="_blank" rel="noreferrer">Demo</a>
        </button>
      </div>
      <div className='p-3 md:p-5'>
        <h3 className='text-2xl dark:text-gray-200'>{props.title}</h3>
        <p className='text-md py-2 leading-2 text-gray-800 dark:text-gray-400'>{props.desc}</p>
        <div className='button flex gap-4 py-2'>
          <button className='hidden md:inline bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md md:ml-0'>
            <a href={props.code} target="_blank" rel="noreferrer">Code</a>
          </button>
          <button className='hidden md:inline bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md'>
          <a href={props.demo} target="_blank" rel="noreferrer">Demo</a>
          </button>
        </div>
      </div>
    </div>
  )
}