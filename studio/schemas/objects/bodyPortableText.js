import internalLinkIcon from 'react-icons/lib/fa/paperclip'
import externalLinkIcon from 'react-icons/lib/fa/external-link-square'

export default {
  title: 'Post body',
  name: 'bodyPortableText',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Number', value: 'number' }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' }],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'Link',
            name: 'link',
            type: 'object',
            blockEditor: {
              icon: externalLinkIcon
            },
            fields: [
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
              }
            ]
          },
          {
            title: 'Internal link',
            name: 'internalLink',
            type: 'object',
            blockEditor: {
              icon: internalLinkIcon
            },
            fields: [
              {
                title: 'Reference',
                name: 'reference',
                type: 'reference',
                weak: 'true',
                to: [
                  { type: 'post' },
                  { type: 'project' }
                  // other types you may want to link to
                ]
              }
            ]
          }
        ]
      },
      of: [{ type: 'authorReference' }]
    },
    {
      title: 'Code Block',
      name: 'codeBlock',
      type: 'code',
      options: {
        theme: 'monokai',
        withFilename: true
      }
    },
    {
      type: 'mainImage',
      options: { hotspot: true }
    },
    {
      type: 'youtube'
    }
  ]
}
