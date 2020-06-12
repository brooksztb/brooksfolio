export default {
  title: 'Contact Page',
  name: 'contactPage',
  type: 'document',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string'
    },
    {
      title: 'Information',
      name: 'information',
      type: 'bodyPortableText'
    },
    {
      title: 'Contact Links',
      name: 'contactLinks',
      type: 'array',
      of: [
        {
          type: 'contactLink'
        }
      ]
    }
  ]
}
