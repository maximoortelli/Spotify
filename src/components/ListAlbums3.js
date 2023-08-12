import React from 'react';
import Link from 'next/link';
import Cardd from './cardd';
import Carde from './Carde';
import Cardf from './Cardf';
import Cardg from './Cardg';
import Cardh from './Cardh';
import Cardi from './Cardi';

const ListAlbums3 = (props) => {
    const {title } = props;
  return (
    <div className='pb-8'>
         <div className='flex items-center justify-between mb-8'>
            <Link href="/" className='text-xl font-semibold text-gray-200 hover:underline'>{title}</Link>
            <a href="" className='uppercase text-sm font-bold tracking-[2px] hover:underline'>See All</a>
         </div>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-7 '>
            <Cardd />
            <Carde />
            <Cardf />
            <Cardg />
            <Cardh />
            <Cardi />
         </div>
     </div>
  )
}

export default ListAlbums3