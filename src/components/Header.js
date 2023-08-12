import React from 'react';
import Link from 'next/link';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';


const Header = () => {

  return (
    <header className='fixed left-0 top-0 md:ml-64 w-full md:w-[calc(100%-265px)] bg-spotify-lightgray flex items-center justify-between p-4 z-50'>
       <div className='flex'>
           <AiOutlineLeft className='text-xl hover:cursor-pointer p-2 box-content'/>
           <AiOutlineRight className='text-xl hover:cursor-pointer p-2 box-content'/>
       </div>

       <div className='flex items-center gap-6'>
           <a href="https://www.spotify.com/ar/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2Fsearch" target='_blank' className='hover:text-white transition-colors'>Register</a>
           <a href="https://accounts.spotify.com/es/login?continue=https%3A%2F%2Fopen.spotify.com%2Fintl-es%3F" target="_blank" className='py-2 md:py-3 px-6 rounded-full bg-white text-spotify-gray font-medium'>Log In</a>
       </div>
    </header>
  )
}

export default Header