---
title: 進階本地運行
description: 本專案使用 `node` 版本為 `20.16`，有編輯權限可直接 `pull` 專案`
tags:
    - dev
    - develop
    - developer
    - 開發
    - 協作
    - npm
---

# {{ $frontmatter.title }}

::: tip 💡 注意
此處提供編輯 wiki 相關的基礎知識，  
資料查詢的部分，請至其他頁面。
:::

### <高級者說明>

本專案使用 `node` 版本為 `20.16`  
有編輯權限可直接 `pull` 專案，  
發 PR 請先`fork`

`clone` 至本地後，運行以下指令

```
npm install
npm run build
npm run dev
```

順利的話，即可在 `localhost:5173` 看到網站，進行編輯。

往後執行只需執行 `npm run dev`

::: warning 💡 注意
協作專案，`push`檔案前請務必先`pull`一次，檢查是否存在更新的版本！
:::

### <菜雞版說明>

(1)點擊右上角圖案進入 github 頁面  
![](/pic/develop/3-run-local/01.jpg)  
(2)把 source code 下載到電腦中隨便找個地方解壓縮  
![](/pic/develop/3-run-local/02.jpg)  
(3)下載並安裝[NPM](https://nodejs.org/dist/v18.18.1/node-v18.18.1-x64.msi)與[GIT](https://git-scm.com/downloads)  
(4)於 source code 資料夾路徑輸入 CMD，會跳出該路徑的命令提示字元  
![](/pic/develop/3-run-local/03.jpg)  
(5)依序輸入 npm install 與 npm run dev  
![](/pic/develop/3-run-local/04.jpg)  
(6)在瀏覽器網址輸入 `localhost:5173`
![](/pic/develop/3-run-local/05.jpg)  
(7)完成以上步驟後即可即時預覽儲存後的所有修改結果

::: info source
本文經過原作者許可，轉載自LoM-wiki。  
原文網址：https://smilin.net/LoM-wiki/develop/3-run-local.html
:::
