
import React from 'react';
import Link from 'next/link';
import Card from './Card';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from './Card6';

const ListAlbums = (props) => {
    const {title } = props;
  return (
    <div className='pb-8'>
         <div className='flex items-center justify-between mb-8'>
            <Link href="/" className='text-xl font-semibold text-gray-200 hover:underline'>{title}</Link>
            <a href="/" className='uppercase text-sm font-bold tracking-[2px] hover:underline'>See All</a>
         </div>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-7 '>
            <Card />
            <Card2 />
            <Card3 />
            <Card4 />
            <Card5 />
            <Card6 />
         </div>
     </div>
  )
}

export default ListAlbums