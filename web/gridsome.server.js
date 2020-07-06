// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const clientConfig = require('./client-config')
const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: clientConfig.sanity.projectId,
  dataset: clientConfig.sanity.dataset,
  useCdn: true // `false` if you want to ensure fresh data
})
module.exports = function(api) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
    store.addMetadata('sanityOptions', clientConfig.sanity)
  })
  api.createPages(async ({ createPage, graphql }) => {
    const { data } = await graphql(`
      {
        allSanityCategory {
          edges {
            node {
              slug {
                current
              }
              id
            }
          }
        }
      }
    `)
    // If there are any errors in the query, cancel the build and tell us
    if (data.errors) throw data.errors

    // Let‘s gracefully handle if allSanityCatgogy is null
    const categoryEdges = (data.allSanityCategory || {}).edges || []

    categoryEdges
      // Loop through the category nodes, but don't return anything
      .forEach(({ node }) => {
        // Desctructure the id and slug fields for each category
        // const id = node.id
        // const slug = node.slug
        const { id, slug = {} } = node
        // If there isn't a slug, we want to do nothing
        if (!slug) return

        // Create the page using the URL path and the template file, and pass down the id
        // that we can use to query for the right category in the template file
        createPage({
          path: `/categories/${slug.current}`,
          component: './src/templates/Category.vue',
          context: { id }
        })
      })
  })

  //<!-- This is a temporary solution to create a belongs to relationship until the proper fix for the
  // gridsome-sanity-source plugin has been updated to properly fix the belongsTo query
  // Create one or many types for any content referenced by a SanityCategory and create a new type
  // to contain the GROQ queried content-->
  api.loadSource(({ addSchemaTypes }) => {
    addSchemaTypes(`
    type CategoryPost implements Node @infer {
      id: ID!
      title: String
      publishedAt: Date
      mainImage: SanityMainImage
      _rawBody: JSON
      _rawExcerpt: JSON
      path: String
      slug: SanitySlug
    }
    type CategoryProject implements Node @infer {
      id: ID!
      title: String
      publishedAt: Date
      mainImage: SanityMainImage
      _rawExcerpt: JSON
      path: String
      slug: SanitySlug
    }
  `)
  })
  api.loadSource(({ addSchemaResolvers }) => {
    addSchemaResolvers({
      SanityCategory: {
        posts: {
          type: ['CategoryPost'],
          async resolve(obj) {
            const posts = []
            const categoriesQuery =
              '*[_type == "category" && _id == $categoryID] {"posts": *[_type == "post" && references($categoryID)]}'
            const categoriesParams = { categoryID: obj._id }
            await client.fetch(categoriesQuery, categoriesParams).then(category => {
              category.forEach(categoryPosts => {
                categoryPosts.posts.forEach(post => {
                  //Dynamically set the variables that are created by gridsome
                  post['id'] = post._id
                  post['_rawBody'] = post.body
                  post['_rawExcerpt'] = post.excerpt
                  post['path'] = `/blog/${post.slug.current}`
                  posts.push(post)
                })
              })
            })
            return posts
          }
        },
        projects: {
          type: ['CategoryProject'],
          async resolve(obj) {
            const projects = []
            const categoriesQuery =
              '*[_type == "category" && _id == $categoryID] {"projects": *[_type == "project" && references($categoryID)]}'
            const categoriesParams = { categoryID: obj._id }
            await client.fetch(categoriesQuery, categoriesParams).then(category => {
              category.forEach(categoryProjects => {
                categoryProjects.projects.forEach(project => {
                  //Dynamically set the variables that are created by gridsome
                  project['id'] = project._id
                  project['_rawExcerpt'] = project.excerpt
                  project['path'] = `/projects/${project.slug.current}`
                  projects.push(project)
                })
              })
            })
            return projects
          }
        }
      }
    })
  })
}
