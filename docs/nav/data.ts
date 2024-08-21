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
  {
    title: '逆天乐子',
    items: [
      {
        icon: 'https://www.emojiall.com/images/240/apple/1f97a.png',
        title: 'Arvuelut传',
        desc: 'nv权姐',
        link: '/imcwiki/article/ar传',
      },
      {
        icon: 'https://www.emojiall.com/images/240/apple/1f97a.png',
        title: 'guisama传',
        desc: '我要开了你的hu。',
        link: '/imcwiki/article/guisama传',
      },
      {
        icon: 'https://www.emojiall.com/images/240/apple/1f97a.png',
        title: 'Shadow_javis传',
        desc: 'DDoS BOSS',
        link: '/imcwiki/article/赵子豪传',
      },
      {
        icon: 'https://www.emojiall.com/images/240/apple/1f97a.png',
        title: 'HrkII传',
        desc: '心态硬汉',
        link: '/imcwiki/article/hkrii传',
      },
    ],
  },
]
