'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { PhoneCall, SearchIcon } from 'lucide-react'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="relative z-20 bg-white py-2" {...(theme ? { 'data-theme': theme } : {})}>
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Logo loading="eager" priority="high" className="invert dark:invert-0" />
          </Link>
          <HeaderNav data={data} />
          <div className="h-[40px] p-2 hidden xl:flex border text-green-700 border-green-700 rounded-md text-center hover:scale-105 justify-center items-center transition-all duration-300 ease-in-out">
            <Link href="" className="flex items-center gap-2">
              <PhoneCall className="h-5 w-5 text-green-700" />
              <span>Contact Us</span>
            </Link>
          </div>
          <div className="hidden xl:flex items-center space-x-3 relative">
            <div className="relative w-full">
              {/* Search icon */}
              <SearchIcon className="w-5 text-primary absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
              <input
                type="text"
                className="p-2 pl-10 pr-16 border border-gray-300 rounded-md bg-green-700 text-white placeholder:text-white"
                placeholder="Enter here"
              />
            </div>
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 px-4 py-2 rounded-md transition-all duration-300">
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
