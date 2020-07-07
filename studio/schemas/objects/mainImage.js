import imageIcon from 'react-icons/lib/fa/image'

export default {
  title: 'Image',
  name: 'mainImage',
  type: 'image',
  options: {
    hotspot: true
  },
  icon: imageIcon,
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      title: 'Alternative text',
      name: 'alt',
      type: 'string',
      description: 'Important for SEO and accessiblity.',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
