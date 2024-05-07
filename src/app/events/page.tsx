import React from 'react'
import { inter } from '@/lib/fonts'
import TopNavbar from '@/components/TopNavbar'
import EventsPage from '@/components/events/EventsPage'
import TopNavbar2 from '@/components/TopNavbar2'
export default function page() {
  return (
    <div className={`flex min-h-screen flex-col   bg-[url("/img/star.svg")] bg-gray-950 ${inter.className} text-gray-300`}>
      <TopNavbar2  />
   <EventsPage  />
    </div>
  )
}
