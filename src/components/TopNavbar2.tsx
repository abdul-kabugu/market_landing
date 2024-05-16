

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
import Blogs from './Blogs'

export default function TopNavbar2() {
  return (
    <div className='w-full bg-gray-950 sticky top-0  z-20'>
    <div className='  border-b border-b-gray-800/30 flex justify-between items-center py-5 px-3 h-[65px]  max-w-6xl w-full  mx-auto'>
    <Link href={`/`}>
       <div className='flex items-center gap-0'>
        <img   src={`/img/kom.jpg`} alt='' className='w-10 h-10 rounded-full object-cover ' />
        <p className='font-bold  underline-offset-8  underline  hidden md:block uppercase '>web3 dao</p>
       </div>
       </Link>
      
        
          <div className='flex items-center space-x-2'>
       
   <Navigations   />
          {/*<LocaleSwitcher  />*/}
<Blogs  />          </div>

    </div>
    </div>
  )
}
