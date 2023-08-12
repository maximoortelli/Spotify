import React from 'react';
import Image from 'next/image';
import { RiPlayFill } from 'react-icons/ri';

const Card5 = () => {
  return (
    <a href="https://open.spotify.com/intl-es/track/18HOjcvTVV7W8YzBuOsAPS?si=7730a3cef846403a" target="_blank" className='bg-spotify-lightgray rounded-lg p-4 hover:bg-spotify-lightgrayHover transition-all group'>
        <div className='mb-4 relative'>
            <Image 
            alt='bad bunny'
            src="https://www.elnuevodia.com/resizer/pkKuBVJZs2YTmqIihaN-2MHqnx4=/1024x0/filters:quality(75):format(jpeg):focal(667x730:677x720)/cloudfront-us-east-1.images.arcpublishing.com/gfrmedia/NM5MEM32ZZGXHC4B37C5F4CHQA.jpg" 
            width={192} height={250} className='rounded shadow-2xl mx-auto'/>
            <button className='p-3 text-2xl bg-spotify-green rounded-full text-spotify-gray absolute 
            right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out'>
               <RiPlayFill />
               </button>
        </div> 
        <div className='pl-2'>
            <h5 className='font-medium text-gray-100 mb-2'>Bad Bunny</h5>
            <p className='font-medium text-gray-400 text-sm w-[18ch]'>Un verano sin ti</p>
        </div>
        
     </a>
  )
}

export default Card5