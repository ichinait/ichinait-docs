import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  // 此处在首页显示大标题
  title: '文档中心',
  // 显示描述
  description: ' ',

  theme: defaultTheme({
    logo: 'http://www.ichinait.com/images/logo.png',
    colorMode: 'dark',
    smoothScroll: true,
    navbar: ['/', '/rental/',
      // '/maas/'
    ],
    // 两种不同风格的侧边栏
    sidebar: {
      // 租赁系统
      '/rental/': [
        "",
        'overview',
        'process',
        'design',
        'qa',
        {
          text: '用户手册',
          sidebarDepth: 5,
          collapsible: true,
          children:[
            '/rental/manual/permission.md',
            {
              text: "用户管理",
              link: "/rental/manual/user.md"
            }
          ]
        }


      ],

      // 网约车系统
      '/maas/': [
        'overview',
        '/rental/manual/README.md',
      ]
    }

  }),

  bundler: viteBundler(),
})
