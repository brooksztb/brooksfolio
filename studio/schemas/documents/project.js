import {format} from 'date-fns'

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
      title: 'Published Date',
      name: 'publishedAt',
      type: 'datetime'
    },
    {
      title: 'Image',
      name: 'image',
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
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      },
      description: 'Tools or languages used with this project.'
    }
  ],
  orderings: [
    {
      title: 'Date new–>old',
      name: 'dateAsc',
      by: [
        {
          field: 'date',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      title: 'Date old->new',
      name: 'dateDesc',
      by: [
        {
          field: 'date',
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
      media: 'image'
    },
    prepare ({title = 'No title', date, slug = {}, media}) {
      const dateSegment = format(date, 'MM/YYYY')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: date ? path : 'Missing publishing date'
      }
    }
  }
}
