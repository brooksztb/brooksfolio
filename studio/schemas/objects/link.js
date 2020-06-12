export default {
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
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
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
