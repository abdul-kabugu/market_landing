'use client'

import Image from 'next/image';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'
import { Poppins } from 'next/font/google';
import { CiStar } from "react-icons/ci";
import {useTranslations} from 'next-intl';
import NextIntlClientProvider from 'next-intl';
import { inter } from '@/lib/fonts';
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { openLinkInNewTab } from '@/lib/utils';
import { DISCOVER_URL } from '@/constant';
import { GOOGLE_FORM } from '@/constant';
import { TWITTER_URL } from '@/constant';
 type Props = {
    title? : string
    subtitle?: string
    joinBtn ? : any
    partenerBtn ? : any
 }
export default function Hero({title, subtitle, joinBtn, partenerBtn} : Props) {
  return (

    <div className=' h-[60vh] lg:h-screen    flex items-center w-full justify-center '>
         <div
         
         >
            <div className='xs:min-h[30vh] md:min-h-[40vh] flex flex-col items-center justify-center bg-yellow-400  w-full'>
       {/*} <h1 className='xs:text-4xl xs:leading-snug sm:text-5xl sm:leading-snug md:text-6xl md:leading-snug lg:text-7xl lg:leading-snug text-center font-extrabold text-gray-300'>
            A video sharing platform < br />
             Empowering    

             <TypeAnimation
               sequence={[
                 "Creators",
                 2000,
                 "Users",
                 2000
               ]}
               wrapper='span'
               repeat={Infinity}
               className='ml-3 text-rose-500'
             />
        </h1>*/}
        
         <div className='absolute  w-full bg-black/90 filter drop-shadow-lg flex items-center justify-center flex-col'>
         <h1 className={` text-4xl text-center md:text-5xl font-medium my-5 ${inter.className} font-sans text-white`}>{title}</h1>
         <p className={`${inter.className} font-sans md:font-semibold text-lg text-gray-400 text-center`}>{subtitle}</p>
           <div className='mt-8 '>
                <div className='flex items-center space-x-5'>
                     <div 
                     className='flex gap-2 items-center bg-blue-600 text-white text-sm md:py-4 md:px-6 py-2 px-4  rounded-xl cursor-pointer '
                       onClick={() =>  openLinkInNewTab(DISCOVER_URL)}
                     >
                     
                      <p className={`${inter.className} font-sans`}>{joinBtn}</p>
                     </div>
                     <div className='flex gap-2 items-center bg-gray-700 text-sm text-gray-200 md:py-4 md:px-6 py-2 px-4  rounded-xl cursor-pointer '
                      onClick={() => openLinkInNewTab(GOOGLE_FORM)}
                     >
                   
                      <p className={`${inter.className} font-sans`}>{partenerBtn}</p>
                     </div>
                </div>
           </div>
           <div className='my-14 flex items-center space-x-3 text-gray-400'>
              <p className='text-sm font-medium'>SCROLL TO EXPLORE</p>
              <HiOutlineChevronDoubleDown className='w-5 h-5 animate-bounce' />
           </div>
           </div>
        </div>
      {/*}  <div className='mt-5 px-4'>
             <Image
    src={`https://pbs.twimg.com/profile_images/1637269369658171392/CHS2SlUh_400x400.jpg`}
  width={1200}
  height={800}
  alt='zenvid'
  className=''
  loading='lazy'
/>
            </div>*/}
        </div>
        </div>
   
  )
}
