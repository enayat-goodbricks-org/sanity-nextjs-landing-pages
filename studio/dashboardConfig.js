export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '600a27e84f4dcd2ccc1edc20',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qe13dvr4',
                  apiId: '06bbaa92-7272-47df-81a1-c29e5a6ae50b'
                },
                {
                  buildHookId: '600a27e8f15c30238228f425',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dm3irjzp',
                  apiId: '786b0245-fc99-4114-aad1-903313d7763a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/enayat-goodbricks-org/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dm3irjzp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
