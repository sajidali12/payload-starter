import type { Block } from 'payload'

export const LearnEnglishBlock: Block = {
  slug: 'learninglish',
  interfaceName: 'LearnEnglishBlock',
  fields: [
    {
      name: 'upcomingevents',
      type: 'textarea',
      required: true,
      label: 'Learn English Content',
    },
  ],
}
