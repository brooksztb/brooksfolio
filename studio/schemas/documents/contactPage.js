export default {
  title: 'Contact Page',
  name: 'contactPage',
  type: 'document',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'header'
    },
    {
      title: 'Information',
      name: 'information',
      type: 'bodyPortableText'
    },
    {
      title: 'ContactLinks',
      name: 'contactLinks',
      type: 'array',
      of: [
        {
          title: 'Links',
          name: 'links',
          type: 'contactLink'
        }
      ]
    }
  ]
}
