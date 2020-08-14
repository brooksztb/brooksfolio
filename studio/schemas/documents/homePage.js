export default {
  title: 'Home Page',
  name: 'homePage',
  type: 'document',
  fields: [
    {
      title: 'Intro Header',
      name: 'introHeader',
      type: 'string',
      description: 'Short text to say hi to the user'
    },
    {
      title: 'Intro Body',
      name: 'introBody',
      type: 'bodyPortableText'
    },
    {
      title: 'Main Image',
      name: 'mainImage',
      type: 'mainImage'
    },
    {
      title: 'Highlighted Blog Posts',
      name: 'highlightedBlogPosts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }]
        }
      ]
    },
    {
      title: 'Highlighted Projects',
      name: 'highlightedProjects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }]
        }
      ]
    }
  ]
}
