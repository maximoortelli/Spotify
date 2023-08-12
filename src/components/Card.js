/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Image from 'next/image';
import { RiPlayFill } from 'react-icons/ri';


const Card = () => {
  return (
     <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO0jO79m?si=562bb5f892b443eb" target="_blank" className='bg-spotify-lightgray rounded-lg p-4 hover:bg-spotify-lightgrayHover transition-all group'>
        <div className='mb-4 relative'>
            <Image 
            alt='shakira'
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Shakira_-_Shakira_%282014%29.png/220px-Shakira_-_Shakira_%282014%29.png" 
            width={200} height={2500} className='rounded shadow-2xl mx-auto'/>
            <button className='p-3 text-2xl bg-spotify-green rounded-full text-spotify-gray absolute 
            right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out'>
               <RiPlayFill />
               </button>
        </div> 
        <div className='pl-2'>
            <h5 className='font-medium text-gray-100 mb-2'>Today´s Top Hits</h5>
            <p className='font-medium text-gray-400 text-sm w-[18ch]'>Shakira is on the top of the Hottest 50!</p>
        </div>
        
     </a>
  )
}

export default Card