import React from 'react'
import logo from '../app/logo.jpg'

export default function Footer() {
  return (
    <div className='w-full md:max-w-7xl mx-auto  flex justify-between p-4 py-8 md:py-6'>
      
         <div className=' items-center gap-0 hidden md:flex'>
        <img   src={logo.src} alt='' className='w-12 h-12' />
        <p className='font-bold text-xl underline-offset-8  underline  '>Link dots</p>
       
             
         </div>
          <div>
            <h1 className='font-semibold md:text-lg mb-2'>Community</h1>
             <ul>
                <li className='text-gray-400 text-sm my-2'>Twitter</li>
                <li className='text-gray-400 text-sm my-2'>Discor</li>
                <li className='text-gray-400 text-sm my-2'>Telegram</li>
             </ul>
          </div>
          <div>
            <h1 className='font-semibold md:text-lg mb-2'>Resources</h1>
             <ul>
                <li className='text-gray-400 text-sm my-2'>Documentation</li>
                <li className='text-gray-400 text-sm my-2'>Blog</li>
                <li className='text-gray-400 text-sm my-2'>Analytics</li>
             </ul>
          </div>
          <div>
            <h1 className='font-semibold md:text-lg mb-2'>Ecosystem</h1>
             <ul>
                <li className='text-gray-400 text-sm my-2'>Carees</li>
                <li className='text-gray-400 text-sm my-2'>Terms of service</li>
                <li className='text-gray-400 text-sm my-2'>Privacy policy</li>
             </ul>
          </div>
    </div>
  )
}
