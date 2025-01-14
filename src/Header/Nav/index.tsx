'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
// import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType; className?: string }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex flex-col items-start md:flex-row gap-3 md:items-center md:ml-8">
      {navItems.map(({ link }, i) => {
        return (
          <CMSLink
            key={i}
            {...link}
            appearance="link"
            className="text-gray-700 ml-4 bg-[#FAFAFA] p-3"
          />
        )
      })}
      <Link href="/search">
        <span className="sr-only">Search</span>
        {/* <SearchIcon className="w-5 text-primary" /> */}
      </Link>
    </nav>
  )
}
