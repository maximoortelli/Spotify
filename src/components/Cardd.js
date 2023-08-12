
import React from 'react';
import Image from 'next/image';
import { RiPlayFill } from 'react-icons/ri';

const cardd = () => {
  return (
    <a href="https://open.spotify.com/intl-es/album/7xV2TzoaVc0ycW7fwBwAml?si=S8kriBF0Sm-QTTmU5bDH6Q" target="_blank" className='bg-spotify-lightgray rounded-lg p-4 hover:bg-spotify-lightgrayHover transition-all group'>
        <div className='mb-4 relative'>
            <Image 
            alt='harry styles'
            src="https://upload.wikimedia.org/wikipedia/en/b/b1/Harry_Styles_-_Fine_Line.png" 
            width={200} height={250} className='rounded shadow-2xl mx-auto'/>
            <button className='p-3 text-2xl bg-spotify-green rounded-full text-spotify-gray absolute 
            right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out'>
               <RiPlayFill />
               </button>
        </div> 
        <div className='pl-2'>
            <h5 className='font-medium text-gray-100 mb-2'>Harry Styles</h5>
            <p className='font-medium text-gray-400 text-sm w-[18ch]'>Fine Line</p>
        </div>
     </a>
  )
}

export default cardd