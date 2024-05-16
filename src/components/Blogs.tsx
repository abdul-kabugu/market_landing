 "use client"
import React from 'react'
import { openLinkInNewTab } from '@/lib/utils'
import { BLOG_URL } from '@/constant'
export default function Blogs() {
  return (
    <button className='py-1 px-3 md:py-2 md:px-5 rounded-xl md:rounded-2xl bg-blue-600 hover:bg-blue-500 text-gray-100 hidden md:block'
      onClick={() =>  openLinkInNewTab(BLOG_URL)}
    >Open Blog</button>

  )
}
