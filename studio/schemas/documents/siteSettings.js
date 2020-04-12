export default {
  title: 'Site Settings',
  name: 'siteSettings',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      title: 'Keywords',
      name: 'keywords',
      type: 'array',
      description: 'Add keywords that describes your blog.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      to: [{type: 'author'}]
    }
  ]
}
