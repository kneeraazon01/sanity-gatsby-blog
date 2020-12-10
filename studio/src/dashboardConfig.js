export default {
  widgets: [
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
                  buildHookId: '5fd208d8c8f500eba78d4b30',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-da19ypvi',
                  apiId: '9459aaaa-7c40-49ca-a714-4a5ad4946428'
                },
                {
                  buildHookId: '5fd208d81be6a8f019fc49ee',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zjwmpk81',
                  apiId: '51a7b635-b8a3-4583-9b78-da367a94e8cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kneeraazon01/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zjwmpk81.netlify.app', category: 'apps' }
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
