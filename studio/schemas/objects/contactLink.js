import { string } from 'prop-types'

export default {
  title: 'ContactLink',
  name: 'contactLink',
  type: 'object',
  fields: [
    {
      title: 'Icon',
      name: 'icon',
      type: 'object',
      fields: [
        {
          title: 'Library',
          name: 'library',
          type: 'string',
          description: 'The name of the library the icon is from'
        },
        {
          title: 'name',
          name: 'name',
          type: 'string',
          description: 'The name of the icon from a library'
        }
      ]
    },
    {
      title: 'Link',
      name: 'link',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string'
        },
        {
          title: 'URL',
          name: 'href',
          type: 'url'
        },
        {
          title: 'Open in a new tab',
          name: 'blank',
          type: 'boolean'
        },
        {
          title: 'urlText',
          name: 'urlText',
          type: 'string'
        }
      ]
    }
  ]
}
