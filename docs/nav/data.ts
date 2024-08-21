import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: 'gongmin家族',
    items: [
      {
        icon: 'https://www.emojiall.com/images/240/apple/1f97a.png',
        title: 'gongmin正传',
        desc: '心态硬汉',
        link: '/imcwiki/article/gongmin传',
      },
    ],
  },
]
