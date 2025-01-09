import type { Block } from 'payload'

export const CustomHtmlBlock: Block = {
  slug: 'customhtml',
  interfaceName: 'CustomHtmlBlock',
  fields: [
    {
      name: 'htmlContent',
      type: 'textarea',
      required: true,
      label: 'HTML Content',
    },
  ],
}
