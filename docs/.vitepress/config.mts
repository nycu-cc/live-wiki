import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Live-wiki (仮)",
  description: "Overseas concert ticketing guide.",
  lastUpdated: true, 
  head: [
    // logo需要更改
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://vitepress.dev/vitepress-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: 'https://vitepress.dev/vitepress-logo-mini.svg' }],
    ['meta', { name: 'theme-color', content: '#226699' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh-tw' }],
    // 需要修改網站名稱、說明及縮圖
    ['meta', { property: 'og:title', content: 'Live-wiki (仮)' }],
    ['meta', { property: 'og:description', content: 'Overseas concert ticketing guide.' }],
    ['meta', { property: 'og:site_name', content: 'canaria.cc' }],
    ['meta', { property: 'og:image', content: 'https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/VSCode/VSCode-Thick.png' }],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
    ['meta', { property: 'og:url', content: 'https://live.canaria.cc/' }],
    //['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': '' }]
  ],
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
          { text: '2. 你的地址', link: '/what-you-need-to-do/your-address' },
          { text: '3. 日本手機門號', link: '/what-you-need-to-do/japan-phone-number' },
          { text: '4. 日本信用卡', link: '/what-you-need-to-do/japan-credit-card' },
          { text: '5. 其他可能會用到的', link: '/what-you-need-to-do/others' }
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
          { text: 'ASOBI TICKET', link: '/ticketing-site/asobi-ticket' },
          { text: '7 ticket（セブンチケット）', link: '/ticketing-site/7-ticket' }
        ],
        activeMatch: "/ticketing-site/",
      },
      {
        text: "協助編輯",
        items: [
          { text: '如何開始協作', link: '/develop/1-start' },
          { text: '設定檔項目說明', link: '/develop/2-vitepress' },
          { text: '進階本地運行', link: '/develop/3-run-local' },
          { text: 'Markdown 基本知識', link: '/develop/4-example' },
          { text: 'Markdown 常見用法', link: '/develop/5-template' },
          { text: '本站編輯名單', link: '/about' },
        ],
        activeMatch: "/ticketing-site/",
      }
    ],

    sidebar: {
      "/develop/" : [
        {
          text: '協助編輯',
          items: [
            { text: '如何開始協作', link: '/develop/1-start' },
            { text: '設定檔項目說明', link: '/develop/2-vitepress' },
            { text: '進階本地運行', link: '/develop/3-run-local' },
            { text: 'Markdown 基本知識', link: '/develop/4-example' },
            { text: 'Markdown 常見用法', link: '/develop/5-template' },
          ]
        }
      ],
      "/first-time/" : [
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
      "/" : [
        {
          text: '一、抽票的準備事項',
          items: [
            { text: '1. 你的名字', link: '/what-you-need-to-do/your-name' },
            { text: '2. 你的地址', link: '/what-you-need-to-do/your-address' },
            { text: '3. 日本手機門號', link: '/what-you-need-to-do/japan-phone-number' },
            { text: '4. 日本信用卡', link: '/what-you-need-to-do/japan-credit-card' },
            { text: '5. 其他可能會用到的', link: '/what-you-need-to-do/others' }
          ]
        },
        {
          text: '二、售票網站相關',
          items: [
            { text: 'e+（イープラス）', link: '/ticketing-site/eplus' },
            { text: 'LAWSON TICKET（ローソンチケット）', link: '/ticketing-site/lawson-ticket' },
            { text: 'TICKET PIA（チケットぴあ）', link: '/ticketing-site/ticket-pia' },
            { text: 'Rakuten ticket（楽天チケット）', link: '/ticketing-site/rakuten-ticket' },
            { text: 'ASOBI TICKET', link: '/ticketing-site/asobi-ticket' },
            { text: '7 ticket（セブンチケット）', link: '/ticketing-site/7-ticket' }
          ]
        },
        {
          text: '常見問題',
          items: [
            { text: '抽選相關名詞', link: '/wiki/lottery' },
            { text: 'Live場地', link: '/wiki/dome' },
            { text: '怎麼打電話', link: '/wiki/how-to-make-a-call' },
            { text: '日本門號還可以做什麼？', link: '/wiki/jp-accounts' },
          ]
        }
      ],

    },

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
