import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Live-wiki",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/wiki/markdown-examples' }
    ],

    sidebar: [
      {
        text: '一、抽票的準備事項',
        items: [
          { text: '1. 你的名字', link: '/what-you-need-to-do/your-name' },
          { text: '2. 台灣地址', link: '/what-you-need-to-do/taiwan-address' },
          { text: '3. 日本地址', link: '/what-you-need-to-do/japan-address' },
          { text: '4. 日本手機門號', link: '/what-you-need-to-do/japan-phone-number' },
          { text: '5. 台灣信用卡', link: '/what-you-need-to-do/taiwan-credit-card' },
          { text: '6. 日本信用卡', link: '/what-you-need-to-do/japan-credit-card' },
          { text: '7. 日本手機帳號', link: '/what-you-need-to-do/japan-phone-account' },
          { text: '8. 其他', link: '/what-you-need-to-do/others' }
        ]
      },
      {
        text: '二、抽票網站相關',
        items: [
          { text: 'e+（イープラス）', link: '/ticketing-site/eplus' },
          { text: 'LAWSON TICKET（ローソンチケット）', link: '/ticketing-site/lawson-ticket' },
          { text: 'TICKET PIA（チケットぴあ）', link: '/ticketing-site/ticket-pia' },
          { text: 'rakuten ticket（楽天チケット）', link: '/ticketing-site/rakuten-ticket' },
          { text: 'ASOBI TICKET', link: '/ticketing-site/asobi-ticket' }
        ]
      },
      {
        text: '三、常見問題',
        items: [
          { text: '抽選相關名詞', link: '/wiki/lottery' },
          { text: 'Live場地', link: '/wiki/dome' }
        ]
      },
      {
        text: '附錄：第一次出國？',
        items: [
          { text: '1. 護照申請', link: '/first-time/passport' },
          { text: '2. 機票購買', link: '/first-time/flight-ticket' },
          { text: '3. 其他準備事項', link: '/first-time/others' },
          { text: '4. 行李檢核', link: '/first-time/baggage' },
        ]
      },
      {
        text: 'Examples2',
        items: [
          { text: 'Markdown Examples', link: '/wiki/markdown-examples' },
          { text: 'Runtime API Examples', link: '/wiki/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/canaria3406/live-wiki' },
      { icon: 'discord', link: 'https://discord.gg/QBwjpHcMyw' }
    ]
  }
})
