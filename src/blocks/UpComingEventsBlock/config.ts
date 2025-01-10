import type { Block } from 'payload'

export const UpComingEventsBlock: Block = {
  slug: 'upcomingevents',
  interfaceName: 'UpComingEventsBlock',
  fields: [
    {
      name: 'upcomingevents',
      type: 'textarea',
      required: true,
      label: 'Events Content',
    },
  ],
}
