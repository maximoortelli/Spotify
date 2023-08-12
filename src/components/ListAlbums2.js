import React from 'react';
import Link from 'next/link';
import Card7 from './Card7';
import Card8 from './Card8';
import Card9 from './Card9';
import Carda from './Carda';
import Cardb from './Cardb';
import Cardc from './Cardc';



const ListAlbums2 = (props) => {
    const {title } = props;
  return (
    <div className='pb-8'>
         <div className='flex items-center justify-between mb-8'>
            <Link href="/" className='text-xl font-semibold text-gray-200 hover:underline'>{title}</Link>
            <Link href="/" className='uppercase text-sm font-bold tracking-[2px] hover:underline'>See All</Link>
         </div>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-7 '>
            <Card7 />
            <Card8 />
            <Card9 />
            <Carda />
            <Cardb />
            <Cardc />
         </div>
     </div>
  )
}

export default ListAlbums2