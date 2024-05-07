//@ts-nocheck
'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { inter } from '@/lib/fonts'
import Slider from 'react-infinite-logo-slider'
import { DISCOVER_URL, GOOGLE_FORM, ecosystems } from '@/constant'
import Image from 'next/image'
import { openLinkInNewTab } from '@/lib/utils'

type Props = {
    intro? : string
    title_1?: string
    title_2 ? : any
   
 }
export default function About({intro, title_2, title_1} : Props) {
  return (
    <div className='flex flex-col items-center justify-center my-1'>
          
          <div
          
           className='flex items-center justify-center flex-col'
         >
          <h1 className={`${inter.className} font-sans text-lg md:text-4xl text-gray-200 font-semibold text-center my-5`}>{intro}</h1>
           <div className='my-6 w-full max-w-[96vw] sm:max-w-[96vw] md:max-w-[96vw] xl:max-w-7xl mx-auto overflow-hidden'>
           <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
            
        >
           {/*} <Slider.Slide>
                <img src="https://pbs.twimg.com/profile_images/1379064847439175692/upOKBONH_400x400.jpg" alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://pbs.twimg.com/profile_images/1701876489048801280/sNthcwHe_400x400.png" alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://pbs.twimg.com/profile_images/1701876489048801280/sNthcwHe_400x400.png" alt="any3" className='w-36' />
  </Slider.Slide>*/}
    {ecosystems.map((item, i ) => (
      <div key={i}>
       <Slider.Slide >
         <div className='border py-2 px-4 rounded-3xl border-gray-500 '><p className='font-semibold text-gray-400 text-xl capitalize'>{item.name} </p></div>
       </Slider.Slide>
       </div>
    ))}
           
        </Slider>
           </div>


          <div className="my-12 w-full">
             <h1  className={`${inter.className} font-sans text-lg md:text-4xl text-gray-200 font-semibold text-center my-7`}>Scaling global adoption across chains</h1>
              <div className='w-full  flex flex-col lg:flex-row space-y-4 space-x-5'>
               <div className=' w-11/12 md:4/5 mx-auto lg:w-3/6 h-[60vh] lg:h-[80vh] bg-gray-800 rounded-xl p-3 flex flex-col items-center justify-center'>
                  <div>
                     <Image  src={`/img/users.svg`} width={200} height={200} alt='users'
                       className='w-28 h-28 md:w-52 md:h-52'
                     />
                  </div>
                   <div>
                     <h1 className={`${inter.className} font-sans text-lg md:text-3xl text-gray-200 font-extrabold  text-center my-3`}>For users</h1>
                      <p className={`${inter.className} text-gray-400 text-center`}>Our app provides a unified access point into every <br /> ecosystem and perpetual incentives for your activity.</p>
                   </div>
                    <div className='mt-7 flex space-x-2 w-full px-4 items-center justify-center'>
                       <button className='bg-blue-600 py-4 px-4 rounded-xl md:w-8/12' onClick={() => openLinkInNewTab(DISCOVER_URL)}>Open app</button>
                        <button className='bg-gray-700 hover:bg-gray-600 py-4 px-4 rounded-xl'>Learn more</button>
                    </div>

               </div>

               <div className='w-11/12 md:4/5 mx-auto lg:w-3/6 h-[60vh] lg:h-[80vh] bg-gray-800 rounded-xl p-3 flex flex-col items-center justify-center'>
    <div>
                     <Image  src={`/img/ecos.svg`} width={290} height={290} alt='users'
                       className='w-28 h-28 md:w-52 md:h-52'
                     />
                  </div>
                   <div>
                     <h1 className={`${inter.className} font-sans text-lg md:text-3xl text-gray-200 font-extrabold  text-center my-3`}>For ecosystems</h1>
                      <p className={`${inter.className} text-gray-400`}>Our app provides a unified access point into every <br /> ecosystem and perpetual incentives for your activity.</p>
                   </div>
                    <div className='mt-7 flex space-x-2 w-full px-4 items-center justify-center'>
                       <button className='bg-purple-500 py-4 px-4 rounded-xl md:w-8/12' onClick={() => openLinkInNewTab(GOOGLE_FORM)}>Create compaign</button>
                        <button className='bg-gray-700 hover:bg-gray-600 py-4 px-4 rounded-xl'>Learn more</button>
                    </div>
               </div>
               </div>
          </div>
        </div>
    </div>
  )
}


