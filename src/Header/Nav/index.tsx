import React from 'react'
import { CMSLink } from '@/components/Link'
import type { Header } from '@/payload-types'

export const HeaderNav: React.FC<{ data: Header; className?: string }> = ({ data, className }) => {
  const navItems = data?.navItems || []
  const currentPath = window.location.pathname
  return (
    <nav
      className={`flex flex-col items-start md:flex-row gap-3 md:items-center md:ml-8 ${className || ''}`}
    >
      {navItems.map((navItem, i) => {
        const { link, dropDownMenu = [] } = navItem
        const hasDropdown = dropDownMenu!.length > 0
        const isActive = currentPath === link.url

        return (
          <div key={navItem.id || i} className="relative group">
            {/* Main Link */}
            <CMSLink
              {...link}
              appearance="link"
              className={`text-gray-700 ml-4 bg-[#FAFAFA] p-3 ${isActive ? 'border-b-2 border-green-700 text-white' : ''}`}
            />

            {/* Dropdown Menu */}
            {hasDropdown && (
              <div className="absolute left-0 top-full mt-2 bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-200">
                {dropDownMenu?.map((dropdownLink, subIndex) => (
                  <CMSLink
                    key={dropdownLink.id || subIndex}
                    {...dropdownLink.link}
                    appearance="link"
                    className="block p-2 text-gray-700 hover:bg-gray-100"
                  />
                ))}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}
