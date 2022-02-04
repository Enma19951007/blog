// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    // {
    //   use: "@gridsome/source-filesystem", // 这个插件只是读取文件，如果读取md还需要额外的插件
    //   options: {
    //     typeName: "Post", // graphQL数据的名字
    //     path:'./content/blog/**/*.md' // 抓去哪些文件
    //   }
    // },
    {
      use: '@gridsome/source-strapi',
      options: {
        // apiURL: 'http://localhost:1337',
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag'], // 查询的数据 集合的数据
        // typeName: 'Strapi' // templates 中的集合名字 是 typeName + contentTypes的名字。不写默认就是Strapi
        singleTypes: ['general'], // 单一类型的数据
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    // Post: '/post/:id',
    StrapiPost: [ // 一定要写集合的名字
      {
        path:'/post/:id',
        component: './src/templates/Post.vue'
      }
    ],
    StrapiTag: [
      {
        path:'/tag/:id',
        component: './src/templates/Tag.vue'
      }
    ]
  }
}
