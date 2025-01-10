import type { Block } from 'payload'

export const FriendsCornerBlock: Block = {
  slug: 'friendscorner',
  interfaceName: 'FriendsCornerBlock',
  fields: [
    {
      name: 'frinedscorner',
      type: 'textarea',
      required: true,
      label: 'Frineds Corner Content',
    },
  ],
}
