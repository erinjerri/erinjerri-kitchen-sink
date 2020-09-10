export default {
  widgets: [
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
                  buildHookId: '5f5aa631ba6217270d834257',
                  title: 'Sanity Studio',
                  name: 'erinjerri-kitchen-sink-studio',
                  apiId: 'd210ea4a-b9e3-4442-8b9d-543102b4e9b0'
                },
                {
                  buildHookId: '5f5aa631083bb8284fdce8ec',
                  title: 'Blog Website',
                  name: 'erinjerri-kitchen-sink',
                  apiId: '716de5f3-ff1f-4f24-88de-d54c11c8eb00'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/erinjerri-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://erinjerri-kitchen-sink.netlify.app', category: 'apps'}
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
