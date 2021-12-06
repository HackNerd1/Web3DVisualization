/**
 * @description
 * icon 取自于 IconFont
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
          link: '/Dashboard',
        },
        {
          name: 'My Assets',
          icon: '',
          link: '/home',
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
          name: 'Invite Friends',
          icon: 'icon-Myassets',
          link: '/home',
        },
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
