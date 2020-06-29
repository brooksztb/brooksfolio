import { format } from 'date-fns'

export default {
  title: 'Blog Post',
  name: 'post',
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
      title: 'Published at',
      name: 'publishedAt',
      type: 'datetime',
      description: 'This can be used to schedule post for publishing'
    },
    {
      title: 'Main image',
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
      title: 'Authors',
      name: 'authors',
      type: 'array',
      of: [
        {
          type: 'authorReference'
        }
      ]
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
      ]
    },
    {
      title: 'Body',
      name: 'body',
      type: 'bodyPortableText'
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
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'No title', publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, 'MM/YYYY')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
