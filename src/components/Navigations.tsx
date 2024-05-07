"use client"
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { topBanv } from '@/constant'
import Link from 'next/link'
export default function Navigations() {
  return (
    <div>
        <NavigationMenu className=''>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className=' bg-black hover:bg-black text-gray-300 '>Our Products</NavigationMenuTrigger>
      <NavigationMenuContent className='p-1 bg-gray-950    '>
        <div className='w-72 '>
       {topBanv.map((item, i) => (
         <Link href={item.url} key={i}
         className='  '>
            <p className=' hover:bg-zinc-800 my-1 py-2 px-3 rounded-xl text-gray-100 capitalize font-semibold'>{item.name}</p>
         </Link>
       ))}
       </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

    </div>
  )
}
