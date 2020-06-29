export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee3be0cb2863f51d3b7490e',
                  title: 'Sanity Studio',
                  name: 'brooksfolio-studio',
                  apiId: 'd012216e-87b2-42b2-b119-c9596ba041a5'
                },
                {
                  buildHookId: '5ee3be437e0d3bc2029f187a',
                  title: 'Blog Website',
                  name: 'brooksfolio',
                  apiId: 'fd432674-6c72-4d49-9f88-47179dd9047c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brooksztb/brooksfolio',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://zacharybrooks.dev', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
