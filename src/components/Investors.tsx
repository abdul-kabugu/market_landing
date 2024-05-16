import React from 'react'
import { inter } from '@/lib/fonts'
import { investors } from '@/constant'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'
export default function Investors() {
  return (
    <div className='w-full px-3 '>
  <h1 className={` text-4xl text-start   md:text-5xl font-medium my-6 ${inter.className} font-sans text-white`}>Backed By The Best</h1>
  <div className='grid  grid-cols-1 sm:grid-cols-2 space-y-4 md:grid-cols-3 lg:grid-cols-4 content-center place-items-center place-content-center '>
  {investors.map((items, i) =>  (
    <div key={i} className=' border border-gray-700 w-11/12 mx-auto md:w-[270px] h-[170px] rounded-xl flex space-y-2 flex-col items-center justify-center'>
    <Image  src={items.logo} width={100} height={100} alt='logo'
       className='rounded-full'
    />
    <p className='capitalize font-semibold'>{items.name}</p>
    
     </div>
  ))}
  </div>
    </div>
  )
}
