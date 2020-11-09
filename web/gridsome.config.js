// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')
const postcssConfig = require('./postcss.config')

const postcssPlugins = postcssConfig.plugins

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteName: clientConfig.siteInfo.title,
  metadata: {
    siteName: clientConfig.siteInfo.title,
    siteDescription: clientConfig.siteInfo.description
  },
  siteUrl: 'https://zacharybrooks.dev',
  titleTemplate: `%s - ${clientConfig.siteInfo.title}`,

  templates: {
    SanityPost: '/blog/:slug__current',
    SanityProject: '/projects/:slug__current'
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
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
        // Enable this if you want preview mode enabled
        overlayDrafts: !isProd,
        watchMode: !isProd
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true
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
