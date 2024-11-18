import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Live-wiki",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '一、抽票的準備事項',
        items: [
          { text: '1. 你的名字', link: '/what-you-need-to-do/your-name' },
          { text: '2. 台灣地址', link: '/what-you-need-to-do/taiwan-address' },
          { text: '3. 日本地址', link: '/what-you-need-to-do/japan-address' },
          { text: '4. 日本手機門號', link: '/what-you-need-to-do/japan-phone-number' },
          { text: '5. 台灣信用卡', link: '/what-you-need-to-do/taiwan-credit-card' }
        ]
      },
      {
        text: 'Examples2',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/canaria3406/live-wiki' },
      { icon: 'discord', link: 'https://discord.gg/QBwjpHcMyw' }
    ]
  }
})
