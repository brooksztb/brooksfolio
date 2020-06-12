export default {
  title: 'ContactLink',
  name: 'contactLink',
  type: 'object',
  fields: [
    {
      name: 'icon',
      type: 'icon'
    },
    {
      name: 'link',
      type: 'link'
    }
  ],
  preview: {
    select: {
      url: 'link.href',
      title: 'link.title'
    }
  }
}
