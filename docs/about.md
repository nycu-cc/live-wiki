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
      { icon: 'github', link: 'https://github.com/canaria3406' },
      { icon: 'discord', link: 'https://discord.com/users/242927802557399040' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/45678482',
    name: 'nickchen120235',
    title: '可憐聲優廚',
    links: [
      { icon: 'github', link: 'https://github.com/nickchen120235' },
      { icon: 'discord', link: 'https://discord.com/users/381694073565609987' },
      { icon: 'twitter', link: 'https://x.com/Nickche63208056' },
    ],
  },
]
</script>

# 編輯名單

<VPTeamMembers size="small" :members="members" />