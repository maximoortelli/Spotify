import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillHome, AiOutlinePlusSquare } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { RiFoldersLine, RiHeartFill } from 'react-icons/ri';

const Sidebar = () => {
  return (
    <div className={`bg-black fixed top-0 w-64 h-full p-6 pt-9 flex flex-col justify-between`}>
        <div>
            <div className='-mt-3 mb-[50px]'>
              <Image src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' 
              width={130} 
              height={130}
              alt='Spotify logo'/>
            </div>
               <nav>
                <ul className='flex flex-col gap-y-4 pl-2'>
                    <li>
                       <Link href="#" className='flex items-center gap-3 hover:text-gray-50 transitions-colors'>
                         <AiFillHome  className='text-2xl'/> Home
                       </Link>
                    </li>

                    <li>
                       <a href="https://open.spotify.com/search" target="_blank" className='flex items-center gap-4 hover:text-gray-50 transitions-colors'>
                         <BsSearch  className='text-xl'/> Search
                       </a>
                    </li>

                    <li className='mb-8'>
                       <Link href="#" className='flex items-center gap-4 hover:text-gray-50 transitions-colors'>
                         <RiFoldersLine  className='text-2xl '/> Your Library
                       </Link>
                    </li>

                    <li>
                       <a href="https://open.spotify.com/playlist/5zFO75SFmZtRLhB8ST9wOB" target='_blank' className='flex items-center gap-4 hover:text-gray-50 transitions-colors'>
                         <AiOutlinePlusSquare  className='text-2xl'/> Create playlist
                       </a>
                    </li>

                    <li>
                       <a href="https://open.spotify.com/collection/tracks" target='_blank' className='flex items-center gap-4 hover:text-gray-50 transitions-colors'>
                         <RiHeartFill  className='text-2xl'/> Your Likes
                       </a>
                    </li>
                    
                </ul>
               </nav>
        </div>

         <div>
           <nav>
             <ul className='flex flex-col gap-y-2 pl-2'>
                <li>
                   <a href="https://www.spotify.com/ar/legal/cookies-policy/" target='_blank' className='text-xs hover:underline'>Cookies</a>
                </li>
                <li>
                   <a href="https://www.spotify.com/ar/legal/privacy-policy/" target='_blank' className='text-xs hover:underline'>Privacy policy</a>
                </li>
             </ul>
           </nav>
         </div>
    </div>
  )
}

export default Sidebar