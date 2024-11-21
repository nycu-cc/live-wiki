---
aside: false
title: 編輯名單
tags:
    - 貢獻
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/27627468?v=4',
    name: 'canaria3406',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/canaria3406' }
    ]
  }
]
</script>

# 編輯名單

<VPTeamMembers size="small" :members="members" />