import { format } from 'date-fns'

export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime'
    },
    {
      title: 'Main Image',
      name: 'mainImage',
      type: 'mainImage'
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'excerptPortableText',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    },
    {
      title: 'Body',
      name: 'body',
      type: 'bodyPortableText'
    },
    {
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ],
      description: 'Tools or languages used with this project.'
    }
  ],
  orderings: [
    {
      title: 'Publishing date new–>old',
      name: 'publishingDateAsc',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      title: 'Publishing date old->new',
      name: 'publishingDateDesc',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'image'
    },
    prepare({ title = 'No title', slug = {}, media }) {
      const path = `/${slug.current}/`
      return {
        title,
        media,
        subtitle: slug ? path : 'Missing slug'
      }
    }
  }
}
