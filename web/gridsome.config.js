// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})
const tailwindcss = require('tailwindcss')

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteName: clientConfig.siteInfo.title,
  metadata: {
    siteName: clientConfig.siteInfo.title,
    siteDescription: clientConfig.siteInfo.description
  },
  siteUrl: 'https://zacharybrooks.io',
  titleTemplate: `%s - ${clientConfig.siteInfo.title}`,

  templates: {
    SanityPost: '/:slug__current'
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss]
      }
    }
  },

  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        ...clientConfig.sanity,
        typeName: 'Sanity',
        token: process.env.SANITY_TOKEN,
        overlayDrafts: !isProd,
        watchMode: !isProd
      }
    }
    /* {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        route: '/:slug',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true
          }
        }
      },
      {

      }
    } */
  ]
}
