

import Link from 'next/link'
import React from 'react'
import {PiTelegramLogo} from 'react-icons/pi'
import {RiTwitterXLine, RiDiscordLine} from 'react-icons/ri'
import Image from 'next/image'
import { openLinkInNewTab } from '@/lib/utils'
import LocaleSwitcher from './LocalSwitcher';
import logo from '../app/logo.jpg'
import { GOOGLE_FORM } from '@/constant'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Navigations from './Navigations'

export default function TopNavbar2() {
  return (
    <div className='w-full bg-gray-950 sticky top-0  z-20'>
    <div className='  border-b border-b-gray-800/30 flex justify-between items-center py-5 px-3 h-[65px]  max-w-6xl w-full  mx-auto'>
       <Link href={`/`}>
       <div className='flex items-center gap-0'>
        <img   src={logo.src} alt='' className='w-10 h-10' />
        <p className='font-bold lg:text-xl underline-offset-8  underline hidden md:block '>Link dots</p>
       </div>
       </Link>
      
        
          <div className='flex items-center space-x-2'>
       
   <Navigations   />
          {/*<LocaleSwitcher  />*/}
          <button className='py-1 px-3 md:py-2 md:px-5 rounded-xl md:rounded-2xl bg-blue-600 hover:bg-blue-500 text-gray-100 hidden md:block' >Create Quest</button>
          </div>

    </div>
    </div>
  )
}
