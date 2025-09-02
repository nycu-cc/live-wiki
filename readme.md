<h1 align="center">
    <img width="120" height="120" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f4d6.svg" alt=""><br>
    live-wiki
</h1>

<p align="center">
    <img src="https://img.shields.io/github/license/nycu-cc/live-wiki?style=flat-square">
    <img src="https://img.shields.io/github/stars/nycu-cc/live-wiki?style=flat-square">
</p>

仍在重新建構中

好想到日本看LIVE！好想參加現地活動！  
你是否曾經有過這種念頭，但不知道該從何準備呢？在這裡我們為你準備了所有抽選所需要的準備事項、抽選流程、付款方式、取票流程及其他需要注意的事項，希望能幫助你順利抽到並參加現地活動。

## 開發

請先安裝 [git](https://git-scm.com/) 及 [node.js](https://nodejs.org/zh-tw) 環境，node版本建議使用v20或v22等LTS版本。

完成環境安裝後執行以下指令

```sh
cd < 自訂資料夾位置，如 C:\Users\Public\Downloads >
git clone https://github.com/nycu-cc/live-wiki.git
cd live-wiki
npm install
npm run dev
```

順利的話，即可在 `localhost:5173` 看到網站，進行編輯。

往後執行只需 `npm run dev`

## 檔案結構

本專案的檔案結構如下：

```
.
├── docs
│         ├── .vitepress
│         │         ├── theme
│         │         └── config.mts
│         ├── first-time
│         │
│         ├── public
│         │         ├── json
│         │         └── pic
│         ├── ticketing-site
│         │
│         ├── what-you-need-to-do
│         │
│         ├── wiki
│         │
│         ├── about.md
│         │
│         └── index.md
│ 
├── node_modules
│ 
├── template
│ 
└── tools
```
