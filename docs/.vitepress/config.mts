import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Live-wiki (仮)",
  description: "Overseas concert ticketing guide.",
  lastUpdated: true, 
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: false,
    // logo需要更改
    logo: 'https://vitepress.dev/vitepress-logo-mini.svg',

    nav: [
      { text: '首頁', link: '/' },
      {
        text: "抽票的準備事項",
        items: [
          { text: '1. 你的名字', link: '/what-you-need-to-do/your-name' },
          { text: '2. 台灣地址', link: '/what-you-need-to-do/taiwan-address' },
          { text: '3. 日本地址', link: '/what-you-need-to-do/japan-address' },
          { text: '4. 日本手機門號', link: '/what-you-need-to-do/japan-phone-number' },
          { text: '5. 台灣信用卡', link: '/what-you-need-to-do/taiwan-credit-card' },
          { text: '6. 日本信用卡', link: '/what-you-need-to-do/japan-credit-card' },
          { text: '7. 日本手機帳號', link: '/what-you-need-to-do/japan-phone-account' },
          { text: '8. 其他', link: '/what-you-need-to-do/others' }
        ],
        activeMatch: "/what-you-need-to-do/",
      },
      {
        text: "常見售票網站",
        items: [
          { text: 'e+（イープラス）', link: '/ticketing-site/eplus' },
          { text: 'LAWSON TICKET（ローソンチケット）', link: '/ticketing-site/lawson-ticket' },
          { text: 'TICKET PIA（チケットぴあ）', link: '/ticketing-site/ticket-pia' },
          { text: 'Rakuten ticket（楽天チケット）', link: '/ticketing-site/rakuten-ticket' },
          { text: 'ASOBI TICKET', link: '/ticketing-site/asobi-ticket' }
        ],
        activeMatch: "/ticketing-site/",
      },
      {
        text: "協助編輯",
        items: [
          { text: 'Markdown Examples', link: '/wiki/markdown-examples' },
          { text: 'Runtime API Examples', link: '/wiki/api-examples' },
          { text: '編輯名單', link: '/about' },
        ],
        activeMatch: "/ticketing-site/",
      }
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
        text: '二、售票網站相關',
        items: [
          { text: 'e+（イープラス）', link: '/ticketing-site/eplus' },
          { text: 'LAWSON TICKET（ローソンチケット）', link: '/ticketing-site/lawson-ticket' },
          { text: 'TICKET PIA（チケットぴあ）', link: '/ticketing-site/ticket-pia' },
          { text: 'Rakuten ticket（楽天チケット）', link: '/ticketing-site/rakuten-ticket' },
          { text: 'ASOBI TICKET', link: '/ticketing-site/asobi-ticket' }
        ]
      },
      {
        text: '三、常見問題',
        items: [
          { text: '抽選相關名詞', link: '/wiki/lottery' },
          { text: 'Live場地', link: '/wiki/dome' },
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
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/canaria3406/live-wiki' },
      { icon: 'discord', link: 'https://discord.gg/QBwjpHcMyw' }
    ],

    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'canaria © 2024'
    },

    editLink: {
      pattern: 'https://github.com/canaria3406/live-wiki/tree/main/docs/:path',
      text: '在 GitHub 上編輯此頁面'
    },

    lastUpdated: {
      text: '最後更新',
      formatOptions: {
        dateStyle: 'short',
      }
    }
    
  }
})
