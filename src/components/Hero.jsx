import React from 'react'
import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-4'>
          <img  src={logo} alt='iwe-kere logo' className='w-28 object-contain float-left'/>

          <button type='button' onClick={()=> window.open('https://github.com/Jdave211')} className='black_btn'>
            Github
          </button>
        </nav>

        <h1 className ='head_text'>
          Summarize Articles with <br className='max-md:hidden'/>
          <span className='purple_gradient'>
            OpenAI GPT-4
          </span>
        </h1>
        <h2 className='desc text-center mx-auto w-3/4 lg:w-2/4 xl:w-1/4'>
          Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.
        </h2>
    </header>
  )
}

export default Hero
