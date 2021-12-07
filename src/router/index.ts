import { createRouter, createWebHistory } from 'vue-router'
import { titleSeparator, baseTitle } from '@/config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  easing: 'ease',
  speed: 500,
  trickleSpeed: 300,
  showSpinner: false,
})

const routes = [
  {
    path: '/',
    redirect: '/Dashboard',
    name: 'commonLayout',
    component: () => import('@/components/Layout/common/index.vue'),
    children: [
      {
        name: 'home',
        path: '/home',
        meta: {
          title: 'Boardlist',
        },
        component: () => import('@/views/Boardlist/index.vue'),
      },
      {
        name: 'Dashboard',
        path: '/dashboard',
        meta: {
          title: 'Dashboard',
        },
        component: () => import('@/views/Dashboard/index.vue'),
      },
      {
        name: 'Myassets',
        path: '/Myassets',
        meta: {
          title: 'My Assets',
        },
        component: () => import('@/views/MyAssets/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
    meta: { title: 'Login' },
  },
  {
    path: '/404',
    component: () => import('@/pages/error/404.vue'),
    meta: {
      title: 'Page Not Found',
    },
  },
  {
    path: '/403',
    component: () => import('@/pages/error/403.vue'),
    meta: {
      title: 'Forbidden',
    },
  },
  {
    path: '/500',
    component: () => import('@/pages/error/500.vue'),
    meta: {
      title: 'Server Error',
    },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const { title } = to.meta
  NProgress.start()
  if (title) document.title = `${title}${titleSeparator}${baseTitle}`
  next()
  NProgress.done()
})

export default router
