import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/web',
  },
  {
    path: '/web',
    name: 'Web',
    component: () => import('../views/web/index.vue'),
  },
  {
    path: '/web/:pageName',
    name: 'Web',
    component: () => import('../views/web/index.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../pages/Test.vue'),
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('../pages/Demo.vue'),
  },
  {
    path: '/line',
    name: 'Line',
    component: () => import('../pages/LineCharts.vue'),
  },
  {
    path: '/bar',
    name: 'Bar',
    component: () => import('../pages/BarCharts.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
