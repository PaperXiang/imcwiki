import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '猪头肉的青蛙池子',
    items: [
      {
        icon: 'https://www.emojiall.com/images/60/apple/1f437.png',
        title: 'Arvuelut传',
        desc: '猪头肉无需多言',
        link: '/article/ar传',
      },
      {
        icon: 'https://www.emojiall.com/images/60/apple/1f437.png',
        title: '4799传',
        desc: '残疾人骑士大神',
        link: '/article/4799传',
      },
      {
        icon: 'https://www.emojiall.com/images/60/apple/1f92d.png',
        title: 'Spirit_Snow(天山苍雪)传',
        desc: '护花使者,盒子涝坡',
        link: '/article/天山苍雪传',
      },
      {
        icon: 'https://www.emojiall.com/images/240/apple/1f97a.png',
        title: '111传',
        desc: '复读机',
        link: '/article/111传',
      },
      {
        icon: 'https://www.emojiall.com/images/240/apple/1f97a.png',
        title: '颜曦、传',
        desc: '复读机',
        link: '/article/颜曦传',
      },
      {
        icon: 'https://www.emojiall.com/images/240/apple/1f97a.png',
        title: 'sleepwalking传',
        desc: '极品双面龟',
        link: '/article/sleep传',
      },
    ],
  },
]
