import React from 'react';
import Image from 'next/image';
import { RiPlayFill } from 'react-icons/ri';

const Carda = () => {
  return (
    <a href="https://open.spotify.com/intl-es/album/2cWBwpqMsDJC1ZUwz813lo?si=NkgsGUtpQZeZdm3nMgH_Wg" target="_blank" className='bg-spotify-lightgray rounded-lg p-4 hover:bg-spotify-lightgrayHover transition-all group'>
        <div className='mb-4 relative'>
            <Image 
            alt='eminem'
            src="https://upload.wikimedia.org/wikipedia/en/3/35/The_Eminem_Show.jpg" 
            width={200} height={250} className='rounded shadow-2xl mx-auto'/>
            <button className='p-3 text-2xl bg-spotify-green rounded-full text-spotify-gray absolute 
            right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out'>
               <RiPlayFill />
               </button>
        </div> 
        <div className='pl-2'>
            <h5 className='font-medium text-gray-100 mb-2'>Eminem</h5>
            <p className='font-medium text-gray-400 text-sm w-[18ch]'>The Eminem Show</p>
        </div>
     </a>
  )
}

export default Carda