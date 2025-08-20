---
aside: false
title: 本站編輯名單
tags:
    - 貢獻
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/27627468?v=4',
    name: 'canaria3406',
    title: '蓮之空校狗',
    links: [
      { icon: 'github', link: 'https://github.com/canaria3406' },
      { icon: 'discord', link: 'https://discord.com/users/242927802557399040' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/87636172',
    name: 'kevinwei1029',
    title: '楠木燈的狗',
    links: [
      { icon: 'github', link: 'https://github.com/kevinwei1029' },
    ],
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
  {
    avatar: 'https://avatars.githubusercontent.com/u/62000156',
    name: 'Mr-Smilin',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Mr-Smilin' },
    ],
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/41343762',
    name: 'pon50895',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/pon50895' },
    ],
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/174360710',
    name: 'jeff5252882',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/jeff5252882' },
    ],
  },
]
</script>

# 本站編輯名單

<VPTeamMembers size="small" :members="members" />