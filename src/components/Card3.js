import React from 'react'
import Image from 'next/image';
import { RiPlayFill } from 'react-icons/ri';

const Card3 = () => {
  return (
    <a href="https://open.spotify.com/intl-es/album/4yP0hdKOZPNshxUOjY0cZj?si=8snAMDXmTnWyPw_sskpHCA" target="_blank" className='bg-spotify-lightgray rounded-lg p-4 hover:bg-spotify-lightgrayHover transition-all group'>
        <div className='mb-4 relative'>
            <Image 
            alt='the weeknd'
            src="https://img.europapress.es/fotoweb/fotonoticia_20200320173804_1200.jpg" 
            width={200} height={2500} className='rounded shadow-2xl mx-auto'/>
            <button className='p-3 text-2xl bg-spotify-green rounded-full text-spotify-gray absolute 
            right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out'>
               <RiPlayFill />
               </button>
        </div> 
        <div className='pl-2'>
            <h5 className='font-medium text-gray-100 mb-2'>The Weeknd</h5>
            <p className='font-medium text-gray-400 text-sm w-[18ch]'>After Hours</p>
        </div>
     </a>
  )
}

export default Card3