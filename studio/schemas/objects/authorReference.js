import MdPerson from 'react-icons/lib/md/person'

export default {
  title: 'Author reference',
  name: 'authorReference',
  type: 'object',
  icon: MdPerson,
  fields: [
    {
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'author'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'author.name',
      media: 'author.image.asset'
    }
  }
}
