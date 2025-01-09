import React from 'react'

import type { CountersBlock as CountProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

export const CountersBlock: React.FC<CountProps> = ({ links, title, richText }) => {
  return (
    <div className="bg-card">
      <div className="container">
        <div className="">
          <h2>{title}</h2>
          {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
        </div>
        <div className="flex flex-col gap-8">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />
          })}
        </div>
      </div>
    </div>
  )
}
