import React from 'react'
import { inter } from '@/lib/fonts'
import { investors } from '@/constant'
import { AspectRatio } from './ui/aspect-ratio'
export default function Investors() {
  return (
    <div className='w-full px-3 '>
  <h1 className={` text-4xl text-start   md:text-5xl font-medium my-6 ${inter.className} font-sans text-white`}>Backed By The Best</h1>
  <div className='grid  grid-cols-1 sm:grid-cols-2 space-y-4 md:grid-cols-3 lg:grid-cols-4 content-center place-items-center place-content-center '>
  {investors.map((items, i) =>  (
    <div key={i} className=' border border-gray-700 w-11/12 mx-auto md:w-[270px] h-[170px] rounded-xl flex items-center justify-center'>
     
    <p>{items.name}</p>
    
     </div>
  ))}
  </div>
    </div>
  )
}
