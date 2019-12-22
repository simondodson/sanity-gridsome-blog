export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5dff41fed2bde56d6bdc6420',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-duwybsdx',
                  apiId: '11b63dac-0b9b-4b29-853f-c6ed4153d581'
                },
                {
                  buildHookId: '5dff41fee9ce848bbb2ae23f',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-vkxuxbq1',
                  apiId: 'b6350a17-9b47-4d38-8656-abecc3eb8cf6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simondodson/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-vkxuxbq1.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
