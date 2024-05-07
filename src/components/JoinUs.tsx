import React from 'react'
import { inter } from '@/lib/fonts'
export default function JoinUs() {
  return (
    <div className=' h-[50vh] md:h-[70vh] w-full  flex flex-col justify-center items-center'>
         <div>
            <h1 className={`${inter.className} font-sans text-lg md:text-4xl text-gray-200 font-semibold text-center my-5`}>Join a thriving community</h1>
         </div>
           
            <div className='grid grid-cols-2  justify-center items-center space-y-5 w-3/4 row place-items-center '>
           <div className='flex flex-col items-center justify-center'>
             <h1 className=' text-3xl md:text-6xl font-extrabold'>3.4k+</h1>
              <p className=' md:font-medium uppercase text-xs text-center md:text-sm text-gray-400 my-2'>Active discord members</p>
           </div>
           <div className='flex flex-col items-center justify-center'>
             <h1 className='text-3xl md:text-6xl font-extrabold'>10+</h1>
              <p className='md:font-medium uppercase md:text-sm text-xs text-gray-400 my-2'>parachains</p>
           </div>
           <div className='flex flex-col items-center justify-center'>
             <h1 className='text-3xl md:text-6xl font-extrabold'>3.4k</h1>
              <p className='font-medium uppercase md:text-sm text-xs text-gray-400 my-2'>Telegram members</p>
           </div>
           <div className='flex flex-col items-center justify-center'>
             <h1 className='text-3xl md:text-6xl font-extrabold'>1.4k+</h1>
              <p className='font-medium uppercase md:text-sm text-xs text-gray-400 my-2'>events</p>
           </div>
           </div>
    </div>
  )
}
