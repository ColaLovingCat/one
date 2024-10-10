import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // 添加重定向
  {
    path: '/',
    redirect: '/login'
  },
  // 主要页面
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/view.vue')
  },
  {
    path: '/sso-auth',
    name: 'ssoAuth',
    component: () => import('@/views/login/sso-auth.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/view.vue')
  },
  //
  {
    path: '/stores',
    name: 'stores',
    component: () => import('@/views/func/stores/view.vue')
  },
  //
  {
    path: '/wiki',
    name: 'wiki',
    component: () => import('@/views/func/wiki/view.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/func/wiki/list.vue')
  },
  {
    path: '/pokes',
    name: 'pokes',
    component: () => import('@/views/func/pokes/view.vue')
  },
  {
    path: '/mh',
    name: 'mh',
    component: () => import('@/views/func/mh/view.vue')
  },
  {
    path: '/mhs2',
    name: 'mhs2',
    component: () => import('@/views/func/mhs2/view.vue')
  },
  // 配置404页面
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/error/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
  routes
})

router.beforeEach((to: any, from: any, next: any) => {
  next()
})

export default router
