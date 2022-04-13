/*
 * @author: Hansel
 * @email: hsh01365238@gongdao.com
 * @create: 2022-04-12 10:50:07
 * @modify: 2022-04-13 10:41:22
 * @desc:
 */
/**
 * @description
 * icon 应用于 IconFont
 */

export const menuConfig = {
  title: 'Dvis',
  menu: [
    {
      group: 'Menu',
      children: [
        {
          name: 'Dashboard',
          icon: 'icon-moshi',
          link: '/dashboard',
        },
        {
          name: 'My Assets',
          icon: 'icon-keshihua4',
          link: '/myassets',
        },
        {
          name: 'Analytic',
          icon: 'icon-online-analysis',
          link: '/home',
        },
        {
          name: 'News',
          icon: 'icon-newsfill',
          link: '/home',
        },
        {
          name: 'History',
          icon: 'icon-history',
          link: '/home',
        },
      ],
    },
    {
      group: 'Other',
      children: [
        {
          name: 'Help',
          icon: 'icon-help-fill',
          link: '/home',
        },
        {
          name: 'Settings',
          icon: 'icon-setting-fill',
          link: '/home',
        },
      ],
    },
  ],
}
