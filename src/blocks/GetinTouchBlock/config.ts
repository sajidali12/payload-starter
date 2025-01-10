import type { Block } from 'payload'

export const GetinTouchBlock: Block = {
  slug: 'getintouch',
  interfaceName: 'GetinTouchBlock',
  fields: [
    {
      name: 'gettouch',
      type: 'textarea',
      required: true,
      label: 'Get in Touch',
    },
  ],
}
