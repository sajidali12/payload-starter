import type { Block } from 'payload'

export const FaqBlock: Block = {
  slug: 'faqblock',
  interfaceName: 'FaqBlock',
  fields: [
    {
      name: 'faq',
      type: 'textarea',
      required: true,
      label: 'FAQ Section',
    },
  ],
}
