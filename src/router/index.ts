import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/web",
  },
  {
    path: "/web",
    name: "Web",
    component: () => import("../views/web/index.vue"),
  },
  {
    path: "/demo",
    name: "Demo",
    component: () => import("../views/demo.vue"),
  },
  {
    path: "/echarts",
    name: "Echarts",
    component: () => import("../views/echarts/index.vue"),
  },
  {
    path: "/web/:pageName",
    name: "Web",
    component: () => import("../views/web/index.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../pages/Test.vue"),
  },
  {
    path: "/line",
    name: "Line",
    component: () => import("../pages/LineCharts.vue"),
  },
  {
    path: "/bar",
    name: "Bar",
    component: () => import("../pages/BarCharts.vue"),
  },
  {
    path: "/gis",
    name: "Gis",
    component: () => import("../pages/GisCharts.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
