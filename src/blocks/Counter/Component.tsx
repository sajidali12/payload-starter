import React from 'react'

import type { CountersBlock as CountProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

export const CountersBlock: React.FC<CountProps> = ({ links, title, richText }) => {
  return (
    <div
      className="md:h-72 flex relative mt-20"
      style={{
        backgroundImage: 'url(/number-load-image.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute w-full h-2/4 top-[70px] bg-[#1C274C] opacity-70"></div>
      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center mx-auto gap-6 md:gap-24 text-white">
        <div className="relative flex flex-col items-center">
          <p className="text-5xl font-bold">60+</p>
          <p className="mt-4">Lincoln Corners</p>
        </div>
        <div className="relative flex flex-col items-center">
          <p className="text-5xl font-bold">3550+</p>
          <p className="mt-4">Events Conducted</p>
        </div>
        <div className="relative flex flex-col items-center">
          <p className="text-5xl font-bold">4550+</p>
          <p className="mt-4">Students or users Reached</p>
        </div>
        <div className="relative flex flex-col items-center">
          <p className="text-5xl font-bold">1250+</p>
          <p className="mt-4">Educational resources available</p>
        </div>
      </div>
    </div>
  )
}
