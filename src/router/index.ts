import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/login/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'commonLayout',
    component: import('../components/Layout/common/index.vue'),
    children: [
      {
        name: 'home',
        path: '/home',
        meta: {
          title: 'home',
        },
        component: import('../views/Boardlist/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: Login,
    meta: { title: '用户登录' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const { title } = to.meta
  if (title) document.title = title
  next()
})

export default router
