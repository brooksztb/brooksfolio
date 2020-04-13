import {array, string} from 'prop-types'

export default {
  title: 'About Page',
  name: 'aboutPage',
  type: 'document',
  fields: [
    {
      title: 'Main Image',
      name: 'mainImage',
      type: 'mainImage'
    },
    {
      title: 'Biography',
      name: 'Biography',
      type: 'bodyPortableText'
    },
    {
      title: 'Work History',
      name: 'workHistory',
      type: 'array',
      of: [
        {
          title: 'Position',
          name: 'position',
          type: 'position'
        }
      ]
    }
  ]
}
