import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()
  console.log('Footer', footerData)

  const columns = footerData?.columns || [] // Use columns instead of navItems

  return (
    <footer className="mt-auto border-t border-border bg-[#072c49] dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <div className="flex flex-col md:flex-row gap-8">
            {' '}
            {/* Adjusted container to hold columns */}
            {columns.map((column, columnIndex) => {
              return (
                <div key={columnIndex} className="flex flex-col gap-4">
                  {' '}
                  {/* Create a column for each */}
                  <h3 className="font-semibold text-lg">{column?.columnTitle}</h3>{' '}
                  {/* Display column title */}
                  <nav className="flex flex-col gap-2">
                    {column?.navItems?.map(({ link }, i) => {
                      return <CMSLink className="text-white" key={i} {...link} />
                    })}
                  </nav>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
