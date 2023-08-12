
import React from 'react';
import Image from 'next/image';
import { RiPlayFill } from 'react-icons/ri';

const Card4 = () => {
  return (
    <a href="https://open.spotify.com/intl-es/album/1lXY618HWkwYKJWBRYR4MK?si=kkNVIKLrSaWjaM6NBKDHfw" target="_blank" className='bg-spotify-lightgray rounded-lg p-4 hover:bg-spotify-lightgrayHover transition-all group'>
        <div className='mb-4 relative'>
            <Image 
            alt='drake'
            src="https://upload.wikimedia.org/wikipedia/en/7/70/Drake_-_More_Life_cover.jpg" 
            width={200} height={2500} className='rounded shadow-2xl mx-auto'/>
            <button className='p-3 text-2xl bg-spotify-green rounded-full text-spotify-gray absolute 
            right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out'>
               <RiPlayFill />
               </button>
        </div> 
        <div className='pl-2'>
            <h5 className='font-medium text-gray-100 mb-2'>Drake</h5>
            <p className='font-medium text-gray-400 text-sm w-[18ch]'>More Life</p>
        </div>
        
     </a>
  )
}

export default Card4